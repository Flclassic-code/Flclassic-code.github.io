 $(document).ready(function() {
        /* auto play Youtube*/
        $(document).ready(function() {
            $('.button-play').on('click', function(ev) {
                $("#move")[0].src += "&autoplay=1";
                ev.preventDefault();

            });
        });

    // /*FANCYBOX*/
        $(".button-play").fancybox({
            hideOnContentClick: false,
            closeBtn: false,
            overlayShow: false,
            fitToView: false,
             touch: false  
        });
});        
       // $('.video-popup').fancybox({
       //    openEffect  : 'none',
       //    closeEffect : 'none',
       //    maxHeight: '500',
       //    maxWidth: '800',
       //    helpers : {
       //      media : {}
       //    }
       //  });

//     $(document).ready(function() {

// //     //fancybox iframe parameters
//     // $('[data-fancybox-iframe]').fancybox({
//     //     maxWidth: 1000,
//     // });

  
//     });
  

 


// //Detect touch devices
// window.addEventListener('touchstart', function() {
//     $('html').addClass('touch');
// });
// var isAjax = false;

// // function ajaxOnReload(isAjax) {
// //     document.getElementsByClassName("autoplay").volume = 0;
// //     //lazyloading
// //     var myLazyLoadImg = new LazyLoad({
// //         container: document.getElementById("wrapper"),
// //         elements_selector: "img.lazy",
// //         callback_set: function(e) {
// //             setTimeout(function() {
// //                 //e.play();
// //             }, 1000)
// //         }
// //     });
// //     //lazyloading Div
// //     var myLazyLoadDiv = new LazyLoad({
// //         container: document.getElementById("wrapper"),
// //         elements_selector: "div.lazy",
// //         callback_set: function(e) {
// //             setTimeout(function() {
// //                 //e.play();
// //             }, 1000)
// //         }
// //     });
// //     //lazyloading videos
// //     var myLazyLoadVideo = new LazyLoad({
// //         container: document.getElementById("wrapper"),
// //         elements_selector: "video.lazy",
// //         callback_error: function(e) {
// //             setTimeout(function() {
// //                 e.play();
// //             }, 1000)
// //         },
// //         callback_set: function(e) {
// //             setTimeout(function() {
// //                 e.play();
// //             }, 1000)
// //         }
// //     });
//     //Add segmentation popup functionality to nav menu
//     var targetItemOne = $(".menu-item a:contains('Personal')");
//     var targetItemTwo = $(".menu-item a:contains('Beginners')");
//     targetItemOne.addClass('regular-link popup_toggle');
//     targetItemOne.attr('data-source', 'personal-training');
//     targetItemOne.attr('data-target', 'popup__segmentation');
//     targetItemOne.attr('href', 'javascript:void(0);');


//     targetItemTwo.addClass('regular-link popup_toggle');
//     targetItemTwo.attr('data-source', 'beginners-course');
//     targetItemTwo.attr('data-target', 'popup__segmentation');
//     targetItemTwo.attr('href', 'javascript:void(0);');



//     //Smooth scrolling
//     // var scrollbarOne = Scrollbar.init(document.querySelector('#wrapper'), {
//     //     speed: 0.6,
//     //     damping: 0.1,
//     //     renderByPixels: false,
//     //     syncCallbacks: true,
//     // });

//     //Keep square
//     $(window).on('load resize', function() {
//         $('.square-block').each(function() {
//             $(this).height($(this).width());
//         });
//     });


//     //Scroll a little after AJAX reload
//     if (isAjax == true) {
//         $('.animated-entrance').each(function() {
//             var imagePos = $(this).offset().top;
//             var topOfWindow = $(window).scrollTop();
//             var windowHeight = $(window).height();
//             var animationType = $(this).data('animation-type');
//             if ($(window).width() < 600) {
//                 if (windowHeight - 200 > imagePos - topOfWindow) {
//                     $(this).addClass('animated ' + animationType);
//                 }
//             } else {
//                 if (windowHeight - 50 > imagePos - topOfWindow) {
//                     $(this).addClass('animated ' + animationType);
//                 }
//             }
//         });
//         //scrollbarOne.scrollTo(0, 3, 1000);
//         console.log('AJAX');
//     }

//     //Smooth anchor scroll
//     $(document).on('click', 'a[href^="#"]', function(event) {
//         event.preventDefault();
//         var target = $(this).attr('href');
//         scrollbarOne.scrollIntoView(document.querySelector(target), {
//             alignToTop: true,
//             onlyScrollIfNeeded: true,
//         });
//     });



