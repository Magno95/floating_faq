
var baloon_open = false;
var first_animation = true;
var in_footer = true;

const faq_icon = `<svg id="faq_icon"   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><path  d="M33,65.94A32.94,32.94,0,1,1,66,33,33,33,0,0,1,33,65.94Zm0-62.3A29.53,29.53,0,0,0,3.37,33a29.63,29.63,0,0,0,59.26,0A29.53,29.53,0,0,0,33,3.64Z"/><ellipse  cx="33" cy="47.81" rx="3.67" ry="3.45"/><path  d="M33,14.74A10.79,10.79,0,0,0,22,25.27a2.75,2.75,0,0,0,5.5,0,5.52,5.52,0,0,1,11,0A5.39,5.39,0,0,1,33,30.53a2.69,2.69,0,0,0-2.75,2.63v6.59a2.75,2.75,0,0,0,5.5,0V35.46A10.64,10.64,0,0,0,44,25.27,10.79,10.79,0,0,0,33,14.74Z"/></svg>`
const close_icon = `<svg id="close_icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><path  d="M33,65.94A32.94,32.94,0,1,1,66,33,33,33,0,0,1,33,65.94Zm0-62.3A29.53,29.53,0,0,0,3.37,33a29.63,29.63,0,0,0,59.26,0A29.53,29.53,0,0,0,33,3.64Z"/><path  d="M21,46.55a1.54,1.54,0,0,1-1.09-2.63l24-24a1.54,1.54,0,1,1,2.18,2.18l-24,24A1.53,1.53,0,0,1,21,46.55Z"/><path  d="M44.75,46.3a1.52,1.52,0,0,1-1.08-.45L20.16,22.33a1.54,1.54,0,1,1,2.17-2.18L45.84,43.67a1.54,1.54,0,0,1-1.09,2.63Z"/></svg>`
const faq_list = [
    {
        "q":"Does ContactsDirect accept insurance?",
        "a":"Absolutely. Contacts Direct accepts most major insurance plans as an in-network provider and is an out-of-network provider for many others. We can check your plan to see what savings you are eligible for and process most benefits online. Look for the 'Use insurance' toggle when you arrive in cart, and add your details to check your eligibility. You can also register with your insurance plan when creating a new account by checking the 'Yes, find my insurance plan' box. Our In-network insurances include EyeMed, Superior Vision, Aetna Vision Preferred, Anthem Blue View Vision, Humana Vision, and more!</span>"
    },
    {
        "q":"Does ContactsDirect accept insurance?",
        "a":"Absolutely. Contacts Direct accepts most major insurance plans as an in-network provider and is an out-of-network provider for many others. We can check your plan to see what savings you are eligible for and process most benefits online. Look for the 'Use insurance' toggle when you arrive in cart, and add your details to check your eligibility. You can also register with your insurance plan when creating a new account by checking the 'Yes, find my insurance plan' box. Our In-network insurances include EyeMed, Superior Vision, Aetna Vision Preferred, Anthem Blue View Vision, Humana Vision, and more!</span>"
    },
    {
        "q":"Does ContactsDirect accept insurance?",
        "a":"Absolutely. Contacts Direct accepts most major insurance plans as an in-network provider and is an out-of-network provider for many others. We can check your plan to see what savings you are eligible for and process most benefits online. Look for the 'Use insurance' toggle when you arrive in cart, and add your details to check your eligibility. You can also register with your insurance plan when creating a new account by checking the 'Yes, find my insurance plan' box. Our In-network insurances include EyeMed, Superior Vision, Aetna Vision Preferred, Anthem Blue View Vision, Humana Vision, and more!</span>"
    },
    {
        "q":"Does ContactsDirect accept insurance?",
        "a":"Absolutely. Contacts Direct accepts most major insurance plans as an in-network provider and is an out-of-network provider for many others. We can check your plan to see what savings you are eligible for and process most benefits online. Look for the 'Use insurance' toggle when you arrive in cart, and add your details to check your eligibility. You can also register with your insurance plan when creating a new account by checking the 'Yes, find my insurance plan' box. Our In-network insurances include EyeMed, Superior Vision, Aetna Vision Preferred, Anthem Blue View Vision, Humana Vision, and more!</span>"
    },
    {
        "q":"Does ContactsDirect accept insurance?",
        "a":"Absolutely. Contacts Direct accepts most major insurance plans as an in-network provider and is an out-of-network provider for many others. We can check your plan to see what savings you are eligible for and process most benefits online. Look for the 'Use insurance' toggle when you arrive in cart, and add your details to check your eligibility. You can also register with your insurance plan when creating a new account by checking the 'Yes, find my insurance plan' box. Our In-network insurances include EyeMed, Superior Vision, Aetna Vision Preferred, Anthem Blue View Vision, Humana Vision, and more!</span>"
    }
]


