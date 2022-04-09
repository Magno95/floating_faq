
var ct_baloon_open = false;
var ct_first_animation = true;
var ct_in_footer = true;

const faq_icon = `<svg id="faq_icon"   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><path  d="M33,65.94A32.94,32.94,0,1,1,66,33,33,33,0,0,1,33,65.94Zm0-62.3A29.53,29.53,0,0,0,3.37,33a29.63,29.63,0,0,0,59.26,0A29.53,29.53,0,0,0,33,3.64Z"/><ellipse  cx="33" cy="47.81" rx="3.67" ry="3.45"/><path  d="M33,14.74A10.79,10.79,0,0,0,22,25.27a2.75,2.75,0,0,0,5.5,0,5.52,5.52,0,0,1,11,0A5.39,5.39,0,0,1,33,30.53a2.69,2.69,0,0,0-2.75,2.63v6.59a2.75,2.75,0,0,0,5.5,0V35.46A10.64,10.64,0,0,0,44,25.27,10.79,10.79,0,0,0,33,14.74Z"/></svg>`
const close_icon = `<svg id="close_icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><path  d="M33,65.94A32.94,32.94,0,1,1,66,33,33,33,0,0,1,33,65.94Zm0-62.3A29.53,29.53,0,0,0,3.37,33a29.63,29.63,0,0,0,59.26,0A29.53,29.53,0,0,0,33,3.64Z"/><path  d="M21,46.55a1.54,1.54,0,0,1-1.09-2.63l24-24a1.54,1.54,0,1,1,2.18,2.18l-24,24A1.53,1.53,0,0,1,21,46.55Z"/><path  d="M44.75,46.3a1.52,1.52,0,0,1-1.08-.45L20.16,22.33a1.54,1.54,0,1,1,2.17-2.18L45.84,43.67a1.54,1.54,0,0,1-1.09,2.63Z"/></svg>`