//     /*****************************/
//     /********SLIDER HOMEPAGE******/
//     /*****************************/
//     // On before slide change
//     var sliderHomepage = $('.slider');
//     sliderHomepage.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//         var currentImg = $('div[data-slick-index=' + nextSlide + '] .slider__item-img').html();
//         var currentText = $('div[data-slick-index=' + nextSlide + '] .slider__text').html();
//         //add adnimation
//         $('.home_eight .picture-block').addClass('content-change');
//         $('.home_eight .slick-list').addClass('content-change');
//         $('.home_eight .block_center').addClass('content-change');
//         //update content
//         setTimeout(function() {
//             $('.home_eight .picture-block').html(currentImg);
//             $('.home_eight .block_center').html(currentText);
//         }, 500);
//         //remove animation
//         setTimeout(function() {
//             $('.home_eight .picture-block').removeClass('content-change');
//             $('.home_eight .slick-list').removeClass('content-change');
//             $('.home_eight .block_center').removeClass('content-change');
//         }, 1000);
//     });
//     //Slider initiation
//     sliderHomepage.slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         prevArrow: '<div class="slick-arrow slick-prev"><i class="icon icon-arrow-long"></i></div>',
//         nextArrow: '<div class="slick-arrow slick-next"><i class="icon icon-arrow-long"></i></div>',
//         variableWidth: false,
//         speed: 500,
//         cssEase: 'linear',
//         fade: true,
//     });

//     //homeslider mobile arrows and dots posotion
//     $(window).on('load resize', function() {
//         if ($(window).width() < 1025) {
//             setTimeout(function() {
//                 var imgHeight = $('.slider__item-img img').outerHeight();
//                 console.log(imgHeight);
//                 $('.home_eight .slick-arrow').css({
//                     top: imgHeight - 56,
//                 });
//                 $('.home_eight .slick-dots').css({
//                     top: imgHeight,
//                 });
//             }, 500);
//         } else {

//         }
//     });

//     /*****************************/
//     /******** MENU HEDER ******/
//     /*****************************/
//     //MOBILE MENU DROPDOWN

//     $(document).on("click", ".menu__title", function() {
//         if ($(window).width() < 768) {
//             $('.menu__title.submenu-opened').removeClass('submenu-opened');
//             $('ul.expanded').slideUp();
//             $('ul.expanded').removeClass('expanded');
//             $(this).addClass('submenu-opened');
//             $(this).next('ul').slideDown('normal', function() {
//                 $(this).addClass('expanded');
//             });
//         }
//     });
//     //Menu open
//     $(document).on("click", ".header__menu-toggle", function() {
//         $('.menu').addClass('menu_opened');
//         $('.menu').removeClass('menu_closed');
//     });
//     //Menu close
//     $(document).on("click", ".menu__close", function() {
//         $('.menu').removeClass('menu_opened');
//         $('.menu').addClass('menu_closed');
//         //mobile menu close fix
//         $('ul.expanded').removeClass('expanded');
//         $('.menu__title.submenu-opened').removeClass('submenu-opened');
//     });

//     /*******************************/
//     /*****ANIMATIONS ON SCROLL*****/
//     /*******************************/
//     scrollbarOne.addListener((status) => {
//         //play all videos
//         $('video.autoplay[data-was-processed="true"]').each(function() {
//             $(this).get(0).play();
//         });


//         //sticky header
//         if (scrollbarOne.offset.y > 5) {
//             $('.header').addClass('scrolled');
//         } else {
//             $('.header').removeClass('scrolled');
//         }
//         //Parallax animation
//         $('.animate').each(function() {
//             var sensitivity = $(this).data("sensitivity") * 4;
//             var offsetTop = $(this).offset().top;
//             var vpHeight = $(window).height();
//             var scrolledOfWindow = scrollbarOne.offset.y;
//             var elHeight = $(this).outerHeight();
//             //if element is in viewpor
//             if (offsetTop < vpHeight && offsetTop + elHeight > 0) {
//                 var leftToHide = offsetTop;
//                 var scrolledPx = vpHeight - leftToHide;
//                 var scrollRatio = scrolledPx / vpHeight;
//                 $(this).css({
//                     transform: 'translate3d(0px, ' + sensitivity * scrollRatio + 'px, 0px)',
//                 });
//             }
//         });

//     });

//     //Entrance animation
//     scrollbarOne.addListener((status) => {
//         $('.animated-entrance').each(function() {
//             var imagePos = $(this).offset().top;
//             var topOfWindow = $(window).scrollTop();
//             var windowHeight = $(window).height();
//             var animationType = $(this).data('animation-type');
//             if ($(window).width() < 600) {
//                 if (windowHeight - 200 > imagePos - topOfWindow) {
//                     $(this).addClass('animated ' + animationType);
//                 }
//             } else {
//                 if (windowHeight - 50 > imagePos - topOfWindow) {
//                     $(this).addClass('animated ' + animationType);
//                 }
//             }
//         });
//     });

