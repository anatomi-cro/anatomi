const a_style = `<style>

.a_navbar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background: #ffffff;
    z-index: 99999;
    filter: drop-shadow(0px -3px 7px rgb(186,186,186));

}


.icon_navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 3px 0 3px;
   
}
.a_icon{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4px;
    height: 53px;
    margin-top: 13px

}
.a_icon.sepet{
    position: absolute;
    bottom: 12px;
    left: 16%;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F3C342;
    filter: drop-shadow(0px -1px 2px rgb(186,186,186));
}
.a_icon.sepet svg{
    margin-right: 5px;
}
.a_sepet_div{
    position: absolute;
    background: #ffffff;
    height: 85px;
    width: 86px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 4%;
    left: 50%;
    transform: translate(-54%, -50%);
}

.a_text.sepet{
    margin-top: 108px;
   
}
.a_icon.sidebar {
    padding-left: 60px;
    display: flex;
    gap: 5px;
    align-items: center;
    padding-top: 7px;
}

</style>`


const a_new_html = `
<div class="icon_navbar">


<a href="https://www.istanbulticaret.com/">
<div class="a_icon">
<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.02 2.33992L2.63 6.53992C1.73 7.23992 1 8.72992 1 9.85992V17.2699C1 19.5899 2.89 21.4899 5.21 21.4899H16.79C19.11 21.4899 21 19.5899 21 17.2799V9.99992C21 8.78992 20.19 7.23992 19.2 6.54992L13.02 2.21992C11.62 1.23992 9.37 1.28992 8.02 2.33992Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<p class="a_text">Ana Sayfa</p>
</div>
</a>


<a href="javascript:void(0);">
<div class="a_icon search">
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22.5L20 20.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p class="a_text">Arama</p>
</div>
</a>


<a href="https://www.istanbulticaret.com/sepet">
<div class="a_sepet_div">
<div class="a_icon sepet">
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8_656)">
<path d="M11.81 2L8.19 5.63" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.19 2L21.81 5.63" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 7.8501C5 6.0001 5.99 5.8501 7.22 5.8501H22.78C24.01 5.8501 25 6.0001 25 7.8501C25 10.0001 24.01 9.8501 22.78 9.8501H7.22C5.99 9.8501 5 10.0001 5 7.8501Z" stroke="white" stroke-width="1.5"/>
<path d="M12.76 14V17.55" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M17.36 14V17.55" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6.5 10L7.91 18.64C8.23 20.58 9 22 11.86 22H17.89C21 22 21.46 20.64 21.82 18.76L23.5 10" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d_8_656" x="-1" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_656"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_656" result="shape"/>
</filter>
</defs>
</svg>


</div>
<div><p class="a_text sepet">Sepetim</p>
</div>
</div>

</a>


<a href="javascript:void(0)">
<div class="a_icon sidebar" >
<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1.12181C0 0.502259 0.422136 0 0.942858 0H21.0571C21.5779 0 22 0.502259 22 1.12181C22 1.74139 21.5779 2.24363 21.0571 2.24363H0.942858C0.422136 2.24363 0 1.74139 0 1.12181Z" fill="#333333"/>
<path d="M0 7.85717C0 7.23748 0.422136 6.73535 0.942858 6.73535H21.0571C21.5779 6.73535 22 7.23748 22 7.85717C22 8.47671 21.5779 8.97898 21.0571 8.97898H0.942858C0.422136 8.97898 0 8.47671 0 7.85717Z" fill="#333333"/>
<path d="M0 14.5923C0 13.9726 0.422136 13.4705 0.942858 13.4705H21.0571C21.5779 13.4705 22 13.9726 22 14.5923C22 15.2118 21.5779 15.7141 21.0571 15.7141H0.942858C0.422136 15.7141 0 15.2118 0 14.5923Z" fill="#333333"/>
</svg>

<p class="a_text">Kategoriler</p>
</div>
</a>


<a href="https://www.istanbulticaret.com/uye-girisi-sayfasi">
<div class="a_icon">
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<p class="a_text">Hesabım</p>
</div>

</a>

</div>

`

const a_navbar = document.createElement('div');
a_navbar.classList.add('a_navbar');

const a_body = document.querySelector('body');
a_body.appendChild(a_navbar);

a_navbar.insertAdjacentHTML('afterbegin', a_new_html);

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);



// side bar
const mainDiv = document.querySelector('#mainWrapper');
const a_sidebar = document.querySelector('#mobileMenu');
const a_sidebar_icon = document.querySelector('.a_icon.sidebar');

a_sidebar_icon.addEventListener('click', function () {
   console.log('tıklandı');
  
   a_sidebar.classList.add('animate');
   mainDiv.classList.add('menuShow')
   mainDiv.classList.add('animate')
  
});

const wp_icon = document.querySelector('.wp-app-container')
wp_icon.style.display = 'none';

const wp_icon_a = document.querySelector('.fl.lightBg.text-center.icon-arrow-simple-up.icon-no-space.d-flex');
wp_icon_a.style.display = 'none';


//search 

const a_search = document.querySelector('#mobileSearch');
const a_icon = document.querySelector('.a_icon.search');

a_icon.addEventListener('click', function () {
    if (a_search.classList.contains('fl') && a_search.classList.contains('col-12') && a_search.classList.contains('d-none')) {
        a_search.classList.remove('d-none');
    } else {
        a_search.classList.add('d-none');
    }
});



const color_container = document.querySelector('.tsoft-wheel-btn.tsoft-wheel-btn-left')
color_container.style.display = "none"


const color_popup = document.querySelector('.tsoft-popup--winning-wheel')
color_popup.remove();