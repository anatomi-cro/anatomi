
const style = `
    <style>
        .a_container {
            width: 100%;
            display: grid;
            gap: 8px;
        }
        button.a_btn {
            padding: 13px;
            border-radius: 8px;
            background-color: #3C893D;
            color: white;
            border: none !important;
            border-color: transparent;
            font-size: 18px;
        }
        .a_product_info_container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .a_product_name {
            font-size: 14px;
            width: 290px;
            color: black;
        }
        .a_product_price {
            color: #3C883C;
            font-weight: bold;
        }
        .a_product_discount {
            position: relative;
            color: grey;
            font-size: 12px;
            text-align: end;
            overflow: hidden;
        }
        .a_product_discount::after {
            content: "";
            width: 100%;
            height: 1px;
            background-color: grey;
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(20%, 600%);
        }
        .a_size_container {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 20px;
        }
        .a_size {
            padding: 10px 0;
            border-bottom: 1px solid #DDDDDD;
            cursor: pointer;
        }
        .cl-product-button-container{
            z-index: 5;
        }
        .overlay {
            position: fixed;
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0,0,0,0.6);
            z-index: 1;
            cursor: pointer;
        }
        .active{
            display: block;
        }
    </style>
`



const btnContainer = document.querySelector('.cl-product-button-container')
const productPrice = document.querySelector('.cl-product-last-price')
const productOldPrice = document.querySelector('.cl-product-old-price')
const productName = document.querySelector('.cl-product-title')
const productBadge = document.querySelector('.cl-product-price-badges')
const sizes = document.querySelectorAll('.cl-custom-selectbox.form-control option')
const sizesContainer = document.querySelector('.cl-product-button-container')
const isDiscount = document.querySelector('.cl-product-last-price').innerText < document.querySelector('.cl-product-old-price').innerText

productPrice.style.display = "none"
productOldPrice.style.display = "none"
productName.style.display = "none"
productBadge.style.display = "none"



function activeOverlay() {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".a_size_container").style.display = "block";
}

const anatomiBtnContainer = `
    <div class="a_container">
        <div class="a_product_info_container">
            <div class="a_product_name">${productName.innerText}</div>
            <div class="a_prodcut_price_container">
                <div class="a_product_discount">${isDiscount ? productOldPrice.innerText : ""}</div>
                <div class="a_product_price">${productPrice.innerText}</div>
            </div>
        </div>
        <button class="a_btn" type="button">
            Beden Seç
        </button>
    </div>
    `



    
    function anatomiSelectSize(event) {
        let userSelectedValue = event.target.innerText;
        Array.from(sizes).forEach(item => {
            if (item.innerText.includes(userSelectedValue)) {
                item.selected = true;
                document.querySelector('.add-to-cart-button.cl-big-button').click();
            }
        });
    }
    
    
    const anatomiSizeContainer = `
        <div class="a_size_container" style="display: none">
            ${Array.from(sizes).map(item => {
                return "<div class='a_size'>" + item.innerText + "</div>";
            }).join("")}
        </div>
    `;
    



function closeOverlay() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".a_size_container").style.display = "none";
}

const overlay = `<div class="overlay" style="display: none"></div>`

btnContainer.insertAdjacentHTML('afterbegin', anatomiBtnContainer)

//a_btn click
const anatomi_btn = document.querySelector('.a_btn')
anatomi_btn.addEventListener('click', () => {
    console.log('zeyy');
    activeOverlay();

})


sizesContainer.insertAdjacentHTML('afterbegin', anatomiSizeContainer);

const anatomi_sizes = document.querySelectorAll('.a_size'); // Tüm .a_size öğelerini seçin

anatomi_sizes.forEach(anatomi_size => {
    anatomi_size.addEventListener('click', (event) => {
        console.log('deneme');
        anatomiSelectSize(event);
    });
});





btnContainer.insertAdjacentHTML('beforebegin', overlay)
const anatomi_overlay = document.querySelector('.overlay')
anatomi_overlay.addEventListener('click', () => {
    
    closeOverlay();

})
document.querySelector('.cl-add-to-basket button').style.display = "none"
document.querySelector('head').insertAdjacentHTML('beforeend', style)