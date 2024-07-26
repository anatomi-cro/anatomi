const rightSide = document.querySelector(".right-side");
const head = document.querySelector("head");

const anatomi_teklif_menu_html = `
<div class="anatomi_blog_teklif_menu_container">
      <div class="anatomi_blog_teklif_menu_content">
        <h3>Hemen Teklifleri Karşılaştır ve Sigortanı Satın Al!</h3>
        <div class="anatomi_teklif_menu_forms">
          <div class="anatomi_blog_teklif_menu_dask">
          <img src="https://www.sigortaladim.com/Assets/Images/icon-heart.svg" alt="">
            <h4>Tamamlayıcı Sağlık Sigortası</h4>
            <a  class="anatomi_saglik_sticky_button"  href="/tamamlayici-saglik-sigortasi?blog">Teklif Al</a>
          </div>
          <div class="anatomi_blog_teklif_menu_konut">
          <img src="https://www.sigortaladim.com/Assets/Images/icon-heart.svg" alt="">
            <h4>Özel Sağlık Sigortası</h4>
            <a  class="anatomi_saglik_sticky_button"  href="/ozel-saglik-sigortasi?blog">Teklif Al</a>
          </div>
        </div>
      </div>
    </div>
`;

const anatomi_teklif_menu_style = `
<style>
.right-side {
  padding: 20px
}
.anatomi_blog_teklif_menu_container {
  position: relative;
  border: 1px solid #c4c4c4;
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 20px;
}
.anatomi_blog_teklif_menu_content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 10px;
}

.anatomi_blog_teklif_menu_content h3 {
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 15px 30px;
  font-weight: 600;
  text-align: center;
}

.anatomi_teklif_menu_forms {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;

}

.anatomi_blog_teklif_menu_dask,
.anatomi_blog_teklif_menu_konut {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5px;
  border: 1px solid #c4c4c4;
  padding: 5px;
  border-radius: 5px;
}

  .anatomi_blog_teklif_menu_dask img
  .anatomi_blog_teklif_menu_konut img {
    width: 30px;
    height: 30px;
  }

  .anatomi_blog_teklif_menu_dask h4,
  .anatomi_blog_teklif_menu_konut h4 {
    font-size: 12px;
    color: #000;
    margin: 0;
    padding: 10px 0;
    font-weight: 300;
    text-align: center;
  }

  .anatomi_blog_teklif_menu_dask a,
  .anatomi_blog_teklif_menu_konut a {
    width: 45%;
    padding: 5px 0;
    background-color: #4372F6;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
  }
</style>
`;


if(window.innerWidth < 768) {
  const detail = document.querySelectorAll(".detail h2");
  detail[1].insertAdjacentHTML("beforebegin", anatomi_teklif_menu_html);
} else {
  rightSide.insertAdjacentHTML("beforeend", anatomi_teklif_menu_html);
}
head.insertAdjacentHTML("beforeend", anatomi_teklif_menu_style);
const tamamlayici = document.querySelector(".pre-form.tamamlayici");
const ozel = document.querySelector(".pre-form.ozel");

tamamlayici.remove();
ozel.remove();


