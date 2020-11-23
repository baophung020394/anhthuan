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

    $(".item").slice(0, 6).show();
    $(".loadmore button").on("click", function (e) {
        e.preventDefault();
        $(".item:hidden").slice(0, 4).slideDown();
        if ($(".item:hidden").length == 0) {
            $(".loadless").fadeIn("slow");
            $(".loadmore").hide();
        }
    });

    $(".loadless").on('click', function(e) {
      e.preventDefault();
      $('item:not(:lt(6))').fadeOut();
      $(".loadmore").fadeIn('slow');
      $(".loadless").hide();
  
      desiredHeight = $(window).height();
  
      $('html,body').animate({
        scrollTop: $(this).offset().top + desiredHeight
      }, 1500);
    });

  });
})(jQuery);
