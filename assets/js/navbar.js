//تعریف متغیرها
  document.addEventListener("DOMContentLoaded", function () {
  const burgers = document.querySelectorAll(".navbar-burger");
  const menus = document.querySelectorAll(".navbar-menu");
  const closes = document.querySelectorAll(".navbar-close");
  const backdrops = document.querySelectorAll(".navbar-backdrop");

  const toggleMenu = () => {
    menus.forEach(menu => menu.classList.toggle("hidden"));
  };

  // Open menu
  if (burgers.length) {
    burgers.forEach(burger => {
      burger.addEventListener("click", toggleMenu);
    });
  }

  // Close menu & backdrop
  if (closes.length) {
    closes.forEach(close => {
      close.addEventListener("click", toggleMenu);
    });
  }

  if (backdrops.length) {
    backdrops.forEach(backdrop => {
      backdrop.addEventListener("click", toggleMenu);
    });
  }
});