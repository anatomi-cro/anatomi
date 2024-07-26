// v1 - Kırmızı
var mobilGenislik = 540;
// Tarayıcının ekran genişliğini al
var ekranGenislik = window.innerWidth;
// Ekran genişliği eşik değerinden küçükse
if (ekranGenislik < mobilGenislik) {
  const a_sticy_style = `<style>
.a_sticy_container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #FF3F3B;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: block;
}
.a_sticy_btn {
  padding: 20px;
  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
}
</style>`;

  const sticky_button_html = `<div class="a_sticy_container"><a data-v-3cf068fc="" href="javascript:void(0)" id="get-proposal-btn" data-toggle="modal" data-target="#proposalModal" data-backdrop="static" data-keyboard="false" class="a_hemen_btn"><p class="a_sticy_btn">Hemen Fiyatları Karşılaştır</p></a></div>`;

  // Stil ve HTML'i belgeye ekleyin
  const a_body = document.querySelector("body");
  a_body.insertAdjacentHTML("beforeend", a_sticy_style);
  a_body.insertAdjacentHTML("beforeend", sticky_button_html);

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / scrollHeight;

    const stickyContainer = document.querySelector(".a_sticy_container");

    if (scrollPercentage >= 0.18 && scrollPercentage <= 0.27) {
      stickyContainer.style.display = "none";
    } else {
      stickyContainer.style.display = "block";
    }

    const bodyForm = document.querySelector("#sectionBox > div:nth-child(11)");
    if (bodyForm) {
      const bodyFormTop = bodyForm.getBoundingClientRect().top + 300;
      const bodyFormBottom = bodyForm.getBoundingClientRect().bottom - 400;
      const windowHeight = window.innerHeight;

      if (bodyFormTop < windowHeight && bodyFormBottom > 0) {
        stickyContainer.style.display = "none";
      } else {
        stickyContainer.style.display = "block";
      }
    }

    const footerForm = document.querySelector("#app > div.writing-detail-page > div.comparison")

    if (footerForm) {
        const footerFormTop = footerForm.getBoundingClientRect().top + 300;
        const footerFormBottom = footerForm.getBoundingClientRect().bottom - 400;
        const windowHeight = window.innerHeight;
  
        if (footerFormTop < windowHeight && footerFormBottom > 0) {
          stickyContainer.style.display = "none";
        }
      }

  });
}