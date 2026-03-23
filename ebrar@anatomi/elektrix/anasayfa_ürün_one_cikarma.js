const seksen_dort_html = () => {
  const html = `
  <div class="anatomi_home_category_container">
    <div class="anatomi_home_category_content">
      <ul class="anatomi_home_category_list">
        <li class="anatomi_home_category_item" title="custom-sigorta">
          <a href="https://www.elektrix.com/sigorta">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/elektrix_cart_sigorta_new.png" alt="">
          </a>
        </li>
        <li class="anatomi_home_category_item" title="custom-salter">
          <a href="https://www.elektrix.com/salter">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/elektrix_cart_%C5%9Falter_new.png" alt="">
          </a>
        </li>
        <li class="anatomi_home_category_item" title="custom-kacak-akim-rolesi">
          <a href="https://www.elektrix.com/kacak-akim-rolesi">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/elektrix_cart_ka%C3%A7ak_ak%C4%B1m_new.png" alt="">
          </a>
        </li>
        <li class="anatomi_home_category_item" title="custom-akim-korumali-priz">
          <a href="https://www.elektrix.com/akim-korumali-priz">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/elektrix_cart_ak%C4%B1m_koruma_new.png" alt="">
          </a>
        </li>
        <li class="anatomi_home_category_item" title="custom-elektrikli-sarj-istasyonu">
          <a href="https://www.elektrix.com/elektrikli-sarj-istasyonu">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/elektrix_cart_elektrikli_%C5%9Farj.png" alt="">
          </a>
        </li>
        <li class="anatomi_home_category_item" title="custom-siva-alti-anahtar">
          <a href="https://www.elektrix.com/siva-alti-anahtar">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/elektrix_cart_s%C4%B1va_alt%C4%B1_priz.png" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
  `;

  const parent = document.querySelector("#mainColumn > div:nth-child(11)")
  const element = !document.querySelector(".anatomi_home_category_container");

  if (element) {
    parent.insertAdjacentHTML("afterend", html);
  }
};

const seksen_dort_css = () => {
  const style = `
    <style>
    .anatomi_home_category_container {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .anatomi_home_category_content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .anatomi_home_category_list {
      display: grid;
      justify-content: center;
      align-items: center;
      grid-template-columns: repeat(3, 1fr);
      height: 100%;
      list-style: none;
      gap: 30px;
    }

    .anatomi_home_category_list img {
      width: 100%;
      height: 100%;
    }

    .anatomi_home_category_item {
      width: fit-content;
      height: fit-content;
    }

    @media (max-width: 1220px) {
        .anatomi_home_category_list {
            grid-template-columns: repeat(3, 1fr);
        }

        .anatomi_home_category_item:nth-child(7), .anatomi_home_category_item:nth-child(8) {
            transform: translateX(50%);
        }

    }

       @media (max-width: 1100px) {
       .anatomi_home_category_content{
       justify-content: flex-start;}
        .anatomi_home_category_list {
            grid-template-columns: repeat(2, 1fr);
        }

        .anatomi_home_category_item:nth-child(7), .anatomi_home_category_item:nth-child(8) {
            transform: translateX(0%);
        }

    }


  </style>`;

  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};

const seksen_dort_js = () => {};

const seksen_dort_init = () => {
  seksen_dort_css();
  seksen_dort_html();
  seksen_dort_js();
};

const seksen_dort_conditions = () => {
  const url = window.location.href === "https://www.elektrix.com/";
  const device = window.innerWidth > 768;
  const element = !document.querySelector(".anatomi_home_category_container");

  return url && device && element;
};

if (seksen_dort_conditions()) {
  seksen_dort_init();
}
