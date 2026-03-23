const anatomi_style = `<style>

.a_navbar{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background: #ffffff;
    z-index: 4440;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.7);
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
    height: 60px;
    width: 60px;
    gap: 7px;
}

.a_icon.sidebar {
    display: flex;
    gap: 10px;
    align-items: center;

}

</style>`;

const a_new_html = `
<div class="icon_navbar">


<a href="https://www.elektrix.com/">
<div class="a_icon">
<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.02 2.33992L2.63 6.53992C1.73 7.23992 1 8.72992 1 9.85992V17.2699C1 19.5899 2.89 21.4899 5.21 21.4899H16.79C19.11 21.4899 21 19.5899 21 17.2799V9.99992C21 8.78992 20.19 7.23992 19.2 6.54992L13.02 2.21992C11.62 1.23992 9.37 1.28992 8.02 2.33992Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<p class="a_text">Ana Sayfa</p>
</div>
</a>


<a href="https://www.elektrix.com/cok-satanlar">
<div class="a_icon search">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
<mask id="mask0_1_716" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
<path d="M27.5 27.5V0.5H0.5V27.5H27.5Z" fill="white" stroke="white"/>
</mask>
<g mask="url(#mask0_1_716)">
<path d="M15.0993 0.787462C15.5557 1.14955 16.1615 1.2628 16.7179 1.09005C17.5002 0.847071 18.3469 1.17503 18.7614 1.8817C19.0562 2.38417 19.5801 2.70863 20.1614 2.7485C20.9787 2.80461 21.6496 3.41624 21.7809 4.2249C21.8742 4.79994 22.2456 5.2918 22.7732 5.53893C23.515 5.88647 23.9197 6.69924 23.75 7.50063C23.6293 8.07058 23.798 8.66339 24.2006 9.08438C24.7668 9.67648 24.8506 10.5805 24.4028 11.2665C24.0844 11.7544 24.0275 12.368 24.2509 12.9061C24.565 13.6627 24.3165 14.536 23.6512 15.0139C23.178 15.3538 22.9033 15.9055 22.9172 16.4879C22.9367 17.3069 22.3897 18.0314 21.5966 18.2367C21.0325 18.3827 20.5771 18.7979 20.3797 19.346C20.1021 20.1168 19.3301 20.5948 18.5165 20.4997H18.5164C17.9378 20.4321 17.3632 20.6548 16.981 21.0945C16.4438 21.7129 15.5513 21.8798 14.8269 21.4972C14.3118 21.2252 13.6954 21.2252 13.1803 21.4972C12.4559 21.8798 11.5634 21.713 11.0261 21.0946C10.644 20.6548 10.0693 20.4321 9.49068 20.4997C8.67698 20.5948 7.90507 20.1168 7.62747 19.346C7.43005 18.7979 6.97461 18.3827 6.41062 18.2367C5.61754 18.0314 5.07039 17.3069 5.08997 16.4879C5.10386 15.9055 4.82917 15.3538 4.35601 15.0139C3.69063 14.536 3.44218 13.6627 3.75625 12.9061C3.97965 12.368 3.92278 11.7544 3.60433 11.2665C3.15655 10.5805 3.24033 9.67648 3.80651 9.08438C4.20923 8.66339 4.37789 8.07058 4.25719 7.50063C4.08744 6.69924 4.49213 5.88647 5.23396 5.53893C5.76153 5.2918 6.13292 4.79994 6.22627 4.2249C6.35752 3.41624 7.02848 2.80461 7.84578 2.7485C8.427 2.70863 8.95102 2.38417 9.24578 1.8817C9.66026 1.17503 10.5069 0.847071 11.2893 1.09005C11.8456 1.2628 12.4515 1.14955 12.9078 0.787462C13.5496 0.278266 14.4576 0.278266 15.0993 0.787462Z" stroke="#333333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.28461 10.0939C6.75744 6.25125 10.033 3.27597 14.0035 3.27597C17.9753 3.27597 21.2518 6.25311 21.7229 10.0975" stroke="#333333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.723 12.0092C21.252 15.8538 17.9755 18.8311 14.0036 18.8311C10.0328 18.8311 6.7571 15.8556 6.28454 12.0126" stroke="#333333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.364 5.81504L15.4737 8.85468C15.5272 9.00135 15.6643 9.10094 15.8204 9.10657L19.0541 9.22262C19.4119 9.23541 19.5587 9.68763 19.2769 9.90824L16.7289 11.9029C16.606 11.9991 16.5536 12.1603 16.5965 12.3104L17.4855 15.4218C17.5838 15.7659 17.1991 16.0454 16.9022 15.8455L14.2179 14.0387C14.0883 13.9514 13.9188 13.9514 13.7893 14.0387L11.1049 15.8455C10.808 16.0454 10.4234 15.7659 10.5217 15.4218L11.4106 12.3104C11.4536 12.1603 11.4012 11.9991 11.2782 11.9029L8.73024 9.90824C8.44843 9.68763 8.59538 9.23541 8.95303 9.22262L12.1868 9.10657C12.3428 9.10094 12.4799 9.00135 12.5335 8.85468L13.6431 5.81504C13.7659 5.47882 14.2413 5.47882 14.364 5.81504Z" stroke="#333333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.3368 21.3253L16.7846 27.2346C16.9684 27.6785 17.586 27.7078 17.811 27.2834L19.0237 24.9968C19.1513 24.7562 19.4317 24.64 19.6921 24.7199L22.1665 25.4793C22.6258 25.6202 23.0417 25.1628 22.8578 24.719L20.5134 19.0591" stroke="#333333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.49368 19.0591L5.14923 24.719C4.96542 25.1628 5.38138 25.6202 5.84059 25.4792L8.31498 24.7199C8.57535 24.64 8.85578 24.7562 8.98337 24.9968L10.1961 27.2834C10.4212 27.7078 11.0387 27.6785 11.2225 27.2346L13.6703 21.3253" stroke="#333333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
<p class="a_text">Çok Satanlar</p>
</div>
</a>


<a href="https://www.elektrix.com/sepet">
<div class="a_sepet_div">
<div class="a_icon sepet">
<svg width="22" height="23" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.81 2L8.19 5.63" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M18.19 2L21.81 5.63" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M5 7.8501C5 6.0001 5.99 5.8501 7.22 5.8501H22.78C24.01 5.8501 25 6.0001 25 7.8501C25 10.0001 24.01 9.8501 22.78 9.8501H7.22C5.99 9.8501 5 10.0001 5 7.8501Z" stroke="black" stroke-width="1.5"></path>
<path d="M12.76 14V17.55" stroke="black" stroke-width="1.5" stroke-linecap="round"></path>
<path d="M17.36 14V17.55" stroke="black" stroke-width="1.5" stroke-linecap="round"></path>
<path d="M6.5 10L7.91 18.64C8.23 20.58 9 22 11.86 22H17.89C21 22 21.46 20.64 21.82 18.76L23.5 10" stroke="black" stroke-width="1.5" stroke-linecap="round"></path>
</g>
<defs>
<filter id="filter0_d_8_656" x="-1" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
<feOffset dy="4"></feOffset>
<feGaussianBlur stdDeviation="2"></feGaussianBlur>
<feComposite in2="hardAlpha" operator="out"></feComposite>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_656"></feBlend>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_656" result="shape"></feBlend>
</filter>
</defs>
</svg>

<p class="a_text sepet">Sepetim</p>

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


<a href="https://www.elektrix.com/uye-girisi-sayfasi">
<div class="a_icon">
<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<p class="a_text">Hesabım</p>
</div>

</a>

</div>

`;

