$(window).ready(function() {
  var width = $(window).width();

  if (width > 600) {
    $(window).ready(function() {
      $(".cap_slider").addClass("size-lg");

      $("#sliderTwo").addClass("lg-slider_2");
    });
  } else {
    $(".iconsm").css("display", "inline-block");

    $(".cap_slider").removeClass("size-lg");
    $(".cap_slider").addClass("size-sm");

    $("#sliderTwo").removeClass("lg-slider_2");

    $("#sliderTwo").addClass("sm-slider_2");
  }
});

// FANCY BOX

$(document).ready(function() {
  $(".fancybox-button").fancybox({
    prevEffect: "none",
    nextEffect: "none",
    closeBtn: false,
    nextClick: true,
    helpers: {
      title: { type: "inside" },
      buttons: {}
    }
  });
});

$("body").scrollspy({ target: "#main-nav" });

// Add smooth scrolling
$("#main-nav a").on("click", function(e) {
  // Check for a hash value
  if (this.hash !== "") {
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    const hash = this.hash;

    // Animate smooth scroll
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      900,
      function() {
        // Add hash to URL after scroll
        window.location.hash = hash;
      }
    );
  }
});

//  LOADER

function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}
function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? "block" : "none";
}
onReady(function() {
  setVisible(".page", true);

  setVisible("#loading", false);
  $("#loading").remove();
});

function loading() {
  $(document).ready(function() {
    return false;
  });
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? "block" : "none";
}
if (loading) {
  setVisible(".page", true);
} else {
  setVisible(".page", false);
}
