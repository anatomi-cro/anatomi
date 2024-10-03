
const a_style = `
<style>
img{
    pointer-events: none;
}

.swiper_container {
    width: 500px;
    margin: 0 auto;
    overflow: hidden;
}

.swiper{
    border: 1px solid #dddddd69;
}
    .swiper_container ul{
        list-style-type: none;
        user-select: none;
        display: flex;
        overflow-x: auto; /* yatay kaydırma */
        padding: 10px 0;
        margin: 0 0 0 0 !important;
        gap:10px;
        align-items: baseline;
   }

   .swiper_container ul li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
   }

  
    .swiper_container ul li .swiper{
    width: 90px;
    height: 100px;
    padding: 1px;
    position: relative;
cursor: pointer;
    }

    .swiper_container ul li .swiper img{
        padding: 3px;
        width: 100%;
        height: 100%;
        
       }
    
    .alt_category{
        color: black;
        font-weight: 500;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        margin-top: 8px;

    }


</style>
`;



const pantolon_html = `
<div class="swiper_container">
<ul>
<a href="https://jackjones.com.tr/pantolon">
<li>
<div class="swiper">
    <img src="https://jackjones.com.tr/image/cache/catalog/products/12206198/63f4c67d516ca-598x800.jpeg" alt="">
</div>
<span class="alt_category">Tümü Gör</span>
</li>
</a>
<a href="https://jackjones.com.tr/sweat-pantolon">
<li>
<div class="swiper">
    <img src="https://thumbs2.imgbox.com/19/8c/QdJpY3y3_t.jpg" alt="">
</div>
<span class="alt_category">Sweat Pantolon</span>
</li>
</a>
<a href="https://jackjones.com.tr/jogger-pantolon">
<li>
<div class="swiper">
    <img src="https://thumbs2.imgbox.com/e2/d3/OaClw7BF_t.jpg" alt="">
</div>
<span class="alt_category">Jogger Pantolon</span>
</li>
</a>
<a href="https://jackjones.com.tr/kargo-pantolon">
<li>
<div class="swiper">
    <img src="https://thumbs2.imgbox.com/58/24/Pe21iHe4_t.jpg" alt="">
</div>
<span class="alt_category">Kargo Pantolon</span>
</li>
</a>
<a href="https://jackjones.com.tr/chino-pantolon">
<li>
<div class="swiper">
    <img src="https://thumbs2.imgbox.com/2f/b8/T3C7rbJs_t.jpg" alt="">
</div>
<span class="alt_category">Chino Pantolon</span>
</li>
</a>
</ul>
</div>
`;

const tsort_html = `
<div class="swiper_container">
<ul>
<a href="https://jackjones.com.tr/tisort">
<li>
<div class="swiper">
    <img src="https://jackjones.com.tr/image/cache/catalog/products/12242560/64c37ac67c215-598x800.jpeg" alt="">
</div>
<span class="alt_category">Tümü Gör</span>
</li>
</a>
<a href="https://jackjones.com.tr/tisort/baskili">
<li>
<div class="swiper">
   <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Baskc%CC%A7lc%CC%A7.jpg" alt="">
</div>
<span class="alt_category">Baskılı Tişört</span>
</li>
</a>
<a href="https://jackjones.com.tr/tisort/duz-renk">
<li>
<div class="swiper">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/DA%CC%8Az+Renk.jpg" alt="">
</div>
<span class="alt_category">Düz Renk Tişört</span>
</li>
</a>
<a href="https://jackjones.com.tr/tisort/polo-yaka">
<li>
<div class="swiper">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Polo.jpg" alt="">
</div>
<span class="alt_category">Polo Yaka Tişört</span>
</li>
</a>
</ul>
</div>

`


const sort_html = `
<div class="swiper_container">
<ul>
<a href="https://jackjones.com.tr/sort?sort=p.sort_order&order=ASC">
<li>
<div class="swiper">
    <img src="https://jackjones.com.tr/image/cache/catalog/products/12202956/6227725eb82f8-598x800.jpeg" alt="">
</div>
<span class="alt_category">Tümü Gör</span>
</li>
</a>
<a href="https://jackjones.com.tr/denim-sort">
<li>
<div class="swiper">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Denim.jpg" alt="">
</div>
<span class="alt_category">Denim Şort</span>
</li>
</a>
<a href="https://jackjones.com.tr/deniz">
<li>
<div class="swiper">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Deniz.jpg" alt="">
</div>
<span class="alt_category">Deniz Şortu</span>
</li>
</a>
<a href="https://jackjones.com.tr/index.php?route=product/category&path=230">
<li>
<div class="swiper">
    <img src="https://jackjones.com.tr/image/cache/catalog/products/12235820/6454955680e49-598x800.jpeg" alt="">
</div>
<span class="alt_category">Dokuma</span>
</li>
</a>
<a href="https://jackjones.com.tr/sweat-sort">
<li>
<div class="swiper">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Sweat.jpg" alt="">
</div>
<span class="alt_category">Sweat Şort</span>
</li>
</a>

</ul>
</div>
`




