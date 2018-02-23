/* INDEX OF CONTENTS JAVASCRIPT
==================================================
  XX. PRELOADER
  01. HOME TEXT TYPING
  02. ANIMATION EFFECT
  03. PARALLAX BACKGROUND EFFECT
  04. HOME ARROW DOWN
  05. NAVIGATION
  06. MOBILE NAVIGATION
  07. SMOTH SCROLL
  08. PORTFOLIO FILTER IMAGE
  09. CONTACT VALIDATION FORM
  10. SCROLL ON TOP BUTTON
*/

(function($) {
    'use strict';

    jQuery(document).ready(function() {


    /* XX. PRELOADER
    ==================================================*/

    $(window).on('load', function() {
        $("#status").fadeOut();
        $("#preloader").delay(500).fadeOut("slow");
    })


    /* 01. HOME TEXT TYPING
    ==================================================*/

    $(window).on('load', function() {
        $(".typing").typed({
            // CHANGE YOUR HOME TYPING DESCRIPTION HERE
            strings: ["I am A Freelance.", "I live in San Francisco.", "and I will do amazing work for you."],
            typeSpeed: 70
        });
    });


    /* 02. ANIMATION EFFECT
    ==================================================*/

    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });


    /* 03. PARALLAX BACKGROUND EFFECT
    ==================================================*/

    var parallax = function() {
        $(window).stellar();
    };

    $(function() {
        parallax();
    });


    /* 04. HOME ARROW DOWN
    ==================================================*/

    var arrowBounce = function() {
        var arrow = $(".arrow");
        if (arrow.hasClass("lift")) {
            arrow.removeClass("lift");
        } else {
            arrow.addClass("lift");
        }
    };

    setInterval(arrowBounce, 800);


    /* 05. NAVIGATION
    ==================================================*/

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('#navigation').addClass('navigation-background');
        } else {
            $('#navigation').removeClass('navigation-background');
        }
    });


    /* 06. MOBILE NAVIGATION
    ==================================================*/

    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });


    /* 07. SMOTH SCROLL
    ==================================================*/

    $('a.smoth-scroll').on('click', function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });


    /* 08. PORTFOLIO FILTER IMAGE
    ==================================================*/
    $('#port-image').mixItUp();


    /* 09. CONTACT VALIDATION FORM
    ==================================================*/

    $(function() {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Please Input Your Name",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "Please Input Your Email"
                },
                message: {
                    required: "Your Message Required"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "php/process.php",
                    success: function() {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function() {
                        $('#contact').fadeTo("slow", 1, function() {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });
    });


    /* 10. SCROLL ON TOP BUTTON
    ==================================================*/

    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });




  });

})(jQuery);
