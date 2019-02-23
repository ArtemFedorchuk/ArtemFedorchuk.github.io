let btn = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu-tog'),
    cont = document.querySelector('.header-cont'),
    header = document.querySelector('.header'),
    headerBtn = document.querySelector('.header__btn');

btn.addEventListener('click', function(){
    console.log('hello')
      menu.classList.toggle('menu-togler');
      if (document.querySelector('.menu-togler')){
        headerBtn.style.opacity = '0';
        cont.style.opacity = '0';
        btn.style.transform = 'rotate(90deg)'
      }else{
        headerBtn.style.opacity = '1';
        cont.style.opacity = '1';
        btn.style.transform = 'rotate(0deg)'
      }
});


$('.big-slide').slick({
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
  fade: true,
  cssEase: 'linear'
});

$('.litle-slide').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  adaptiveHeight: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: false,
  nextArrow: false
});
      