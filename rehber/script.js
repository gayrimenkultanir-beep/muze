document.getElementById("nextBtn").addEventListener("click", () => {
    // Eğer şu anki durak 31. duraksa (dizide index 31 veya tourData.length - 1)
    if (currentStep === 31) { 
        window.location.href = "gonul-koprusu.html"; // Firebase'li ziyaretçi defteri sayfan
    } else {
        // Normal sonraki durağa geçme kodların...
        currentStep++;
        renderStep();
    }
});
