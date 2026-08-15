// IGNISREX GAMES
// Interactive Effects

// CUSTOM CURSOR SYSTEM - Tarayıcının ok imlecini tamamen gizler
(function () {
    const cursorImages = {
        default: 'witch_hand_1_default.png',
        hover: 'witch_hand_2_hover.png',
        click: 'witch_hand_3_click.png',
        wait: 'witch_hand_4_wait.png',
        drag: 'witch_hand_5_hold-drag.png'
    };

    const cursor = document.createElement('img');
    cursor.id = 'custom-cursor';
    cursor.src = cursorImages.default;
    cursor.alt = '';
    cursor.draggable = false;
    cursor.style.position = 'fixed';
    cursor.style.top = '0';
    cursor.style.left = '0';
    cursor.style.width = '32px';
    cursor.style.height = '32px';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '999999';
    cursor.style.transform = 'translate(-100px, -100px) translate(-50%, -50%)';
    cursor.style.imageRendering = 'pixelated';
    cursor.style.willChange = 'transform';
    document.body.appendChild(cursor);

    let cursorX = -100;
    let cursorY = -100;
    let currentState = 'default';
    let isMoving = false;
    let moveTimeout;

    function updateCursor() {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
    }

    function setCursor(state) {
        if (cursorImages[state] && currentState !== state) {
            cursor.src = cursorImages[state];
            currentState = state;
        }
    }

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
        updateCursor();
        isMoving = true;
        clearTimeout(moveTimeout);
        moveTimeout = setTimeout(() => {
            isMoving = false;
        }, 50);
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.display = 'block';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
    });

    document.addEventListener('mousedown', () => {
        setCursor('click');
    });

    document.addEventListener('mouseup', () => {
        setCursor('default');
    });

    document.addEventListener('mouseover', (e) => {
        const target = e.target;
        const isInteractive = target.closest('a, button, .button, .menu-toggle, .dropdown-menu a, input, textarea, select, [role="button"]');
        if (isInteractive) {
            setCursor('hover');
        } else {
            setCursor('default');
        }
    });

    document.documentElement.classList.add('loading-cursor');
    setCursor('wait');

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.documentElement.classList.remove('loading-cursor');
            setCursor('default');
        }, 100);
    });

    Object.values(cursorImages).forEach(src => {
        const img = new Image();
        img.src = src;
    });
})();

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
