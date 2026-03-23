setTimeout(() => {
  const indirimli_urun_one_cikarma_html = () => {};

  const indirimli_urun_one_cikarma_css = () => {
    const style = `
      <style>    
       .anatomi_sticky_container {
        position: fixed;
        width: 100%;
        bottom: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        padding: 10px 0px 10px 0px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        border-top-left-radius: 20px;
    border-top-right-radius: 20px;
        text-align: center;
        cursor: pointer;
        z-index: 9999;
      }
    .anatomi_sticky_buton_kampanya_title{
       font-size: 16px;
        font-weight: bold;
        text-align: left;
        padding: 10px;
        margin: 0px;
    }
   .anatomi_sticky_kampanyalar {
  display: flex;
  gap: 15px;
  overflow-x: auto; 
  scroll-behavior: smooth;
  padding: 10px;
    scrollbar-width: none;
}

.anatomi_sticky_kampanyalar::-webkit-scrollbar {
  height: 6px;
}

.anatomi_sticky_kampanyalar::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.anatomi_sticky_buton_kampanya {
  flex: 0 0 calc(33.33%);
  box-sizing: border-box;
  height: 180px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

    .anatomi_sticky_buton_kampanya p{
        color: gray;
        padding: 5px;
        text-align: left;
    }
     .anatomi_sticky_buton_kampanya a {
          display: block;
          padding: 5px;
          background-color: #42B54C;
          color: #fff;
          text-decoration: none;
          border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
          text-align: center;
          width: 100%;
      }
    .anatomi_sticky_buton_kampanya img{
        border-top-left-radius: 8px;
         border-top-right-radius: 8px;
            width: 70px;
    height: 65px;
    margin-top: 10px;
    }
    .anatomi_tum_indirimli_urunler{
        text-decoration: underline;
    font-weight: bold;
    }
    .anatomi_sticky_close_btn{
         position: absolute;
        top: 5px;
        right: 15px;
        color: black;
        border: none;
        width: 20px;
        height: 24px;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
    }
    #ls-openButton{
      z-index: 1 !important;
    }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  };

  const indirimli_urun_one_cikarma_js = () => {
    fetch("https://www.istanbulticaret.com/indirim-urunleri")
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const productItems = doc.querySelectorAll(".product-item");

        const data = [];
        productItems.forEach((item) => {
          const imgElement = item.querySelector("img");
          const img = imgElement
            ? imgElement.getAttribute("data-src") || imgElement.src
            : null;
          const title = item.querySelector(".product-title")?.innerText;
          const link = item.querySelector(".product-title")?.href;

          if (img && title && link) {
            data.push({ img, title, link });
          }
        });

        kampanyaGoster(data);
      })
      .catch((error) => console.error("Veri çekilemedi:", error));

    function kampanyaGoster(data) {
      if (data.length < 6) return;

      const kampanyaContainer = document.createElement("a");
      kampanyaContainer.classList.add("anatomi_sticky_container");

      const closeButton = document.createElement("img");
      closeButton.classList.add("anatomi_sticky_close_btn");
      closeButton.src =
        "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-close-btn.png";

      kampanyaContainer.appendChild(closeButton);

      closeButton.addEventListener("click", () => {
        kampanyaContainer.style.display = "none";
      });

      const kampanyaContainerTitle = document.createElement("h3");
      kampanyaContainerTitle.classList.add(
        "anatomi_sticky_buton_kampanya_title"
      );
      kampanyaContainerTitle.textContent = "Size Özel Kasım Fırsatları";

      const kampanyalar = document.createElement("div");
      kampanyalar.classList.add("anatomi_sticky_kampanyalar");

      const tumIndirimliUrunler = document.createElement("a");
      tumIndirimliUrunler.classList.add("anatomi_tum_indirimli_urunler");
      tumIndirimliUrunler.textContent = "Tüm İndirimli Ürünleri Gör";
      tumIndirimliUrunler.href =
        "https://www.istanbulticaret.com/indirim-urunleri";

      const shuffled = [...data].sort(() => 0.5 - Math.random());
      const randomItems = shuffled.slice(0, 6);

      function createKampanyaElement(item) {
        const kampanyaDiv = document.createElement("a");
        kampanyaDiv.classList.add("anatomi_sticky_buton_kampanya");
        kampanyaDiv.href = item.link;

        const wrapperLink = document.createElement("a");
        wrapperLink.href = item.link;

        const img = document.createElement("img");
        img.src = item.img;

        const title = document.createElement("p");
        let text = item.title;
        if (text.length > 40) {
          text = text.slice(0, 40) + "...";
        }
        title.textContent = text;

        const linkButton = document.createElement("a");
        linkButton.href = item.link;
        linkButton.textContent = "İncele";

        kampanyaDiv.appendChild(img);
        kampanyaDiv.appendChild(title);
        kampanyaDiv.appendChild(linkButton);

        return kampanyaDiv;
      }

      randomItems.forEach((item) => {
        kampanyalar.appendChild(createKampanyaElement(item));
      });

      kampanyaContainer.appendChild(kampanyaContainerTitle);
      kampanyaContainer.appendChild(kampanyalar);
      kampanyalar.insertAdjacentElement("afterend", tumIndirimliUrunler);

      document.body.appendChild(kampanyaContainer);
    }
  };

  const indirimli_urun_one_cikarma_init = () => {
    indirimli_urun_one_cikarma_html();
    indirimli_urun_one_cikarma_css();
    indirimli_urun_one_cikarma_js();
  };

  const indirimli_urun_one_cikarma_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
  };

  if (indirimli_urun_one_cikarma_condition()) {
    setTimeout(() => {
      indirimli_urun_one_cikarma_init();
    }, 30000);
  }
}, 500);
