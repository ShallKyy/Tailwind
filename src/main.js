const hamburger = document.getElementById("hamburger");
const ham = document.querySelectorAll(".hamburger-line");



// Navbar 
window.onscroll = () => {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    }else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger
const navMenu = document.querySelector("#nav-menu")
hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden")

});

// 
document.addEventListener("click", (e) => {
  if(!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add("hidden")
    hamburger.classList.remove("hamburger-active")
  }
})

// Hover Hamburger
for (let i = 0; i < ham.length; i++) {

        if (ham[i] === ham[0]){
            hamburger.addEventListener('mouseover', () => {
               ham[0].classList.add('hamburger-1')
            })
            hamburger.addEventListener('mouseleave', () => {
               ham[0].classList.remove('hamburger-1')
            })
          }if (ham[i] === ham[1]) {
            hamburger.addEventListener('mouseover', () => {
                ham[1].classList.add('hamburger-2')
             })
             hamburger.addEventListener('mouseleave', () => {
                ham[1].classList.remove('hamburger-2')
             })
          } 
    }


