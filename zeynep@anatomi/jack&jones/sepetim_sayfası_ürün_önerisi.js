const a_style = `
<style>
.up_title{
    font-size: 20px !important;
    font-weight: 500 !important;
    margin: 40px 0px 10px 0px !important;

}
.a_container{

    display: flex !important;
    gap:10px !important;

}
.a_container ul{
    display: flex;
    overflow-x: auto;
    padding: 10px 0;
    margin: 0 0 0 0 !important;
    gap: 10px;
    align-items: baseline;
    list-style-type:none;
}

.a_product{
    text-align:center !important;
    width: 155px !important;
    height: 100% !important;
}

.a_product_img{
    width: 100% !important;
    height: 100% !important;
    border: 0.5px solid #BBBBBB;

}
.a_product_img img{
    width: 145px !important;
    height: 179px !important;
    width: 100% !important;
    
}

.a_product_info{
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 10px !important;
    padding-top: 15px;
}
.a_title{
    margin: 0px !important;
    height: 40px !important;
    display: flex !important;
    align-items: center !important;
}

.a_price{
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    text-align:center !important;
    gap: 20px !important;
}
.a_price .old_price{
    margin: 0px !important;
    font-size: 11px !important; 
    color: #BBBBBB !important;
    text-decoration:line-through !important;
}
.a_price .new_price{
    margin: 0px !important;
    font-size: 14px !important;
    font-weight:600 !important;
}

.a_alt_product_info{
    display: flex !important;
    justify-content:center !important;
    align-items: center !important;
    gap: 10px !important;

}

.a_beden_box p{
    margin: 0px !important;
    padding: 10px !important;
    olor: #BBBBBB !important;
}
.a_beden_box{
border: 0.5px solid #DDDDDD !important;
}
.a_btn{
    background-color: #1e49f1 !important;
    color: white !important;
    border: 0.5px solid #1e49f1 !important;
    width: 90px !important;
    height: 40px !important;
    display: flex !important;
    align-items: center !important;
    padding-left: 5px !important;
    padding-right: 5px !important;
    font-size: 13px !important;
    justify-content: center !important;
   
}

.anatomi_size{
    position: absolute !important;
    top: 65% !important;
    left: 30% !important;
    z-index: 999 !important;
    background-color: white !important;
    border: 1px solid #1E49F1 !important;
    width: 50% !important;
    padding: 10px !important;
    height: auto !important;
}


</style>
`;

const a_html = `

<h2 class="up_title">En Çok Satanlar</h2>
<div class='a_container'>
<ul class="product_list">

</ul>
</div>
`;

const sepetim = document.querySelector(
  ".uk-grid.uk-grid-small.uk-flex-center.uk-grid-stack"
);
sepetim.insertAdjacentHTML("afterend", a_html);

const head = document.querySelector("head");
head.insertAdjacentHTML("beforeend", a_style);



fetch('https://jackjones.com.tr/sezon-sonu-indirim?sort=p.price&order=DESC%27')
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
        const productListItems = doc.querySelectorAll('.scroll-product-item.item ');
        let products = [];
productListItems.forEach((item, index) =>{
    if(index <= 10){

        const product = {
            img: item.querySelector('.uk-transition-fade.uk-position-cover').src,
            title: item.querySelector('.uk-text-normal.card-title').textContent,
            old_price: item.querySelector('.uk-margin-remove.uk-display-block.uk-line-height.uk-text-muted').textContent.trim(),
            new_price: item.querySelector('.uk-h5.uk-margin-remove.uk-display-block.uk-line-height').textContent.trim(),
            button: item.querySelector('a.uk-button.uk-button-primary'),
            size_box: item.querySelector('.uk-inline-clip.uk-width-1-1.card-image .uk-dropdown')
        };
        
        product.button.classList.add('a_btn');
        product.button.classList.remove('uk-button');
        product.button.classList.remove('uk-button-primary');
        products.push(product)
    }
});



          // Add products to the list
          const productList = document.querySelector('.product_list');
          products.forEach((product) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
              <div class='a_product'>
                <div class='a_product_img'>
                    <img src='${product.img}'>
                </div>
               <div class='a_product_info'>
                  <p class="a_title">${product.title}</p>
                <div class="a_price">
                    <p class="old_price">${product.old_price}</p>
                    <p class="new_price">${product.new_price}</p>
                </div>
                <div class="a_alt_product_info">
                <div class="a_beden_box">
                <p>M</p>
                </div>
                ${product.button.outerHTML}
                <div class="anatomi_size">${product.size_box.innerHTML}</div>
                </div>

               </div>
        
                </div>
            `;
            productList.appendChild(listItem);
          });


        // return products

        const sizeBoxes = document.querySelectorAll('.anatomi_size');
        sizeBoxes.forEach((item) => {
          item.style.display = 'none';
        });
        
        const addToCartButtons = document.querySelectorAll('.a_btn');
        addToCartButtons.forEach((button) => {
          button.addEventListener('click', () => {
            console.log('addToCart button clicked');
            const size_box = button.nextElementSibling;
            size_box.style.display = size_box.style.display === 'none' ? 'block' : 'none';

            sizeBoxes.forEach(sizeBox => {
                sizeBox.style.display = 'none';
              });
              
              // Sonra tıklanan butonun üstündeki beden tablosunu aç
              const sizeBox = button.nextElementSibling;
              sizeBox.style.display = 'block';


          });
        });
        
        document.addEventListener('click', (event) => {
          const target = event.target;
          if (!target.closest('.anatomi_size') && !target.closest('.a_btn')) {
            sizeBoxes.forEach((item) => {
              item.style.display = 'none';
            });
          }
        });
        

    })
    .then(function(zey){
        console.log(zey)
    })
    .catch(function(err) {
        console.log('Failed to fetch page: ', err);
    });
