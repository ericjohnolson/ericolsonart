"use strict";

function toggleMenu() {
    $header.toggleClass("active"), $menuToggle.html("☰" === $menuToggle.html() ? "×" : "☰")
}
var $window = $(window),
    $content = $("#content"),
    $header = $("#header"),
    $contentOffset = $header.height(),
    $progressOriginal = $("#progress .original"),
    $progressScroll = $("#progress .scroll"),
    $progressNew = $("#progress .progress"),
    $logoContainer = $(".logo-container"),
    $logo = $(".logo-container, #logo"),
    $menuToggle = $("#toggleMenu");
$menuToggle.on("click", function () {
    toggleMenu()
}), $("#navigation a").on("click", function () {
    toggleMenu()
}), $content.css({
    "margin-top": $contentOffset
}), $window.on("scroll", function () {
    var e = $(this).scrollTop();
    $progressScroll.html("<p>scroll: " + e + "</p>");
    var o = $contentOffset - 10 * e;
    52 > e ? ($header.css({
        height: o
    }), $content.css({
        "margin-top": $header.height()
    }), $logo.width(.7 * o), $header.removeClass("fixed")) : $header.addClass("fixed")
});
var $window = $(window),
    $navigation = $("#navigation"),
    wW = $window.width(),
    lastId, topMenuHeight = $navigation.outerHeight() + 15,
    menuItems = $navigation.find(".pull-right a"),
    scrollItems = menuItems.map(function () {
        var e = $($(this).attr("href"));
        return e.length ? e : void 0
    });
$window.on("scroll", function () {
    var e = $(this).scrollTop() + topMenuHeight,
        o = scrollItems.map(function () {
            return $(this).offset().top < e ? this : void 0
        });
    o = o[o.length - 1];
    var t = o && o.length ? o[0].id : "";
    menuItems.removeClass("active"), $(".pull-right a[href=#" + t + "]").addClass("active"), lastId !== t && (lastId = t, menuItems.removeClass("active").end().filter("[href=#" + t + "]").addClass("active"))
}), $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var o = this.hash,
        t = $(o),
        n = t.offset().top - 100;
    $("html, body").stop().animate({
        scrollTop: n
    }, 900, "swing", function () {
        window.location.hash = o
    })
});