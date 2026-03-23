setTimeout (() => {
const beden_secme_alani_rd_html = () => {};

const beden_secme_alani_rd_css = () => {
    const style =  `
      <style>
      #product-right > div.w-100.position-relative.popover-wrapper.pb-1 > div.w-100.variant-wrapper > div > div {
        flex-basis: unset !important;
        max-width: unset !important;
      }
      #anatomi-size-buttons-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin: 20px 0;
      }

      .anatomi-size-button {
        padding: 10px 16px;
        border-radius: 4px;
        border: 1px solid #aaa;
        background-color: #fff;
        cursor: pointer;
        transition: 0.2s;
        color: black;
      }

      .anatomi-size-button.active {
       border: 2px solid #E97926;
       color: black;
      }
      .anatomi_beden_amount_group{
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 30px;
        flex-wrap: wrap !important;
      }
    </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const beden_secme_alani_rd_js = () => {
  const select = document.querySelector("#subPro1");
  if (!select) return;

  const container = document.createElement("div");
  container.id = "anatomi-size-buttons-container";

  select.parentNode.insertBefore(container, select);
  select.style.display = "none";

  if (!select || !container) return;

  Array.from(select.options).forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.className = "anatomi-size-button";

    const btn = document.querySelector("#anatomi-size-buttons-container > button:nth-child(1)");
    if (btn) {
      btn.style.display = "none";
    }

    if (option.selected) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      document.querySelectorAll(".anatomi-size-button").forEach(btn => {
        btn.classList.remove("active");
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
      });

      button.classList.add("active");

      select.value = option.value;
      select.dispatchEvent(new Event("change", { bubbles: true }));

      setTimeout(() => {
        const outOfStockEl = document.querySelector("#product-stock-available > div.w-100.out-stock-available");
        if (outOfStockEl && !outOfStockEl.classList.contains("d-none")) {
          button.disabled = true;
          button.style.opacity = "0.6";
          button.style.cursor = "not-allowed";
          button.style.border = "1px solid #aaa";
        }
      }, 100);
    });

    container.appendChild(button);
  });
};

;

const beden_secme_alani_rd_init = () => {
    beden_secme_alani_rd_html();
    beden_secme_alani_rd_css();
    beden_secme_alani_rd_js();
};

const beden_secme_alani_rd_condition = () => {
    
    return true;
};

if (beden_secme_alani_rd_condition()) {
    beden_secme_alani_rd_init();
}

}, 1000);

