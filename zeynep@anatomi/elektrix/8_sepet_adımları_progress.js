const a_style = `
<style>
.pageHeader_step{
display: flex !important;
}
.anatomi_step:before{
    display:none;
}
</style>
`

const anatomi_container_step = document.querySelectorAll('.col.col-3.col-sm-12.pageTitle');

anatomi_container_step.forEach(function (item, index) {
    item.classList.add('anatomi_step');

    if (index === 3) {
        item.style.display = "none";
    } else {
        item.style.display = "block";
    }
});

const pageHeader_step = document.querySelector('#pageHeader')
pageHeader_step.classList.add('pageHeader_step')

const a_new_div = document.createElement('div');
a_new_div.classList.add('a_new_div');

const a_progress = document.querySelector('.box.col-12.progress')

a_progress.insertAdjacentElement('afterbegin', a_new_div);

const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);



// Mutation Observer oluşturun
const aobserver = new MutationObserver(function(mutationsList) {
    // .step öğelerini seçin
    const steps = document.querySelectorAll('.col.col-3.col-sm-12.pageTitle');
    // step[1] aktifse, step[0]'a da active sınıfını ekleyin
    if (steps[0].classList.contains('passed')) {
        steps[0].classList.add('passed');
        console.log('sepet')
    }else if(steps[1].classList.contains('passed')){
        steps[0].classList.add('passed');
        console.log('teslimat')
    }else if(steps[2].classList.contains('passed')){
        steps[0].classList.add('passed');
        steps[1].classList.add('passed');
        console.log('ödeme')
    }
    // step[2] aktifse, step[0] ve step[1]'e active sınıfını ekleyin
    
});
// Observer'ı .main öğesine bağlayın ve childList değişikliklerini izleyin
const targetElement = document.querySelector('body');
if (targetElement) {
    aobserver.observe(targetElement, { childList: true, subtree: true });
}








const a_style = `
<style>
.pageHeader_step{
display: flex !important;
}
.anatomi_step:before{
    display:none;
}
</style>
`

const anatomi_container_step = document.querySelectorAll('.nav.nav-tabs.orderTabs.hideOnHR li');

anatomi_container_step.forEach(function (item, index) {
    item.classList.add('anatomi_step');

    if (index === 3) {
        item.style.display = "none";
    } else {
        item.style.display = "block";
    }
});

const pageHeader_step = document.querySelector('.nav.nav-tabs.orderTabs.hideOnHR')
pageHeader_step.classList.add('pageHeader_step')

const a_new_div = document.createElement('div');
a_new_div.classList.add('a_new_div');

const a_progress = document.querySelector('.box.col-12.progress')

a_progress.insertAdjacentElement('afterbegin', a_new_div);

const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);


const targetURLs = [
    'https://www.elektrix.com/sepet',
    'https://www.elektrix.com/order/address',
    'https://www.elektrix.com/order/payment',
    'https://www.elektrix.com/order/approve'
  ];
  
  // Hedeflenen menü öğeleri
  const menuItems = document.querySelectorAll('.nav-tabs li');
  
  // Hedeflenen progress bar öğesi
  const progressBar = document.querySelector('.progress-bar');
  
  // URL'ye göre menü öğelerini güncelleme işlevi
  function updateMenuActiveState(currentURL) {
    menuItems.forEach(item => {
      const itemURL = item.querySelector('a').getAttribute('href');
      
      if (currentURL.includes(itemURL)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  
  // Mutation Observer oluşturun
  const a_observer = new MutationObserver(function(mutationsList) {
    const currentURL = window.location.href;
  
    updateMenuActiveState(currentURL);
  
    if (targetURLs[0] === currentURL) {
      console.log('SEPET adımındasınız.');
    } else if (targetURLs[1] === currentURL) {
      console.log('ADRES adımındasınız.');
    } else if (targetURLs[2] === currentURL) {
      console.log('ÖDEME adımındasınız.');
    } else if (targetURLs[3] === currentURL) {
      console.log('ONAY adımındasınız.');
    }
  });
  
  // Observer'ı body öğesine bağlayın ve childList değişikliklerini izleyin
  const a_targetElement = document.querySelector('body');
  if (a_targetElement) {
    a_observer.observe(a_targetElement, { childList: true, subtree: true });
  }
  
