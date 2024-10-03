const a_style = `
<style>
.anatomi_box{
    top: -139px !important;
}
.a_container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    border:1px solid #2948E8;
    border-radius: 8px;
}
.a_icon{
    width:10%;
    background-color: #2948E8;
    border-radius: 7px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;

}
.a_icon svg{
    width:100%;
    padding: 3px;

}

.a_text{
    width: 90%;
    display:flex;
    align-items: center;
    justify-content: center;
    
}
.a_text p{
    margin: 0 !important;
}

.a_divContainer{
    display:flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 20px;
}
.a_span{
    margin: 0 !important;
    width: 30%;

}
</style>
`




// ----------
//bedeb tablosunun içindeki bedenleri seciyorum
const sizes = document.querySelectorAll(".uk-checkbox.has");
let outOfStockSizes = 0;


for (let i = 0; i < sizes.length; i++) {
    if(sizes[i].disabled === true) {
        // tükenmiş ürünlerin sayısını tutar.
        outOfStockSizes++;
    }
}
// tükenmiş bedenlerin yüzdesi hesaplanır ve eğer tükenmiş bedenlerin yüzdesi tükenmeyen bedenlerden fazlaysa bir uyarı verilir.
const outOfStockPercent = (outOfStockSizes / sizes.length) * 100;
console.log(outOfStockPercent);

if (outOfStockPercent >= 30) {
//   console.log("Ürün bedenlerinin %50 si tükenmiş");

const a_html = `
<div class='a_container'>
<div class='a_icon'>
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.7956 3.94159L13.9208 2.06673C13.6483 1.79423 13.2065 1.79423 12.934 2.06673C12.6616 2.33924 12.6615 2.78102 12.934 3.05349L13.3781 3.49754L12.4675 4.40817C11.282 3.41925 9.84071 2.82226 8.30322 2.6833V1.3955H8.93119C9.31656 1.3955 9.62894 1.08312 9.62894 0.697749C9.62894 0.312382 9.31656 0 8.93119 0H6.27974C5.89438 0 5.58199 0.312382 5.58199 0.697749C5.58199 1.08312 5.89438 1.3955 6.27974 1.3955H6.90772V2.6833C3.07973 3.02924 0 6.24374 0 10.2569C0 14.4602 3.40156 17.8624 7.60547 17.8624C11.8088 17.8624 15.2109 14.4608 15.2109 10.2569C15.2109 8.45983 14.5915 6.75819 13.4542 5.39493L14.3648 4.48429L14.8089 4.92834C15.0814 5.20081 15.5231 5.20085 15.7956 4.92834C16.0681 4.65587 16.0681 4.21409 15.7956 3.94159ZM7.60547 16.4669C4.1813 16.4669 1.3955 13.6811 1.3955 10.2569C1.3955 6.83274 4.1813 4.04695 7.60547 4.04695C11.0296 4.04695 13.8154 6.83274 13.8154 10.2569C13.8154 13.6811 11.0297 16.4669 7.60547 16.4669ZM11.2311 10.2569C11.2311 10.6423 10.9187 10.9547 10.5333 10.9547H7.6055C7.22014 10.9547 6.90775 10.6423 6.90775 10.2569V6.15153C6.90775 5.76616 7.22014 5.45378 7.6055 5.45378C7.99087 5.45378 8.30325 5.76616 8.30325 6.15153V9.55917H10.5333C10.9187 9.55917 11.2311 9.87155 11.2311 10.2569Z" fill="white"/>
    </svg>
</div>
<div class='a_text'>
    <p>Acele Et! Bu Ürün Tükeniyor.</p>
</div>
</div>
`

const anatomi_box = document.querySelector('.uk-dropdown.uk-open');
anatomi_box.classList.add('anatomi_box');
anatomi_box.insertAdjacentHTML('afterbegin',a_html);




const a_divContainer = document.createElement('div');
a_divContainer.classList.add('a_divContainer');
anatomi_box.insertAdjacentElement('afterbegin',a_divContainer );
const a_span = document.querySelectorAll('.uk-text-small.uk-margin-small.uk-display-block');
a_span[1].classList.add('a_span')
a_divContainer.appendChild(a_span[1]);

const a_container = document.querySelector('.a_container');
a_divContainer.appendChild(a_container);
}

// ----------


const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend',a_style);
