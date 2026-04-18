:root {
    --brown-dark: #3e2723;
    --brown-med: #5d4037;
    --antique-white: #f4ece1;
    --gold: #c5a059;
}

body.antique-bg {
    margin: 0;
    padding: 0;
    background-color: var(--antique-white);
    background-image: url('https://www.transparenttextures.com/patterns/wood-pattern.png'); /* Ahşap dokusu */
    font-family: 'Poppins', sans-serif;
    color: var(--brown-dark);
    overflow-x: hidden;
}

/* Sayfa Geçiş Efekti */
.fade-in {
    animation: fadeIn 0.8s ease-in-out forwards;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Ses Kontrolü */
#sound-control {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--brown-med);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

/* Ana İçerik Kartı */
.content-card {
    max-width: 900px;
    margin: 40px auto;
    background: rgba(255, 255, 255, 0.85);
    padding: 40px;
    border-radius: 4px;
    border: 1px solid #d7ccc8;
    box-shadow: 0 15px 50px rgba(0,0,0,0.1);
    position: relative;
}

.progress-bar-container {
    height: 4px;
    background: #e0e0e0;
    margin: 20px 0;
}

#progress-fill {
    height: 100%;
    background: var(--gold);
    width: 0%;
    transition: width 0.5s ease;
}

h2 { font-family: 'Playfair Display', serif; font-size: 2.5rem; margin-bottom: 5px; }
h3 { font-weight: 300; color: var(--gold); margin-top: 0; margin-bottom: 30px; }

.narration-box {
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 30px;
    text-align: justify;
}

.question-container {
    background: #efebe9;
    padding: 20px;
    border-left: 4px solid var(--gold);
    font-style: italic;
    margin-bottom: 30px;
}

/* Navigasyon Butonları */
.nav-btn {
    padding: 12px 25px;
    border: 2px solid var(--brown-med);
    background: transparent;
    color: var(--brown-med);
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s;
}

.nav-btn:hover { background: var(--brown-med); color: white; }

/* Galeri Grid */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 20px;
}

.gallery-item img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border: 5px solid white;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Full Screen Layouts (Intro, Guestbook, Thanks) */
.full-screen {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: rgba(62, 39, 35, 0.05);
}
