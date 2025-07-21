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
