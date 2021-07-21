const navlink = document.getElementById('navlink');
const btn = document.getElementById('btn_topbar');

document.addEventListener('DOMContentLoaded', init);
function init() {
    const query = window.matchMedia("(max-width: 900px)")

    if (query.matches) {
        const header = gsap.timeline({
            scrollTrigger: {
                trigger: '.nav_left',
                start: 'center center',
                end: "bottom center",
                scrub: 0.1
            }
        });
        header.to(btn, 1, { opacity: 0, display: 'none' })

    } else {
        const header = gsap.timeline({
            scrollTrigger: {
                trigger: '.nav_left',
                start: 'center center',
                end: "bottom center",
                scrub: 0.1
            }
        });
        header.from(navlink, 1, { opacity: 0, display: 'none' })
    }
}

const nextIcon = '<img src="../img/next.svg" alt"right">';
const prevIcon = '<img src="../img/prev.svg" alt"right">';
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        prevIcon,
        nextIcon
    ],
    dots: false,
    responsive: {
        0: {
            items: 1.1
        },
        600: {
            items: 1.5
        },
        1000: {
            items: 1.5
        },
        1300: {
            items: 2.1
        },
    }
})


// const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('.nav');
// const handleClick = () => {
//     hamburger.classList.toggle('hamburger--active');
//     nav.classList.toggle('nav--active');
// }
// hamburger.addEventListener('click', handleClick);



// const archs = document.querySelectorAll('.arch');
// archs.forEach((arch) => arch.onclick = function(){
//             arch.style.backgroundColor = "#CCCCCC";

//           });

// const archs = document.querySelector('.arch');
// archs.addEventListener "click" => {
//     e.preventDefault();
//     document.querySelector('.arch').style.background = "#CCCCCC";
// })
