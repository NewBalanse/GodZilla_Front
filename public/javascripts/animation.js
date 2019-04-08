window.onload = function () {
    anime({
        targets: '.menu-container',
        delay: 1200,
        opacity: 1
    });

    anime({
        targets: '.play-content',
        delay: 1700,
        opacity: 1,
        translateY: -20
    });

    anime({
        targets: '.page-content--center--top',
        delay: 2200,
        opacity: 1,
        translateX:20
    });

    anime({
        targets: '.page-content--center--bottom',
        delay: 2700,
        opacity: 1
    });

};