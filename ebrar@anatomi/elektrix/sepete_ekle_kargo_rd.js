const sepete_ekle_kargo_rd_html = () => {
};

const sepete_ekle_kargo_rd_css = () => {
    const style = `
      <style>  
      .anatomi_hizli_teslimat_container {
          background-color: #EA9025;
          color: white;
          padding: 5px 0px;
          text-align: center;
          font-size: 12px;
          margin: 0px -10px;
      }  
      .anatomi_sepet_container {
          height: fit-content;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 10px;
            background-color: #dddddd57;

      }
            .currentPrice {
                color: black !important;
                font-weight: bold !important;
                }
    .a_button {
       position: unset !important;
       border: none !important;
       width: fit-content !important;
       padding: 0px !important;
       z-index: 99;
    }
       .a_button:hover {
        background-color: transparent !important;
       }
       .a_button:before {
           content: "";
           background: url("https://resmim.net/cdn/2025/06/01/TdNuzq.png") no-repeat center;
           background-size: contain;
           width: 20px;
           height: 20px;
           display: inline-block;
       }
      .productDetails.loaderWrapper {
          height: 85px !important;
          padding: 0px !important;
      }
    li.productItem > div > div > div.row.a_product_container > div.col.col-12.productDetails.loaderWrapper > div > div:nth-child(1) > div{
        margin: 0px !important;
        display: flex;
        flex-direction: column;
    }
        li.productItem > div > div > div.row.a_product_container > div.col.col-12.productDetails.loaderWrapper > div > div:nth-child(1) > div > a {
            text-align: left !important;
            color: black !important;

        }
    .discountedPrice {
     padding: 10px 10px 0px;
    font-size: 10px;
    }
    .proRowAct {
        position: relative;
        bottom: 180px;
    }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const sepete_ekle_kargo_rd_js = () => {


    const generateSepet = () => {     
        const targetElement = document.querySelectorAll('#katalog .fl.col-12.catalogWrapper li .box-border');
    targetElement.forEach(item => {
        const container = item.children[1]; // buton eklenecek container

        // class ekle (isteğe bağlı)
        container.classList.add('a_product_container');

        // eğer buton yoksa ekle
    
    });      
        const targetElements = document.querySelectorAll("li.productItem > div > div > div.row.a_product_container");
        targetElements.forEach(element => {
           let sepetContainer = element.querySelector(".anatomi_sepet_container");

            if (!sepetContainer) {
                sepetContainer = document.createElement("div");
                sepetContainer.classList.add("anatomi_sepet_container");
                element.appendChild(sepetContainer);
            }
        
        

            const price = element.querySelector("div.currentPrice");
            if (price && !sepetContainer.contains(price)) {
                sepetContainer.appendChild(price); 
            }      
                if (!sepetContainer.querySelector('.a_button')) {
            const buton = document.createElement('div');
            buton.classList.add('a_button');
            buton.textContent = '';
            sepetContainer.appendChild(buton);
        }
          

          const productExp = element.querySelector("a.detailLink");
            const discountedPrice = element.querySelector("div.discountedPrice");
            if (productExp && discountedPrice && productExp.nextElementSibling !== discountedPrice) {
                productExp.insertAdjacentElement("afterend", discountedPrice);
            }

        let hizliTeslimat = element.previousElementSibling;

        if (!hizliTeslimat || !hizliTeslimat.classList.contains("anatomi_hizli_teslimat_container")) {
            hizliTeslimat = document.createElement("div");
            hizliTeslimat.classList.add("anatomi_hizli_teslimat_container");
            hizliTeslimat.textContent = "Hızlı Teslimat";
            element.parentElement.insertBefore(hizliTeslimat, element);
        }


        });

   const aButtons = document.querySelectorAll('.a_button');
    aButtons.forEach(item => {
        const input = item.closest('li.productItem')?.querySelector('input');
        if (input) {
            const attr = input.value;
            item.setAttribute('onclick', `Add2Cart(${attr}, $('#subPro${attr}').val(), $('#Adet${attr}').val());`);
        }
    });

     document.querySelectorAll('.out-of-stock-list').forEach(function (item) {
    var items = Array.from(item.closest('.row').nextElementSibling.children);
    items.forEach(function (sub) {
      if (sub.classList.contains('a_button')) {
        sub.innerText = "Ürüne Git";
        var href = sub.closest('.row').previousElementSibling.children[0];
        sub.removeAttribute('onclick');
        sub.addEventListener('click', function () {
          href.click();
        });
      }
    });
  });
 
}




    setInterval(generateSepet, 100);


};

const sepete_ekle_kargo_rd_init = () => {
    sepete_ekle_kargo_rd_css();
    sepete_ekle_kargo_rd_js();
    sepete_ekle_kargo_rd_html();
};

const sepete_ekle_kargo_rd_condition = () => {
    const device = window.innerWidth > 768;
    return device;
};

if (sepete_ekle_kargo_rd_condition()) {
    sepete_ekle_kargo_rd_init();
}