const a_navbar = document.createElement("div");
a_navbar.classList.add("a_navbar");

const a_body = document.querySelector("body");
a_body.appendChild(a_navbar);

a_navbar.insertAdjacentHTML("afterbegin", a_new_html);

// side bar
const mainDiv = document.querySelector("#mainWrapper");
const a_sidebar = document.querySelector("#mobileMenu");
const a_sidebar_icon = document.querySelector(".a_icon.sidebar");

a_sidebar_icon.addEventListener("click", function () {
  a_sidebar.style.zIndex = "999999";
  console.log("tıklandı");

  a_sidebar.classList.add("animate");
  mainDiv.classList.add("menuShow");
  mainDiv.classList.add("animate");
});

//wp
const wp_icon = document.querySelector(".whatsapp-floating-button");
wp_icon.style.display = "none";

//search
const a_search = document.querySelector("#mobileSearch");
const abc = document.querySelector(".contentWrapper.col.col-12");
abc.insertAdjacentElement("afterbegin", a_search);

const a_icon = document.querySelector(".a_icon.search");
const liveSearchInput = document.querySelector(
  ".box.col-12.btn-radius.arakelime.withPlace"
);

a_icon.addEventListener("click", function () {
  liveSearchInput.click(); // Inputa tıklama işlemi
});

const anatomi_head = document.querySelector("head");
anatomi_head.insertAdjacentHTML("afterbegin", anatomi_style);