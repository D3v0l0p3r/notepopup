/*global $, Notification*/

(function () {

    'use strict';

    var position = 1;

    $(document).on('click', '.notify', function () {
        Notification({
            title: "Title",
            text: "Long text Long text Long text Long text. 2 lines = Perfect ;)",
            image: "/john-doe.jpg",
            inAnimation: $('#inAnimation').val(),
            outAnimation: $('#outAnimation').val(),
            position: position
        });
    });

    $(function () {
        $('.position').click(function (event) {
            var el = $(event.target);
            $('.position').removeClass('selected notify');
            el.addClass('selected notify');
            position = el.attr('data-position');
        });
    });

}());
