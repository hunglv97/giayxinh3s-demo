$(window).load(function () {
    render_size();
    var url = window.location.href;
    $('.menu-item  a[href="' + url + '"]').parent().addClass('active');
});

$(window).resize(function () {
    render_size();
});


function render_size() {

    var h_7065 = $('.h_7065 img').width();
    $('.h_7065 img').height(0.7065 * parseInt(h_7065));

    var h_1_0035 = $('.h_1_0035 img').width();
    $('.h_1_0035 img').height(1.0035 * parseInt(h_1_0035));
}


if (window.innerWidth > 768) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sticky-header').addClass('fixed');
        } else {
            $('.sticky-header').removeClass('fixed');
        }
    });
}
if (window.innerWidth > 320) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sticky-header').addClass('clearfix');
        } else {
            $('.sticky-header').removeClass('clearfix');
        }
    });
}