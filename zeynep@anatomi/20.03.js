const a_style = `
<style>
.product_butons {
    width: 100%;
    height: 100%;
   display:flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    gap:10px;
    padding-left: 35px;
    padding-right: 35px;
    margin: 20px 0 20px 0;
}

.product_buton {
    width: 180px;
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 0.5px solid #BBBBBB;
    border-radius: 5px;
    gap: 10px;
    padding: 10px 0 10px 0;
    cursor: pointer;
}


.product_buton img{
    width: 50px;
    height: 50px;

}

.anatomi_btn {
    width: 110px;
    height: 30px;
    background-color: #EA3625;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

}

.product_buton span{
    font-size: 14px;
    color: #333333

}
.alt_container{
    margin:auto;
}

</style>
`

const anatomi_sigorta_boxes = document.querySelector(
    ".product-icon-btns.opened"
  );
  anatomi_sigorta_boxes.remove();
  
  const a_html = `
  <div class="product_butons">
  <a class="product_buton" href="https://www.sigortaladim.com/trafik-sigortasi">
  <img class="anatomi_img" src='https://svgshare.com/i/r9t.svg' title='' />
  <div class="alt_container">
 <span>Trafik Sigortası</span>
 <button class="anatomi_btn">Teklif Al</button>
 </div>
  </a>

  <a class="product_buton" href="https://www.sigortaladim.com/kasko-sigortasi">
 <img class="anatomi_img" src='https://svgshare.com/i/rAL.svg' title='' />
<div class="alt_container">
<span>Kasko Sigortası</span>
<button class="anatomi_btn">Teklif Al</button>
</div>
 </a>

<a class="product_buton" href="https://www.sigortaladim.com/dask-sigortasi">
        <img class="anatomi_img" src='https://svgshare.com/i/rAM.svg' title='' />
        <div class="alt_container">
        <span>Dask Sigortası</span>
        <button class="anatomi_btn">Teklif Al</button>
        </div>
        </a>



        <a class="product_buton" href="https://www.sigortaladim.com/tamamlayici-saglik-sigortasi">
        <img class="anatomi_img" src='https://svgshare.com/i/r8z.svg' title='' />
        <div class="alt_container">
        <span>Tamamlayıcı Sağlık Sigortası</span>
        <button class="anatomi_btn">Teklif Al</button>
        </div>
        </a>


        <a class="product_buton" href="https://www.sigortaladim.com/seyahat-saglik-sigortasi">
        <img class="anatomi_img" src='https://svgshare.com/i/r8j.svg' title='' />
        <div class="alt_container">
        <span>Seyahat Sağlık Sigortası</span>
        <button class="anatomi_btn">Teklif Al</button>
        </div>
        </a>


        <a class="product_buton" href="https://www.sigortaladim.com/pet11">
        <img class="anatomi_img" src='https://svgshare.com/i/rAN.svg' title='' />
        <div class="alt_container">
        <span>Evcil Hayvan Sigortası</span>
        <button class="anatomi_btn">Teklif Al</button>
        </div>
        </a>

        </div>


  `

  const product_container = document.querySelector(".product-icon-btn-container");
product_container.insertAdjacentHTML("afterbegin", a_html);

const head = document.querySelector("head");
head.insertAdjacentHTML("beforeend", a_style);