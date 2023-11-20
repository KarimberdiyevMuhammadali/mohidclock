function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);
  
  
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      margin: 20,
      loop: true,
      nav: true,
      navText: ['<img src="assets/images/prev.svg"/>', '<img src="assets/images/next.svg"/>'],
      dots: true,
      autoplay: true,
      autoplayTimeout: 80000,
      responsive: {
        0: {
          items: 1,
          dots: false,
        },
        600: {
          items: 1,
        },
        900: {
          items: 2,
        },
        1200: {
          items: 2,
          dots:true,
        },
      },
    });
  });


  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  }


  let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});



const loading = document.getElementById("loading");

const loadingDuration = 2000;

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);