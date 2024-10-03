const a_style = `
<style>
.a_product_title {
    font-size: 13px !important;
    font-weight: 500 !important;
}
.a_product_size {
    font-size: 10px !important;
    color: #91959B !important;
    font-weight: 400 !important;
}
.a_quantity{
  border: 0.5px solid #91959B !important;
  border-radius: 5px !important;
  margin-top: 35px !important;
  width: 72px !important;
  height: 30px !important;
  font-size: 12px !important;
  padding-right: 0px !important;
  padding-left: 4px !important;
  position: absolute;
  right: 0;
}

.uk-select:not([multiple]):not([size]) {
  background-position: right 8px center !important;
}
@media (max-width: 959px){
  .a_delete{
    margin-top: 0px !important;
  }
.container_price{
  display: flex;
  gap:15px;
}
.a_price{
  font-size: 12px !important;
}
  
}

.uk-text-muted {
  display: flex;

}

</style>
`;

// ürün başlığı için yazılan kod
const a_product_title = document.querySelectorAll(
  ".uk-text-xxsmall.uk-flex-1.content h6"
);
for (let i = 0; i < a_product_title.length; i++) {
  a_product_title[i].classList.add("a_product_title");
}



// Ürün kodundan sadece ürünün rengini çekiyorum
const product_codes = document.querySelectorAll(".uk-text-muted.uk-flex");

product_codes.forEach((code) => {
  const parts = code.innerText.split(" / ");
  const color = parts[0];

  // Diğer yazıları sil
  code.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.remove();
    }
  });

  // Sadece renk adını yazdır
  code.innerText = color;
});



// .uk-flex içeren classlardan muted olanları sec ve içindeki uk-flexi sil renk classı ekle
const a_code = document.querySelectorAll(
  ".uk-text-xxsmall.uk-flex-1.content .uk-text-muted.uk-flex"
);
a_code.forEach((element) => {
  if (element.classList.contains("uk-text-muted")) {
    element.classList.remove("uk-flex");
    element.classList.add("color");

    
  }
});

// bedenlerin hepsini secip class veriyorum
const a_size = document.querySelectorAll(
  ".uk-text-xxsmall.uk-flex-1.content .uk-flex"
);

for (let i = 0; i < a_size.length; i++) {
  a_size[i].classList.add("a_product_size");
}


const a_renk = document.querySelectorAll(
  ".color"
);


// burada birden fazla olan product-horizontal classlarını seçip ilgili olan product-horizontal classını seciyorum
const myClass = "anatomi_product_horizontal";
const myArray = document.querySelectorAll(".product-horizontal");
for (let i = 0; i < myArray.length; i++) {
  myArray[i].classList.add(myClass);
}


// discount ve suanki fiyat, eski için yer değiştirdiğim kod burada

for (let i = 0; i < myArray.length; i++) {
  const a_create_div = document.createElement("div");
  a_create_div.classList.add("container_price");
  const parentContainer = myArray[i];
  if (parentContainer) {
    parentContainer.insertAdjacentElement("beforeend", a_create_div);
  }
  const sizeElement = parentContainer.querySelector(
    ".uk-text-xxsmall.uk-flex-1.content span"
  );
  const a_price = parentContainer.querySelector(
    ".anatomi_product_horizontal span.uk-text-bold"
  );
  const a_old_price = parentContainer.querySelector(
    ".anatomi_product_horizontal s.uk-text-muted"
  );
  const a_discount = parentContainer.querySelector(".uk-text-success");

  if (a_discount) {
    a_discount.classList.add("a_discount");
    if (sizeElement) {
      sizeElement.insertAdjacentElement("afterend", a_discount);
    }

    if (a_price) {
      a_price.classList.add("a_price");
      a_create_div.insertAdjacentElement("beforeend", a_price);
      a_discount.insertAdjacentElement("afterend", a_create_div);
    }
    if (a_old_price) {
      a_old_price.classList.add("a_old_price");
      a_create_div.insertAdjacentElement("afterbegin", a_old_price);
      a_discount.insertAdjacentElement("afterend", a_create_div);
    }
  } else {
    if (a_price) {
      a_price.classList.add("a_price");
      if (sizeElement) {
        sizeElement.insertAdjacentElement("afterend", a_price);
      }
    }
  }
}


