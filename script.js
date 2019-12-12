$(window).ready(function() {
  var width = $(window).width();

  if (width > 600) {
    $(window).ready(function() {
      $("#sliderTwo").addClass("lg-slider_2");
    });
  } else {
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

// ESTAROS CAROUSEL

$(".host-element").frameCarousel({
  // Enable/disable debug mode. Debug mode allows you to print
  // debug messages on top of the frame in cases when console.log/alert aren't
  // readily available.
  debug: false,

  // First screen when the plugin intializes. Must be an integer between 0
  // and image_count - 1, where image_count is total number of images you're
  // displaying inside the frame.
  first: 0,

  /*
   * swipeThreshold -- percentage of screen width
   *
   * Determines when to initiate a next transition when user
   * is sliding a screen.
   *
   * For example, a value of 10 says that
   * initiate a move-to-next screen transition, if user has lifted
   * her finger(s) after having dragged current screen towards left by
   * a distance of 10% or more.
   */
  swipeThreshold: 10,

  /**
   * Frame image that you'd like to use in the background.
   * The default value points to a phone frame included within
   * dist/sample directory.
   */
  frame: "./FrameCarousel-master/src/sample/frame.png",

  /**
   * Width/height of the frame in pixels you'd like to apply in relation to different
   * screen sizes.
   *
   * If this option isn't specified at all, original dimensions of the frame image
   * will be used for all screen sizes.
   *
   * It takes an array of objects, each specifying frame dimensions in relation to a
   * particular screen width. For a given screen width, the plugin will iterate through
   * the array, and apply dimensions of the first matching object.
   *
   * If width isn't specified, but height is there, width would be calculated
   * using original image's aspect ratio. Same is true when height isn't specified,
   * but width is there. If neither height nor width are specified, original dimensions
   * of the image will be used.
   *
   * If width is set as -1, the frame will be removed for screens which match the criteria.
   */
  frameSize: [
    {
      width: 300,
      height: 300,
      minScreenWidth: 768,
      maxScreenWidth: 1500
    },
    {
      width: 200,
      height: 200,
      minScreenWidth: 100,
      maxScreenWidth: 600
    }
  ],

  /**
   * Screen width in pixels. Removes frame and left/right buttons if current screen size
   * is less than or equal to this number.
   */
  collapseThreshold: 0,

  /**
   * Marks bounding box within frame image where images are to be rendered.
   * All values are in percentages, so they remain true no matter what pixel size frame ends
   * up with.
   */
  boundingBox: {
    left: "4.3%",
    top: "4.48%",
    width: "91.4%",
    height: "61.1%"
  },

  /**
   * An array of image links to be rendered within frame. Images don't have to adhere
   * to any size (they don't even have to have same size), but it'll help if their
   * aspect ratio is same as aspect ratio of boundingBox.
   */
  images: [
    "./FrameCarousel-master/src/sample/1.jpg",
    "./FrameCarousel-master/src/sample/2.jpg"
  ]
});

// OWL CAROUSEL

$(".main-carousel").flickity({
  // options
  cellAlign: "left",
  contain: true,
  pageDots: false
});
