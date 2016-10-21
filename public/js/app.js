$(document).ready(function () {
    $('.carousel').carousel({
        interval: 2000
    });

    $('.carousel').carousel('cycle');

    $filter('currency')(amount, symbol, fractionSize);
});

