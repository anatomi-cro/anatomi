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
</style>`




const a_satın_al_btn = document.querySelector('.cl-checkout-button.cl-big-button')
if (a_satın_al_btn.innerText == "Giriş Yap ve Öde") {
  const checkoutButton = document.getElementById('checkout');

    // Düğmenin onclick özelliğine boş bir dize atayarak içeriği silin
    checkoutButton.setAttribute('onclick', '');
  a_satın_al_btn.addEventListener('click', function() {

    
    const a_html = `
    <div class="a-tab-container">
    <div class="tab-container">
      <ul class="tabs">
        <li id='first_li' class="active" data-tab="login">Giriş</li>
        <li data-tab="register">Kayıt</li>
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
    
    
    
    const login_url = "https://www.lee.com.tr/login/checkoutasguest?returnUrl=%2Fcart";
    
    fetch(login_url)
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP Hata! Status kod: ' + response.status);
        }
        return response.text();
      })
      .then(data => {
        // Alınan HTML içeriğini login-page'e yerleştirin
        const login_page = document.getElementById('login_page');
        login_page.innerHTML = data;
        const a_navigation = document.querySelectorAll('.navigation')
        a_navigation.forEach(a_nav => {
          a_nav.remove();
        })
    
        const a_alt_btn = document.querySelectorAll('.cl-box-button')
        a_alt_btn.forEach(a_btn => {
          a_btn.remove();
        })
    
    
        const a_guest = document.querySelector('#login-page .cl-guest-col')
        a_guest.classList.add('a_guest')
        const a_giris_btn = document.querySelector('#login-form .buttons')
        a_giris_btn.insertAdjacentElement('afterend', a_guest)
    
        const a_google = document.querySelectorAll('.external-login-cont')[0]
        
        a_guest.insertAdjacentElement('afterend', a_google)
        
        const card_body_h2 = document.querySelector('#login-page h2') 
        card_body_h2.remove()
    
        const card_body_h3 = document.querySelector('#login-page h3')
        card_body_h3.remove() 

        
    
    
      
      })
      .catch(error => {
        console.error('Hata:', error);
      });
    
    const registerUrl = "https://www.lee.com.tr/register";
    
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
        const a_navigation = document.querySelectorAll('.navigation')
        a_navigation.forEach(a_nav => {
          a_nav.remove();
        })
    
        const a_guest = document.querySelector('#register-page .cl-guest-col')
        a_guest.classList.add('a_guest')
        const a_giris_btn = document.querySelector('#register-form .buttons')
        a_giris_btn.insertAdjacentElement('afterend', a_guest)


        document.querySelector('.form-group.date-group').remove();


       document.querySelectorAll('#register-form .form-group')[1].insertAdjacentElement('afterend', document.querySelectorAll('#register-form .form-group')[6])

       const gender_group = document.querySelector('.gender-group')
       document.querySelectorAll('#register-form .form-group')[6].insertAdjacentElement('afterend', gender_group)


       const a_giris_yap = document.querySelector('a.cl-box-button')
       a_giris_yap.remove()
     

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
  })
  
}

  document.querySelector('head').insertAdjacentHTML('beforeend', a_style)

