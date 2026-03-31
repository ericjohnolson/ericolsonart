function init() {
    $.get("header.html")
        .done(function () {
            $("#htmlHeader").load("header.html");
            $("#htmlFooter").load("footer.html");
        }).fail(function () {
            $("#htmlHeader").load("../header.html");
            $("#htmlFooter").load("../footer.html");
        });

}