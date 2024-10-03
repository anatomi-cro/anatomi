
//MOBİL V2

const style = `
<style>

@media only screen and (max-width: 1024px) {
    .cookie_law{
        // width: 100% !important;
        bottom: 0 !important;
        right: 0 !important;
        left: 0 !important;
        width: calc(100% - 20px);
        height: max-content !important;
        border-radius: 0px !important;
        padding: 10px !important;
        background-color: rgb(51,51,51) !important;
        text-align: center !important;
    }
    .button_group{
        padding-top:20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .btn1{
        border: none;
        text-decoration: underline;
        color:#fffff;
        cursor: pointer;
        font-size: 12px
    }
    .btn2{
        border: none;
        background-color: white;
        width: 100px;
        height: 35px;
        border-radius: 2px;
        color: #333333;
        font-size:12px;
        font-weight: 600;
        cursor: pointer;
    }
    #cookie_law_description{
        font-size: 12px !important;
        color: #E3E3E3;
    
    }
    #cookie_law_title{
        color:#ffffff !important;
    }
}
@media only screen and (min-width: 1024px) {
    .parentDiv {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        /* background: black; */
        filter: opacity(0.);
        background-color: rgba(0, 0, 0, 0.6);
    }
    
    div#cookie_law {
        position: fixed;
        bottom: 0;
        left: 0;
    }
    
    .cookie_law {
        z-index: 9999 !important;
        line-height: 20px !important;
        position: fixed;
        left: 0;
        margin-left: auto;
        margin-right: auto;
        width: 400px !important;
        color: rgba(255,255,255,1) !important;
        text-align: center !important;
        background-color: rgb(51,51,51) !important;
    
        
    }
    
    .button_group{
        padding-top:20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .a_etiket{
        border: none;
        text-decoration: underline;
        color:#C8C8C8;
        cursor: pointer;
        font-size: 14px
    }
    .btn2{
        border: none;
        background-color: white;
        width: 150px;
        height: 35px;
        border-radius: 2px;
        color: #333333;
        font-size:14px;
        font-weight: 600;
        cursor: pointer;
    
    }
    #cookie_law_description{
        font-size: 14px !important;
    
    }
    #cookie_law_title{
        color:#C8C8C8 !important;
    }
}

</style>
`
const parentDiv = document.createElement('div');
const cookieDiv = document.getElementById('cookie_law');
parentDiv.appendChild(cookieDiv.cloneNode(true));
cookieDiv.parentNode.replaceChild(parentDiv, cookieDiv);
parentDiv.classList.add('parentDiv');

const cookie_container = document.querySelector('#cookie_law')
const a_html = `<div class="button_group"><a class="btn1">Daha fazla bilgi edin</a><button class="btn2">Kabul ediyorum</button></div>`
cookie_container.insertAdjacentHTML('beforeend', a_html);
cookie_container.classList.add('cookie_law');
const head = document.querySelector('head');
head.insertAdjacentHTML("beforeend", style);

document.getElementById('cookie_law_close').addEventListener("click", function(){
    cookie_usage.setCookie('cookie_law', 1, (15 * 24 * 60 * 60 * 1000));
    document.getElementById('cookie_law').style.display = 'none';
   const parentDiv_style = document.querySelector('.parentDiv')
   parentDiv_style.style.removeProperty("background-color");
   parentDiv_style.style.backgroundColor = "rgba(0,0,0,0)";
});



//MOBİL V1

