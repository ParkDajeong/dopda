// Scrolla
$(function() {
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });
});

// Header Event
function fixHeader(scroll) {
  if(scroll > 200) {
    $("header").addClass("on");
  }else {
    $("header").removeClass("on");
  }
}

$(window).on("scroll resize", function() {
  const scroll = $(document).scrollTop();
  fixHeader(scroll);
});

// slick slide 
$(function() {
  $(".visual .slide").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});