
const a_html = `
    <div class="a_progress_container sepet">
        <div class="status_container">
            <div class="status_inside">
                
            </div>
        </div>
        <span class="status_text">Sepetim</span>
    </div>
    <div class="a_progress_border">
        
    </div>
    <div class="a_progress_container adres">
        <div class="status_container">
            <div class="status_inside">
                
            </div>
        </div>
        <span class="status_text">Adres</span>
    </div>
    <div class="a_progress_border">
        
    </div>
    <div class="a_progress_container last">
        <div class="status_container">
            <div class="status_inside">
                
            </div>
        </div>
        <span class="status_text">Ödeme</span>
    </div>
`;

const a_style = `
<style>
div#pageHeader, #pageOrder .orderTabs {
    display: grid;
    grid-template-columns: 50px 1fr 50px 1fr 50px;
    justify-content: center;
    align-items: center;
    align-content: center;
    /* position: relative; */
}

#headerMain{
  z-index: 99;
}

.a_progress_container {
    justify-self: center;
    align-self: center;
    z-index: 99;
    background: white;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.a_progress_container::after {
    content: "";
    width: 330%;
    height: 2px;
    background: grey;
    position: absolute;
    bottom: 60%;
    left: 45px;
}

.status_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 2px solid grey;
    border-radius: 50%;
}

.status_inside {
    width: 15px;
    height: 15px;
    background: grey;
    border-radius: 50%;
}

.a_progress_container.last::after {
    content: "";
    display: none;
}

.a_success div{
    background-color: #F6C445;
    border-color: #F6C445;
}

.a_success::after{
    background-color: #F6C445;
}

.adres.a_success::after{
    background-color: #F6C445;
    left: 40px !important;
}
div#pageHeader {
    position: relative;
    z-index: 1;
}
</style>
`;

const a_successHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.80012 12.6559L8.64021 16.496L18.2404 6.89581" stroke="white" stroke-width="1.7079" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;

document.querySelector('head').insertAdjacentHTML('beforeend', a_style);

//sayfa sayfa değerler güncellenmeli
const URL = document.URL;
if(URL === "https://www.istanbulticaret.com/sepet"){
    const container = document.querySelector('#pageHeader');
    //içeride kalan HTML'i sıfırlayıp kendi HTML yapımızı ekliyoruz
    container.innerHTML = "";
    container.insertAdjacentHTML("afterbegin",a_html);
    const sepet = document.querySelector('.a_progress_container.sepet')
    const adres = document.querySelector('.a_progress_container.adres')
    const odeme = document.querySelector('.a_progress_container.last')
    sepet.classList.add('a_success');
    adres.classList.remove('a_success');
    odeme.classList.remove('a_success');
    document.querySelectorAll('.a_success .status_container .status_inside').forEach(item => {
        item.style.display = "none";
    });
    sepet.children[0].insertAdjacentHTML('afterbegin', a_successHTML);
    document.querySelector('.box.col-12.progress').style.display = "none";
}if(URL === "https://www.istanbulticaret.com/siparis-uye-giris"){
    const container = document.querySelector('#pageHeader');
    //içeride kalan HTML'i sıfırlayıp kendi HTML yapımızı ekliyoruz
    container.innerHTML = "";
    container.insertAdjacentHTML("afterbegin",a_html);
    const sepet = document.querySelector('.a_progress_container.sepet')
    const adres = document.querySelector('.a_progress_container.adres')
    const odeme = document.querySelector('.a_progress_container.last')
    sepet.classList.add('a_success');
    adres.classList.remove('a_success');
    odeme.classList.remove('a_success');
    document.querySelectorAll('.a_success .status_container .status_inside').forEach(item => {
        item.style.display = "none";
    });
    sepet.children[0].insertAdjacentHTML('afterbegin', a_successHTML);
    document.querySelector('.box.col-12.progress').style.display = "none";
}else if(URL === "https://www.istanbulticaret.com/order/address"){
    const container = document.querySelector('#pageOrder ul.orderTabs');
    container.innerHTML = "";
    container.insertAdjacentHTML("afterbegin",a_html);
    const sepet = document.querySelector('.a_progress_container.sepet')
    const adres = document.querySelector('.a_progress_container.adres')
    const odeme = document.querySelector('.a_progress_container.last')
    adres.classList.add('a_success');
    sepet.classList.add('a_success');
    odeme.classList.remove('a_success');
    document.querySelectorAll('.a_success .status_container .status_inside').forEach(item => {
        item.style.display = "none";
    });
    sepet.children[0].insertAdjacentHTML('afterbegin', a_successHTML);
    adres.children[0].insertAdjacentHTML('afterbegin', a_successHTML);
}else if(URL === "https://www.istanbulticaret.com/order/payment"){
    const container = document.querySelector('#pageOrder ul.orderTabs');
    container.innerHTML = "";
    container.insertAdjacentHTML("afterbegin",a_html);
    const sepet = document.querySelector('.a_progress_container.sepet')
    const adres = document.querySelector('.a_progress_container.adres')
    const odeme = document.querySelector('.a_progress_container.last')
    odeme.classList.add('a_success');
    sepet.classList.add('a_success');
    adres.classList.add('a_success');
    document.querySelectorAll('.a_success .status_container .status_inside').forEach(item => {
        item.style.display = "none";
    });
    sepet.children[0].insertAdjacentHTML('afterbegin', a_successHTML);
    adres.children[0].insertAdjacentHTML('afterbegin', a_successHTML);
    odeme.children[0].insertAdjacentHTML('afterbegin', a_successHTML);
}