let currentStep = 0;
let isMuted = false;

// 1. Yolculuğu Başlatan Fonksiyon
function startJourney() {
    console.log("Yolculuk başlatılıyor..."); // Hata ayıklama için
    
    // Ekran geçişleri
    const introScreen = document.getElementById("screen-intro");
    const tourScreen = document.getElementById("screen-tour");
    
    if (introScreen && tourScreen) {
        introScreen.classList.remove("active-screen");
        tourScreen.classList.add("active-screen");
        renderStep();
    } else {
        console.error("Ekranlar bulunamadı! ID'leri kontrol et.");
    }
    
    // Mühür sesini hata payıyla çal
    const sealSound = document.getElementById("seal-sound");
    if (sealSound) {
        sealSound.play().catch(e => console.warn("Mühür sesi çalınamadı (dosya eksik olabilir)."));
    }
}

// 2. Durak Bilgilerini Ekrana Basan Fonksiyon
function renderStep() {
    if (typeof tourData === 'undefined') {
        console.error("Hata: content.js yüklenemedi veya tourData bulunamadı!");
        return;
    }

    const data = tourData[currentStep];
    
    document.getElementById("title").innerText = data.t;
    document.getElementById("subtitle").innerText = data.s;
    document.getElementById("content").innerHTML = data.m.replace(/\n/g, "<br>");
    document.getElementById("question").innerText = data.q;
    document.getElementById("btn-next").innerText = data.btnNext || "İleri ➡";

    // İlerleme çubuğu
    const progress = ((currentStep + 1) / tourData.length) * 100;
    document.getElementById("bar").style.width = progress + "%";

    // Ses yönetimi
    const player = document.getElementById("audio-player");
    player.src = data.a;
    if (!isMuted) {
        player.play().catch(e => console.log("Otomatik ses engellendi veya dosya yok."));
    }

    // Galeri yönetimi
    const gallery = document.getElementById("gallery-target");
    gallery.innerHTML = "";
    if (data.g && data.g.length > 0) {
        data.g.forEach(imgUrl => {
            const img = document.createElement("img");
            img.src = imgUrl;
            img.className = "tour-img";
            gallery.appendChild(img);
        });
    }

    // Geri butonu görünürlüğü
    document.getElementById("btn-prev").style.visibility = currentStep === 0 ? "hidden" : "visible";
}

// 3. Navigasyon
function navStep(direction) {
    if (direction === 1) {
        if (currentStep === tourData.length - 1) {
            showGuestbook();
        } else {
            currentStep++;
            renderStep();
        }
    } else {
        if (currentStep > 0) {
            currentStep--;
            renderStep();
        }
    }
    window.scrollTo(0, 0);
}

// 4. Ziyaretçi Defterini Aç
function showGuestbook() {
    document.getElementById("screen-tour").classList.remove("active-screen");
    document.getElementById("screen-guestbook").classList.add("active-screen");
    loadMessages();
}

// 5. Ses Kontrol
function toggleMute() {
    isMuted = !isMuted;
    const player = document.getElementById("audio-player");
    const icon = document.getElementById("vol-icon");
    
    if (isMuted) {
        player.pause();
        icon.className = "fas fa-volume-mute";
    } else {
        player.play().catch(e => {});
        icon.className = "fas fa-volume-up";
    }
}

// --- ZİYARETÇİ DEFTERİ FONKSİYONLARI ---

async function sendMessage() {
    const name = document.getElementById("guest-name").value;
    const city = document.getElementById("guest-city").value;
    const text = document.getElementById("guest-text").value;
    const btn = document.querySelector(".send-btn");

    if (!text) {
        alert("Lütfen bir not bırakın ✨");
        return;
    }

    btn.disabled = true;
    btn.innerText = "Mühürleniyor...";

    try {
        await db.collection("messages").add({
            user: name || "Anonim Ziyaretçi",
            city: city || "Belirtilmedi",
            text: text,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Formu temizle
        document.getElementById("guest-name").value = "";
        document.getElementById("guest-city").value = "";
        document.getElementById("guest-text").value = "";
        
        // Başarı Penceresini Göster
        const popup = document.getElementById("success-popup");
        if(popup) {
            document.getElementById("success-msg").innerText = "Duygularınız Gönül Köprüsü'ne mühürlendi.";
            popup.style.display = "flex";
        }

        loadMessages();
    } catch (error) {
        console.error("Firebase Hatası:", error);
        alert("Bağlantı hatası! Lütfen internetinizi veya Firebase kurallarını kontrol edin.");
    } finally {
        btn.disabled = false;
        btn.innerText = "KÖPRÜYE BİR TAŞ DA BEN KOYUYORUM";
    }
}

function loadMessages() {
    const listTarget = document.getElementById("list-target");
    if (!listTarget) return;

    db.collection("messages").orderBy("timestamp", "desc").limit(10).get().then((querySnapshot) => {
        listTarget.innerHTML = "";
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const msgHtml = `
                <div class="message-item">
                    <strong>${data.user}</strong> <small>(${data.city})</small>
                    <p>${data.text}</p>
                </div>
            `;
            listTarget.innerHTML += msgHtml;
        });
    }).catch(err => console.error("Mesajlar yüklenemedi:", err));
}
