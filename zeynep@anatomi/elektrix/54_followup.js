const a_style = `<style>
.anatomi_product_container{
    height: auto;
    display: flex;
    flex-direction: column;
    
}
.product_list{
    display: flex;
    overflow-x: scroll;
    flex-wrap: nowrap;
}
.product{
    flex: 0 0 auto;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border: 1px #F5F5F5 solid;
    width: 42%;
    align-items: start !important;
}
.a_title{
    margin: 15px 0px;
    padding: 0px !important;
}
.a_title p {
    padding: 0px !important;
    font-weight: 700 !important;
    font-size: 14px !important;
}

.product_list li{
    list-style-type:none;


}
.a_btn{
    border: 1px solid #0581BF;
    padding: 6px 0px !important;
    border-radius: 3px;
    text-align: center;
    font-weight: 600;
}
.new_price{
    font-weight: 700;
    font-size: 15px;

}
</style>`

const a_html = `

<div class="anatomi_product_container">
    <div class="a_title">
    <p>
    Bu Ürünlere de Göz Atabilirsiniz!
    </p>
    </div>
    <div class="product_list">
    
   
    </div>
</div>

`
const body = document.querySelector('body');

const mutationObserver = new MutationObserver(entries => {
    entries.forEach(entry => {
      // Eğer eklenen öğe bir cartPopup ise
      if (entry.target.lastChild.className == "pWrapper" && entry.addedNodes.length > 0) {
        // Bu blok sadece cartPopup eklediğinizde çalışır
        const anatomi_container = document.querySelector('.anatomiSepetContainer');
        anatomi_container.insertAdjacentHTML('beforeend', a_html);


fetch('https://www.elektrix.com/firsat-urunleri')
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
        const productListItems = doc.querySelectorAll('.col.col-12.p-right.mb');
        
        let products = [];
        productListItems.forEach((item, index) =>{
            if(index < 8){
                const imgElement = item.querySelector('.imgInner img');
                
                const imgSrc = imgElement ? imgElement.getAttribute('data-src') : '';
                console.log("element :" + imgElement);
         

                const a_button = item.querySelector('a.image-wrapper.fl.detailLink');
                const product = {
                    img: imgSrc,
                    title: item.querySelector('.col.col-12.text-description.detailLink.blockTitleProduct.text-center').innerText,
                    price: item.querySelector('.currentPrice').textContent.trim(),
                    button: a_button,
                  
                };
                product.button.classList.add('a_btn');
                product.button.textContent = 'Ürünü İncele';
                products.push(product)
            }
        });

    // Add products to the list
    const productList = document.querySelector('.product_list');
    products.forEach((product) => {
        console.log(product);
      const listItem = document.createElement('li');
      listItem.classList.add('product')
      listItem.innerHTML = `

          <div class='a_product_img'>
              <img src='${product.img}'>
          </div>
          <div class='a_product_info'>
            <p class="p_title">${product.title}</p>
            <div class="a_price">
              <p class="new_price">${product.price}</p>
            </div>
           </div>
           ${product.button.outerHTML}

      `;
      productList.appendChild(listItem);
    });

// title a ekiteki link vermek
// const productContainers = document.querySelectorAll('.product');

//     productContainers.forEach(function(productContainer) {
//         const inceleLink = productContainer.querySelector('a.a_btn');
//         const aTitle = productContainer.querySelector('.p_title');
      
//         if (inceleLink && aTitle) {
//           inceleLink.href = aTitle.href;
//         }
//       });


        // 3 nokta
// Tüm .a_product_info p öğelerini seçin

const productInfo = document.querySelectorAll('.p_title');

// Her bir p öğesini döngü içinde işleyin
productInfo.forEach(item => {
  // Metni kelimelere ayır
  const words = item.textContent.trim().split(' ');

  // İlk 4 kelimeyi alın
  const firstFourWords = words.slice(0, 4).join(' ');

  // Eksik kelimeleri ve üç noktayı ekleyin
  const abbreviatedText = firstFourWords + (words.length > 4 ? ' ...' : '');

  // Metni güncelleyin
  item.textContent = abbreviatedText;
});

})

}
});
});

mutationObserver.observe(body, {
    childList: true, // Alt öğelerdeki değişiklikleri izlemeyi kapat
    attributes: true, // Özelliklerdeki değişiklikleri izlemeyi aç
});





const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);