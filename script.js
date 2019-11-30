$(window).ready(function() {
  var width = $(window).width();

  if (width < 600) {
    $(window).ready(function() {
      $(".my_caption").addClass("resize");
    });
  }
});
