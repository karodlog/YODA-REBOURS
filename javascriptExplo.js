const containerSlot = document.querySelector(".slot")
const btnConfettis = document.querySelector(".btn-confettis")
const body = document.querySelector("body")

const iconesOk = ["node-brands.png", "react-brands.png", "node-brands blanc.png", "react-brands blanc.png", "css3-alt-brands blanc2.png", "github-brands blanc2.png", "html5-brands blanc2.png", "js-brands  blanc2.png", "css3-alt-brands3.png", "github-brands3.png", "html5-brands3.png", "js-brands3.png"];

btnConfettis.addEventListener("click", fiesta, fondCouleur)

function fiesta() {

    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML = `<img src="/svgtopng/${iconesOk[Math.floor(Math.random() * iconesOk.length)]}">`;
        containerSlot.appendChild(confetti)
    }
    animateConfettis();
}
function animateConfettis() {
    const TLCONF = gsap.timeline()

    TLCONF
        .to(".slot div", {
            y: "random(-300, 200)",
            x: "random(-300, 300)",
            z: "random(0, 1000)",
            rotation: "random(-720,720)",
            duration: 1.2,
            ease: "expo.out",
            yoyo: true,
            repeat: 1
        })
        .to(".slot div", { autoAlpha: 0, duration: 0.7 }, "-=0.5")
        .add(() => {
            containerSlot.innerHTML = "";
        })
}

btnConfettis.addEventListener("click", fondCouleur)

function fondCouleur() {
    let random = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let colorRandom = body.style.background = `${random}`
    body.style.background = `${colorRandom}`
    
    fondCouleur()
}

