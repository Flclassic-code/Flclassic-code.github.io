	$(document).ready(function() {

	    /* mobile check */
	    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	        // $('html, body').css('min-width', '1320px').addClass('mobile');
	        // $('html').css('width', window.innerWidth + 'px');
	    }


	    $('.js-hamburger').on('click', function(e) {
	     e.preventDefault(); 
	     $(this).toggleClass('is-active');
	     $('.menu-list ').toggleClass('menu_active');
	    });


	    // $(".send").on('click', function(e) {
	    //     e.preventDefault();

	    //     var form = $(this).parents("form");

	    //     form.find("input").each(function() {

	    //         var inp = $(this);
	    //         var req = $(this).data("req");
	    //         if (inp.attr('type') === 'email') {
	    //             var em = inp.val();

	    //             if (!validateEmail(em)) {
	    //                 inp.addClass("error");
	    //             } else {
	    //                 inp.removeClass("error");
	    //             }
	    //         } else if (req === 1 && !inp.val().length) {
	    //             inp.addClass("error");
	    //         } else {
	    //             inp.removeClass("error");
	    //         }

	    //     });

	    //     if (form.find(".error").length) {
	    //         return false;
	    //     } else {
	    //         $.ajax({
	    //             type: "POST",
	    //             url: form.attr('action'),
	    //             data: form.serialize(),
	    //             success: function(response) {

	    //                 $(':input')
	    //                     .not(':button, :submit, :reset, :hidden')
	    //                     .val('')
	    //                     .removeAttr('checked')
	    //                     .removeAttr('selected');

	    //                 $.fancybox.close();
	    //                 var message = $('.modal');
	    //                 $.fancybox(message);

	    //             }
	    //         });
	    //     }
	    // });


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



	    // /*SCROLL TO*/
	    // $('a[href^="#"]').on('click', function(event) {
	    //  var target = $( $(this).attr('href') );
	    //  if( target.length ) {
	    //    event.preventDefault();
	    //    $('html, body').animate({
	    //      scrollTop: target.offset().top
	    //    }, 1500);
	    //  }
	    // });




	    $('.up-button').on('click', function(e) {
	        e.preventDefault();
	        $('html, body').animate({
	            scrollTop: 0
	        }, 700);

	    });

	    if ($('.up-button').length) {
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

			/* auto play Youtube*/
	    $(document).ready(function() {
	        $('#video-play').on('click', function(ev) {

	            $("#video")[0].src += "&autoplay=1";
	            ev.preventDefault();

	        });
	    });



	    /* SLICK_SLIDER */
	    if ($('.slider-one').length) {
	        $('.slider-one').slick({
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            dots: true,
	            centerMode: false,
	            prevArrow: '.arrow-sl-one-next',
	            nextArrow: '.arrow-sl-one-prev',
	            centerPadding: '30px',
	            touchMove: true,
	            draggable: true,
	            responsive: [{
	                    breakpoint: 992,
	                    settings: {
	                        dots: false,
	                        slidesToShow: 1,
	                        slidesToScroll: 1
	                    }
	                },
	                {
	                    breakpoint: 668,
	                    settings: {
	                        dots: false,
	                        slidesToShow: 1,
	                        slidesToScroll: 1
	                    }
	                }
	            ]
	        });
	    };



	    /* SLICK_SLIDER */
	    if ($('.slider-category').length) {
	        $('.slider-category').slick({
	            slidesToShow: 5,
	            slidesToScroll: 1,
	            dots: false,
	            centerMode: true,
	            prevArrow: '.arrow-cat-one-next',
	            nextArrow: '.arrow-cat-one-prev',
	            centerPadding: '30px',
	            touchMove: false,
	            draggable: false,
	            responsive: [{
	                    breakpoint: 992,
	                    settings: {
	                        dots: false,
	                        slidesToShow: 3,
	                        slidesToScroll: 1
	                    }
	                },
	                {
	                    breakpoint: 668,
	                    settings: {
	                        dots: false,
	                        slidesToShow: 1,
	                        slidesToScroll: 1
	                    }
	                }
	            ]
	        });
	    };

	    /* SLICK_SLIDER */
	    if ($('.slider-our-partners').length) {
	        $('.slider-our-partners').slick({
	            slidesToShow: 5,
	            slidesToScroll: 1,
	            dots: false,
	            centerMode: false,
	            prevArrow: '.arrow-prt-next',
	            nextArrow: '.arrow-prt-prev',
	            centerPadding: '30px',
	            touchMove: false,
	            draggable: false,
	            responsive: [{
	                    breakpoint: 992,
	                    settings: {
	                        dots: false,
	                        slidesToShow: 3,
	                        slidesToScroll: 1
	                    }
	                },
	                {
	                    breakpoint: 668,
	                    settings: {
	                        dots: false,
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
	    $(".button-play").fancybox({
	        hideOnContentClick: false,
	        closeBtn: true,
	        overlayShow: false,
	        fitToView: false
	    });

	    // $('.video-popup').fancybox({
	    //   openEffect  : 'none',
	    //   closeEffect : 'none',
	    //   maxHeight: '500',
	    //   maxWidth: '800',
	    //   helpers : {
	    //     media : {}
	    //   }
	    // });


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



	    /*YANDEX MAP*/
	    // if ($('#map-canvas').length) {
	    //  ymaps.ready(init);
	    //  function init(){
	    //    var myMap=new ymaps.Map("map-canvas",{
	    //      center:[55.854661, 37.585736],
	    //      zoom:13,
	    //      controls:['zoomControl']
	    //    }),
	    //    Placemark1=new ymaps.Placemark([55.854661, 37.585736],{
	    //      balloonContent:'',
	    //      hintContent:'',
	    //    },{
	    //      preset:'islands#redDotIcon'
	    //    })
	    //    myMap.geoObjects.add(Placemark1);
	    //    myMap.behaviors.disable('scrollZoom');
	    //  }
	    // };



	    /*deletecookie*/
	    // $(document).on('click', 'a', function() {
	    //  if (readCookie('txt-c') !== null || readCookie('select-c') !== null ) {
	    //    eraseCookie('txt-c');
	    //    eraseCookie('select-c');
	    //  }
	    // });


	    /*check-form*/
	    // $('#feedback-valid-1').validate({
	    //  rules:{
	    //    "phone":{required:true}
	    //  },
	    //  messages:{
	    //    "phone":{required:""}
	    //  },
	    //  submitHandler: function(form){
	    //    $(form).ajaxSubmit({
	    //      success: function(data) {
	    //        if (data == "true")
	    //        {
	    //          $(':input','#feedback-valid-1')
	    //          .not(':button, :submit, :reset, :hidden')
	    //          .val('')
	    //          .removeAttr('checked')
	    //          .removeAttr('selected');
	    //            // window.location.href = "thx1.html";
	    //            $.fancybox.close()
	    //            var message = $('.modal');
	    //            $.fancybox(message);

	    //          }
	    //        }  
	    //      }); 
	    //  }
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