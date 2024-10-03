const a_style = `
<style>
.anatomi_new_container{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 99999;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5) !important;


}
.anatomi_container{
  padding: 0 15px 15px 15px;
}

.product_info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
.product_info img {
    width: 91px;
    height: auto;
}
.product_buttons {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 15px;
}

    .product_info_subcontainer {
        display: flex;
        flex-direction: column;
        gap: 30px;
        font-size: 16px;
        font-weight: 500;
    }
    .product_success {
        color: #5C9C54;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 5px;
    }

    span.product_name {
        font-size: 14px;
        line-height: 16px;
        font-weight: 700;
    }

    .anatomi_icon{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding:8px;
    }

    .anatomi_icon span{
        color: #5C9C54 !important;
    }

    .product_price{
        font-weight: 700 !important;
    }

    .btn.btn-radius.btn-success{
    
      background-color: #D5D5D5;
      color: #333333;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
        
    }

    .btn.btn-radius.btn-success.fr{
      background-color: black;
      color: #fff;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
    }




    .product_list{
      height: auto;
      display: flex;
      overflow-x: scroll;
      flex-wrap: nowrap;
      margin-top: 10px;
    }

    .a_img{
      width: 100%;
    }

    .product{
      flex: 0 0 auto;
      display: flex;
      margin-right: 10px;
      justify-content: center;
      align-items: center;
      border: 1px #F5F5F5 solid;
      width: 38%;
      display: grid;
      align-content: space-between;
      
   
  }
  .a_title{
    padding: 6px 0px 0px 6px;
    color: #333333;
    text-decoration: none;
    font-weight: 400;
    display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
  }
  .new_price{
    padding: 6px 0px 0px 6px;
  }
  .a_btn{
    border: 1px solid black !important;
    border-radius: 5px;
    color: #333333;
    text-decoration: none;
    width:100%;
    text-align: center;
    padding: 5px 0px 5px 0px;
    
  }

  #cl-fancy-added-to-cart{
    opacity: 0 !important;
  }
</style>
`;

//sepete ekleye tıklanıldığında çalışcak

// const sepete_ekle_btn = document.querySelector('.cl-product-button-container')
// sepete_ekle_btn.

// sepete eklendi bildirimi calıştığında popup açılacak

const a_sepete_eklendi_bildirimi = document.querySelector(
  "#cl-fancy-added-to-cart"
);

