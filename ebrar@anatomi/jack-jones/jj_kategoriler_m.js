const jj_kategoriler_html = () => {
  const html = "\n    ";
};
const jj_kategoriler_css = () => {
  const style = `
      <style>
      .anatomi_kategoriler{
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;
        gap: 10px;
        padding: 0px 10px 5px;
        width: 100%;
      }
     .anatomi_kategoriler_sweatshirt{
        display: flex;
        justify-content: flex-start;
        gap: 20px;
        padding: 0px 15px 5px;
        width: 100%;
    }
      .anatomi_kategoriler_item{
        flex: 0 0 auto; 
        text-align: center;
        width: 70px; 
      }
      .anatomi_kategoriler_img{
        width: 100%;
        height: 100%;
      
      }
    </style>
    `;
  document.head.insertAdjacentHTML("beforeend", style);
};
const jj_kategoriler_js = () => {
  const generateErkekMontCeketKategoriler = () => {
    const url = window.location.href.toLowerCase();
    const breadcrumb = document.querySelector(
      "#main-category > section.uk-section.uk-section-small > div > ul > li:nth-child(2)"
    );
    if (
      (url.includes("erkek") && url.includes("sweatshirt")) ||
      breadcrumb?.textContent.trim().includes("Sweatshirt")
    ) {
      return;
    }
    const ukFirstColumn = document.querySelector(
      "#main-category > section.uk-section.uk-padding-remove-top.section-product-list > div > div.uk-grid.uk-grid-small.product-control-container.uk-grid-stack > div.uk-width-expand.uk-first-column"
    );
    if (ukFirstColumn && !ukFirstColumn.querySelector(".anatomi_kategoriler")) {
      const anatomiKategoriler = document.createElement("div");
      if (!anatomiKategoriler.classList.contains("anatomi_kategoriler")) {
        anatomiKategoriler.classList.add("anatomi_kategoriler");
        ukFirstColumn.insertAdjacentElement("afterend", anatomiKategoriler);
      }
      const items = [
        {
          src: "https://r.resimlink.com/ehpJzDj4Rt.jpg",
          href: "https://jackjones.com.tr/erkek-mevsimlik-mont",
          text: "Mevsimlik Mont",
        },
        {
          src: "https://r.resimlink.com/iZheo1.jpg",
          href: "https://jackjones.com.tr/erkek-puffer-mont",
          text: "Puffer Mont",
        },
        {
          src: "https://r.resimlink.com/5vH28DXkKAo.jpg",
          href: "https://jackjones.com.tr/erkek-mont-ceket-parka",
          text: "Parka",
        },
        {
          src: "https://r.resimlink.com/mN9MHcVJt.jpg",
          href: "https://jackjones.com.tr/bomber-ceket",
          text: "Bomber Ceket",
        },
        {
          src: "https://r.resimlink.com/bxkl0.jpg",
          href: "https://jackjones.com.tr/erkek-fonksiyonel-mont",
          text: "Fonksiyonel Mont",
        },
      ];
      items.forEach((item) => {
        const itemContainer = document.createElement("div");
        if (!itemContainer.classList.contains("anatomi_kategoriler_item")) {
          itemContainer.classList.add("anatomi_kategoriler_item");
        }
        const link = document.createElement("a");
        link.href = item.href;
        const img = document.createElement("img");
        if (!img.classList.contains("anatomi_kategoriler_img")) {
          img.classList.add("anatomi_kategoriler_img");
          img.src = item.src;
        }
        if (
          (breadcrumb?.textContent.includes("Erkek") &&
            breadcrumb.textContent.includes(item.text))
        ) {
          itemContainer.style.display = "none";
        }
        if (
          item.text === "Bomber Ceket" &&
          breadcrumb?.textContent.includes("Bomber Ceket") &&
          !breadcrumb?.textContent.includes("Erkek")
        ) {
          itemContainer.style.display = "none";
        }

        link.appendChild(img);
        itemContainer.appendChild(link);
        anatomiKategoriler.appendChild(itemContainer);
      });
    }
  };
  const generateErkekSweatshirtKategoriler = () => {
    const breadcrumb = document.querySelector(
      "#main-category > section.uk-section.uk-section-small > div > ul > li:nth-child(2)"
    );
    const currentURL = window.location.href.toLowerCase();
    if (
      !currentURL.includes("erkek") ||
      !breadcrumb?.textContent.trim().includes("Sweatshirt")
    ) {
      return;
    }
    console.log(breadcrumb.textContent);
    const ukFirstColumn = document.querySelector(
      "#main-category > section.uk-section.uk-padding-remove-top.section-product-list > div > div.uk-grid.uk-grid-small.product-control-container.uk-grid-stack > div.uk-width-expand.uk-first-column"
    );
    if (ukFirstColumn && !ukFirstColumn.querySelector(".anatomi_kategoriler")) {
      const anatomiKategoriler = document.createElement("div");
      if (
        !anatomiKategoriler.classList.contains("anatomi_kategoriler_sweatshirt")
      ) {
        anatomiKategoriler.classList.add("anatomi_kategoriler_sweatshirt");
        ukFirstColumn.insertAdjacentElement("afterend", anatomiKategoriler);
      }
      const items = [
        {
          src: "https://r.resimlink.com/r0hV9cOa1.jpg",
          href: "https://jackjones.com.tr/erkek-kapusonlu-sweatshirt",
          text: "Kapüşonlu Sweatshirt",
        },
        {
          src: "https://r.resimlink.com/HMrpi-tmT.jpg",
          href: "https://jackjones.com.tr/erkek-bisiklet-yaka",
          text: "Bisiklet Yaka",
        },
        {
          src: "https://r.resimlink.com/ZfUpmj5s891e.jpg",
          href: "https://jackjones.com.tr/erkek-sweatshirt-fermuarli",
          text: "Fermuarlı Sweatshirt",
        },
      ];
      items.forEach((item) => {
        const itemContainer = document.createElement("div");
        if (!itemContainer.classList.contains("anatomi_kategoriler_item")) {
          itemContainer.classList.add("anatomi_kategoriler_item");
        }
        const link = document.createElement("a");
        link.href = item.href;
        const img = document.createElement("img");
        if (!img.classList.contains("anatomi_kategoriler_img")) {
          img.classList.add("anatomi_kategoriler_img");
          img.src = item.src;
        }
        if (
          breadcrumb?.textContent.includes("Erkek") &&
          breadcrumb.textContent.includes(item.text)
        ) {
          itemContainer.style.display = "none";
        }
        link.appendChild(img);
        itemContainer.appendChild(link);
        anatomiKategoriler.appendChild(itemContainer);
      });
    }
  };
  generateErkekMontCeketKategoriler();
  generateErkekSweatshirtKategoriler();
};
const jj_kategoriler_init = () => {
  jj_kategoriler_html();
  jj_kategoriler_css();
  jj_kategoriler_js();
};
const jj_kategoriler_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};
if (jj_kategoriler_condition()) {
  jj_kategoriler_init();
}
