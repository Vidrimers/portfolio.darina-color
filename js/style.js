$(function () {

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    mobileFirst: true,
    responsive: [
      {
         breakpoint: 992,
         settings: "unslick"
      }]
  })
  $('.slider-nav').slick({
    mobileFirst: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
         breakpoint: 992,
         settings: "unslick"
      }]
  })

  })


  // document.body.addEventListener("pointermove", (e)=>{
  //   const { currentTarget: el, clientX: x, clientY: y } = e;
  //   const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  //   el.style.setProperty('--posX',  x-l-w/2);
  //   el.style.setProperty('--posY',  y-t-h/2);
  // })