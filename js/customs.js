'use strict';

jQuery.noConflict();
jQuery(document).ready(function () {

    /* --- BURGER MENU --- */
    jQuery('.menu-open').click(function(){
        jQuery('.nav_menu').show("slow");
    });

    jQuery('.menu-close').click(function(){
        jQuery('.nav_menu').hide("slow");
    });
    /* --- BURGER MENU --- */

    /* --- FANCYBOX --- */
    jQuery(".fancybox").fancybox();
    /* --- FANCYBOX --- */

    /* --- COUNTDOWN --- */

    //Если время не записано в локальное хранилище, то мы записываем время сейчас
    //от которого и пойдет время окончания скидки
    if (localStorage.getItem('timeDiscount') === null) {
        localStorage.setItem('timeDiscount', ((new Date()).getTime() + 10 * 24 * 60 * 60 * 1000));
    }

    //Записываем в переменные время сейчас и время до окончания скидки
    let endTimeDiscount = localStorage.getItem('timeDiscount');

    jQuery('#countdown').countdown({timestamp: endTimeDiscount});
    jQuery('#countdown2').countdown({timestamp: endTimeDiscount});

    jQuery('.countDays').append('<p>дней</p>');
    jQuery('.countHours').append('<p>часов</p>');
    jQuery('.countMinutes').append('<p>минут</p>');
    jQuery('.countSeconds').append('<p>секунд</p>');

    /* --- COUNTDOWN --- */

});


/* --- FORM ERROR --- */
/*
function formErr (form) {
    let valueName, valueMail, valuePhone;
    if (form === 'top') {
        valueName = jQuery('#formNameTop').val();
        valueMail = jQuery('#formMailTop').val();
        valuePhone = jQuery('#formPhoneTop').val();
        jQuery('#formErrNameTop').html('');
        jQuery('#formErrPhoneTop').html('');
        jQuery('#formErrMailTop').html('');
    } else {
        valueName = jQuery('#formNameBottom').val();
        valueMail = jQuery('#formMailBottom').val();
        valuePhone = jQuery('#formPhoneBottom').val();
        jQuery('#formErrNameBottom').html('');
        jQuery('#formErrPhoneBottom').html('');
        jQuery('#formErrMailBottom').html('');
    }

    try {
        if (valueName === "") throw "Пожалуйста введите своё имя";
        if (/[0-9]/.test(valueName)) throw "В имени не может быть цифр";
        if (/[ ]/.test(valueName)) throw "В имени не может быть пробелов";
        if (valueName.length > 20) throw "Ваше имя слишком длинное";
        if (valueName.length < 2) throw "Ваше имя слишком короткое";
    } catch (err) {
        if (form === 'top') {
            jQuery('#formErrNameTop').html(err);
        } else {
            jQuery('#formErrNameBottom').html(err);
        }
    }

    try {
        if (valueMail === "") throw "Пожалуйста введите ваш E-mail";
        if (valueMail.length > 60) throw "Ваш E-mail слишком длинный";
        if (!valueMail.includes('@') || !valueMail.includes('.') || valueMail.length < 6) throw "Неверный E-mail";
    } catch (err) {
        if (form === 'top') {
            jQuery('#formErrMailTop').html(err);
        } else {
            jQuery('#formErrMailBottom').html(err);
        }
    }

    try {
        if (isNaN(valuePhone)) throw "В номере не может быть букв";
        if (valuePhone === "") throw "Пожалуйста введите ваш номер";
        if (valuePhone[0] !== '+') throw "Пожалуйста введите номер в формате +380123456789";
        if (valuePhone.length > 13) throw "Неверный номер";
        if (valuePhone.length < 13) throw "Неверный номер";
    } catch (err) {
        if (form === 'top') {
            jQuery('#formErrPhoneTop').html(err);
        } else {
            jQuery('#formErrPhoneBottom').html(err);
        }
    }
}*/
/* --- FORM ERROR --- */