const style = `
<style>

@media only screen and (max-width : 1024px){
    .parentDiv {
        position: fixed;
        bottom: 0;ß
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        filter: opacity(0.);
        background-color: rgba(0, 0, 0, 0.6);
        display: flex !important;
        align-items: center;
        justify-content: center;
    }
    
    div#cookie_law {
        position: fixed;
        bottom: 0;
        left: 0;
    }
    
    .cookie_law{
    
        bottom: 0 !important;
        right: 0 !important;
        left: 0 !important;
        width: calc(90% - 20px) !important;
        height: max-content !important;
        border-radius: 20px !important;
        padding: 10px !important;
        background-color: #ffffff !important;
        text-align: center !important;
        top:40%;
        display: flex;
        flex-direction: column;
        margin: 0 auto; 
        justify-content: center;
        align-items: center;
       
    }
    
    
    
    .button_group{
        padding-top:20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .btn1{
        border: none;
        text-decoration: underline;
        color:#333333;
        cursor: pointer;
        font-size: 12px
    }
    .btn2{
        border: none;
        background-color: black;
        width: 100px;
        height: 35px;
        border-radius: 2px;
        color: #ffffff;
        font-size:12px;
        font-weight: 600;
        cursor: pointer;
    }
    #cookie_law_description{
        font-size: 12px !important;
        color: #000000;
        padding-top:40px;
    
    }
    #cookie_law_title{
        color: black !important;
    }
    
    #cookie_law_close{
        color: black !important;
    }
    
    .anatomi_icon_contanier{
        position: absolute;
        top: -34%;
        background-color: white;
        width: 100px;
        border-radius: 50%;
        height: 100px;
        
        background-color: white;
    
    }
    
    
    .svg_style{
        position: absolute;
        left: 16%;
        top: 14%;
    }
    
}

@media only screen and (min-width : 1024px){
    .parentDiv {
        position: fixed;
        bottom: 0;ß
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        filter: opacity(0.);
        background-color: rgba(0, 0, 0, 0.6);
        display: flex !important;
        align-items: center;
        justify-content: center;
    }
    
    div#cookie_law {
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .cookie_law{
     
        bottom: 0 !important;
        right: 0 !important;
        left: 37% !important;
        width: 27% !important;
        height: max-content !important;
        border-radius: 20px !important;
        // padding: 10px !important;
        background-color: #ffffff !important;
        text-align: center !important;
        top:40% !important; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;    
    }
    
    
    
    .button_group{
        padding-top:20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .btn1{
        border: none;
        text-decoration: underline;
        color:#333333;
        cursor: pointer;
        font-size: 12px
    }
    .btn2{
        border: none;
        background-color: black;
        width: 100px;
        height: 35px;
        border-radius: 2px;
        color: #ffffff;
        font-size:12px;
        font-weight: 600;
        cursor: pointer;
    }
    #cookie_law_description{
        font-size: 12px !important;
        color: #000000;
        padding-top:25px;
    
    }
    #cookie_law_title{
        color:#ffffff !important;
    }
    
    #cookie_law_close{
        color:black !important;
    }
    
    .anatomi_icon_contanier {
        position: absolute;
        top: -34%;
        background-color: white;
        width: 100px;
        border-radius: 50%;
        height: 100px;
        background-color: white;
    }
    
    
    .svg_style{
        position: absolute;
        left: 16%;
        top: 14%;
    }
    

}
</style>
`

