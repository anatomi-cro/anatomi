const a_style = `<style>
.a_container{
    
    width: 92%;
    z-index: 999999999;
    background-color: white;
    position: fixed !important;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4) !important;
    position: fixed !important;
    }

    .a_product_list{
    display: flex;
    align-items: end;
    justify-content: center;
    gap: 20px;
    }
    .a_product_list li{
        list-style-type:none;
        width: 44%;
    
    }

    .a_btn {
        border-radius: 4px;
        background: white;
        border: 1px solid #0581BF;
        text-align: center;
        display: flex;
        justify-content: center;
        padding: 7px 0px !important;
      
    }
    .a_title{
        font-size: 14px;
    display: flex;
    justify-content: center;
    font-weight: 600;
    padding: 7px;
    }
    .a_title p{
        padding: 0px !important;
    }
    a.fırsat_btn{
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #0581BF;
    margin: 12px 29px 12px 29px;
    border-radius: 4px;
    color: white;
    font-size: 15px;
    }
    .new_price{
        font-weight: 700;
        font-size: 15px;
    }

    hr{
        border: 0.5px solid #E5E5E5 !important;
    }

    .anatomi_overlay{
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99999998;
    }

</style>`


// Yeni div öğesini oluşturun ve sınıfı ekleyin
const a_new_container = document.createElement('div');
a_new_container.classList.add('a_container');

// İçeriğini doldurun (örneğin, "ZEYYY" metni ekledim)
a_new_container.innerHTML = `
  <div class="a_icerik">
    <div class="a_title">
    <p>Fırsat Ürünlerine Göz atmak İster misin?</p>  
    </div>
    <hr></hr>
        <div class="a_product_list">
        </div>
        <hr></hr>
<a href="https://www.elektrix.com/firsat-urunleri" class="fırsat_btn">
Fırsat Ürünleri Sayfasına Git
</a>
  </div>
`;

//fetc ile fırsat ürünlerinden ürün çekme

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
            if(index < 2){
                
                const imgElement = item.querySelector('.imgInner img');
                
                const imgSrc = imgElement ? imgElement.getAttribute('data-src') : '';
                console.log("element :" + imgElement);

                // Eğer imgSrc boşsa, varsayılan bir resim kullanabilirsiniz
    if (!imgSrc) {
        imgSrc = 'varsayilan-resim-yolu.png'; // Varsayılan resim yolu burada belirtilmelidir
      }
        
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
    const productList = document.querySelector('.a_product_list');
    products.forEach((product) => {
        console.log(product);
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div class='a_product'>
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
        </div>
      `;
      productList.appendChild(listItem);
    });


    // 3 nokta
// Tüm .a_product_info p öğelerini seçin
const productInfo = document.querySelectorAll('.a_product_info p');

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

console.log(products);
        
    })

// arka planını koyulaştırmak için
    const overlay = document.createElement('div');
overlay.classList.add('anatomi_overlay');
document.body.appendChild(overlay);


// Overlay'a tıklama olayını ekle
overlay.addEventListener('click', () => {
    // Overlay'ı kaldırın
    overlay.remove();
    // a_container'ı kaldırın
    a_new_container.remove();
  });
// Oluşturulan div'i <body> içine ekleyin
const a_body = document.querySelector('body');
a_body.appendChild(a_new_container);

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);