function ct_append_chat(){
    $('body').append(`
        <div class="ct_chat_prominence">
            <div class="ct_chat_container">
                <div class="ct_baloon ct_close ct_chat_faq"  data-element-id="X_Other_Faq_CTA">
                    ${faq_icon}
                    ${close_icon}
                    <div class="ct_chat_faq_container">
                        <div class="ct_chat_faq_title">
                            <h3>Do you have a question? </h3>
                            <p>Our FAQs may have the answer. </p>
                        </div>
                        <div class="ct_chat_faq_scroll">
                            <div style="padding-top:5px" class="ct_qa  ct_bb ct_close" onclick="ct_accordion(this)">
                                <div class="ct_q"><h3> Does ContactsDirect accept  <br class="ct_hide_desk"/> vision <br class="ct_hide_mob"/> insurance?</h3> <span><span class="ct_close_cross"> </span></span> </div>
                                <div class="ct_a" style="height: 0px;">
                                    <div>
                                        Absolutely. Contacts Direct accepts most major insurance plans as an in-network provider and is an out-of-network provider for many others. We can check your plan to see what savings you are eligible for and process most benefits online. Look for the "Use insurance" toggle when you arrive in cart, and add your details to check your eligibility. You can also register with your insurance plan when creating a new account by checking the "Yes, find my insurance plan" box. Our In-network insurances include<span class="ct_strong"> EyeMed, Superior Vision, Aetna Vision Preferred, Anthem Blue View Vision, Humana Vision, and more!</span>
                                        <br/><br/>
                                        Don't see your vision care provider among our in-network providers? Visit <a href="/out-of-network"  data-element-id="X_Other_FaqContent_CTA" data-description="OutOfNetwork" aria-label="Can not see your vision care provider? Visit contactsdirect.com/out-of-network"  >contactsdirect.com/out-of-network</a> for details on our out-of-network options.
                                    </div> 
                                </div>
                            </div>
                            <div class="ct_qa  ct_bb ct_close" onclick="ct_accordion(this)">
                                <div class="ct_q"><h3>What forms of payment <br/> are accepted?</h3> <span><span class="ct_close_cross"> </span></span> </div>
                                <div class="ct_a" style="height: 0px;">
                                    <div>We accept a variety of payment methods, such as:  <br/>  <span class="ct_strong">Credit cards</span> (Visa, MasterCard, Discover, American Express), <span class="ct_strong">PayPal</span>, <span class="ct_strong">Klarna</span>, <span class="ct_strong">Afterpay</span>, <span class="ct_strong">Affirm</span> and  <span class="ct_strong">Apple Pay</span>. Unfortunately, we aren't able to accept checks or cash on delivery (COD) at this time.<a href="/customer-service/faq#payment" aria-label="Learn More Payment methods">Learn more</a></div> 
                                </div>
                            </div>
                            <div class="ct_qa  ct_bb ct_close" onclick="ct_accordion(this)">
                                <div class="ct_q"><h3>How long after I order should <br/> I expect for my contacts <br/> to be shipped?</h3> <span><span class="ct_close_cross"> </span></span> </div>
                                <div class="ct_a" style="height: 0px;">
                                    <div>Once you place your order, we will either call your doctor to verify your prescription or verify the prescription you uploaded. After it has been verified, we will ship your order to you. <br/><br/> 
                                     We offer the following shipping options:<br/><br/>
                                    <span style="margin-left:7px; margin-right:7px;">•</span> Standard 7-10 business days - Free! <br/>
                                    <span style="margin-left:7px; margin-right:7px;">•</span> Priority 3-5 business days - $11.99 <br/>
                                    <span style="margin-left:7px; margin-right:7px;">•</span> Express 1-2 business days - $19.99</div> 
                                </div>
                            </div>
                            <div class="ct_qa  ct_bb ct_close" onclick="ct_accordion(this)">
                                <div class="ct_q"><h3>Can I use my eyeglass <br class="ct_hide_desk"/>  prescription <br class="ct_hide_mob"/> to order my  <br class="ct_hide_desk"/> contacts?</h3> <span><span class="ct_close_cross"> </span></span> </div>
                                <div class="ct_a" style="height: 0px;">
                                    <div>Eyeglasses and contact lenses will have different prescriptions. This is mainly due to the fact that contact lenses are positioned directly on your eye, while your eyeglasses sit further away.  </div> 
                                </div>
                            </div>
                            <div class="ct_qa  ct_close" onclick="ct_accordion(this)">
                                <div class="ct_q"><h3> How can I get in contact <br/> with an operator?  </h3> <span><span class="ct_close_cross"> </span></span> </div>
                                <div class="ct_a" style="height: 0px;">
                                    <div>
                                        Our live chat is online from <span class="ct_strong">8.30AM - 4.30PM EST, Mon-Fri</span> and our customer care operators will be happy to help you, replying within seconds. 
                                        <br/> You can also call us at <a href="tel:1-844-5-LENSES"  data-element-id="X_Other_FaqContent_CTA" data-description="CallUs" aria-label="Call the Customer Service at  1-844-5-LENSES" > 1-844-5-LENSES</a> from <span class="ct_strong">8:30AM - 8:00PM EST Mon-Fri</span>, <span class="ct_strong">9:00AM - 5:30PM EST Sat (Closed Sun)</span>, or send us an email at <a href="mailto:support@contactsdirect.com"  data-element-id="X_Other_FaqContent_CTA" data-description="MailUs" aria-label="Send Mail to the Customer Service at support@contactsdirect.com" >support@contactsdirect.com.</a>
                                    </div>
                                </div>
                            </div>
                            <a href="/customer-service/faq" class="ct_read_more" data-element-id="X_Other_FaqContent_CTA" data-description="ReadMore" aria-label="Find More Faq">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);

}

function ct_accordion(this_){
    if($(this_).hasClass('ct_close')){
        $(this_).removeClass('ct_close');
        var ct_height = $(this_).find('.ct_a > div').height();
        $(this_).find('.ct_a').css('height',ct_height + 15);
    }else{
        $(this_).addClass('ct_close');
        $(this_).find('.ct_a').css('height',0);
    }
}

$('.ct_faq_container .ct_qa').keypress(function (e) { //navigate faq with tab
    if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
        ct_accordion(this);
    }
});

function ct_open(this_,e){ //open/close chat and faq baloon
    if($(this_).hasClass('ct_close')){
        $(this_).removeClass('ct_close');
        ct_baloon_open = true;

        if ($(this_).hasClass('ct_chat_faq')){
            $('.ct_chat_cs').addClass('ct_close');
          
            if ($(window).width() > 767){
                $('.ct_baloon_container').css('transform','translateX(-200px)');
            }else{
                $('.ct_baloon_container').css('transform','translateX(200px)');
            }
            
        }else{
            if(ct_first_animation){
                ct_first_animation = false;
            }
          
        }
    }else{
        if ( e.target === $('.ct_chat_faq')[0] || e.target === $('.ct_chat_cs')[0] ){
            $(this_).addClass('ct_close');
            if ($(this_).hasClass('ct_chat_faq')){
                setTimeout(function(){$('.ct_baloon_container').css('transform','translateX(0px)');},100);
            }
        }
       
        
    }
}


$(document).scroll(function(){
    if(ct_baloon_open && $('.ct_chat_faq_container:hover').length == 0 && $(window).width() > 767){ //closing chat at scroll
        $('.ct_baloon').each(function(){
            if(!$(this).hasClass('ct_close')){
                $(this).addClass('ct_close');
                $('.ct_baloon_container').css('transform','translateX(0px)');
            }
        });
        ct_baloon_open = false;
    }   
    
    if( ct_to_hide()){  //hiding chat if over HP banner or footer
        if ($(window).width() > 767){
            $('.ct_chat_container').css('transform','translatex(-200px)');
        }else{
            $('.ct_chat_container').css('transform','translatex(200px)');
        }
       
        $('.ct_baloon').each(function(){
            if(!$(this).hasClass('ct_close')){
                $(this).addClass('ct_close');
            }
        });
        ct_in_footer = true;
    }else{ 
       if(ct_in_footer){ //show chat if was hidden because in footer or HP banner
            $('.ct_chat_container').css('transform','translatex(0px)');
            $('.ct_baloon_container').css('transform','translateX(0px)');
            ct_in_footer = false;
            
       } 
    }
});

function ct_to_hide(){ //check if the chat is over the HP banner o the footer
 
    if ($('footer .footer-background').length > 0){
        if( $(window).scrollTop() - $('footer .footer-background').offset().top > $(window).scrollTop() - $('.ct_chat_prominence').offset().top ||  $('#content').length > 0 && $(window).scrollTop() - $('#content').offset().top < $(window).scrollTop() - $('.ct_chat_prominence').offset().top  ){
            return true
        }else{
            return false
        }
    }else{
        if ($('footer').length > 0){
            if($(window).scrollTop() - $('footer').offset().top > $(window).scrollTop() - $('.ct_chat_prominence').offset().top){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
  
}


var ct_device_width;
var ct_device_height;


$(document).ready(function(){
    ct_device_width = $(window).width();
    ct_device_height = $(window).height();
    ct_append_chat();
    
    $('.ct_chat_container .ct_baloon').click(function(e){
            ct_open(this,e);
    });
    $('.ct_chat_container').addClass('ct_show');
    setTimeout(function(){
      $('.ct_chat_container').css('transform','translateX(0)');
    },2000); //prevent chat showing before the animation

   
});



//HIDE on KEYBOARD OPEN
function onKeyboardOnOff(isOpen) {
    // Write down your handling code
    if (isOpen) {
        console.log('open');
        $('.ct_chat_container').addClass('ct__hide__keyboard');
    } else {
        console.log('close');
        $('.ct_chat_container').removeClass('ct__hide__keyboard');
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
