const a_style = `<style>

.productItem .productPrice
{
    display: grid !important;
    grid-template-columns: 1fr 1fr !important; /* İlk iki öğeyi tek satırda iki sütunda sırala */
    grid-gap: 10px !important; 
    align-items: stretch !important; /* Tüm satırları yükseklik olarak aynı yapmak için */

}
.mycartIcon {
  display: block !important;
  margin-top: 15px;
  margin-bottom: 20px;
 
}
.btnAddToCart{
    background: #fff !important;
    color: #000 !important;
    border: 1px solid !important;
    text-align: center !important;
    padding: 8px !important !important;
    line-height : inherit !important;
    padding: 6px !important;
}
.productItem:hover {
    all: initial !important;
  }


 
</style>`


// const productItems = document.querySelectorAll('.productItem');

// // Tüm .productItem öğelerini döngü ile gezip hover özelliklerini kaldırın
// productItems.forEach(productItem => {
//   productItem.addEventListener('mouseenter', () => {
    
//   });

// });


const a_sepete_ekle = document.querySelectorAll('.mycartIcon.tip');
const a_product_container = document.querySelectorAll('.ItemOrj.col-3');

for (let i = 0; i < a_product_container.length; i++) {
  a_product_container[i].insertAdjacentElement('beforeend', a_sepete_ekle[i]);
}



const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);



 /* grid-column: 1 / span 2 !important; */
  /* grid-row: 2 !important; */