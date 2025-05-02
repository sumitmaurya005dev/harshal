/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');


/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}

navLink.forEach( n=> n.addEventListener('click',linkAction))



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

const scrollActive =()=>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
              }else{
                sectionsClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll', scrollActive)



/*==================== CHANGE BACKGROUND HEADER ====================*/ 
const bgHeader = ()=>{
    const header = document.getElementById('header')
        // Add a clss if the bottom offset is greator than 50 of visualViewport 
        this.scrollY >= 50 ? header.classList.add('bg-header')
                           : header.classList.remove('bg-header')
}
window.addEventListener('scroll',bgHeader)
bgHeader();

/* ==========================swiper==========================================*/
let swiperCards = new Swiper('.card__content',{
    loop: true,
    spaceBetween:3,

    pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

      breakpoints:{
        0:{
            slidesPerView:1
        },
        800:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:4
        }
      }

})




/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 