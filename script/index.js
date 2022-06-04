
const data = {
    title:"Do you have a question?",
    subtitle:"Our FAQs may have the answer.",
    faq:[
        {
            "q":"Does ContactsDirect accept insurance <br class='hide_mob'>Does ContactsDirect accept insurance?",
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
    ],
    cta:{
        label:"Discover More",
        url:"#"
    },
    icons:
        {
            faq:'<svg id="faq_icon"   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><path  d="M33,65.94A32.94,32.94,0,1,1,66,33,33,33,0,0,1,33,65.94Zm0-62.3A29.53,29.53,0,0,0,3.37,33a29.63,29.63,0,0,0,59.26,0A29.53,29.53,0,0,0,33,3.64Z"/><ellipse  cx="33" cy="47.81" rx="3.67" ry="3.45"/><path  d="M33,14.74A10.79,10.79,0,0,0,22,25.27a2.75,2.75,0,0,0,5.5,0,5.52,5.52,0,0,1,11,0A5.39,5.39,0,0,1,33,30.53a2.69,2.69,0,0,0-2.75,2.63v6.59a2.75,2.75,0,0,0,5.5,0V35.46A10.64,10.64,0,0,0,44,25.27,10.79,10.79,0,0,0,33,14.74Z"/></svg>',
            close:'<svg id="close_icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><path  d="M33,65.94A32.94,32.94,0,1,1,66,33,33,33,0,0,1,33,65.94Zm0-62.3A29.53,29.53,0,0,0,3.37,33a29.63,29.63,0,0,0,59.26,0A29.53,29.53,0,0,0,33,3.64Z"/><path  d="M21,46.55a1.54,1.54,0,0,1-1.09-2.63l24-24a1.54,1.54,0,1,1,2.18,2.18l-24,24A1.53,1.53,0,0,1,21,46.55Z"/><path  d="M44.75,46.3a1.52,1.52,0,0,1-1.08-.45L20.16,22.33a1.54,1.54,0,1,1,2.17-2.18L45.84,43.67a1.54,1.54,0,0,1-1.09,2.63Z"/></svg>'
        }
}
var baloon_container;
var baloon
document.addEventListener("DOMContentLoaded", function() {
    append_chat();
    baloon_container = document.querySelector('.baloon_container');
    baloon = document.querySelector('.baloon_container .baloon');

    setTimeout(()=>{
        baloon_container.classList.add('show');
    },200)

    open_close__handler(baloon,baloon_container);
    
    questions_open_close__handler();
   
});

function questions_open_close__handler() {
    const questions = document.querySelectorAll('.qa');

    questions.forEach((question)=>{
        question.addEventListener('click',e=>{
            accordion(question)
           
        });
        question.addEventListener('keydown',e=>{
            if((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)){
                accordion(question)
            }
          
        })
    })
}

function  open_close__handler(baloon,baloon_container){
    baloon.addEventListener('click',e=>{
        baloon_container.classList.toggle('close');
        close_on_scroll__handler(!baloon_container.classList.value.includes('close'));
    });

    baloon.addEventListener('keydown',e=>{
        if((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)){
            baloon_container.classList.toggle('close');
            close_on_scroll__handler(!baloon_container.classList.value.includes('close'));
        }
    });
}

function close_on_scroll(){
    baloon_container.classList.add('close')
    window.removeEventListener("scroll",close_on_scroll,false)
}

function close_on_scroll__handler(is_open){
    if (is_open){
        window.addEventListener('scroll',close_on_scroll,false)
    }else{
        window.removeEventListener("scroll",close_on_scroll,false)
    }
}

function accordion(question){
    if(question.classList.contains('close')){
        question.classList.remove('close')
        var height = question.querySelector('.a > div').offsetHeight;
        question.querySelector(".a").style.height=`${height + 15}px`;
    }else{
        question.classList.add('close')
        question.querySelector(".a").style.height = 0;
    }
}

function append_chat(){
    var faqs="";
    data.faq.forEach((faq)=>{
        faqs+=
       `<div class="qa  bb close" tabindex="0" >
            <div class="q"><h3>${faq.q}</h3></div>
            <div class="a" style="height: 0px;">
                <div>
                ${faq.a}
                </div> 
            </div>
        </div>
        `
    });
    var body = document.querySelector('body');
    var div = document.createElement('div');
    div.className = "baloon_container close";
    div.innerHTML = ` 
        <div tabindex="0" class="baloon ">
            ${data.icons.faq}
            ${data.icons.close}  
        </div>
        <div class="faq_container">
            <div class="faq_title">
                <h3>${data.title}</h3>
                <p>${data.subtitle}</p>
            </div>
            <div class="faq_scroll">
                ${faqs}
                <a href="${data.cta.url}" class="cta" aria-label="${data.cta.label}">${data.cta.label}</a>
            </div>
        </div>`;
    
    body.appendChild(div);
}








// //HIDE on KEYBOARD OPEN
// function onKeyboardOnOff(isOpen) {
//     // Write down your handling code
//     if (isOpen) {
//         $('.baloon_container').addClass('_hide__keyboard');
//     } else {
//         $('.baloon_container').removeClass('_hide__keyboard');
//     }
// }

// var originalPotion = false;
// $(document).ready(function(){
//     if (originalPotion === false) originalPotion = $(window).width() + $(window).height();
// });

// /**
//  * Determine the mobile operating system.
//  * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
//  *
//  * @returns {String}
//  */
// function getMobileOperatingSystem() {
//     var userAgent = navigator.userAgent || navigator.vendor || window.opera;

//       // Windows Phone must come first because its UA also contains "Android"
//     if (/windows phone/i.test(userAgent)) {
//         return "winphone";
//     }

//     if (/android/i.test(userAgent)) {
//         return "android";
//     }

//     // iOS detection from: http://stackoverflow.com/a/9039885/177710
//     if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//         return "ios";
//     }

//     return "";
// }

// function applyAfterResize() {

//     if (getMobileOperatingSystem() != 'ios') {
//         if (originalPotion !== false) {
//             var wasWithKeyboard = $('body').hasClass('view-withKeyboard');
//             var nowWithKeyboard = false;

//                 var diff = Math.abs(originalPotion - ($(window).width() + $(window).height()));
//                 if (diff > 100) nowWithKeyboard = true;

//             $('body').toggleClass('view-withKeyboard', nowWithKeyboard);
//             if (wasWithKeyboard != nowWithKeyboard) {
//                 onKeyboardOnOff(nowWithKeyboard);
//             }
//         }
//     }
// }

// $(document).on('focus blur', 'select, textarea, input[type=text], input[type=date], input[type=password], input[type=email], input[type=number]', function(e){
//     var $obj = $(this);
//     var nowWithKeyboard = (e.type == 'focusin');
//     $('body').toggleClass('view-withKeyboard', nowWithKeyboard);
//     onKeyboardOnOff(nowWithKeyboard);
// });

// if(  getMobileOperatingSystem() != 'ios'){
//     $(window).on('resize orientationchange', function(){
//         applyAfterResize();

//     });
// }
