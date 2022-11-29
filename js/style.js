$(function () {

  $('.gallery__items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    // mobileFirst: true,
    responsive: [
      {
        breakpoint: 1171,
        settings: 'unslick'
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  })

  })

  const swiper = new Swiper('.swiper', {
    speed: 400,
    loop: true,
    // spaceBetween: 50,
    mousewheel: {
      invert: true,
    },
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 480px
      576: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 5,
        spaceBetween: 40
        
      }
    }
  });
  


  // document.body.addEventListener("pointermove", (e)=>{
  //   const { currentTarget: el, clientX: x, clientY: y } = e;
  //   const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  //   el.style.setProperty('--posX',  x-l-w/2);
  //   el.style.setProperty('--posY',  y-t-h/2);
  // })