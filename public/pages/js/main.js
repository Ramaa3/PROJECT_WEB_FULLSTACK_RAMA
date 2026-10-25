// Navbar bersama: tombol menu menggunakan jQuery.
$(function () {
  $("#menuButton").on("click", function () {
    const $menu = $("#navMenu");
    const expanded = $(this).attr("aria-expanded") === "true";
    if (expanded) {
      $menu.stop(true, true).slideUp(180, function () {
        $menu.addClass("hidden").removeAttr("style");
      });
    } else {
      $menu.removeClass("hidden").hide().slideDown(180);
    }
    $(this).attr("aria-expanded", String(!expanded));
  });
});
