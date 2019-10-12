$('.clients__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
  // arrows: true,
  cssEase: 'ease-out',
  speed: 3000,
  // fade: true
  });

  $('.photography__slider').slick({
    infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    arrows: false,
    cssEase: 'ease-out',
    dotsClass: 'slick-dots',
    centerPadding: '0px',
    dots: true,
    autoplay: true,
    centerMode: true,
    });

    

  $(document).ready(function(){
    $(".item").slice(0, 3).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".item:hidden").slice(0, 6).slideDown();
      if($(".item:hidden").length == 0) {
        $("#loadMore").text("End").addClass("noContent");
      }
    });
    
  })
  $(function(){
    $('.minimized').click(function(event) {
      var i_path = $(this).attr('src');
      $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
      $('#magnify').css({
        // left: '5%',
        // top: 0
        left: ($(document).width() - $('#magnify').outerWidth())/2,
        top: 0
        // left: ($(document).width() - $('#magnify').outerWidth())/2,
        // top: ($(window).height() - $('#magnify').outerHeight())/2
      });
      $('#overlay, #magnify').fadeIn('fast');
    });
    
    $('body').on('click', '#close-popup, #overlay', function(event) {
      event.preventDefault();
   
      $('#overlay, #magnify').fadeOut('fast', function() {
        $('#close-popup, #magnify, #overlay').remove();
      });
    });
  });
   
  