$(document).ready(function () {
    var s = $(".header");
    var pos = s.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if ((windowpos >= pos.top) & (windowpos >= 30)) {
            $("header").addClass("top");
        } else {
            $(".header").removeClass("top"); 
        }
    });
});
// resoonsive nav
function myFunction() {
    let navElement = document.querySelector("nav");
    navElement.classList.toggle("nav-show");
    let toggleBtnElement = document.querySelector(".toggle-btn");
    toggleBtnElement.classList.toggle("toggle-open");
  }
  document.querySelector(".toggle-btn").addEventListener("click", myFunction);

// testimonial
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".testimonial-track");
  const dots = document.querySelectorAll(".dot");
  const testimonials = document.querySelectorAll(".testimonial");
  let currentIndex = 0;

  function updateSlider(index) {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentIndex = index;
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => updateSlider(i));
  });

  // Optional autoplay
  setInterval(() => {
    let next = (currentIndex + 1) % testimonials.length;
    updateSlider(next);
  }, 6000);
});