// Mutation Observer oluşturuyoruz
const observer = new MutationObserver(function (mutationsList) {
  for (let mutation of mutationsList) {
    console.log('test', mutation);
    if (mutation.type === "attributes") {
      if (a_sepete_eklendi_bildirimi.style.display === "inline-block") {
        console.log("sepete eklendi bildirimi çalışıyor");

        const a_img = document.querySelector(".cl-product-img").src;

        const a_product_title =
          document.querySelector(".cl-product-title").innerText;
        const a_product_price =
          document.querySelector(".cl-product-price").innerText;

        const a_html = `
<div class="anatomi_container">
<div class="anatomi_icon">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M10.2031 0.25C4.96462 0.25 0.703125 4.51149 0.703125 9.75C0.703125 14.9885 4.96462 19.25 10.2031 19.25C15.4416 19.25 19.7031 14.9885 19.7031 9.75C19.7031 4.51149 15.4416 0.25 10.2031 0.25Z" fill="#5C9C54"></path>
     <path d="M15.0181 7.73685L9.87218 12.8826C9.7178 13.037 9.51515 13.1147 9.3125 13.1147C9.10985 13.1147 8.9072 13.037 8.75282 12.8826L6.17995 10.3097C5.87032 10.0002 5.87032 9.49983 6.17995 9.19035C6.48943 8.88071 6.98969 8.88071 7.29932 9.19035L9.3125 11.2035L13.8987 6.61748C14.2082 6.30785 14.7084 6.30785 15.0181 6.61748C15.3276 6.92696 15.3276 7.42722 15.0181 7.73685Z" fill="#FAFAFA"></path>
</svg>
<span>Ürün Sepetinize Eklendi</span>    
</div>

                    <div class="product_info">
                        <img src="${a_img}" alt="DuPont™" tyvek®="" 200="" easysafe="" tek="" kullanımlık="" İş="" tulumu="">
                        <div class="product_info_subcontainer">
                            <span class="product_name">${a_product_title}</span>
                            <span class="product_price">${a_product_price}</span>

                        </div>
                    </div>
                    <div class="product_buttons">
                    <button data-id="1" class="btn btn-radius btn-success fr a_sepet">Sepete Git</button>
                    <button data-id="0" class="btn btn-radius btn-success a_devam">Alışverişe Devam</button>
                    </div>

                    <div class="product_list">
                   
                    </div>
</div>

`;

    
        let anatomi_new_container = document.querySelector('.anatomi_new_container')

      
        if ( anatomi_new_container == null) {

          anatomi_new_container = document.createElement("div");
          anatomi_new_container.classList.add("anatomi_new_container");

          const a_body = document.querySelector("body");
        a_body.appendChild(anatomi_new_container);

        anatomi_new_container.insertAdjacentHTML("afterbegin", a_html);
          
       
        const a_devam_et = document.querySelector(".btn.btn-radius.btn-success:not(.fr)");

        a_devam_et.addEventListener("click", () => {
          
            anatomi_new_container.remove();

        });

        //sepete git tıklandığında

        const a_sepete_git = document.querySelector(
          ".btn.btn-radius.btn-success.fr"
        );

        a_sepete_git.addEventListener("click", () => {
          window.location.href = "https://www.wrangler.com.tr/cart";
        });


        // fetch ile ürün cekme

        fetch("https://www.wrangler.com.tr/wrangler-outlet-urunler")
          .then(function (response) {
            console.log("xxxxx");
            // When the page is loaded, convert it to text
            return response.text();
          })
          .then(function (html) {
            // Initialize the DOM parser
            var parser = new DOMParser();

            // Parse the text
            var doc = parser.parseFromString(html, "text/html");

            console.log("doc", doc);

            console.log("ürün listesi oluşturuldu");

            const productListItems = doc.querySelectorAll(".cl-product-box");
            let products = [];

            console.log(products);
            console.log(productListItems);

            productListItems.forEach(function (item, index) {
              if (index < 8) {
                // const a_fırsat_img = document.querySelectorAll('.cl-product-images img');
                // a_fırsat_img.forEach(item =>{
                //   item.classList.add('a_fırsat_img')
                // })
                const imgElement = item.querySelector(".cl-product-images img");

                const imgSrc = imgElement
                  ? imgElement.getAttribute("data-src")
                  : "";

                console.log("imgElement", imgElement);
                console.log("img", imgSrc);

                const a_title = item.querySelector("a.cl-product-name");

                const product = {
                  img: imgSrc,
                  title: a_title.textContent.trim(),
                  href: a_title.href,
                  new_price: item
                    .querySelector(".cl-product-price")
                    .textContent.trim(),
                };


                products.push(product);
              }
            });


            const productContainer = document.querySelector(".product_list");

            products.forEach(function (product) {
              const productHtml = `
        <div class="product">
          <img class='a_img' src="${product.img}" alt="${product.title}">
          <a href="${product.href}" class="a_title">${product.title}</a>
          <p class="new_price">${product.new_price}</p>
          ${product.button ? product.button.outerHTML : ""}
          <a class="a_btn" href="${product.href}">
                    Ürünü İncele
          </a>
        </div>
      `;
              productContainer.insertAdjacentHTML("afterbegin", productHtml);
            });
          })
          .catch(function (error) {
            console.log("Error fetching products:", error);
          });
        }
      }
    }
  }
});


// Takip edilecek değişiklikleri belirliyoruz
const config = { attributes: true };

// Observer'ı öğeye bağlıyoruz
observer.observe(a_sepete_eklendi_bildirimi, config);



const a_head = document.querySelector("head");
a_head.insertAdjacentHTML("afterbegin", a_style);