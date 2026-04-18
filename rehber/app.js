// ... Firebase Config ve Init buralarda olacak ...

function startJourney() {
    changeScreen('screen-tour');
}

async function handleMessageSubmit(e) {
    e.preventDefault();
    
    // Işık huzmesi efekti
    const sweep = document.querySelector('.light-sweep');
    sweep.classList.add('sweep-animate');
    
    // Mühür sesi
    const seal = document.getElementById('seal-sound');
    seal.play();

    // Veriyi Firebase'e gönder (await db.collection...)
    
    setTimeout(() => {
        showSuccessPopup();
    }, 1500);
}

function showSuccessPopup() {
    const popup = document.getElementById('success-popup');
    const msg = document.getElementById('success-msg');
    msg.innerText = `"Kelimeleriniz 'Gönül Köprüsü'ndeki yerini aldı. ✨\nBıraktığınız bu anlamlı iz, külliyemizin manevi mirasını zenginleştirdi..."`;
    popup.style.display = 'flex';
}
