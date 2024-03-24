$(document).ready(function () {
    let $logoContainer = $("#logo-container"),
        btnDown = $("#btn-down");

    $logoContainer.click(function () {
        window.open("https://github.com/sergopoketgo");
    });

    btnDown.click(function () {
        $("html").animate({scrollTop: $(window).height()}, 200);
    });
});