let currentStep = 0;
let isMuted = false;

function updateStep() {
    const data = tourData[currentStep];
    const mainContent = document.getElementById("tour-main");

    // Sayfa geçiş efekti başlangıcı
    mainContent.classList.remove("fade-in");
    
    setTimeout(() => {
        // Metin ve Başlık Güncellemeleri
        document.getElementById("main-title").innerText = data.baslik;
        document.getElementById("sub-title").innerText = data.altBaslik;
        document.getElementById("narration-text").innerText = data.metin;
        document.getElementById("question-text").innerText = data.soru;

        // Progress Bar Güncelleme
        const progress = ((currentStep + 1) / tourData.length) * 100;
        document.getElementById("progress-fill").style.width = progress + "%";

        // Ses Yönetimi (rehber/audio/ klasöründen çeker)
        const audio = document.getElementById("main-audio");
        audio.src = data.ses; // content.js içinde "audio/dosya.mp3" şeklinde olmalı
        audio.muted = isMuted;
        audio.play().catch(e => console.log("Etkileşim bekleniyor..."));

        // Galeri (rehber/img/ klasöründen çeker)
        const gallery = document.getElementById("image-gallery");
        gallery.innerHTML = data.galeri.map(img => `
            <div class="gallery-item">
                <img src="${img}" alt="Külliye Görseli">
            </div>
        `).join('');

        // Buton Kontrolleri
        document.getElementById("prev-btn").style.visibility = currentStep === 0 ? "hidden" : "visible";
        const nextBtn = document.getElementById("next-btn");
        nextBtn.innerHTML = currentStep === tourData.length - 1 
            ? 'Gönül Köprüsü <i class="fas fa-pen-fancy"></i>' 
            : 'Sonraki Bölüm <i class="fas fa-chevron-right"></i>';

        mainContent.classList.add("fade-in");
    }, 300);
}

function startTour() {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("tour-main").style.display = "block";
    updateStep();
}

function changeStep(dir) {
    if (dir === 1 && currentStep === tourData.length - 1) {
        document.getElementById("tour-main").style.display = "none";
        document.getElementById("guestbook").style.display = "flex";
    } else {
        currentStep += dir;
        updateStep();
    }
}

function toggleMute() {
    isMuted = !isMuted;
    document.getElementById("main-audio").muted = isMuted;
    const icon = document.getElementById("sound-icon");
    icon.className = isMuted ? "fas fa-volume-mute" : "fas fa-volume-up";
}

// Form Gönderimi (Firebase entegrasyonu için hazır)
document.getElementById("comment-form").addEventListener("submit", function(e) {
    e.preventDefault();
    // Burada Firebase push işlemi yapılacak
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("thank-you").style.display = "flex";
});
