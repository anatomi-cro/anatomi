const a_style = `<style>
.a-tab-container{
  position: fixed;
    overflow-y: auto;
    max-height: 100%;
    bottom: 0% !important;
    left: 0 !important;
    width: 100% !important;
    background: #ffffff !important;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4) !important;
    z-index: 999999999999 !important;
    padding: 0 !important;
}

.tab-container{
  padding:40px;
}

.tabs {
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0 !important; 
  width: 100%;
  gap: 10px;
}

.tabs li {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #F2F2F2;
  border: .5px solid #C4C4C4;
  border-bottom: none;
  width: 50%;
  text-align: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  color: #91959c;
  border-bottom: 4px solid transparent;
  text-transform: uppercase;
    transition: color .1s ease-in-out;
    font-weight: 600;
}

.tab-panel {
  display: none;
  border: 1px solid #dbdbdb36;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  border-top: none;
}

.tab-panel.active {
  display: block;
}
.a_guest .cl-guest-checkout-button{
  border: #DDDDDD 1px solid !important;
  text-align: center !important;
  margin-top: 10px !important;
  color:black !important;
  background: white !important;
}

.tabs .active{
  background-color: #fff !important;
  border-bottom: 1px solid #fff !important;
  color: #000 !important;
    
}

  .anatomi_overlay{
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
}
#register-page{
  padding-top: 20px !important;
}


.checkbox-tools+label {
  display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    height: 30px !important;
}
#register-page{
  padding-bottom: 0px !important;
}
#login-page .card{
  margin-top: 40px !important;
}

.a_login_register{
  border: 1px solid #DDDDDD !important;
    border-top: none !important;
}

header#header{
  display: none !important;
}
</style>`




const a_satın_al_btn = document.querySelector('.uk-button.uk-button-primary.uk-width-1-1')

// localStorage'dan "ins-is-user-logged-in" değerini al
// const storedValue = localStorage.getItem('ins-is-user-logged-in');

// if (storedValue !== null) {
//   try {
//     // JSON.parse işlemi sırasında hata alırsak buraya düşer
//     const a_isLoggedIn = JSON.parse(storedValue).data;
//     console.log(a_isLoggedIn);

// a_isLoggedIn !== true


const a_login = document.querySelectorAll('.uk-modal-body .uk-subnav a')[0];

if (a_login && a_login.href == "https://jackjones.com.tr/uye-girisi") {
  console.log("a_login bağlantısı istenilen URL'ye sahip.");
      console.log('deneme');

    // Düğmenin onclick özelliğine boş bir dize atayarak içeriği silin
    a_satın_al_btn.setAttribute('onclick', '');
  // a_satın_al_btn.addEventListener('click', function() {
    console.log('deneme');

    const a_html = `
    <div class="a-tab-container">
    <div class="tab-container">
      <ul class="tabs">
        <li id='first_li' class="active" data-tab="login">ÜYE GİRİŞİ</li>
        <li data-tab="register">KAYIT OL</li>
      </ul>
      <div class="a_login_register">
        <div  class="tab-panel" id="login_page"></div>
        <div class="tab-panel" id="register_page"></div>
      </div>
    </div>
    </div>
    `;
    
    const a_body = document.querySelector('body');
    a_body.insertAdjacentHTML('afterend', a_html);


        
    const tabs = document.querySelectorAll('.tabs li');
    
    
  
    const tabPanels = document.querySelectorAll('.tab-panel');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Tüm sekme başlıklarından active sınıfını kaldır
        tabs.forEach(t => {
          t.classList.remove('active');
        });
  
        // Tüm panelleri gizle
        tabPanels.forEach(panel => {
          panel.classList.remove('active');
        });
  
        // Tıklanan sekmenin verisini al
        const tabName = tab.getAttribute('data-tab');
        const targetPanel = document.getElementById(tabName + '_page');
  
        // Hedef paneli ve tıklanan sekme başlığına active sınıfını ekle
        if (targetPanel) {
          tab.classList.add('active');
          targetPanel.classList.add('active');
        }
      });
    });

    // giriş yap
    const login_url = "https://jackjones.com.tr/index.php?route=checkout/login&redirect=checkout/address";

    fetch(login_url)
      .then(response => {
        console.log('devam et');
        if (!response.ok) {
          throw new Error('HTTP Hata! Status kod: ' + response.status);
        }
        return response.text();
      })
      .then(data => {
        console.log('başarılı');
        // Alınan HTML içeriğini login-page'e yerleştirin
        const login_page = document.querySelector('#login_page');
        login_page.innerHTML = data;
        console.log('zeynep');
    
        // Formu seçin
        const form = document.querySelector('.section-login form');
    
        // Formun action özelliğini güncelleyin
        form.action = "https://jackjones.com.tr/index.php?route=checkout/login&redirect=checkout/address";
    
        const a_tab_title = document.querySelectorAll('.uk-tab.uk-tab-secondary');
        a_tab_title.forEach(item => {
          item.style.display = 'none';
        });
      })
      .catch(error => {
        console.error('Hata:', error);
      });
    

  // })

      // uye ol
      const registerUrl = "https://jackjones.com.tr/uye-ol";
    
      fetch(registerUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('HTTP Hata! Status kod: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          // Alınan HTML içeriğini register-page'e yerleştirin
          const register_page = document.getElementById('register_page');
          register_page.innerHTML = data;
          
          const a_tab_title = document.querySelectorAll('.uk-tab.uk-tab-secondary')
          a_tab_title.forEach(item =>{
            item.style.display = 'none';
          })
    
          
        })
        .catch(error => {
          console.error('Hata:', error);
        });



    // arka planını koyulaştırmak için
    const overlay = document.createElement('div');
    overlay.classList.add('anatomi_overlay');
    document.body.appendChild(overlay);
    
    
    // Overlay'a tıklama olayını ekle
    overlay.addEventListener('click', () => {
        // Overlay'ı kaldırın
        overlay.remove();
        const a_tab_container = document.querySelector('.a-tab-container')
        a_tab_container.remove();
     
      });
    
      document.getElementById('first_li').click()  


  document.querySelector('head').insertAdjacentHTML('beforeend', a_style)

}else if (a_login && a_login.href == "https://jackjones.com.tr/index.php?route=account/home"){

console.log('giriş yapılmıs');
  
}



