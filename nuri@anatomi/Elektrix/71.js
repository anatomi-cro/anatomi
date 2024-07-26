if(window.location == "https://www.elektrix.com/sepet"){
    const anatomi_progressBar_html = `
<div class="anatomi_progressBar_container">
<div class="anatomi_progressBar_content">
    <div class="anatomi_progressBar_step_1 anatomi_progressBar_step">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Vector+6.png" alt="">
        <h3>SEPET</h3>
    </div>
    <div class="anatomi_progressBar_step_2 anatomi_progressBar_step">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Vector+5.png" alt="">
        <h3>ADRES</h3>
    </div>
    <div class="anatomi_progressBar_step_3 anatomi_progressBar_step">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Vector+4.png" alt="">
        <h3>ÖDEME</h3>
    </div>
</div>
</div>
`;

const anatomi_progressBar_style = `
<style>
.anatomi_progressBar_container {
    width: 100%;
    height: fit-content;
}

.anatomi_progressBar_content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    gap: 10px;
}

.anatomi_progressBar_step {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.anatomi_progressBar_step  h3 {
    position: absolute;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
}

.anatomi_progressBar_step_2 h3 {
    opacity: 0.8;
}

.anatomi_progressBar_step_3 h3 {
    opacity: 0.5;
}
</style>
`;
    const head = document.querySelector('head');
    const pageHeader = document.getElementById('pageHeader');
    const oldBar = document.querySelector('#pageHeader .col.col-3.col-sm-12.pageTitle.passed');
    const oldBar2 = document.querySelector('.box.col-12.progress');
    oldBar && oldBar.remove();
    oldBar2 && oldBar2.remove();
    
    head.insertAdjacentHTML('beforeend', anatomi_progressBar_style);
    pageHeader.insertAdjacentHTML('afterbegin', anatomi_progressBar_html);
}else if(window.location == "https://www.elektrix.com/order/address"){
    const anatomi_progressBar_html = `
<div class="anatomi_progressBar_container">
<div class="anatomi_progressBar_content">
    <div class="anatomi_progressBar_step_1 anatomi_progressBar_step">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Vector+4.png" alt="">
        <h3>SEPET</h3>
    </div>
    <div class="anatomi_progressBar_step_2 anatomi_progressBar_step">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Vector+6.png" alt="">
        <h3>ADRES</h3>
    </div>
    <div class="anatomi_progressBar_step_3 anatomi_progressBar_step">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Vector+5.png" alt="">
        <h3>ÖDEME</h3>
    </div>
</div>
</div>
`;

const anatomi_progressBar_style = `
<style>
.anatomi_progressBar_container {
    width: 100%;
    height: fit-content;
    margin-top: 30px;
}

.anatomi_progressBar_content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    gap: 10px;
}

.anatomi_progressBar_step {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.anatomi_progressBar_step  h3 {
    position: absolute;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
}

.anatomi_progressBar_step_2 h3 {
    opacity: .5;
}

.anatomi_progressBar_step_3 h3 {
    opacity: 0.5;
}

.anatomi_progressBar_step_2 h3 {
    opacity: 1;
}

.anatomi_progressBar_step_3 h3 {
    opacity: 0.8;
}
</style>
`;
    const head = document.querySelector('head');
    const pageHeader = document.getElementById('pageOrder');
    const oldBar = document.querySelector('#pageOrder .col.col-3.col-sm-12.pageTitle.passed');
    const oldBar2 = document.querySelector('.box.col-12.progress');
    const adres = document.getElementById('tabAddress');
    const buttonPayment = document.querySelector('.nextOrder.btn.btn-big.col-12.btn-warning.btn-radius.fw600.a-center');
    oldBar && oldBar.remove();
    oldBar2 && oldBar2.remove();
    adres.remove();
    
    head.insertAdjacentHTML('beforeend', anatomi_progressBar_style);
    pageHeader.insertAdjacentHTML('afterbegin', anatomi_progressBar_html);

    
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            const step2img = document.querySelector('.anatomi_progressBar_step_2 img');
            const step3img = document.querySelector('.anatomi_progressBar_step_3 img ');
            const step2h3 = document.querySelector('.anatomi_progressBar_step_2 h3');
            const step3h3 = document.querySelector('.anatomi_progressBar_step_3 h3');
            const tabPayment = document.getElementById("tabPayment");

            step2img.src = "https://anatomi.s3.eu-north-1.amazonaws.com/Vector+5.png";
            step3img.src = "https://anatomi.s3.eu-north-1.amazonaws.com/Vector+6.png";
            step2h3.style.opacity = "0.8";
            step3h3.style.opacity = "1";
            tabPayment.remove();
        });
      });
      
      var config = { subtree: true, characterData: true, childList: true };
      observer.observe(buttonPayment, config);


}else if(window.location == "https://www.elektrix.com/order/payment"){
    const anatomi_progressBar_html = `
<div class="anatomi_progressBar_container">
<div class="anatomi_progressBar_content">
    <div class="anatomi_progressBar_step_1 anatomi_progressBar_step">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Vector+4.png" alt="">
        <h3>SEPET</h3>
    </div>
    <div class="anatomi_progressBar_step_2 anatomi_progressBar_step">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Vector+5.png" alt="">
        <h3>ADRES</h3>
    </div>
    <div class="anatomi_progressBar_step_3 anatomi_progressBar_step">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Vector+6.png" alt="">
        <h3>ÖDEME</h3>
    </div>
</div>
</div>
`;

const anatomi_progressBar_style = `
<style>
.anatomi_progressBar_container {
    width: 100%;
    height: fit-content;
    margin-top: 20px;
}

.anatomi_progressBar_content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    gap: 10px;
}

.anatomi_progressBar_step {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.anatomi_progressBar_step  h3 {
    position: absolute;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
}

.anatomi_progressBar_step_2 h3 {
    opacity: .5;
}

.anatomi_progressBar_step_3 h3 {
    opacity: 0.5;
}

.anatomi_progressBar_step_2 h3 {
    opacity: .8;
}

.anatomi_progressBar_step_3 h3 {
    opacity: 1;
}
</style>
`;
    const head = document.querySelector('head');
    const pageHeader = document.getElementById('pageOrder');
    const oldBar = document.querySelector('.nav.nav-tabs.orderTabs.hideOnHR');
    const payment = document.getElementById('tabPayment');
    oldBar && oldBar.remove();
    payment.remove();
    
    head.insertAdjacentHTML('beforeend', anatomi_progressBar_style);
    pageHeader.insertAdjacentHTML('afterbegin', anatomi_progressBar_html);

}