//     //entrance animation and video autoplay first screen
//     $(document).on("ready", function() {
//         setTimeout(function() {
//             $('.animated-entrance').each(function() {
//                 var imagePos = $(this).offset().top;
//                 var topOfWindow = $(window).scrollTop();
//                 var windowHeight = $(window).height();
//                 var animationType = $(this).data('animation-type');
//                 if (windowHeight - 250 > imagePos - topOfWindow) {
//                     $(this).addClass('animated ' + animationType);
//                 }
//             });
//             $('video.autoplay').each(function() {
//                 $(this).get(0).play();
//             });
//         }, 800);
//     });


//     //fancybox video parameters
    // $('[data-fancybox-video]').fancybox({
    //     maxWidth: 1000,
    //     youtube: {
    //         controls: 0,
    //         showinfo: 0,
    //     },
    //     vimeo: {
    //         color: '000'
    //     }
    // });



//     //slick slider Drop-In
//     if ($('.main-slick').length) {
//         $('.main-slick').slick({
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             dots: false,
//             centerMode: false,
//             prevArrow: '.next',
//             nextArrow: '.prev',
//             centerPadding: '30px',
//             touchMove: false,
//             draggable: false,
//             responsive: [{
//                     breakpoint: 1025,
//                     settings: {
//                         dots: false,
//                         slidesToShow: 2,
//                         slidesToScroll: 1
//                     }
//                 }, {
//                     breakpoint: 992,
//                     settings: {
//                         dots: false,
//                         slidesToShow: 2,
//                         slidesToScroll: 1
//                     }
//                 },
//                 {
//                     breakpoint: 668,
//                     settings: {
//                         dots: false,
//                         slidesToShow: 1,
//                         slidesToScroll: 1
//                     }
//                 }
//             ]
//         });
//     };


//     //Popup open
//     $(document).on("click", ".popup_toggle", function() {
//         if ($(this).data('source')) {
//             var source = $(this).data('source');
//             var home = document.location.origin;
//             window.history.pushState(null, null, home + "/?&source=" + source);
//         }

//         $('.popup').removeClass('opened');
//         var target = $(this).data('target');
//         $('.' + target + '').addClass('opened');

//         //Close menu if opened
//         $('.menu').removeClass('menu_opened');
//         $('.menu').addClass('menu_closed');
//         //mobile menu close fix
//         $('ul.expanded').removeClass('expanded');
//         $('.menu__title.submenu-opened').removeClass('submenu-opened');
//     });

//     //Popup close
//     $(document).on("click", ".popup__close", function() {
//         $('.popup').removeClass('opened');
//     });

// ajaxOnReload();

// //AJAX PAGE LOADING
// $(document).on("click", "#ajax-content a:not(.regular-link)", function(event) {
//     event.preventDefault();
//     var home = document.location.origin;
//     var urlTarget = $(this).attr('href');
//     var newTarget = urlTarget.replace(home, '');

//     //check if internal or fancybox or file link
//     if (newTarget.indexOf('http') == -1 && newTarget.indexOf('#') == -1 && newTarget.indexOf('.') == -1) {
//         var preloader = $('.preloader-inner .preloader').clone()
//         $('body').append(preloader);
//         setTimeout(function() {
//             $('body > .preloader').addClass('opened');
//         }, 200);
//         setTimeout(function() {
//             $.ajax({
//                 url: newTarget,
//                 async: true,
//                 success: function(data) {
//                     window.history.pushState(null, null, home + newTarget);
//                     var newPageData = $(data).find('#ajax-content');
//                     $('#ajax-content-container').html(newPageData);
//                     $('body > .preloader').addClass('closed');
//                     setTimeout(function() {
//                         $('body > .preloader').remove();
//                         ajaxOnReload(true);
//                     }, 1000);
//                 }
//             });
//         }, 500);
//     } else {
//         $(this).addClass('regular-link');
//         setTimeout(function() {
//             $(this).trigger('click');
//         }, 300);
//     }

// });



// //SEGMENTATION CHANGE STEP FUNCTION
// var answers = [];
// var times = 0;
// stepId = 0;

// function stepChange(direction, answerVariant, source) {

//     //Define current step
//     var currentStep = $('.segmentation__step.current');
//     stepId = currentStep.data('step');

//     //Next or back direction
//     if (direction == 'next') {
//         var nextStepId = Math.round(stepId + 1);
//     }
//     if (direction == 'back') {
//         if (stepId > 1) {
//             var nextStepId = Math.round(stepId - 1);
//         } else {
//             alert('oops');
//         }
//     } else {}

//     //hide or show back button
//     if (parseFloat(nextStepId) > 1) {
//         $('.segmentation__back').addClass('visible');
//     }
//     if (parseFloat(nextStepId) == 1) {
//         $('.segmentation__back').removeClass('visible');
//     }

