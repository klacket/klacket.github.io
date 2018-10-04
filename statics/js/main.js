$(document).ready(function() {


$(function () {

    $('.hamburger').on('click', function() {
        $(this).find('.hamburger--line').toggleClass('hamburger--line__x');

       $('.dimmer').dimmer({
                   closable: false,
       });
            $('.dimmer').dimmer('toggle');

        });
    });

});


