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
