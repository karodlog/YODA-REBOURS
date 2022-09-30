

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
    if(days===0 && hours===0 && minutes===0 && secondes===10){

            const TLCONF = gsap.timeline()
        
            TLCONF
                .to(".containerTxt", {
                    y: "600px",
                    duration: 8,
                    ease: "expo.out",
                    opacity: 0,
                },"label")

                .to(".containerYoda",{
                    y:'250px',
                    duration:2,
                    ease: "expo.out",
                }, "label")

                .to(".yoda",{
                    
                    delay: 0,
                    duration:4,
                    opacity:0,
                },)
                .to(".game",{
                    x:0,
                    opacity:1,
                    duration: 1,
                    filter: blur(10)
                    // ease: "power2.inOut"
                },"<1",'youpi')
                .to(".over",{
                    x:0,
                    opacity:1,
                    duration: 1,
                    filter: blur(10)
                    // ease: "power2.inOut"
                },"<1",'youpi')

                .to(".chiffres",
                {
                    duration:1,
                    opacity:1,
                    top:250,
                    scale:0,
        
                    ease: "power4In",
                    stagger:{
                        each:1,
                        delay:1,
                    }
                },
                "<1")
                // .to(".game",{
                //     opacity:0,
                //     duration: 1,
                //     // ease: "power2.inOut"
                // },'best')
                // .to(".over",{
                //     opacity:0,
                //     duration: 1,
                //     // ease: "power2.inOut"
                // },'best')
                .to(".containerGameOver",{
                    opacity:0,
                    duration:1
                })
                

                .to(".container",
                {
                    opacity:1,
                    duration:2,
                    left:980
                },"<0.5")
        }
    
}

const interval = setInterval(() => {
    getChrono()

},1000);




