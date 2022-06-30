$(window).ready(function () {
    hoverSocial();
});

function hoverSocial() {
    var teachers = $(".teachers .item-teachers .bg-teachers");
    var social = $(".teachers .item-teachers .bg-teachers .social")
    $(teachers).each(function () {
        $(this).hover(function () {
            $(this).children(".social").removeClass("hide");
        }).mouseout(function () {
            $(this).children(".social").addClass("hide");
        });
    });
}