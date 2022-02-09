$(document).ready(function () {
   $('#sidebar-wrapper').theiaStickySidebar({
      additionalMarginTop: 50,
   });

   $('.slide-menu-toggle').on('click', function () {
      $('body').toggleClass('nav-active');
   });

   $('.submenu-toggle').on('click', function () {
      console.log('click');
      $(this).parent().toggleClass('show');
      $(this).prev('.m-sub').toggle();
   });

   $('.show-search').on('click', function () {
      $('#nav-search').fadeIn().find('input').focus();
   });

   $('.hide-search').on('click', function () {
      $('#nav-search').fadeOut();
   });

   $('.owl-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 10,
      nav: false,
      dots: true,
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 2,
         },
         1000: {
            items: 3,
         },
      },
   });
});
