new WOW().init();

$(function() {

    const spBreakPoint = 670;
    let headerTop = 40;
    let headerHeight = 0;
    
    if ($(window).width() > spBreakPoint) {
        headerHeight = 620;
    } else {
        headerHeight = 355;
    }

    $(window).on('scroll', function () {
        if ($(window).width() > spBreakPoint) {
            if ($(this).scrollTop() > headerTop) {
                $('.header__nav').addClass('position-change');
            } else {
                $('.header__nav').removeClass('position-change');
            }
        }
        if ($(this).scrollTop() > headerHeight) {
            $('.header__nav').addClass('color-change');
        } else {
            $('.header__nav').removeClass('color-change');
        }

        // let workDescTop = $('#work__desk').offset().top;
        // if ($(this).scrollTop() > (workDescTop - 50)) {
        //     $('.work').addClass('arrow_display');
        // }
    });

    // ハンバーガーメニューの表示・非表示
    $('.hamburger-menu').on('click', function() {
        $('.hamburger-menu').toggleClass('active');
    });
    $('.header__menu__item').on('click', function() {
        $('.hamburger-menu').removeClass('active');
    });
});