const a_style_new = `
  <style>
  .a_new_container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 296px;
    background: #ffffff;
    z-index: 99999;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}
.a_title {
    display: flex;
    justify-content: center;
    font-size: 17px;
    font-weight: 700;
    color: #333333;
    margin-top: 20px;
    gap: 10px;
    border-bottom: 1px solid #EEEEEE;

}
.a_product{
    display: flex;
    justify-content: center;
    align-items: center;
}

.a_product_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

  </style>
`;

const a_new_html = `<div class="a_title">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.138 17.931C4.138 19.0717 5.06628 20 6.20696 20C7.34765 20 8.27593 19.0717 8.27593 17.931C8.27593 16.7903 7.34765 15.8621 6.20696 15.8621C5.06628 15.8621 4.138 16.7903 4.138 17.931ZM6.89662 17.931C6.89662 18.311 6.58696 18.6207 6.20696 18.6207C5.82697 18.6207 5.51731 18.311 5.51731 17.931C5.51731 17.551 5.82697 17.2414 6.20696 17.2414C6.58696 17.2414 6.89662 17.551 6.89662 17.931Z" fill="#333333"/>
<path d="M16.5518 17.931C16.5518 16.7903 15.6235 15.8621 14.4828 15.8621C13.3422 15.8621 12.4139 16.7903 12.4139 17.931C12.4139 19.0717 13.3422 20 14.4828 20C15.6235 20 16.5518 19.0717 16.5518 17.931ZM13.7932 17.931C13.7932 17.551 14.1028 17.2414 14.4828 17.2414C14.8628 17.2414 15.1725 17.551 15.1725 17.931C15.1725 18.311 14.8628 18.6207 14.4828 18.6207C14.1028 18.6207 13.7932 18.311 13.7932 17.931Z" fill="#333333"/>
<path d="M2.13793 1.37931C2.22345 2.19379 3.17517 11.2338 3.32207 12.6303C3.4331 13.6862 4.31793 14.4828 5.38 14.4828H16.1269C17.0959 14.4828 17.9469 13.7945 18.1503 12.8469L19.8069 5.11655C19.8945 4.70689 19.7938 4.28552 19.5303 3.96069C19.2669 3.63517 18.8759 3.44827 18.4572 3.44827H3.74276L3.44483 0.617931C3.40758 0.266207 3.11172 0 2.75862 0H0.689655C0.308965 0 0 0.308965 0 0.689655C0 1.07034 0.308965 1.37931 0.689655 1.37931H2.13793ZM18.4572 4.82758L16.8014 12.5579C16.7331 12.8738 16.4496 13.1034 16.1262 13.1034H5.38C5.02551 13.1034 4.73103 12.8379 4.69379 12.4862L3.88758 4.82758H18.4572Z" fill="#333333"/>
</svg>
<p>Sepetinde Bıraktığın Ürünleri Unutma!</p>
</div>

<div class='a_product_container'>
<ul class="product_list">


</ul>
</div>

`

fetch('https://www.elektrix.com/sepet')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })

    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        console.log(doc);
        const productListItems = doc.querySelectorAll('.box.col-12.d-flex.line-top.productRow');
        
        let products = [];
        productListItems.forEach((item, index) =>{
            if(index <= 2){
        
                const product = {
                    img: item.querySelector('.fl.image-wrapper').src,
                    title: item.querySelector('.fl.col-12.text-description').innerText,
                    price: item.querySelector('.fl.col-12.text-custom-pink.text-bold.text-center').textContent.trim(),
                  
                };
                
                products.push(product)
            }
        });

    // Add products to the list
    const productList = document.querySelector('.product_list');
    products.forEach((product) => {
        console.log(product);
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div class='a_product'>
          <div class='a_product_img'>
              <img src='${product.img}'>
          </div>
          <div class='a_product_info'>
            <p class="a_title">${product.title}</p>
            <div class="a_price">
              <p class="new_price">${product.price}</p>
            </div>
        
           </div>
  
        </div>
      `;
      productList.appendChild(listItem);
    });


console.log(products);
        
    })
const a_new_container = document.createElement('div');
a_new_container.classList.add('a_new_container');

const a_body = document.querySelector('body');
a_body.appendChild(a_new_container);

a_new_container.insertAdjacentHTML('afterbegin', a_new_html);

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style_new);
