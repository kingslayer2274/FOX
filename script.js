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



$('body').scrollspy({ target: '#main-nav' });

// Add smooth scrolling
$('#main-nav a').on('click', function (e) {
  // Check for a hash value
  if (this.hash !== '') {
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    const hash = this.hash;

    // Animate smooth scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function () {
      // Add hash to URL after scroll
      window.location.hash = hash;
    });
  }
});