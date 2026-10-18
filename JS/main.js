
$(document).ready(function () {
    $("#menuButton").on("click", function () {
        const menu = $("#navMenu");

        if (menu.hasClass("hidden")) {
            menu.removeClass("hidden").hide().slideDown(200);
        } else {
            menu.stop(true, true).slideUp(200, function () {
                menu.addClass("hidden").removeAttr("style");
            });
        }
    });
});
