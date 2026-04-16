let currentStep = 0;
let isMuted = false;

// Sayfa yüklendiğinde veya adım değiştiğinde içeriği güncelleyen ana fonksiyon
function updateStep() {
    const data = tourData[currentStep];
    const container = document.getElementById("tour-main");

    // Sayfa geçiş efekti (Opsiyonel: CSS ile fade-in/out eklenebilir)
    container.style.opacity = 0;

    setTimeout(() => {
        // Başlıklar ve Metinler
        document.getElementById("main-title").innerText = data.baslik;
        document.getElementById("sub-title").innerText = data.altBaslik;
        document.getElementById("narration-text").innerText = data.metin;
        document.getElementById("question-text").innerText = data.soru;

        // Ses Dosyası Yönetimi
        const audio = document.getElementById("main-audio");
        audio.src = data.ses;
        audio.muted = isMuted;

        // Otomatik Oynat (Tarayıcı iznine bağlı)
        audio.play().catch(e => console.log("Otomatik ses için kullanıcı etkileşimi bekleniyor."));

        // Galeri Güncelleme
        const gallery = document.getElementById("image-gallery");
        gallery.innerHTML = data.galeri.map(img => `
            <div class="gallery-item">
                <img src="${img}" alt="${data.baslik}">
            </div>
        `).join('');

        // Buton Durumları
        document.getElementById("prev-btn").style.display = currentStep === 0 ? "none" : "inline-block";
        
        // Sonraki butonunun metnini güncelle (Son adımda "Deftere Yaz" yapabiliriz)
        const nextBtn = document.getElementById("next-btn");
        if (currentStep === tourData.length - 1) {
            nextBtn.innerText = "Gönül Köprüsü'ne İlerle ➡️";
        } else {
            nextBtn.innerText = "Sonraki Bölüm ➡️";
        }

        container.style.opacity = 1;
    }, 300);
}

// Turu Başlat (Intro ekranından sonra)
function startTour() {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("tour-main").style.display = "block";
    updateStep();
}

// İleri - Geri Fonksiyonu
function changeStep(dir) {
    if (dir === 1 && currentStep === tourData.length - 1) {
        // Eğer son duraktaysak ziyaretçi defterine geç
        showGuestbook();
    } else {
        currentStep += dir;
        updateStep();
    }
}

// Ses Açma / Kapatma
function toggleMute() {
    isMuted = !isMuted;
    const audio = document.getElementById("main-audio");
    audio.muted = isMuted;
    document.getElementById("sound-icon").innerText = isMuted ? "🔇" : "🔊";
}

// Ziyaretçi Defteri Ekranı
function showGuestbook() {
    document.getElementById("tour-main").style.display = "none";
    document.getElementById("guestbook").style.display = "block";
}

// Form Gönderimi (Firebase entegrasyonu buraya gelecek)
document.getElementById("comment-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    // Burada Firebase'e kayıt işlemi yapılacak
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("thank-you").style.display = "block";
});
