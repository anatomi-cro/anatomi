const acik_search_html = () => {
  const html = `
    <div class="anatomi_search_button_container">
    <a>
      <img src="https://anatomi.s3.eu-north-1.amazonaws.com/search-normal.png" alt="">
    </a>
  </div>
  `;

  const parent_element = document.querySelector(
    "#headerMain > div > div:nth-child(1) > div > div.pos-r.fr.col-sm-7.col-xs-5.forMobile > div:nth-child(2)"
  );
  const element = !document.querySelector(".anatomi_search_button_container");

  if (parent_element && element) {
    parent_element.insertAdjacentHTML("afterend", html);
  }
};

const acik_search_css = () => {
  const style = `
    <style>
    .anatomi_search_button_container {
     position: absolute;
    top: 50%;
    left: 25%;
    transform: translateY(-50%);
    }
    </style>
    `;

  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};

const acik_search_js = () => {
  const handle_click_search_productDetail = () => {
    const menuBtn = document.getElementById("menuBtn");
    const searchBtn = document.querySelector(
      ".anatomi_search_button_container"
    );
    const input = document.querySelector("#insider-search-input");

    if (menuBtn && searchBtn && input) {
      searchBtn.addEventListener("click", () => {
        menuBtn.click();
        input.focus();
      });
    }
  };

  const handle_click_search_otherPages = () => {
    const menuBtn = document.getElementById("menuBtn");
    const searchBtn = document.querySelector(
      ".anatomi_search_button_container"
    );
    const input = document.querySelector("#insider-search-input");

    if (menuBtn && searchBtn && input) {
      searchBtn.addEventListener("click", () => {
        input.focus();
      });
    }
  };

  const productDetail = document.getElementById("productDetail");
  productDetail && handle_click_search_productDetail();
  !productDetail && handle_click_search_otherPages();
};

const acik_search_init = () => {
  acik_search_html();
  acik_search_css();
  acik_search_js();
};

const acik_search_condition = () => {
  const device = window.innerWidth < 900;
  const element = !document.querySelector(".anatomi_search_button_container");

  return device && element;
};

if (acik_search_condition()) {
  acik_search_init();
}
