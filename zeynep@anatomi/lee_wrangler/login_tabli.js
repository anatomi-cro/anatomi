const a_style = 
`
<style>
.card-body h3{
    display:none;
}

.login_form_group{
    padding-top: 5px;
}

#login-form label{
    font-size:14px;
}
</style>
`

// gmailin giriş yap butonun altına getirilmesi
const a_gmail = document.querySelector('.external-login-cont');
const a_login_btn = document.querySelector('.login-button');
a_login_btn.insertAdjacentElement('afterend',a_gmail );

// sifremi unuttum yazısının password inputunun altına gelmesi

// const a_forgot_password = document.querySelector('.forgot-password');
// const a_password_input = document.querySelector('.password');
// a_password_input.insertAdjacentElement('afterend',a_forgot_password)

// Üyelik olustur div remove
const a_register = document.querySelector('.cl-register-col');
a_register.remove();

//labelları inputların üstüne alma

const form_group = document.querySelectorAll('.form-group');
form_group[0].classList.add('login_form_group');
form_group[1].classList.add('login_form_group');

const a_label = document.querySelectorAll('.login_form_group label');

form_group[0].insertAdjacentElement('beforebegin', a_label[0])
form_group[1].insertAdjacentElement('beforebegin', a_label[1])

// göster iconunu kaldırma 
const a_show_password = document.querySelector('.cl-input-mask-toggle-button');
a_show_password.remove();


const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);