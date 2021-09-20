
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    
    for(i = 0; i<skillsContent.length;i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click',toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active') 
    }) 
})

(function() {
    "use strict";
    
  /**
   * work isotope and filter
   */
  window.addEventListener('load', () => {
    let workContainer = select('.work-container');
    if (workContainer) {
      let workIsotope = new Isotope(workContainer, {
        itemSelector: '.work-item'
      });

      let workFilters = select('#work-flters li', true);

      on('click', '#work-flters li', function(e) {
        e.preventDefault();
        workFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        workIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        workIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate work lightbox 
   */
  const workLightbox = GLightbox({
    selector: '.work-lightbox'
  });

  /**
   * Initiate work details lightbox 
   */
  const workDetailsLightbox = GLightbox({
    selector: '.work-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * work details slider
   */
  new Swiper('.work-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()
