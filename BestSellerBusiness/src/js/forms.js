//validate inputs
var valid = false;

function validateInput(currentGroup, valid) {
    var input = currentGroup.find('input');
    if (input.length) {
        var type = input.attr('type');
        var value = input.val();
        var valid = false;
        //validate email field
        if (type == 'email') {
            var mailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (mailCheck.test(value) == true) {
                valid = true;
            }
            if (mailCheck.test(value) !== true) {
                valid = false;
            } else {

            }
        }
        if (type == 'tel') {
            var phoneCheck = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
            if (phoneCheck.test(value)) {
                valid = true;
                console.log('true phone');
            } else {}
        }
        if (type == 'radio') {
            valid = true;
        }
        if (type == 'text') {
            if (input.val().length > 3) {
                valid = true;
            }
        } else {

        }
    } else {
        valid = true;
    }

    //Add classes
    if (valid == true) {
        currentGroup.addClass('success');
        currentGroup.removeClass('error');
    }
    if (valid == false) {
        currentGroup.addClass('error');
        currentGroup.removeClass('success');
    }

}
//Scroll form to active field
function scrollFocused() {
    var el = $('.popup.opened .form__group.focused');
    var container = $('.popup.opened .form');
    var content = $('.popup.opened .form__inputs');
    var elHeight = el.outerHeight();
    var distance = 0;
    var i = 0;
    $('.popup.opened .form__group').each(function(index, el) {
        distance += parseFloat($(el).outerHeight());
        i++;
        console.log(el, distance);
        if ($(el).hasClass('focused')) {
            return false;
        }
    });
    if (elHeight < container.outerHeight()) {
        distance = distance - container.outerHeight() / 2;
    } else {
        distance = distance + 50;
    }
    content.css({
        transform: 'translate3d(0px, -' + distance + 'px, 0px)',
    });
}

//Focus current field
function switchFocusOnInput(nextGroup, currentGroup) {
    validateInput(currentGroup);
    if (currentGroup.hasClass('success')) {
        currentGroup.removeClass('focused');
        nextGroup.addClass('focused');
        //Focus input in next group
        nextGroup.find('input').focus();
        scrollFocused();
    } else {
        if (nextGroup.hasClass('success')) {
            currentGroup.removeClass('focused');
            nextGroup.addClass('focused');
            //Focus input in next group
            nextGroup.find('input').focus();
            scrollFocused();
        }
    }
}

//Next input on "ENTER" or arrows
function formFocusNext(currentGroup, currentGroup) {
    var currentGroup = $('.form__group.focused');
    var nextGroup = currentGroup.next('.form__group');
    if (nextGroup.length) {
        switchFocusOnInput(nextGroup, currentGroup);
    } else {
        if ($('.popup.opened .form__group.error').length) {

        } else {
            $('.popup.opened .form__controls button').removeAttr('disabled');
        }
    }
}
//Prev input on "ENTER" or arrows
function formFocusPrev(currentGroup) {
    var currentGroup = $('.form__group.focused');
    var nextGroup = currentGroup.prev('.form__group');
    if (nextGroup.length) {
        switchFocusOnInput(nextGroup, currentGroup);
    }
}
//Next input on radio/select change
$('.form input[type=radio], .form input[type=select]').on('change', function() {
    var currentGroup = $('.form__group.focused');
    var nextGroup = currentGroup.next('.form__group');
    if (nextGroup.length) {
        switchFocusOnInput(nextGroup, currentGroup);
    }
});

//Live validate
$('.form input,.form textarea ').on('keydown', function() {
    var input = $(this);
    var currentGroup = $('.form__group.focused');
    validateInput(currentGroup);
});

//Fields change trigger
$('.form input,.form textarea ').on('change', function() {
    var input = $(this);
    var val = $(this).val();
    changeInputs(input, val);
});


//Insert data to remote fields
function changeInputs(input, val) {
    var targetName = input.attr('name');
    var targetValue = val;
    var targetInput = $('.popup.opened .ac__form-container form *[data-name="' + targetName + '"]');
    targetInput.val(val);
}
//Remotely submit form
$(document).on('click', '.popup.opened .form__controls .button', function() {
    $('.popup.opened').find('form').find('button[type=submit]').trigger('click');
});
$('._form-thank-you').bind("DOMSubtreeModified", function() {
    var thankyouText = $(this).html();
    $('.form__inputs, .form__controls').hide();
    $('.form').append('<div class="h1 text-center fadeIn animated"><span class="c_secondary">' + thankyouText + '</span></div>');
    $('.form__inputs.h1').fadeIn();
});
//Next input on "ENTER" or arrow
$(".form").bind("keydown", function(e) {
    if (e.keyCode == 13 || e.keyCode == 40 || e.keyCode == 9) {
        formFocusNext();
    }
    if (e.keyCode == 38) {
        formFocusPrev();
    }
});


//Switch input focus on click
$(".form__group").on("click", function() {
    var currentGroup = $('.form__group.focused');
    var nextGroup = $(this);
    switchFocusOnInput(nextGroup, currentGroup);
});


$('html:not(.touch) .popup').on('mousewheel', _.throttle(function(event) {
    console.log(event.deltaY);
    if (event.deltaY < 0) {
        formFocusNext();
    }
    if (event.deltaY > 0) {
        formFocusPrev();
    }
}, 1000));