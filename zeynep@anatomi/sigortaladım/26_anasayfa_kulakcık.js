const style =`
    <style>       
        .formaGit{
            display: block;
            position: fixed;
            bottom: 0;
            z-index: 9999999;
            left: auto;
            top: 90%;
            cursor:pointer;
        }
        
        .a_icon{
            height: 58px;
            box-shadow: rgba(0,0,0,.5) 0 3px 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            user-select: none;
            position: absolute;
            background-color: #fff;
            margin-left: 20px;
            width: 233px;
            border-radius: 7px;
            z-index: 99999;
            background: #3074FF;
            gap: 7px;
        }
    
        

        
        .alarmText{
            text-align: center;
            width: 70%;
            color: white;
            font-weight: 600;
        }
        
@media only screen and (max-width: 400px) {
  .a_icon {
    height: 50px;
    width: 150px;
    font-size: 12px;
}

    </style>
    
`
let sigortaIconAdded = false; // sigortaIconContainer henüz eklenmedi
const HTML = `
  <a href="https://www.sigortaladim.com/trafik-sigortasi" class="formaGit">
    <div class="a_icon">
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_9_37" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="21">
    <path d="M0 0H21V21H0V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_9_37)">
    <path d="M11.2793 3.97852H2.25586C1.34974 3.97852 0.615234 4.71302 0.615234 5.61914V18.7441C0.615234 19.6503 1.34974 20.3848 2.25586 20.3848H15.3809C16.287 20.3848 17.0215 19.6503 17.0215 18.7441V9.7207" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.1445 3.17572L10.8638 12.4564L7.9635 13.0365L8.54354 10.1363L17.8243 0.855504C18.1446 0.535172 18.6641 0.535172 18.9844 0.855504L20.1445 2.01563C20.4649 2.33596 20.4649 2.85534 20.1445 3.17572Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.6642 2.01561L18.9844 4.33578" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    </svg>
      <p class="alarmText">Trafik Sigortası Teklifi Al!</p>
    </div>
  </a>
`;



document.querySelector('body').insertAdjacentHTML('afterbegin',HTML);
const iconContainer = document.querySelector(`.formaGit`)
iconContainer.addEventListener("click", () => {
  window.dataLayer.push({
    event: "20_click",
  });
});

// Sayfa %20 scroll edildiğinde 
// Sayfa yüksekliğinin %20'si için kaydırma konumunu hesaplayın
const scrollThreshold = window.innerHeight * 0.2;

function toggleElementVisibility() {
  const iconContainer = document.querySelector('.formaGit');
  if (window.scrollY >= scrollThreshold) {
    iconContainer.style.display = 'block';
  } else {
    iconContainer.style.display = 'none';
  }
}

toggleElementVisibility();
window.addEventListener('scroll', toggleElementVisibility);

const head = document.querySelector('head');
head.insertAdjacentHTML("beforeend", style);