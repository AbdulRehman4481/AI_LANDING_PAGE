export const contisUtilit = {
  menuFix() {
    var mainMenu = document.querySelector(".tf__main_menu");

    if (mainMenu) {
      window.addEventListener("scroll", function () {
        var scrolling = window.scrollY || document.documentElement.scrollTop;

        if (scrolling > 120) {
          mainMenu.classList.add("menu_fix");
        } else {
          mainMenu.classList.remove("menu_fix");
        }
      });
    }
  },
};
