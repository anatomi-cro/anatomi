const a_style = 
`
<style>
.external-login-cont{
    padding-top: 10px;
}

.cl-guest-checkout-button{
    margin-top: 10px;
}
</style>
`

//gamil butonunu kayıt ol btnsininaltına taşıma
const anatomi_gmail = document.querySelector('.external-login-cont');
const a_register_btn = document.querySelector('#register-button');
a_register_btn.insertAdjacentElement('afterend',anatomi_gmail);

// Üye olmadan devam et butonunu aşagıya taşıma
const a_continue = document.querySelector('.cl-guest-checkout-button');
anatomi_gmail.insertAdjacentElement('afterend', a_continue)

const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);