const gomlek_html = `
<div class="swiper_container">
<ul>
<a href="https://jackjones.com.tr/gomlek">
<li>
<div class="swiper">
   <img src="https://jackjones.com.tr/image/cache/catalog/products/12237710/643969e060c55-598x800.jpeg" alt="">
</div>
<span class="alt_category">Tümü Gör</span>
</li>
</a>
<a href="https://jackjones.com.tr/kisa-kollu-gomlek">
<li>
<div class="swiper">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Kc%CC%A7sa+Kollu.jpg" alt="">
</div>
<span class="alt_category">Kısa Kollu</span>
</li>
</a>
<a href="https://jackjones.com.tr/klasik-gomlek">
<li>
<div class="swiper">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Klasik.jpg" alt="">
</div>
<span class="alt_category">Klasik Gömlek</span>
</li>
</a>
<a href="https://jackjones.com.tr/uzun-kollu-gomlek">
<li>
<div class="swiper">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Uzun+Kollu.jpg" alt="">
</div>
<span class="alt_category">Uzun Kollu Gömlek</span>
</li>
</a>
</ul>
</div>

`

const category_title = document.querySelector('.uk-h3.uk-margin-remove');
const a_container = document.querySelector(
  ".uk-grid.uk-grid-small.product-control-container.uk-grid-stack .uk-width-expand.uk-first-column"
);

if(a_container !== null){
a_container.classList.add("category_title_div");

}

let a_new_container = document.querySelector('.category_title_div')

if (category_title.innerText == 'Pantolon') {
    a_new_container.insertAdjacentHTML("afterend", pantolon_html);

}else if (category_title.innerText == 'Tişört') {
    a_new_container.insertAdjacentHTML("afterend", tsort_html);
    
}else if (category_title.innerText == 'Gömlek') {
    a_new_container.insertAdjacentHTML("afterend", gomlek_html);
    
}else if(category_title.innerText == 'Şort'){
    a_new_container.insertAdjacentHTML("afterend", sort_html);
}

if (window.location.href === "https://jackjones.com.tr/sweat-pantolon") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", pantolon_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Sweat Pantolon") {
      element.closest("li").remove();
    }
  });
}
if (window.location.href === "https://jackjones.com.tr/jogger-pantolon") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", pantolon_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Jogger Pantolon") {
      element.closest("li").remove();
    }
  });
}
if (window.location.href === "https://jackjones.com.tr/kargo-pantolon") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", pantolon_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Kargo Pantolon") {
      element.closest("li").remove();
    }
  });
}
if (window.location.href === "https://jackjones.com.tr/chino-pantolon") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", pantolon_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Chino Pantolon") {
      element.closest("li").remove();
    }
  });
}

if (window.location.href === "https://jackjones.com.tr/tisort/baskili") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", tsort_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Baskılı Tişört") {
      element.closest("li").remove();
    }
  });
}
if (window.location.href === "https://jackjones.com.tr/tisort/duz-renk") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", tsort_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Düz Renk Tişört") {
      element.closest("li").remove();
    }
  });
}
if (window.location.href === "https://jackjones.com.tr/tisort/polo-yaka") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", tsort_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Polo Yaka Tişört") {
      element.closest("li").remove();
    }
  });
}

if (window.location.href === "https://jackjones.com.tr/kisa-kollu-gomlek") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", gomlek_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Kısa Kollu") {
      element.closest("li").remove();
    }
  });
}
if (window.location.href === "https://jackjones.com.tr/klasik-gomlek") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", gomlek_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Klasik Gömlek") {
      element.closest("li").remove();
    }
  });
}
if (window.location.href === "https://jackjones.com.tr/uzun-kollu-gomlek") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", gomlek_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Uzun Kollu Gömlek") {
      element.closest("li").remove();
    }
  });
}




if (window.location.href === "https://jackjones.com.tr/denim-sort") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", sort_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Denim Şort") {
      element.closest("li").remove();
    }
  });
}
if (window.location.href === "https://jackjones.com.tr/deniz") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", sort_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Deniz Şortu") {
      element.closest("li").remove();
    }
  });
}
if (window.location.href === "https://jackjones.com.tr/index.php?route=product/category&path=230") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", sort_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Dokuma") {
      element.closest("li").remove();
    }
  });
}

if (window.location.href === "https://jackjones.com.tr/sweat-sort") {
  anatomi_sweat = a_new_container.insertAdjacentHTML("afterend", sort_html);
  anatomi_categories = document.querySelectorAll(".swiper_container ul li");
  anatomi_categories.forEach(element => {
    if (element.innerText == "Sweat Şort") {
      element.closest("li").remove();
    }
  });
}


const head = document.querySelector("head");
head.insertAdjacentHTML(`beforeend`, a_style);