

const texte = document.querySelector("h2");


function getChrono() {
    const now = new Date().getTime();
    const countDate = new Date('Sept 30, 2022, 16:00:00').getTime();

    const entre = countDate - now;

    const days = Math.floor(entre / (1000 * 60 * 60 * 24));
    const hours = Math.floor((entre % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((entre % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.round((entre % (1000 * 60)) / 1000)


    texte.textContent = `${days}j ${hours}h ${minutes}m ${secondes}s`
}
    
    
const interval = setInterval(() => {
    getChrono()

},1000);







