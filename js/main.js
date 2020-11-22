App = {};

(function ($) {
  App.checkWindowSize = () => {
    var width = $(window).width(),
      new_class = width > 992 ? "" : "menu-mobile";

    $("header .navbar ul.submenu")
      .removeClass("menu-mobile")
      .addClass(new_class);

    // var heightPos1 = $('.pos1').height();
    // $('.pos3').css({
    //     'margin-top': -heightPos1 + 300 + 'px'
    // });
  };
  App.calculatorSidebarDetail = () => {
    var $window = $(window);
    var heightPos1 = $(".pos1").height();

    var windowsize = $window.width();
    if (windowsize >= 992) {
      //if the window is greater than 440px wide then turn on jScrollPane..
      $(".pos3").css({
        "margin-top": -heightPos1 + 280 + "px",
      });
    } else if (windowsize < 992) {
      $(".pos3").css({
        "margin-top": 0 + "px",
      });
    } else {
      return;
    }
  };

  // Load First
 
  // When resize screen
  $(window).resize(function () {
    App.checkWindowSize();
    App.calculatorSidebarDetail();
  });

  // Run first
  $(document).ready(function () {
    $(document).ready(function() {
      $('#example').DataTable( {
          dom: 'Bfrtip',
          buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
          ]
      } );
  } );
  });
})(jQuery);
