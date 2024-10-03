const a_style = `<style>
.product_detail_img{
    position:relative !important;
}
.a_wording{
    position: absolute;
    top: 38px;
    background: red;
    width: 100%;
    height: 18px;
    color: white;
    font-size: 12px;
    text-align: center;
    padding-top: 3px;
}

}


</style>`

// Tüm .uk-select.quantity elementlerini seçin
const selectElements = document.querySelectorAll(".uk-select.quantity");

// Her bir element için döngü oluşturun
selectElements.forEach((selectElement) => {
    // Her bir elementin data-count değerini alın
    const dataCount = parseInt(selectElement.getAttribute("data-count"), 10);

    // Eğer data-count seçenek sayısından 1 eksikse, her ürünün yanına "Son 1 ürün" yazısını ekleyin
    if (dataCount === selectElement.options.length - 1) {
        const productDetailContainer = selectElement.closest('.uk-flex.product-detail');
        const productImages = productDetailContainer.querySelectorAll('a.image');
        productImages.forEach(item =>{
            item.classList.add('product_detail_img')
        })
        productImages.forEach((item) => {
            const a_html = `
            <div class="a_wording">
            <p>Son 1 Ürün!</p>
            </div>
            `;
            item.insertAdjacentHTML('afterbegin', a_html);
        });
    }
});


const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);