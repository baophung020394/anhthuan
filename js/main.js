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
  });
})(jQuery);
