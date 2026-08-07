// IGNISREX GAMES
// Interactive Effects

// CURSOR PRELOAD - Sayfa yüklenirken imleç görsellerinin önbelleğe alınması
const cursorImages = [
    'witch_hand_1_default.png',
    'witch_hand_2_hover.png',
    'witch_hand_3_click.png',
    'witch_hand_4_wait.png',
    'witch_hand_5_hold-drag.png'
];

cursorImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Sayfa yüklenirken bekleme imleci
function setWaitCursor() {
    document.documentElement.classList.add('wait-cursor');
    document.body.classList.add('wait-cursor');
}

function removeWaitCursor() {
    document.documentElement.classList.remove('wait-cursor');
    document.body.classList.remove('wait-cursor');
}

setWaitCursor();
window.addEventListener('load', () => {
    setTimeout(removeWaitCursor, 300);
});

// Sayfa herhangi bir yerine basılı tutulurken tıklama imleci
document.addEventListener('mousedown', () => {
    document.documentElement.classList.add('click-cursor');
    document.body.classList.add('click-cursor');
});

document.addEventListener('mouseup', () => {
    document.documentElement.classList.remove('click-cursor');
    document.body.classList.remove('click-cursor');
});

// SAYFA GİRİŞ ANİMASYONU

document.body.animate(
[
    {
        opacity: 0,
        transform: "translateY(20px)"
    },
    {
        opacity: 1,
        transform: "translateY(0)"
    }
],
{
    duration: 700,
    easing: "ease-out"
}
);



// NAVBAR SCROLL EFEKTİ

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.background = "rgba(0,0,0,.9)";
        nav.style.boxShadow = "0 0 25px rgba(255,106,0,.25)";

    } else {

        nav.style.background = "rgba(0,0,0,.65)";
        nav.style.boxShadow = "none";

    }

});



// MOUSE NEON IŞIĞI (Optimize Edildi)

const light = document.createElement("div");

light.style.position = "fixed";
light.style.width = "250px";
light.style.height = "250px";
light.style.borderRadius = "50%";
light.style.pointerEvents = "none";
light.style.background =
"radial-gradient(circle,rgba(255,106,0,.15),transparent 70%)";
light.style.transform = "translate(-50%,-50%)";
light.style.zIndex = "999";

document.body.appendChild(light);

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateLight() {

    light.style.left = mouseX + "px";
    light.style.top = mouseY + "px";

    requestAnimationFrame(animateLight);

}

animateLight();



// OYUN KARTLARI HOVER

const cards = document.querySelectorAll(".game-box");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform = `
            perspective(600px)
            rotateX(${-(y - rect.height / 2) / 20}deg)
            rotateY(${(x - rect.width / 2) / 20}deg)
            translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});



// ANA SAYFA LOGO DÖNME EFEKTİ (UNUTULMADI)

const heroLogo = document.querySelector(".hero-logo-link");

if (heroLogo) {
    heroLogo.addEventListener("click", (e) => {
        // İstersen tıklayınca da ekstra efekt verebilirsin
    });
}



console.log("IGNISREX GAMES SYSTEM ONLINE");
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

// 3 noktaya tıklandığında menüyü aç/kapat
if (menuBtn && dropdownMenu) {
    menuBtn.addEventListener('click', () => {
        if (dropdownMenu.style.display === 'flex') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'flex';
        }
    });

    // Menüdeki bir seçeneğe tıklandığında menü otomatik kapanıp sayfaya gitsin
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', () => {
            dropdownMenu.style.display = 'none';
        });
    });
}
