// Header Event
function fixHeader(scroll) {
  if(scroll > 100) {
    $(".main-header").addClass("on");
  }else {
    $(".main-header").removeClass("on");
  }
}

$(window).on("scroll resize", function() {
  const scroll = $(document).scrollTop();
  fixHeader(scroll);
});

// mobile nav 
$(function() {
  $(".btn-menu--open").on("click", function() {
    $("body").css({"overflow": "hidden"});
    $(".main-header__mo-nav-bg").css({"display": "block"});
    $(".gnb").addClass("on");
  });
  $(".btn-menu--close, .main-header__mo-nav-bg").on("click", function() {
    $("body").css({"overflow": "auto"});
    $(".main-header__mo-nav-bg").css({"display": "none"});
    $(".gnb").removeClass("on");
  });
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

// Scrolla
$(function() {
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });
});
