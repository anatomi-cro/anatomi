

if(window.location == "https://www.elektrix.com/order/payment"){
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
    font-weight: 500;
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
    oldBar && oldBar.remove();
    
    head.insertAdjacentHTML('beforeend', anatomi_progressBar_style);
    pageHeader.insertAdjacentHTML('afterbegin', anatomi_progressBar_html);
}


