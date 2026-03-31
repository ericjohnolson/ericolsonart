$(document).ready(function () {
    resizeScreen();
    menu_mobile();

    $(window).resize(function (e) {
        resizeScreen();
    });
});

//menu
function resizeScreen() {
    screenHeight = $(window).height();
    screenWidth = $(window).width();
    menuBuild();
}

function menuBuild() {
    hideMenu();
    if (screenWidth > 955) { $("#header_show").addClass("desktop"); $("#header_show").removeClass("mobile") } else { $("#header_show").addClass("mobile"); $("#header_show").removeClass("desktop") }
    $("#header_show").unbind();

    $("#header_show").hover(function () {
        if (screenWidth > 955)
            showMenu();
    });

    $("#header_desktop").hover(function () { }, function () {
        if (screenWidth > 955)
            hideMenu()
    });

    $("#header_show .bt-menu-trigger").on('touchstart', function (e) {
        e.stopPropagation();
        showMenu();
    });
    $("#header_desktop .bt-menu-trigger").on('touchstart', function (e) {
        e.stopPropagation();
        hideMenu();
    });
}

function showMenu() {
    $("#header_desktop").stop(true, true).show();
    $('.bt-menu-trigger:not(.activamenu)').addClass("open");
}

function hideMenu() {
    if ($(window).width() >= 955) {
        $("#header_desktop").stop(true, true).fadeOut(100);
        $('.bt-menu-trigger:not(.activamenu)').removeClass("open");
    }
}

function menu_mobile() {
    $('.activamenu').click(function () {
        $('.bt-menu-trigger').toggleClass("open");
        // $('.menu-mobile-back').stop(true,false).slideToggle(150);
        if ($('.menu-mobile-back').is(':hidden')) {
            TweenMax.to('.menu-mobile-back', 0.150, { display: 'table', opacity: 1 });
        } else {
            TweenMax.to('.menu-mobile-back', 0.150, { display: 'none', opacity: 0 });
        }
        $('.menu-mobile-language').stop(true, false).slideUp(150);
    });
}
