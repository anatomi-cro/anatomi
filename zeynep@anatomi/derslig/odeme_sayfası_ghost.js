const a_style = 
`
<style>
.a_siparis_box{

        display: flex !important;
        position: fixed !important;
        bottom: 0 !important;
        width: 100% !important;
        right: 0 !important;
        background: white;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4) !important;
    
}

.anatomi_btn{
    background-color: #e0e0e0 !important;
    
}
.mavi_ghost_buton{
    background-color: rgb(3 176 185/var(--tw-bg-opacity)) !important;
}
</style>
`

const a_siparis_box = document.querySelector('.p-4.flex.flex-col.col-span-1.rounded-lg.border.border-gray-300.shadow-lg');
a_siparis_box.classList.add('a_siparis_box');

const a_buton = document.querySelector('#payment-submit-btn');
a_buton.classList.add('anatomi_btn');

const a_kart_isim = document.querySelectorAll('#tab-odeme-kart .w-full.form-control')
const a_cvv = document.querySelector('#cc_cvv');
const a_onayla_checkbox = document.querySelector('#kvkk_confirm');


function validateForm() {
    let kartIsimDolu = true;
    let cvvDolu = false;
    let onaylaDolu = false;

    a_kart_isim.forEach(function(input) {
        if (input.value === '') {
            kartIsimDolu = false;
        }
    });

    if (a_cvv.value !== '') {
        cvvDolu = true;
    }

    if (a_onayla_checkbox.checked) {
        onaylaDolu = true;
    }

    return kartIsimDolu && cvvDolu && onaylaDolu;
}

function updateButton() {
    if (validateForm()) {
        a_buton.classList.remove('anatomi_btn');
        a_buton.classList.add('mavi_ghost_buton');
        a_buton.disabled = false;
    } else {
        a_buton.classList.remove('mavi_ghost_buton');
        a_buton.classList.add('anatomi_btn');
        a_buton.disabled = true;
    }
}

// Girişler herhangi bir değişiklik olduğunda kontrol edilir
a_kart_isim.forEach(function(input) {
    input.addEventListener('input', updateButton);
});

a_cvv.addEventListener('input', updateButton);
a_onayla_checkbox.addEventListener('change', updateButton);

// Düğmeye tıklandığında, formun doğruluğunu kontrol edin ve gönderin
a_buton.addEventListener('click', function(e) {
    e.preventDefault();

    if (validateForm()) {
        // formu gönder
    }
});

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('beforeend', a_style);



