const a_style = `<style>
.a_sms_container{
    width: 100%;
}
#combinedInput{
    width: 100%;
    border: 1px solid #a5a5a582;
    border-radius: 5px;
    text-align: center;
    font-size: 19px;
    padding: 14px 0px;
    letter-spacing: 15px;
}

.sms-form .textbox{
display: none;
}

/* Hide number arrows */
input.number-input-without-arrows::-webkit-outer-spin-button,
input.number-input-without-arrows::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/*  Hide number arrows but for Firefox */
input.number-input-without-arrows[type=number] {
  -moz-appearance: textfield;
}
  

</style>`

document.querySelector('head').insertAdjacentHTML('beforeend', a_style)

const a_sms_code = document.querySelector('.sms-code .textbox');
const a_create_div = document.createElement('div');
a_create_div.classList.add('a_sms_container');
a_sms_code.insertAdjacentElement('afterend', a_create_div);
a_create_div.innerHTML = `<input type="number" class="number-input-without-arrows" id="combinedInput" >`;
let combinedInput = document.getElementById("combinedInput");

combinedInput.addEventListener("input", function() {
    syncInputs(combinedInput.value);
});

const smsInputs = document.querySelectorAll('.sms-form .textbox input')
const submitButton = document.querySelector('.sms-form button.btn-solid')

function syncInputs(smsCode){
    let iterator = 0;
    smsInputs.forEach(function(input){
        input.value = smsCode.charAt(iterator);
   
        input.dispatchEvent(new Event('input', { bubbles: true }));
    
        // IE Supported version. Try on IE and choose what to use 
        // var event = document.createEvent('Event');
        // event.initEvent('input', true, true);
        // elem.dispatchEvent(input);

        iterator++;
    })

    // We don't have to do this because the timer disables the button. May cause problem in future. 
    // submitButton.disabled = smsCode.length === 6;
}