/*global $, Notification*/

(function () {

    'use strict';

    var position = 1;

    $('.notify').click(function (event) {
        Notification.create(
            "Title",
            "Long text Long text Long text Long text. 2 lines = Perfect ;)",
            "/john-doe.jpg",
            $(event.target).text(),
            position
        );
    });

    $(function () {
        $('.position').click(function (event) {
            var el = $(event.target);
            $('.position').removeClass('selected');
            el.addClass('selected');
            position = el.attr('data-position');
        });
    });

}());
