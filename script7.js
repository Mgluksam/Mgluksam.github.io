$(document).ready(function () {
    if ($(window).width() >= '750') {
        $('.slider').empty();
        for (var i = 1; i <= 4; i++) {
            $('.slider').append('<div class="col"><img class="" src="imgs/' + i + '.jpg" style="width:100%; height: 100%;" alt="Picture of nature"></div>');
        }
    }
    var children = $('.slider div').children();
    for (var i = 0; i < 16 / children.length; i++) {
        var g = i + 1;
        $('.sliderbuttons').append('<a href="#" onclick="changeBlockSlide(' + g + ')">' + g + '</a>');
    }
});

function changeOneSlide(n) {
    var children = $('.slider div').children();
    if (n == 1) {
        $('.slider div').css("left", "");
        $('.slider div').css("right", "");
        $('.slider div').animate({
                left: 30,
            })
            .animate({
                left: 0
            })
    }
    if (n == -1) {
        $('.slider div').css("left", "");
        $('.slider div').css("right", "");
        $('.slider div').animate({
                right: 30,
            })
            .animate({
                left: 0
            })

    }
    for (var i = 0; i < children.length; i++) {
        var t = $(children[i]).attr('src');
        var numEl = parseInt(t.match(/\d+/));
        var g = numEl + n;
        if (g == 13)
            g = 1;
        if (g == 0)
            g = 12;
        $(children[i]).attr('src', 'imgs/' + g + '.jpg');
    }
}

function changeBlockSlide(n) {
    var children = $('.slider div').children();
    for (var i = 0; i < children.length; i++) {
        var g = n * children.length - children.length + i + 1;
        $(children[i]).attr('src', 'imgs/' + g + '.jpg');
    }
}