document.addEventListener("DOMContentLoaded", function() {
    append_chat(faq_list);
    const baloon_container = document.querySelector('.baloon_container');
    const baloon = document.querySelector('.baloon_container .baloon');

    setTimeout(()=>{
        baloon_container.classList.add('show');
    },200)
   

    baloon.addEventListener('click',e=>{
        baloon_container.classList.toggle('close');
    })
});



function append_chat(faq_list){
    var faqs="";
    faq_list.forEach((faq)=>{
        console.log(faq);
        faqs+=
       `<div class="qa  bb close" onclick="accordion(this)">
            <div class="q">${faq.q}</div>
            <div class="a" style="height: 0px;">
                <div>
                ${faq.a}
                </div> 
            </div>
        </div>
        `
    })
    console.log(faqs);
    $('body').append(`
        <div class="baloon_container close">
            <div class="baloon ">
                ${faq_icon}
                ${close_icon}  
            </div>
            <div class="faq_container">
                    <div class="faq_title">
                        <h3>Do you have a question? </h3>
                        <p>Our FAQs may have the answer. </p>
                    </div>
                    <div class="faq_scroll">
                        ${faqs}
                        <a href="#" class="read_more" aria-label="Discover More">Discover More</a>
                    </div>
                </div>
        </div>
    `);

}





function accordion(this_){
    if($(this_).hasClass('close')){
        $(this_).removeClass('close');
        var height = $(this_).find('.a > div').height();
        $(this_).find('.a').css('height',height + 15);
    }else{
        $(this_).addClass('close');
        $(this_).find('.a').css('height',0);
    }
}

$('.faq_container .qa').keypress(function (e) { //navigate faq with tab
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
        accordion(this);
    }
});

function open_baloon(this_,e){ //open/close chat and faq baloon
    if($(this_).hasClass('close')){
        $(this_).removeClass('close');
    }else{
        $(this_).addClass('close');
        
    }
}





//HIDE on KEYBOARD OPEN
function onKeyboardOnOff(isOpen) {
    // Write down your handling code
    if (isOpen) {
        console.log('open');
        $('.baloon_container').addClass('_hide__keyboard');
    } else {
        console.log('close');
        $('.baloon_container').removeClass('_hide__keyboard');
    }
}

var originalPotion = false;
$(document).ready(function(){
    if (originalPotion === false) originalPotion = $(window).width() + $(window).height();
});

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "winphone";
    }

    if (/android/i.test(userAgent)) {
        return "android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "ios";
    }

    return "";
}

function applyAfterResize() {

    if (getMobileOperatingSystem() != 'ios') {
        if (originalPotion !== false) {
            var wasWithKeyboard = $('body').hasClass('view-withKeyboard');
            var nowWithKeyboard = false;

                var diff = Math.abs(originalPotion - ($(window).width() + $(window).height()));
                if (diff > 100) nowWithKeyboard = true;

            $('body').toggleClass('view-withKeyboard', nowWithKeyboard);
            if (wasWithKeyboard != nowWithKeyboard) {
                onKeyboardOnOff(nowWithKeyboard);
            }
        }
    }
}

$(document).on('focus blur', 'select, textarea, input[type=text], input[type=date], input[type=password], input[type=email], input[type=number]', function(e){
    var $obj = $(this);
    var nowWithKeyboard = (e.type == 'focusin');
    $('body').toggleClass('view-withKeyboard', nowWithKeyboard);
    onKeyboardOnOff(nowWithKeyboard);
});

if(  getMobileOperatingSystem() != 'ios'){
    $(window).on('resize orientationchange', function(){
        applyAfterResize();

    });
}
