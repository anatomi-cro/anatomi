const a_style = `<style>
.a_wording_container{
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    border: 0.6px solid #008B31;
    width: 100% !important;
    padding: 5px;
    margin-top: 20px;
    position: relative;
    border-radius: 3px;
   
}
.a_wording{
    margin: 0px !important;
    font-size: 15px !important;
}


.a_icon{
    position: absolute;
    left: -10px;
    top: 1px;
}


.a_wording_number{
    color: #008B31 !important;
    font-weight: 600;
}



.cl-product-head{
    display: flex !important;
    flex-direction: column !important;
}

.ins-preview-wrapper.ins-preview-wrapper-1707{
    display: none !important;
}

</style>`


const a_html = `

<div class="a_icon">
<svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.7282 6.3008C17.6174 4.02018 16.5196 2.43236 16.4734 2.36584C16.2907 2.10288 15.9585 1.98904 15.6528 2.08471C15.3472 2.18049 15.1392 2.46361 15.1392 2.78381C15.1392 4.45188 14.9757 5.68308 14.6396 6.54759C14.4105 7.13669 14.1306 7.47564 13.8409 7.66831C14.0375 5.83624 13.6918 4.25359 12.8087 2.95162C11.1737 0.541429 8.30114 0.0307608 8.17963 0.0101992C7.92586 -0.0324867 7.66837 0.0606018 7.501 0.255912C7.33363 0.451271 7.28102 0.720133 7.36234 0.964185C8.7932 5.2568 8.12146 7.24394 6.5498 8.6936C5.49628 7.74968 5.43894 5.97875 5.39586 4.64865C5.38849 4.41998 5.38145 4.20402 5.36993 4.00319C5.35249 3.69906 5.14868 3.43757 4.85809 3.34629C4.56759 3.25496 4.25072 3.35313 4.06254 3.59249C4.01433 3.65384 2.86973 5.1202 1.80229 7.34973C0.80747 9.42776 -0.299922 12.5865 0.0745811 15.8335C0.366447 18.3637 1.60175 20.6941 3.55294 22.3955C5.48416 24.0795 7.95028 25.006 10.4999 25.006C10.5085 25.006 10.5172 25.0059 10.5258 25.0059C13.3251 24.999 15.9557 23.9038 17.9331 21.9218C19.9108 19.9395 21 17.3057 21 14.5054C21 12.156 20.2357 9.39558 18.7282 6.3008ZM10.4994 22.0755C7.40244 22.0755 4.88285 19.5559 4.88285 16.459C4.88285 13.362 7.40244 10.8424 10.4994 10.8424C13.5964 10.8424 16.116 13.362 16.116 16.459C16.116 19.5559 13.5964 22.0755 10.4994 22.0755Z" fill="#008B31"/>
<path d="M10.4995 12.3076C8.21045 12.3076 6.34814 14.1699 6.34814 16.459C6.34814 18.7481 8.21045 20.6104 10.4995 20.6104C12.7886 20.6104 14.6509 18.7481 14.6509 16.459C14.6509 14.1699 12.7886 12.3076 10.4995 12.3076ZM11.2321 16.459C11.2321 16.8636 10.9041 17.1916 10.4995 17.1916H8.54593C8.14134 17.1916 7.81334 16.8636 7.81334 16.459C7.81334 16.0544 8.14134 15.7264 8.54593 15.7264H9.76692V14.5054C9.76692 14.1008 10.0949 13.7728 10.4995 13.7728C10.9041 13.7728 11.2321 14.1008 11.2321 14.5054V16.459Z" fill="#008B31"/>
</svg>
</div>

`



// Rastgele bir sayı üretme işlevi
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Rastgele sayıyı oluştur
const randomNumber = getRandomNumber(40, 80);
// Metni oluştur
const a_wording = document.createElement('div');
a_wording.classList.add('a_wording_container')
a_wording.innerHTML = `<p class="a_wording">Acele et! Son 3 günde <span class="a_wording_number">+ ${randomNumber} ürün</span> satıldı!</p>`;

// Metni HTML içine yerleştir
const a_head_title = document.querySelector('.cl-product-head .cl-product-name');
a_head_title.insertAdjacentElement('afterend', a_wording);

// a_html'i eklemek için kullanacağınız hedef öğeyi seçin
const a_wording_container = document.querySelector('.a_wording_container');

// a_html'i hedef öğeye ekleyin
a_wording_container.insertAdjacentHTML('afterbegin', a_html);


const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);