$(document).ready(function () {
  
    //下拉式選單
    $('.dropdown').click(function(event) {
        event.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();
      });

    //Top滑動效果
    $(".top").click(function (event) {
        event.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 1000);
      });

    //swiper banner輪播
      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 3500,
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }, 
      });

});


