const a_style =`
    
<style>
.form-steps .step {
    display: flex !important;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
}

.form-steps .step.active {
    display: flex;
    font-weight: bold;
    padding: 15px;
    margin: 0;
    position: relative !important;
    width: unset !important;
    background: none !important;    
}

.form-steps .step.active::after {
    content: "";
    background: #3173FF;
    width: 100%;
    height: 10px;
    position: absolute;
    left: 45%;
    bottom: 55%;
    z-index: -2;
}

.step::after {
  content: "";
  width: 60%;
  height: 10px;
  background: grey;
  position: absolute;
  left: 20%;
  bottom: 79%;
  z-index: -10;
}

.step:nth-child(3)::after {
  content: none !important;
}
.form-steps > div {
    flex-shrink: unset !important;
}

.step.no-after::after {
    display: none !important;
}

.arac_after::after {
  content: none !important;

}
</style>;
`

// Mutation Observer oluşturun
const aobserver = new MutationObserver(function(mutationsList) {
    // .step öğelerini seçin
    const steps = document.querySelectorAll('.step');
    // step[1] aktifse, step[0]'a da active sınıfını ekleyin
    if (steps[0].classList.contains('active')) {
        steps[0].classList.add('active');
        console.log('Kişisel Bilgilerindeyiz ve step[0]a active eklendi')
    }

    if (steps[1].classList.contains('active')) {
        steps[0].classList.add('active');
        console.log('Ruhsat Bilgilerindeyiz ve step[0]a active eklendi')
    }
    // step[2] aktifse, step[0] ve step[1]'e active sınıfını ekleyin
    if (steps[2].classList.contains('active')) {
        steps[0].classList.add('active');
        steps[1].classList.add('active');
        console.log('Araç Bilgilerindeyiz ve step[0] ve step[1]e active eklendi')
    }
});
// Observer'ı .main öğesine bağlayın ve childList değişikliklerini izleyin
const targetElement = document.querySelector('body');
if (targetElement) {
    aobserver.observe(targetElement, { childList: true, subtree: true });
}

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);