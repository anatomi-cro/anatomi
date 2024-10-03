    const a_style = `
    <style>
    .anatomi_buton{
        width: 80%;
        display: flex;
    }
    .container_icon{
        width: 20%;
        background-color: #3173ff;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .sticky_container{
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        align-items: center !important;
        justify-content: center !important;
        padding-bottom: 10px;
        padding-top: 10px;
        box-shadow: 0px 1px 40px -9px rgb(0 0 0 / 20%);
        z-index: 999;
        height:55px;
        right: 0px !important;
        background-color: #3173ff !important;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    </style>
`


function getElement(a_class, status){
    return status ? document.querySelector(a_class) : document.querySelectorAll(a_class);
}

// Burada butona ve ikona bir üst parent divi oluşturup içine kendilerini appendledim

const a_container = document.createElement('div'); 
a_container.classList.add("sticky_container");
const container = getElement(".btn-solid", false);
container[0].classList.add("anatomi_buton");
a_container.appendChild(container[0].cloneNode(true)); 
container[0].parentNode.replaceChild(a_container, container[0]);


const head = getElement('head', true);
head.insertAdjacentHTML(`beforeend`, a_style);
    
const html = `
    
        <div class = "container_icon">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11C22 11.2557 21.8925 11.5117 21.6777 11.707L10.6777 21.7069C10.2479 22.0977 9.55189 22.0977 9.12234 21.7069C8.69279 21.3162 8.69252 20.6834 9.12234 20.2929L19.3446 11L9.12234 1.70705C8.69252 1.31631 8.69252 0.683558 9.12234 0.29306C9.55216 -0.0974368 10.2482 -0.0976866 10.6777 0.29306L21.6777 10.293C21.8925 10.4883 22 10.7443 22 11ZM12.8777 10.293L1.87776 0.29306C1.44794 -0.0976868 0.751917 -0.0976868 0.322368 0.29306C-0.107181 0.683807 -0.107456 1.31656 0.322368 1.70705L10.5446 11L0.322368 20.2929C-0.107456 20.6837 -0.107456 21.3164 0.322368 21.7069C0.752191 22.0974 1.44821 22.0977 1.87776 21.7069L12.8777 11.707C13.0925 11.5117 13.2 11.2557 13.2 11C13.2 10.7443 13.0925 10.4883 12.8777 10.293Z" fill="white"/>
        </svg>
           </div>
    
`

a_container.insertAdjacentHTML('beforeend', html);