// beden tasıma 
const beden = document.querySelectorAll('.a_product_size')
beden.forEach(item=>{
  item.remove();
  console.log('beden silindi');

})
for (let i = 0; i < a_renk.length; i++) {
  a_renk[i].insertAdjacentElement('afterend', beden[i])
  console.log('beden taşında');
}



// sil iconu
const anatomi_delete_all = document.querySelectorAll(
  ".anatomi_product_horizontal .delete"
);
anatomi_delete_all.forEach((item) => {
  item.classList.add("a_delete");
});

const anatomi_delete = document.querySelectorAll(
  ".anatomi_product_horizontal .delete a"
);
anatomi_delete.forEach((item) => {
  item.textContent = "";
  item.innerHTML =
    '<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M10.253 1.74519H7.85337V1.30889C7.85337 0.587175 7.26619 0 6.54447 0H4.79928C4.07756 0 3.49038 0.587175 3.49038 1.30889V1.74519H1.09075C0.489308 1.74519 0 2.2345 0 2.83594V4.36298C0 4.60393 0.195352 4.79928 0.436298 4.79928H0.674735L1.05167 12.7149C1.08496 13.414 1.65924 13.9615 2.35906 13.9615H8.98469C9.68454 13.9615 10.2588 13.414 10.2921 12.7149L10.669 4.79928H10.9075C11.1484 4.79928 11.3438 4.60393 11.3438 4.36298V2.83594C11.3438 2.2345 10.8544 1.74519 10.253 1.74519ZM4.36298 1.30889C4.36298 1.06833 4.55871 0.872596 4.79928 0.872596H6.54447C6.78504 0.872596 6.98077 1.06833 6.98077 1.30889V1.74519H4.36298V1.30889ZM0.872596 2.83594C0.872596 2.71566 0.970463 2.61779 1.09075 2.61779H10.253C10.3733 2.61779 10.4712 2.71566 10.4712 2.83594V3.92668C10.3367 3.92668 1.42978 3.92668 0.872596 3.92668V2.83594ZM9.42047 12.6734C9.40937 12.9064 9.21794 13.0889 8.98469 13.0889H2.35906C2.12578 13.0889 1.93435 12.9064 1.92328 12.6734L1.54831 4.79928H9.79544L9.42047 12.6734Z" fill="#E65049"/>' +
    '<path d="M5.67189 12.2163C5.91284 12.2163 6.10819 12.021 6.10819 11.78V6.10817C6.10819 5.86723 5.91284 5.67188 5.67189 5.67188C5.43095 5.67188 5.2356 5.86723 5.2356 6.10817V11.78C5.2356 12.021 5.43092 12.2163 5.67189 12.2163Z" fill="#E65049"/>' +
    '<path d="M7.85335 12.2163C8.0943 12.2163 8.28965 12.021 8.28965 11.78V6.10817C8.28965 5.86723 8.0943 5.67188 7.85335 5.67188C7.61241 5.67188 7.41705 5.86723 7.41705 6.10817V11.78C7.41705 12.021 7.61238 12.2163 7.85335 12.2163Z" fill="#E65049"/>' +
    '<path d="M3.49038 12.2163C3.73132 12.2163 3.92667 12.021 3.92667 11.78V6.10817C3.92667 5.86723 3.73132 5.67188 3.49038 5.67188C3.24943 5.67188 3.05408 5.86723 3.05408 6.10817V11.78C3.05408 12.021 3.2494 12.2163 3.49038 12.2163Z" fill="#E65049"/>' +
    "</svg>";
});


// miktar seciminin sil iconun altına taşınması
document.querySelectorAll(".uk-select.quantity").forEach((item) => {
  item.classList.add("a_quantity");
  item
    .closest(".product-detail")
    .parentElement.nextElementSibling.children[0].insertAdjacentElement(
      "afterend",
      item
    );
});


const a_positions = document.querySelectorAll(".uk-select.quantity.a_quantity");
a_positions.forEach((a_position) => {
  a_position.parentNode.style.position = "relative";
});
const head = document.querySelector("head");
head.insertAdjacentHTML("beforeend", a_style);
