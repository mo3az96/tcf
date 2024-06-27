$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /***** side Menu *****/
  $(".menu-btn").on("click", (e) => {
    if (e.isDefaultPrevented()) return;
    e.preventDefault();
    e.stopPropagation();
    $(".overlay").fadeIn(500);
    $(".header-nav").addClass("active");
    $("body").addClass("overflow");
  });

  $(".close-btn,.overlay").on("click", (e) => {
    if (e.isDefaultPrevented()) return;
    e.preventDefault();
    e.stopPropagation();
    $(".overlay").fadeOut(500);
    $(".header-nav").removeClass("active");
    $("body").removeClass("overflow");
  });
  /***** side Cart *****/
  $(".cart-icon").on("click", (e) => {
    if (e.isDefaultPrevented()) return;
    e.preventDefault();
    e.stopPropagation();
    $(".cartoverlay").fadeIn(500);
    $(".cartList").addClass("active");
    $("body").addClass("overflow");
  });

  $(".close-cart,.cartoverlay,.back-btn").on("click", (e) => {
    if (e.isDefaultPrevented()) return;
    e.preventDefault();
    e.stopPropagation();
    $(".cartoverlay").fadeOut(500);
    $(".cartList").removeClass("active");
    $("body").removeClass("overflow");
  });

  /***** search *****/
  $(".search-trigger").on("click", (e) => {
    if (e.isDefaultPrevented()) return;
    e.preventDefault();
    e.stopPropagation();
    $(".search-section").slideToggle();
  });

  $(".close-search").on("click", (e) => {
    if (e.isDefaultPrevented()) return;
    e.preventDefault();
    e.stopPropagation();
    $(".search-section").slideUp();
  });

  /***** main slider *****/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /***** features sliders *****/
  var featuresSwiper = new Swiper(".features-slider .swiper", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2500,
    },
    spaceBetween: 5,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".features-slider .swiper-btn-next",
      prevEl: ".features-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".features-slider .swiper-pagination",
      clickable: true,
    },
  });

  /***** categoriesBanners sliders *****/
  var categoriesBannersSwiper = new Swiper(
    ".categoriesBanners-slider .swiper",
    {
      loop: true,
      speed: 500,
      // autoplay: {
      //   delay: 5000,
      // },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
      pagination: {
        el: ".categoriesBanners-slider .swiper-pagination",
        clickable: true,
      },
      on: {
        init: function (swiper) {
          lazyLoad();
        },
      },
    }
  );

  /***** offers sliders *****/
  var offersSwiper = new Swiper(".offers-slider .swiper", {
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    pagination: {
      el: ".offers-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /***** category1 sliders *****/
  var category1Swiper = new Swiper(".category1-slider .swiper", {
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: ".category1-slider .swiper-btn-next",
      prevEl: ".category1-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".category1-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /***** category2 sliders *****/
  var category2Swiper = new Swiper(".category2-slider .swiper", {
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: ".category2-slider .swiper-btn-next",
      prevEl: ".category2-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".category2-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /***** category3 sliders *****/
  var category3Swiper = new Swiper(".category3-slider .swiper", {
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: ".category3-slider .swiper-btn-next",
      prevEl: ".category3-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".category3-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /***** bestseller sliders *****/
  var bestsellerSwiper = new Swiper(".bestseller-slider .swiper", {
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
    },
    pagination: {
      el: ".bestseller-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /***** related sliders *****/
  var relatedSwiper = new Swiper(".related-slider .swiper", {
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    pagination: {
      el: ".related-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /***** categories slider *****/
  var categoriesSwiper = new Swiper(".categories-slider .swiper", {
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 5,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 13,
      },
    },
    navigation: {
      nextEl: ".categories-slider .swiper-btn-next",
      prevEl: ".categories-slider .swiper-btn-prev",
    },
    pagination: {
      el: ".categories-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /***** brands sliders *****/
  var brandsSwiper = new Swiper(".brands-slider .swiper", {
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 5,
      },
    },
    pagination: {
      el: ".brands-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /***** countdown *****/
  $(".product-countdown").each(function () {
    var endDate = $(this).attr("data-timer");
    var thisDiv = $(this);
    // Set the date we're counting down to
    var countDownDate = new Date(endDate).getTime();
    if (endDate) {
      // Update the countdown every 1 second
      thisDiv.addClass("time-side");
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the countdown date
        var distance = countDownDate - now;

        // Time calculations for total hours, minutes, and seconds
        var totalHours = Math.floor(distance / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element
        thisDiv.html(
          "<span class='hours'>" +
            ("0" + totalHours).slice(-2) +
            "</span>h :" +
            "<span class='minutes'>" +
            ("0" + minutes).slice(-2) +
            "</span>m :" +
            "<span class='seconds'>" +
            ("0" + seconds).slice(-2) +
            "</span>s"
        );

        // If the countdown is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          thisDiv.html(
            "<span class='hours'>00</span>h :" +
              "<span class='minutes'>00</span>m :" +
              "<span class='seconds'>00</span>s"
          );
        }
      }, 1000);
    }
  });

  /***** price range *****/
  var priceSlider = document.getElementById("price-slider");
  if (priceSlider) {
    var minPrice = parseInt($("#price-slider").data("min-price"));
    var maxPrice = parseInt($("#price-slider").data("max-price"));
    var sliderStart = [minPrice, maxPrice];
    var range = {
      min: minPrice,
      max: maxPrice,
    };

    var valuesinputs = [
      document.getElementById("min-price"),
      document.getElementById("max-price"),
    ];
    noUiSlider.create(priceSlider, {
      start: sliderStart,
      connect: true,
      tooltips: [
        {
          to: function (value) {
            return ~~value + "$";
          },
        },
        {
          to: function (value) {
            return ~~value + "$";
          },
        },
      ],
      step: 1,
      range: range,
    });

    priceSlider.noUiSlider.on("update", function (values, handle) {
      valuesinputs[handle].value = values[handle];
    });
  }

  /***** Filters Trigger *****/
  $(".filter-trigger").on("click", (e) => {
    if (e.isDefaultPrevented()) return;
    e.preventDefault();
    e.stopPropagation();
    $(".category-aside").toggleClass("active");
  });
  /***** Product *****/
  var productThumbsImagesSlider = new Swiper(".productThumbsImages", {
    spaceBetween: 5,
    slidesPerView: 4,
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  var productMainImageSlider = new Swiper(".productMainImage", {
    spaceBetween: 10,
    thumbs: {
      swiper: productThumbsImagesSlider,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  Fancybox.bind("[data-fancybox]");
  $(".comments-count").on("click", (e) => {
    if (e.isDefaultPrevented()) return;
    e.preventDefault();
    e.stopPropagation();
    $("html, body").animate(
      {
        scrollTop: $(".product-tabs").offset().top - 75,
      },
      1000
    );
    $("[data-bs-target='#product-reviews']").trigger("click");
  });
});
