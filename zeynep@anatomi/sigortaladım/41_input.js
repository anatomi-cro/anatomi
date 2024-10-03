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

  

</style>`


const a_sms_code = document.querySelector('.sms-code .textbox');
const a_create_div = document.createElement('div');
a_create_div.classList.add('a_sms_container');
a_sms_code.insertAdjacentElement('afterend', a_create_div);
a_create_div.innerHTML = `<input type="text" id="combinedInput" >`;

// combinedInput alanını seçin
let combinedInput = document.getElementById("combinedInput");

// Diğer input alanlarını seçin
let inputs = document.querySelectorAll('.sms-code .textbox input');

const confirmButton = document.querySelector('.sms-code .btn-solid');

// combinedInput'ta her bir tuş vurulduğunda kontrol et
combinedInput.addEventListener("input", function() {
  // combinedInput değerini alın
  let value = combinedInput.value;

  // Eğer değer 6 karakter ise
  if (value.length === 6) {
    // Değerin her karakterini diğer input alanlarına atayın
    for (let i = 0; i < 6; i++) {
      inputs[i].setAttribute("data-mask-raw-value", value[i]);
    //   console.log(inputs[i]);
    }
  } else {
    // Eğer değer 6 karakterden farklı ise, tüm inputların data-mask-raw-value değerlerini boşaltın
    inputs.forEach(function(input) {
      input.setAttribute("data-mask-raw-value", "");
      
    });
  }
  
  // Onayla düğmesini etkinleştir veya devre dışı bırak
  confirmButton.disabled = value.length !== 6;
});

// Onayla düğmesine tıklandığında
confirmButton.addEventListener("click", function() {
    // Input alanlarındaki değerleri kontrol edin
    let allInputsFilled = Array.from(inputs).every(function(input) {
      return input.getAttribute("data-mask-raw-value") !== "";
    });
  
    // Eğer tüm inputlar doldurulduysa, hata sınıfını ekleyin
    if (allInputsFilled) {
      confirmButton.classList.remove("error");
    } else {
      confirmButton.classList.add("error");
    }
});





document.querySelector('head').insertAdjacentHTML('beforeend', a_style)
