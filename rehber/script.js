let currentStep = 0;
let isMuted = false;

// 1. Yolculuğu Başlatan Fonksiyon
function startJourney() {
    // Giriş ekranını gizle, tur ekranını göster
    document.getElementById("screen-intro").classList.remove("active-screen");
    document.getElementById("screen-tour").classList.add("active-screen");
    
    // İlk durağı yükle
    renderStep();
    
    // Varsa mühür sesini çal
    const sealSound = document.getElementById("seal-sound");
    if (sealSound) sealSound.play();
}

// 2. Durak Bilgilerini Ekrana Basan Fonksiyon
function renderStep() {
    const data = tourData[currentStep];
    
    // HTML Elementlerini doldur
    document.getElementById("title").innerText = data.t;
    document.getElementById("subtitle").innerText = data.s;
    document.getElementById("content").innerHTML = data.m.replace(/\n/g, "<br>");
    document.getElementById("question").innerText = data.q;
    document.getElementById("btn-next").innerText = data.btnNext || "İleri ➡";

    // İlerleme çubuğunu güncelle
    const progress = ((currentStep + 1) / tourData.length) * 100;
    document.getElementById("bar").style.width = progress + "%";

    // Ses dosyasını güncelle
    const player = document.getElementById("audio-player");
    player.src = data.a;
    if (!isMuted) player.play().catch(e => console.log("Ses otomatik başlatılamadı"));

    // Görseli güncelle
    const gallery = document.getElementById("gallery-target");
    gallery.innerHTML = "";
    if (data.g && data.g.length > 0) {
        data.g.forEach(imgUrl => {
            const img = document.createElement("img");
            img.src = imgUrl;
            img.className = "tour-img"; // CSS'de bu sınıfı tanımlayabilirsin
            gallery.appendChild(img);
        });
    }

    // Geri butonunu ilk durakta gizle
    document.getElementById("btn-prev").style.visibility = currentStep === 0 ? "hidden" : "visible";
}

// 3. İleri-Geri Navigasyon Fonksiyonu
function navStep(direction) {
    if (direction === 1) {
        // Eğer SON duraktaysak ziyaretçi defterine gönder
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

// 4. Ziyaretçi Defteri Ekranını Göster
function showGuestbook() {
    document.getElementById("screen-tour").classList.remove("active-screen");
    document.getElementById("screen-guestbook").classList.add("active-screen");
}

// 5. Ses Aç/Kapat
function toggleMute() {
    isMuted = !isMuted;
    const player = document.getElementById("audio-player");
    const icon = document.getElementById("vol-icon");
    
    if (isMuted) {
        player.pause();
        icon.className = "fas fa-volume-mute";
    } else {
        player.play();
        icon.className = "fas fa-volume-up";
    }
}
// --- ZİYARETÇİ DEFTERİ FONKSİYONLARI ---

// Firebase'e Mesaj Gönderme
async function sendMessage() {
    const name = document.getElementById("guest-name").value;
    const city = document.getElementById("guest-city").value;
    const text = document.getElementById("guest-text").value;
    const btn = document.querySelector(".send-btn");

    if (!text) {
        alert("Lütfen bir not bırakın ✨");
        return;
    }

    // Butonu geçici olarak kilitle (Çift tıklamayı önlemek için)
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
        
        alert("Gönül Köprüsü'ne bir taş daha koydunuz. Teşekkürler!");
        loadMessages(); // Listeyi güncelle
    } catch (error) {
        console.error("Hata:", error);
        alert("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
        btn.disabled = false;
        btn.innerText = "KÖPRÜYE BİR TAŞ DA BEN KOYUYORUM";
    }
}

// Mesajları Firebase'den Çekip Listeleme
function loadMessages() {
    const listTarget = document.getElementById("list-target");
    if (!listTarget) return;

    db.collection("messages").orderBy("timestamp", "desc").limit(10).get().then((querySnapshot) => {
        listTarget.innerHTML = "<h3>📜 Son Mesajlar</h3>"; // Başlık ekle
        
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const msgHtml = `
                <div class="message-item">
                    <strong>${data.user}</strong>
                    <small>${data.city}</small>
                    <p>${data.text}</p>
                </div>
            `;
            listTarget.innerHTML += msgHtml;
        });
    });
}

// showGuestbook fonksiyonunu güncelle (Listenin dolması için)
function showGuestbook() {
    document.getElementById("screen-tour").classList.remove("active-screen");
    document.getElementById("screen-guestbook").classList.add("active-screen");
    loadMessages(); // Ekran açıldığında mesajları yükle
}
