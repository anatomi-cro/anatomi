const a_style = `
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
    z-index: 3;
    cursor: pointer;
}

.altContainer{
    display: none;
}

.anatomiSepetContainer{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
`


const btnContainer = document.querySelector('.anatomiSepetContainer')
const sizes = document.querySelectorAll('.cl-custom-selectbox.form-control option')

const container_size = document.querySelector('.cl-attributes')
container_size.style.display = "none";

const info_container = document.querySelector('.cl-product-info .cl-product-prices')
info_container.style.display = "none";


function activeOverlay() {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".a_size_container").style.display = "block";
}

const anatomiBtnContainer = `
    <div class="a_container">
        <button class="a_btn" type="button">
            Beden Seç
        </button>
    </div>
    `


//a_size

function anatomiSelectSize(event) {
    let userSelectedValue = event.target.innerText;
    Array.from(sizes).forEach(item => {
        if (item.innerText == userSelectedValue) {
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


//overlay
function closeOverlay() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".a_size_container").style.display = "none";
}
const overlay = `<div class="overlay" style="display: none"></div>`



btnContainer.insertAdjacentHTML('beforeend', anatomiBtnContainer)

//a_btn click
const anatomi_btn = document.querySelector('.a_btn')
anatomi_btn.addEventListener('click', () => {
    activeOverlay();

})


//a_size

btnContainer.insertAdjacentHTML('afterbegin', anatomiSizeContainer);

const anatomi_sizes = document.querySelectorAll('.a_size'); // Tüm .a_size öğelerini seçin

anatomi_sizes.forEach(anatomi_size => {
    anatomi_size.addEventListener('click', (event) => {
        anatomiSelectSize(event);
    });
});

//overlay
btnContainer.insertAdjacentHTML('beforebegin', overlay)
const anatomi_overlay = document.querySelector('.overlay')
anatomi_overlay.addEventListener('click', () => {
    
    closeOverlay();

})
document.querySelector('head').insertAdjacentHTML('beforeend', a_style)