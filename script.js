$(window).ready(function() {
  var width = $(window).width();

  if (width > 600) {
    $(window).ready(function() {
      $(".cap_slider").addClass("size-lg");

      $("#sliderTwo").addClass("lg-slider_2");
    });
  } else {
    $(".cap_slider").removeClass("size-lg");
    $(".cap_slider").addClass("size-sm");

    $("#sliderTwo").removeClass("lg-slider_2");

    $("#sliderTwo").addClass("sm-slider_2");
  }
});
