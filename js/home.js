const navlink = document.getElementById('navlink');
const header = gsap.timeline({
    scrollTrigger: {
         trigger: '.nav_left',
         start: 'center center',
         end: "bottom center",
         scrub: 0.1
    }
});
header.from(navlink, 1, {opacity: 0, display:'none'})


const nextIcon = '<img src="../img/next.svg" alt"right">';
const prevIcon = '<img src="../img/prev.svg" alt"right">';
$('.owl-carousel').owlCarousel({
     loop:true,
     margin:10,
     nav:true,
     navText: [
          prevIcon,
          nextIcon
     ],
     dots:false,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:1.2
         },
         1000:{
             items:1.5
         },
         1300:{
          items:2.1
      },
     }
 })

 const arch = document.getElementById("arch");
      arch.onclick = function(){
        arch[0].style.backgroundColor = "#CCCCCC";

      }