App = {};

(function ($) {
  App.checkWindowSize = () => {
    var width = $(window).width(),
      new_class = width > 992 ? "" : "menu-mobile";

    $("header .navbar ul.submenu")
      .removeClass("menu-mobile")
      .addClass(new_class);
  };
  

  // Load First
 
  // When resize screen
  $(window).resize(function () {
    App.checkWindowSize();
  });

  // Run first
  $(document).ready(function () {
    App.checkWindowSize();

    // Click menu mobile
    $("header ul li").on("click", function () {
      $(this).find("ul").toggleClass("active");
      console.log(this);
    });

    // Page Project
    $(".item").slice(0, 6).show();
    $(".loadmore button").on("click", function (e) {
        e.preventDefault();
        $(".item:hidden").slice(0, 6).slideDown();
        if ($(".item:hidden").length == 0) {
            $(".loadless").fadeIn("slow");
            $(".loadmore").hide();
        }
    });

    $(".loadless").on('click', function(e) {
      e.preventDefault();
      $('.item:not(:lt(6))').fadeOut();
      $(".loadmore").fadeIn('slow');
      $(".loadless").hide();
  
      desiredHeight = $(window).height();
  
      $('html,body').animate({
        scrollTop: $(this).offset().top + desiredHeight
      }, 1500);
    });

    // Page Download
    $(".item-card").slice(0, 4).css('display', 'flex');
    $(".download .loadmore button").on("click", function (e) {
        e.preventDefault();
        $(".item-card:hidden").slice(0, 4).slideDown({
          start: function () {
            $(this).css({
              display: "flex"
            })
          }
        });
        if ($(".item-card:hidden").length == 0) {
            $(".download .loadless").fadeIn("slow");
            $(".download .loadmore").hide();
        }
    });

    $(".download .loadless").on('click', function(e) {
      e.preventDefault();
      $('.item-card:not(:lt(4))').fadeOut();
      $(".download .loadmore").fadeIn('slow');
      $(".download .loadless").hide();
  
      desiredHeight = $(window).height();
  
      $('html,body').animate({
        scrollTop: $(this).offset().top + desiredHeight
      }, 1500);
    });

  });
})(jQuery);
