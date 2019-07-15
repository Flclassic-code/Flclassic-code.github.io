	$(document).ready(function() {


	    /* header fixed top */
	    var f = true;
	    $(window).on('scroll', function() {

	        var scrTop = $(window).scrollTop();
	        var headerHeight = $('.header').height();

	        if (scrTop > headerHeight && f) {
	            f = false;

	            $('.header').addClass('header_fixed');
	            $('.section-1').css({
	                marginTop: headerHeight
	            })
	        } else if (scrTop <= headerHeight && !f) {
	            f = true;
	            $('.header').removeClass('header_fixed');
	            $('.section-1').removeAttr('style');
	        }

	    });


	    /* mobile check */
	    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	        // $('html, body').css('min-width', '1320px').addClass('mobile');
	        // $('html').css('width', window.innerWidth + 'px');
	    }

	    //---*SELECT2*
	    $(document).ready(function() {

	        var $eventSelect = $('.js-example-basic-single');
	        $eventSelect.select2();

	        $eventSelect.select2({
	            placeholder: "Выберите манипулятор",
	            allowClear: true,
	            dropdownCssClass: 'no-search'
	            // closeOnSelect: false
	        });

	        // select2-chenge
	        $eventSelect.on("change", function showMessage() {
	            dropdownCssClass: 'no-search',
	            console.log("change");
	            var val = $eventSelect.select2('val');
	            var dataNum = $eventSelect.select2().find(':selected').data('num');
	            var dataTwo = $eventSelect.select2().find(':selected').data('two');
	            var rengeVal = $('#myRange').val();
	            var renge = $('#myRange').val();
	            $('p#resuld-all').text(+dataTwo * +dataNum * +renge);

	        });
	        $('#myRange').on('input', function() {
	            var rengeVal = $('#myRange').val();
	            var resultRange = $('#demo').text(rengeVal);
	            console.log(rengeVal);
	            var dataNum = $eventSelect.select2().find(':selected').data('num');
	            var dataTwo = $eventSelect.select2().find(':selected').data('two');
	            if (dataNum != undefined) {
	                $('p#resuld-all').text(+dataTwo * +dataNum * +rengeVal);
	            }
	        });

	    });

	    if ($('button.send').attr("disabled")) {
	        $('button.send').removeAttr("disabled");
	        $('.active-check').addClass('act');
	    } else {
	        $('button.send').attr("disabled", true);
	        $('.active-check').removeClass('act');
	    };
	    // CHECK-ACTIVE-BUTTON-1
	    $('#check').on('click', function() {
	        if ($('button.send').attr("disabled")) {
	            $('button.send').removeAttr("disabled");
	            $('.active-check').addClass('act');
	        } else {
	            $('button.send').attr("disabled", true);
	            $('.active-check').removeClass('act');
	        };
	    });

	    // CHECK-ACTIVE-BUTTON-2
	    $('.checkbox-wrap__check-modal').on('click', function() {
	        if ($('#btn-modal').attr("disabled")) {
	            $('#btn-modal').removeAttr("disabled");
	            $('.active-check-modal').addClass('act');
	        } else {
	            $('#btn-modal').attr("disabled", true);
	            $('.active-check-modal').removeClass('act');
	        };
	    });


	    $('.hamburger').on('click', function(e) {
	        e.preventDefault();
	        $(this).toggleClass('is-active');
	        $('.maine-menu-mobile').toggleClass('menu-active');
	    });


	    $(".send").on('click', function(e) {
	        e.preventDefault();

	        var form = $(this).parents("form");

	        form.find("input").each(function() {

	            var inp = $(this);
	            var req = $(this).data("req");
	            if (inp.attr('type') === 'email') {
	                var em = inp.val();

	                if (!validateEmail(em)) {
	                    inp.addClass("error");
	                } else {
	                    inp.removeClass("error");
	                }
	            } else if (req === 1 && !inp.val().length) {
	                inp.addClass("error");
	            } else {
	                inp.removeClass("error");
	            }

	        });

	        if (form.find(".error").length) {
	            return false;
	        } else {
	            $.ajax({
	                type: "POST",
	                url: form.attr('action'),
	                data: form.serialize(),
	                success: function(response) {

	                    $(':input')
	                        .not(':button, :submit, :reset, :hidden')
	                        .val('')
	                        .removeAttr('checked')
	                        .removeAttr('selected');

	                    $.fancybox.close();
	                    var message = $('.callback-window');
	                    $.fancybox.open(message);

	                }
	            });
	        }
	    });




	    // 	$(document).ready(function() {

	    // $('.option').click(function(){
	    // 	console.log('click');
	    // var data = $(this).attr("data-car");
	    // console.log(data);
	    // });

	    // // Range 
	    // $(function() {
	    //     var el;
	    //     $("#rng").change(function() {
	    //             el = $(this);
	    //             el
	    //                 .next("#ong")
	    //                 .text(el.val());
	    //         })
	    //         el.trigger('change');
	    // });

	    // });

	    // /*SCROLL TO*/
	    $('a.left-btn').on('click', function(event) {
	     var target = $( $(this).attr('href') );
	     if( target.length ) {
	       event.preventDefault();
	       $('html, body').animate({
	         scrollTop: target.offset().top
	       }, 1500);
	     }
	    });




	    $('.up-button').on('click', function(e) {
	      e.preventDefault(); 
	      $('html, body').animate({
	        scrollTop: 0
	      }, 700);

	    });

	    if ( $('.up-button').length ) {
	      window.onscroll = function() {
	        var topToDocument = window.pageYOffset || document.documentElement.scrollTop;
	        if (topToDocument > 800) {
	          $('.up-button').addClass('up-button_show');
	        } else {
	          $('.up-button').removeClass('up-button_show');
	        }
	      }
	    }


	    // $('.scroll-box').mCustomScrollbar({
	    //   theme:"rounded-dots",
	    //   scrollInertia:400
	    // });


	    // var scr = $(".main-wrapper").height() > $('body').height();

	    // var flsm1 = true; 
	    // var flsm2 = true; 

	    // $(window).on('load resize', function() {

	    //  /*CHECK WIDTH 1 ITERATION*/
	    //  if (window.innerWidth <= 991) {
	    //    flsm2 = true;
	    //    if (flsm1) {
	    //      flsm1 = false;

	    //    }
	    //  } else {
	    //    flsm1 = true;
	    //    if (flsm2) {
	    //      flsm2 = false; 

	    //    }
	    //  }

	    // });




	    /* SLICK_SLIDER */
	    if ($('.section-1').length) {
	        $('.section-1').slick({
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            dots: true,
	            centerMode: false,
	            prevArrow: '.arrow-prev',
	            nextArrow: '.arrow-next',
	            centerPadding: '30px',
	            touchMove: false,
	            draggable: false,
	            infinite: true,
	            speed: 500,
	            fade: true,
	            cssEase: 'linear',
	            responsive: [{
	                    breakpoint: 992,
	                    settings: {
	                        // dots: false,
	                        slidesToShow: 1,
	                        slidesToScroll: 1
	                    }
	                },
	                {
	                    breakpoint: 668,
	                    settings: {
	                        // dots: false,
	                        slidesToShow: 1,
	                        slidesToScroll: 1
	                    }
	                }
	            ]
	        });
	    };






	    /*MATCHHEIGHT*/
	    // $('.your-class').matchHeight()

	    /*FANCYBOX*/
	    $('.modal-tiger').fancybox({
	        touch: false
	        // hideOnContentClick: false,
	        // closeBtn: false,
	        // overlayShow: false,
	        // fitToView: false
	    });

	    /*FANCYBOX*/

	    $('[data-fancybox="images"]').fancybox({
	        afterLoad: function(instance, current) {
	            var pixelRatio = window.devicePixelRatio || 1;

	            if (pixelRatio > 1.5) {
	                current.width = current.width / pixelRatio;
	                current.height = current.height / pixelRatio;
	            }
	        }
	    });


	    // var regDigits = new RegExp('^\\d+$');

	    // $('input[type=tel]').keypress(function (e) {

	    // 	var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);

	    // 	if (!regDigits.test(key)) {
	    // 		e.preventDefault();
	    // 		return false;
	    // 	}
	    // });

	    // $('input[type=email]').keyup(function() {
	    // 	var thisVal = $(this);
	    // 	thisVal.val(thisVal.val().replace(/[^\x00-\x7F]+/i, ""))

	    // });


	    /*MASK JQUERY*/
	    $('input[type=tel]').mask("+7 (999) 999-99-99");


	    /*HIDE PLACEHOLDER*/
	    $('input,textarea').focus(function() {
	        $(this).data('placeholder', $(this).attr('placeholder'))
	            .attr('placeholder', '');
	    }).blur(function() {
	        $(this).attr('placeholder', $(this).data('placeholder'));
	    });


	    /* SUBMIT BUTTON DISABLED */
	    // $('.checked').on('click', function(e) {
	    //  e.preventDefault(); 
	    //  var button = $(this).closest('form').find('button');
	    //  var buttonVal = $(this).closest('form').find('button').prop('disabled');
	    //  $(this).toggleClass('active');
	    //  if (!buttonVal) {
	    //    button.prop('disabled', true);
	    //  } else {
	    //    button.prop('disabled', false);
	    //  }
	    // });



	    /*  wordpress regexp tel: */
	    // if ($('a[href^="tel:"]').length > 1) {

	    //  $('a[href^="tel:"]').each(function() {

	    //    var phone = $(this).text();
	    //    phone = phone.replace(/\D+/g,"");

	    //    $(this).attr('href', 'tel:+'+phone);
	    //  });
	    // } else {
	    //  var phone = $('a[href^="tel:"]').text();
	    //  phone = phone.replace(/\D+/g,"");
	    //  $('a[href^="tel:"').attr('href', 'tel:+'+phone);
	    // }


	    // /*YANDEX MAP*/
	    if ($('#map-canvas').length) {
	        ymaps.ready(init);

	        function init() {
	            var myMap = new ymaps.Map("map-canvas", {
	                    center: [55.866500, 37.444566],
	                    zoom: 16,
	                    controls: ['zoomControl']
	                }),
	                Placemark1 = new ymaps.Placemark([55.866500, 37.444566], {
	                    balloonContent: '',
	                    hintContent: '',
	                }, {
	                    iconLayout: 'default#image',
	                    iconImageHref: "img/location.svg",
	                    iconImageSize: [58, 58]
	                })
	            myMap.geoObjects.add(Placemark1);
	            myMap.behaviors.disable('scrollZoom');
	        }
	    };


	    /*deletecookie*/
	    // $(document).on('click', 'a', function() {
	    //  if (readCookie('txt-c') !== null || readCookie('select-c') !== null ) {
	    //    eraseCookie('txt-c');
	    //    eraseCookie('select-c');
	    //  }
	    // });


	    // /*check-form*/
	    // $('#feedback-valid-1').validate({
	    //     rules: {
	    //         "phone": { required: true }
	    //     },
	    //     messages: {
	    //         "phone": { required: "" }
	    //     },
	    //     submitHandler: function(form) {
	    //         $(form).ajaxSubmit({
	    //             success: function(data) {
	    //                 if (data == "true") {
	    //                     $(':i nput', '#feedback-valid-1')
	    //                         .not(':button, :submit, :reset, :hidden')
	    //                         .val('')
	    //                         .removeAttr('checked')
	    //                         .removeAttr('selected');
	    //                     // window.location.href = "thx1.html";
	    //                     $.fancybox.close()
	    //                     var message = $('#callback');
	    //                     $.fancybox(message);

	    //                 }
	    //             }
	    //         });
	    //     }
	    // });


	    // function createCookie(name,value,days) {
	    //  var expires = "";
	    //  if (days) {
	    //    var date = new Date();
	    //    date.setTime(date.getTime() + (days*24*60*60*1000));
	    //    expires = "; expires=" + date.toUTCString();
	    //  }
	    //  document.cookie = name + "=" + value + expires + "; path=/";
	    // }

	    // function readCookie(name) {
	    //  var nameEQ = name + "=";
	    //  var ca = document.cookie.split(';');
	    //  for(var i=0;i < ca.length;i++) {
	    //    var c = ca[i];
	    //    while (c.charAt(0)==' ') c = c.substring(1,c.length);
	    //    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    //  }
	    //  return undefined;
	    // }

	    // function eraseCookie(name) {
	    //  createCookie(name,"",-1);
	    // }





	    /*  ripple effect */
	    //  $(".button").on('click', function (e) {

	    //  // Remove any old one
	    //  $(".ripple").remove();

	    //  // Setup
	    //  var posX = $(this).offset().left,
	    //  posY = $(this).offset().top,
	    //  buttonWidth = $(this).width(),
	    //  buttonHeight =  $(this).height();

	    //  // Add the element
	    //  $(this).prepend("<span class='ripple'></span>");

	    //  // Make it round!
	    //  if(buttonWidth >= buttonHeight) {
	    //    buttonHeight = buttonWidth;
	    //  } else {
	    //    buttonWidth = buttonHeight; 
	    //  }

	    //  // Get the center of the element
	    //  var x = e.pageX - posX - buttonWidth / 2;
	    //  var y = e.pageY - posY - buttonHeight / 2;

	    //  // Add the ripples CSS and start the animation
	    //  $(".ripple").css({
	    //    width: buttonWidth,
	    //    height: buttonHeight,
	    //    top: y + 'px',
	    //    left: x + 'px'
	    //  }).addClass("rippleEffect");
	    // });

	    function validateEmail(email) {
	        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	        return re.test(email);
	    }


	});