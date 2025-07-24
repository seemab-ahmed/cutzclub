// Sticky Header
$(document).ready(function () {
  var s = $(".header");
  var pos = s.position();
  $(window).scroll(function () {
    var windowpos = $(window).scrollTop();
    if (windowpos >= pos.top && windowpos >= 30) {
      $("header").addClass("top");
    } else {
      $(".header").removeClass("top");
    }
  });

  // Initialize Testimonials Slider using Slick
  $(".testimonials-slider").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  });
});

// Responsive Nav Toggle
function myFunction() {
  let navElement = document.querySelector("nav");
  navElement.classList.toggle("nav-show");
  let toggleBtnElement = document.querySelector(".toggle-btn");
  toggleBtnElement.classList.toggle("toggle-open");
}
document.querySelector(".toggle-btn").addEventListener("click", myFunction);

// Scroll-triggered Animation for Barber Boost Section
function handleScrollAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target); // Trigger only once
    }
  });
}

const observer = new IntersectionObserver(handleScrollAnimation, {
  threshold: 0.2,
});

const boostSection = document.querySelector(".barber-boost-section");
const boostItems = document.querySelectorAll(".boost-item");
const boostCTA = document.querySelector(".boost-cta");

if (boostSection) observer.observe(boostSection);
boostItems.forEach((item) => observer.observe(item));
if (boostCTA) observer.observe(boostCTA);
