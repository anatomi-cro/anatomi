setTimeout(()=>{
const urunListKategori_html = () => {
  const html = `
      <div class="anatomi-urunList-kategori-container">
      <div class="anatomi-urunList-kategori-content">
        <div class="anatomi-urunList-kategori-list">
        </div>
      </div>
    </div>
      `;

  const container = document.querySelector("#divSayfalamaUst");
  const element = document.querySelector(
    ".anatomi-urunList-kategori-container"
  );
  if (!element && container) {
    container.insertAdjacentHTML("afterend", html);
  }
};

const urunListKategori_css = () => {
  const style = `
  <style id="anatomiUrunListSticky-css">
  .urunListRel{
      position: relative;
        width: 100%;
        height: fit-content;
        z-index: 99;
        overflow: hidden;
        margin-top: 20px;
  }
      .anatomi-urunList-kategori-container{
        position: relative;
        width: 100%;
        height: fit-content;
        z-index: 99;
        overflow: hidden;
        margin-top: 20px;
      }
   .anatomi-urunList-kategori-container.anatomi-scrolled {
        position: fixed !important;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        background-color: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
   
      .anatomi-urunList-kategori-content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #fff;
      }
      .anatomi-urunList-kategori-list {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        overflow-x: scroll;
      }

      .anatomi-urunList-kategori-list::-webkit-scrollbar {
        display: none;
      }

      .anatomi-urunList-kategori-list-item {
        width: fit-content;
        height: 40px;
        padding: 0 10px;
        border: 1px solid #d9d9d9;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .anatomi-urunList-kategori-list-item a {
        text-decoration: none;
        color: #000;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 500;
        white-space: nowrap;
      }

      .anatomi-urunList-kategori-list-item.list-item-active {
        background-color: #2e4635;
        color: #fff;
        font-weight: 800;
      }

      .anatomi-urunList-kategori-list-item.view-all {
      background-color: #2E4635;
      }

      .anatomi-urunList-kategori-list-item.view-all a {
        color: #fff !important;
        font-weight: 700;
        font-size: 12px;
      }
    </style>
      `;

  const head = document.querySelector("head");
  const styleSheet = document.querySelector("#anatomiUrunListSticky-css");
  if (!styleSheet) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const urunListKategori_js = () => {
  function insertMenuItem() {
    const URL = window.location.pathname;
    const menuItem = document.querySelectorAll(".nav-item");
    if (!menuItem) return;

    menuItem.forEach((item) => {
      if (item.querySelector("a").pathname === URL) {
        const subMenuItem = item.querySelectorAll(".nav-submenu li");
        if (!subMenuItem) return;
        for (let i = 0; i < subMenuItem.length; i++) {
          const anatomiListItem = document.createElement("div");
          anatomiListItem.classList.add("anatomi-urunList-kategori-list-item");
          anatomiListItem.innerHTML = `<a href="${
            subMenuItem[i].querySelector("a").href
          }">${subMenuItem[i].querySelector("a").textContent}</a>`;
          const anatomiList = document.querySelector(
            ".anatomi-urunList-kategori-list"
          );
          if (anatomiList) {
            anatomiList.appendChild(anatomiListItem);
          }
        }

        const containerURL = document
          .querySelector(
            "#ProductListMainContainer > div.categoryTitle > div.categoryTitleText > ul > li:nth-child(2) > a"
          )
          .getAttribute("href");

        if (!containerURL) return;

        if (
          !document.querySelector(
            ".anatomi-urunList-kategori-list-item.view-all"
          ) &&
          containerURL !== URL
        ) {
          const viewAll = document.createElement("div");
          viewAll.classList.add(
            "anatomi-urunList-kategori-list-item",
            "view-all"
          );
          viewAll.innerHTML = `<a href="${containerURL}">Tümünü Gör</a>`;
          const anatomiList = document.querySelector(
            ".anatomi-urunList-kategori-list"
          );
          if (anatomiList) {
            anatomiList.insertAdjacentElement("afterbegin", viewAll);
          }
        }
      }
    });
  }

  function handleScroll() {
    const container = document.querySelector(
      ".anatomi-urunList-kategori-container"
    );
    const container2 = document.querySelector(".urunListRel");
    if (!container) return;

    const scrollContainer = document.querySelector(
      "#ProductListMainContainer > div.categoryTitle"
    );
    if (!scrollContainer) return;

    const treshold = scrollContainer.getBoundingClientRect().bottom + 300;

    if (window.scrollY > treshold) {
  container.classList.add("anatomi-scrolled");
  container2.classList.add("anatomi-scrolled");
  document.querySelector("#ProductListMainContainer").style.marginTop = `${container.offsetHeight}px`;
} else {
  container.classList.remove("anatomi-scrolled");
  container2.classList.remove("anatomi-scrolled");
  document.querySelector("#ProductListMainContainer").style.marginTop = "0px";
}

  }

  insertMenuItem();
  window.addEventListener("scroll", handleScroll);
};

const urunListKategori_init = () => {
  urunListKategori_html();
  urunListKategori_css();
  urunListKategori_js();
};

const urunListKategori_conditions = () => {
  const urunListKategori = !document.querySelector(
    ".anatomi-urunList-kategori-container"
  );
  const phone = matchMedia("(max-width: 768px)").matches;
  const desktop = matchMedia("(min-width: 768px)").matches;
  return urunListKategori && phone;
};

if (urunListKategori_conditions()) {
  urunListKategori_init();
}
},1000)