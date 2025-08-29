const openMenu = document.getElementsByClassName("open-menu")[0];

const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const closeMenu = document.getElementsByClassName("close-menu")[0];


  openMenu.addEventListener("click", () => {
      mobileMenu.style.display = "flex";
     
    });

    closeMenu.addEventListener("click", () => {
      mobileMenu.style.display = "none";
     
    });