const parentDiv = document.createElement('div');
const cookieDiv = document.getElementById('cookie_law');
parentDiv.appendChild(cookieDiv.cloneNode(true));
cookieDiv.parentNode.replaceChild(parentDiv, cookieDiv);
parentDiv.classList.add('parentDiv');
const cookie_test = document.querySelector('#cookie_law');
cookie_test.insertAdjacentHTML('afterbegin', `
<div class = "anatomi_icon_contanier">
<svg width="70" height="70" viewBox="0 0 70 70" fill="none" 'xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7_63)">
<path d="M62.3484 38.0526C62.3484 54.5753 48.9524 67.9698 32.4297 67.9698C28.3765 67.9698 24.5124 67.164 20.9886 65.7028C11.3557 61.7128 4.26051 52.8361 2.7936 42.1643C2.60756 40.8207 2.51245 39.4474 2.51245 38.0526C2.51245 21.5283 15.9069 8.13379 32.4297 8.13379C48.9524 8.13379 62.3484 21.5283 62.3484 38.0526Z" fill="white"/>
<path d="M66.0833 35.8403L48.9988 47.1533C47.7817 47.9596 46.3075 48.2795 44.8662 48.049C43.4217 47.8191 41.9438 48.1347 40.7236 48.9426L38.4373 50.4576L25.6333 31.5843L28.7746 18.0131C29.0192 16.957 29.1399 15.8862 29.1399 14.8196C29.1399 12.0603 28.333 9.33659 26.7851 6.99852C26.4046 6.42368 26.2228 5.77305 26.2228 5.13131C26.2228 4.03335 26.7553 2.95681 27.7393 2.30515C29.0657 1.42615 30.8237 1.58972 31.9655 2.69709L34.0005 4.6683C36.3281 6.92641 38.1232 9.67575 39.2509 12.7162L40.3547 15.6871L51.7184 8.17905C53.5333 6.97762 55.989 7.50282 57.1475 9.36168C58.2654 11.1526 57.6916 13.5189 55.9304 14.6848C55.909 14.6989 55.908 14.7214 55.9148 14.7386C55.9247 14.7569 55.9461 14.77 55.9702 14.76C56.4191 14.5865 56.8889 14.5029 57.355 14.5029C58.0987 14.5029 58.836 14.7172 59.4668 15.1248C59.9011 15.4059 60.2857 15.7796 60.5898 16.2379C61.1762 17.1242 61.3513 18.1637 61.1595 19.1294C60.8579 20.6517 59.7521 21.4356 59.5347 21.5835C59.4976 21.6091 59.4877 21.6598 59.5133 21.6985C59.5133 21.7 59.5149 21.7011 59.5164 21.7011C59.5405 21.7356 59.5901 21.7455 59.6257 21.7225C59.935 21.6472 60.2502 21.6117 60.5658 21.6117C61.3351 21.6117 62.1007 21.8307 62.7513 22.2451C63.1913 22.5262 63.5806 22.8983 63.8816 23.354C65.0632 25.1376 64.5746 27.542 62.7894 28.7236C62.7455 28.7534 62.7016 28.7832 62.6577 28.8114C62.6321 28.8318 62.6248 28.8642 62.6379 28.8872C62.6405 28.8924 62.6462 28.8982 62.652 28.9013C62.6718 28.917 62.7032 28.918 62.7288 28.8982C63.8377 28.5203 65.0449 28.6923 66.0164 29.3215C66.4638 29.6084 66.8599 29.9946 67.1734 30.4691C68.355 32.2548 67.8669 34.6587 66.0833 35.8403Z" fill="#FDD7BD"/>
<path d="M38.6008 54.0394L31.3938 58.8123L20.9885 65.7031C11.3556 61.7126 4.26037 52.8364 2.79346 42.1641L14.8689 34.1675L22.2197 29.2995C23.0658 28.7383 24.2076 28.9713 24.7684 29.819L39.1202 51.4887C39.6815 52.3368 39.4484 53.4771 38.6008 54.0394Z" fill="#333333"/>
<path d="M38.601 54.0395L31.394 58.8123L14.8691 34.1675L22.2199 29.2995C23.066 28.7383 24.2078 28.9713 24.7686 29.819L39.1204 51.4887C39.6817 52.3369 39.4486 53.4771 38.601 54.0395Z" fill="#333333"/>
<path d="M59.4669 15.1251L53.7821 18.167C52.9753 18.5977 51.9756 18.3729 51.4331 17.6387L55.9148 14.7389C55.9248 14.7577 55.9462 14.7702 55.9702 14.7603C56.4191 14.5868 56.8889 14.5032 57.3551 14.5032C58.0993 14.5032 58.8361 14.718 59.4669 15.1251Z" fill="#FAC5AA"/>
<path d="M62.7514 22.2459L57.1905 25.2195C56.3836 25.6511 55.3839 25.4269 54.8414 24.6927L59.3232 21.7928L59.5165 21.7019C59.5406 21.7364 59.5902 21.7463 59.6257 21.7233C59.9356 21.6481 60.2508 21.6125 60.5659 21.6125C61.3357 21.6125 62.1013 21.831 62.7514 22.2459Z" fill="#FAC5AA"/>
<path d="M66.0165 29.3224L61.1183 31.9427C60.3135 32.3728 59.3133 32.1486 58.7698 31.4143L62.6521 28.9023C62.672 28.9179 62.7033 28.919 62.7289 28.8991C63.8379 28.5213 65.045 28.6932 66.0165 29.3224Z" fill="#FAC5AA"/>
<path d="M68.0619 29.8817C67.3517 28.8094 66.2751 28.0704 65.0235 27.7903C65.8309 26.2461 65.798 24.3193 64.7696 22.7667C64.0379 21.6614 62.9342 20.9475 61.7328 20.6774C61.9471 20.2687 62.1054 19.8276 62.2 19.3625C62.4623 18.0691 62.2063 16.7511 61.4773 15.6511C60.7671 14.5782 59.6905 13.8393 58.4389 13.5597C59.2463 12.0154 59.2134 10.0886 58.1849 8.53551C56.6815 6.26485 53.6097 5.64036 51.3385 7.14437L46.4209 10.4012C43.7996 9.07168 41.0116 8.12841 38.118 7.59119C37.2035 6.20267 36.14 4.91187 34.9496 3.75799L32.9151 1.78626C31.4252 0.341822 29.0887 0.124947 27.3589 1.27099C25.3125 2.62606 24.7502 5.3937 26.1053 7.44016C26.1586 7.52116 26.2108 7.60268 26.2626 7.68421C19.5938 9.03353 13.5161 12.5725 9.01762 17.7582C4.13611 23.3859 1.44739 30.5935 1.44739 38.0529C1.44739 39.4827 1.54511 40.9152 1.73847 42.3094C3.22837 53.1485 10.4485 62.4892 20.5804 66.6872C24.3379 68.2445 28.3247 69.0347 32.4286 69.0347C38.928 69.0347 45.1495 67.0441 50.4208 63.2789C55.5777 59.5946 59.436 54.5103 61.5792 48.5758C61.7793 48.0229 61.4924 47.412 60.9395 47.2124C60.3861 47.0127 59.7757 47.2991 59.5761 47.8525C57.5803 53.3789 53.9865 58.1136 49.1823 61.5454C44.2747 65.0515 38.4812 66.9046 32.4286 66.9046C29.2993 66.9046 26.2437 66.4108 23.3193 65.4366L31.9849 59.6981C31.9854 59.6976 31.986 59.6976 31.9865 59.697C31.987 59.697 31.987 59.6965 31.9875 59.696L39.1893 54.9268H39.1899C39.8363 54.4983 40.2779 53.844 40.4326 53.0837C40.5873 52.3233 40.4368 51.5478 40.0082 50.9013L39.9131 50.7571L41.3121 49.8305C42.3102 49.1695 43.5106 48.9103 44.6927 49.1C46.4042 49.3748 48.1423 48.9986 49.5868 48.0417L61.1904 40.3576C61.1109 41.3641 60.9803 42.3648 60.7979 43.3489C60.6902 43.9274 61.0723 44.4834 61.6508 44.5905C61.7161 44.6031 61.7819 44.6088 61.8462 44.6088C62.3495 44.6088 62.7968 44.2503 62.8919 43.7377C63.1872 42.1495 63.357 40.5227 63.4009 38.8938L66.6708 36.7282C67.7708 35.9997 68.5218 34.886 68.7841 33.5932C69.047 32.2998 68.7904 30.9818 68.0619 29.8817ZM44.353 11.7703L41.0989 13.9255L40.4582 12.1994C40.1906 11.4793 39.8839 10.7732 39.5442 10.0824C41.195 10.501 42.8025 11.0654 44.353 11.7703ZM10.6267 19.154C14.9501 14.1701 20.8391 10.8197 27.2816 9.65803C28.3153 12.1623 28.563 14.9602 27.9453 17.627L25.3485 28.8454C24.9404 28.4096 24.4105 28.1091 23.8137 27.9879C23.0528 27.8327 22.2778 27.9837 21.6314 28.4122L14.2759 33.2827C14.2754 33.2827 14.2754 33.2827 14.2749 33.2833C14.2749 33.2833 14.2743 33.2833 14.2743 33.2838L3.66578 40.309C3.60777 39.5606 3.57746 38.8065 3.57746 38.0529C3.57746 31.1067 6.08119 24.3945 10.6267 19.154ZM38.3454 52.6588C38.3041 52.8616 38.186 53.0366 38.013 53.1511H38.0135L31.6881 57.3396L19.9481 39.8313C19.6204 39.3427 18.9588 39.2126 18.4702 39.5402C17.9821 39.8679 17.8515 40.529 18.1791 41.0176L29.9118 58.516L20.882 64.496C11.9091 60.5713 5.48805 52.2831 3.94432 42.6387L14.5654 35.6281L15.7878 37.452C15.9937 37.7582 16.3302 37.9239 16.6736 37.9239C16.8774 37.9239 17.0838 37.8659 17.2657 37.7436C17.7543 37.4159 17.8849 36.7543 17.5573 36.2657L16.3433 34.4549L22.8077 30.188C22.9796 30.0735 23.1861 30.0338 23.3888 30.0751C23.5916 30.1164 23.7667 30.2345 23.8811 30.4069L38.2325 52.0777C38.3464 52.2496 38.3866 52.456 38.3454 52.6588ZM66.6969 33.1688C66.5474 33.9046 66.1205 34.538 65.4944 34.9524L61.7563 37.4279C61.7553 37.4284 61.7542 37.4295 61.7527 37.43L48.4104 46.266C47.4123 46.927 46.2119 47.1868 45.0298 46.9965C43.3188 46.7222 41.5807 47.0979 40.1357 48.0548L38.7368 48.9813L26.9827 31.2326L30.021 18.1078C30.8033 14.7266 30.391 11.1652 28.9006 8.06256C28.887 8.03016 28.8724 7.99881 28.8556 7.96797C28.5693 7.38163 28.2442 6.81253 27.881 6.26381C27.1745 5.19668 27.4676 3.75381 28.5353 3.04675C29.4373 2.44943 30.656 2.5623 31.4325 3.31536L33.467 5.28761C35.6676 7.42134 37.3948 10.0677 38.4608 12.9409L39.5687 15.9254C39.5708 15.9312 39.5729 15.9359 39.575 15.9411C39.5776 15.9479 39.5808 15.9552 39.5834 15.962C39.5912 15.9803 39.5985 15.997 39.6064 16.0112C39.6278 16.0561 39.6513 16.1005 39.6795 16.1428C40.0046 16.6336 40.6651 16.7679 41.1553 16.4428L52.5148 8.92066C53.8067 8.06518 55.5537 8.42001 56.4092 9.71186C57.2647 11.0037 56.9098 12.7507 55.618 13.6062L54.6319 14.2594C54.6319 14.2594 54.6313 14.2594 54.6308 14.26L52.4312 15.7169C52.4281 15.719 52.426 15.7211 52.4229 15.7227C52.4103 15.7316 52.3983 15.7399 52.3884 15.7483C51.9337 16.0822 51.8161 16.7172 52.1313 17.1927C52.4558 17.6834 53.1169 17.8177 53.6076 17.4927L55.8087 16.0347C56.4343 15.6213 57.1831 15.4755 57.9184 15.625C58.6537 15.7744 59.2876 16.2014 59.7015 16.8274C60.1159 17.453 60.2622 18.2029 60.1128 18.9382C59.9633 19.674 59.5364 20.3074 58.9103 20.7218L55.7235 22.8325C55.2328 23.157 55.0985 23.8176 55.4236 24.3083C55.6284 24.6177 55.9671 24.7854 56.3125 24.7854C56.5142 24.7854 56.7186 24.7279 56.8994 24.6083L57.3927 24.2817L59.0995 23.1513C60.3918 22.2958 62.1383 22.6507 62.9938 23.9425C63.8493 25.2349 63.4944 26.9814 62.2026 27.8374L60.6108 28.8914C60.6024 28.8966 60.5941 28.9024 60.5857 28.9081L59.0159 29.9476C58.5252 30.2721 58.3908 30.9332 58.7159 31.4239C58.9207 31.7333 59.2594 31.901 59.6048 31.901C59.8065 31.901 60.0109 31.8435 60.1917 31.7239L60.685 31.3972C60.685 31.3972 60.685 31.3967 60.6855 31.3967L62.3923 30.2669C63.0178 29.8525 63.7672 29.7061 64.503 29.8561C65.2389 30.0051 65.8722 30.4325 66.2867 31.0581C66.7005 31.6836 66.8463 32.4335 66.6969 33.1688Z" fill="#333333"/>
</g>
<defs>
<clipPath id="clip0_7_63">
<rect width="68.4968" height="68.4968" fill="white" transform="translate(0.778564 0.537842)"/>
</clipPath>
</defs>
</svg>

    </div>
</div>
`)
const svgtagName = document.querySelector('.anatomi_icon_contanier svg').classList.add('svg_style');
document.querySelector('#cookie_law_title').remove();
const a_html = `<div class="button_group"><a class="btn1">Daha fazla bilgi edin</a><button class="btn2">Kabul ediyorum</button></div>`
cookie_test.insertAdjacentHTML('beforeend', a_html);
const yenidiv = document.querySelector('#cookie_law');
yenidiv.classList.add('cookie_law');
const cookie = document.querySelector(`.cookie_law`)
cookie.style.display = null
const head = document.querySelector('head');
head.insertAdjacentHTML("beforeend", style);


document.getElementById('cookie_law_close').addEventListener("click", function(){
    cookie_usage.setCookie('cookie_law', 1, (15 * 24 * 60 * 60 * 1000));
    document.getElementById('cookie_law').style.display = 'none';
    const parentDiv_style = document.querySelector('.parentDiv')
    parentDiv_style.style.removeProperty("background-color");
    parentDiv_style.style.backgroundColor = "rgba(0,0,0,0)";
});