//     var nextStep = $('.segmentation__step[data-step=' + nextStepId + ']');
//     var stepInfo = $('.segmentation__step[data-step=' + nextStepId + '] .segmentation__step-info').html();


//     //select chosen option
//     currentStep.find('.segmentation__item.selected').removeClass('selected');
//     currentStep.removeClass('current');
//     nextStep.children('div').removeClass('show');
//     nextStep.addClass('current');
//     setTimeout(function() {
//         nextStep.children('div').addClass('show');
//     }, 100);

//     //Create answer object
//     var answer = answerVariant;

//     //Check if answer exists
//     if (answers[stepId - 1]) {
//         //replace with the new answer
//         if (direction == "next") {
//             answers[stepId - 1] = answer;
//         } else {

//         }
//     } else {
//         //add new answer if doesn't exist
//         if (direction == "next") {
//             answers.push(answer);
//         } else {

//         }
//     }

//     //Check answer and hide/show blocks
//     if (answers.indexOf('Men') > -1) {
//         $('.segmentation').removeClass('woman');
//         $('.segmentation').addClass('men');
//     } else {
//         $('.segmentation').removeClass('men');
//         $('.segmentation').addClass('woman');
//     }
//     if (answers.indexOf('New') > -1) {
//         $('.segmentation').removeClass('experienced');
//         $('.segmentation').addClass('new');
//     } else {
//         $('.segmentation').removeClass('new');
//         $('.segmentation').addClass('experienced');
//     }


//     //step info and count change
//     $('.segmentation__header i.count').html(nextStepId);

//     times++;
//     var cursor = true;
//     if (times > 1) {
//         cursor = false;
//     }

//     var typeSpeed = 30;
//     if (stepInfo.length > 40) {
//         typeSpeed = 15;
//     }
//     var typed = new Typed('.segmentation__header span.info', {
//         strings: ["", stepInfo],
//         stringsElement: null,
//         typeSpeed: typeSpeed,
//         showCursor: cursor,
//         contentType: 'html',
//         loop: false,
//         cursorChar: '_',
//     });

//     //check source
//     if (typeof source !== 'undefined') {
//         var home = document.location.origin;
//         //Scenario #1
//         if (source.indexOf('option1') > -1 || source.indexOf('personal-training') > -1) {
//             if (answers.indexOf('Men') > -1 && nextStepId == 4) {
//                 window.location.href = home + "/personal-training-man/";
//             } else if (answers.indexOf('Woman') > -1 && nextStepId == 4) {
//                 window.location.href = home + "/personal-training-woman/";
//             }
//             //Scenario #2    
//         } else if (source.indexOf('option2') > -1 || source.indexOf('beginners-course') > -1) {
//             if (answers.indexOf('Men') > -1 && nextStepId == 4) {
//                 window.location.href = home + "/beginners-course-man/";
//             } else if (answers.indexOf('Woman') > -1 && nextStepId == 4) {
//                 window.location.href = home + "/beginners-course-woman/";
//             }
//         }
//     } else {

//     }
//     //add goal to the step 4 title
//     if (parseFloat(stepId) == 1) {
//         var goal = answer;
//         $('.segmentation__step[data-step=4] .segmentation__step-info span').html(answer);
//     }
// }
// //SEGMENTATION NEXT
// $(document).on('click', '.segmentation__step.current .segmentation__item', function() {
//     var answerVariant = $(this).data('option');
//     var source = window.location.href;
//     stepChange('next', answerVariant, source);
// });
// //SEGMENTATION STEP BACK
// $(document).on('click', '.segmentation__back', function() {
//     stepChange('back');
// });


// /* SLICK_SLIDER Class-schedule*/
// if ($('.class-schedule-one__wrapp').length) {
//     $('.class-schedule-one__wrapp').slick({
//         slidesToShow: 7,
//         slidesToScroll: 1,
//         dots: false,
//         centerMode: false,
//         prevArrow: '.btn-prev',
//         nextArrow: '.btn-next',
//         centerPadding: '30px',
//         touchMove: false,
//         draggable: false,
//         responsive: [{
//                 breakpoint: 992,
//                 settings: {
//                     dots: false,
//                     slidesToShow: 4,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 668,
//                 settings: {
//                     dots: false,
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     });
// };
// /* SLICK_SLIDER Class-schedule*/
// if ($(' .class-desing-two__wrapp').length) {
//     $(' .class-desing-two__wrapp').slick({
//         slidesToShow: 7,
//         slidesToScroll: 1,
//         dots: false,
//         centerMode: false,
//         prevArrow: '.btn-prev',
//         nextArrow: '.btn-next',
//         centerPadding: '30px',
//         touchMove: false,
//         draggable: false,
//         responsive: [{
//                 breakpoint: 992,
//                 settings: {
//                     dots: false,
//                     slidesToShow: 4,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 668,
//                 settings: {
//                     dots: false,
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     });
// };