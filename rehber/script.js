let currentStep = 0;

// Sayfa yüklendiğinde ilk durağı göster
document.addEventListener("DOMContentLoaded", () => {
    renderStep();
});

function renderStep() {
    const data = tourData[currentStep];
    
    // HTML üzerindeki alanları doldur (ID'lerin rehber.html ile uyumlu olmalı)
    document.getElementById("title").innerText = data.t;
    document.getElementById("subtitle").innerText = data.s;
    document.getElementById("message").innerText = data.m;
    document.getElementById("question").innerText = data.q;
    document.getElementById("nextBtn").innerText = data.btnNext;

    // Görseli güncelle (Eğer bir img etiketiniz varsa)
    if(data.g && data.g.length > 0) {
        document.getElementById("tourImage").src = data.g[0];
    }
}

// İleri Butonu Fonksiyonu
function nextStep() {
    // Eğer 31. duraktaysak (Dizideki son eleman)
    if (currentStep === tourData.length - 1) {
        // Ziyaretçi defteri dosyanın adı neyse onu yaz (Örn: ziyaretçi.html veya index.html)
        window.location.href = "ziyaretci-defteri.html"; 
    } else {
        currentStep++;
        renderStep();
        window.scrollTo(0, 0); // Sayfayı yukarı kaydır
    }
}

// Geri Butonu Fonksiyonu
function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderStep();
        window.scrollTo(0, 0);
    }
}

// HTML'deki butonlara olay ekleme
document.getElementById("nextBtn").addEventListener("click", nextStep);
document.getElementById("prevBtn").addEventListener("click", prevStep);
