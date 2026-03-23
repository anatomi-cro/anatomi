const anasayfa_dropdown_html = () => {};

const anasayfa_dropdown_css = () => {
  const style = `
    <style class="anasayfa_dropdown_style">    
      .anatomi-dropdown-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 16px;
        background: #f9f9f9;
      }

      .anatomi-dropdown-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      }

      .anatomi-dropdown-item img {
        width: 20px;
        height: 20px;
        margin-right: 12px;
      }

      .anatomi-dropdown-item p {
        flex-grow: 1;
        margin: 0;
        color: #2A338F;
        font-size: 14px;
        font-weight: bold;
      }

      .anatomi-left-arrow {
        font-size: 16px;
        margin-left: auto;
        color: #666;
      }
    </style>
  `;
  const head = document.querySelector("head");
  if (!document.querySelector(".anasayfa_dropdown_style")) {
    head.insertAdjacentHTML("beforeend", style);
    const fontAwesomeLink = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">`;
    head.insertAdjacentHTML("beforeend", fontAwesomeLink);
  }
};

const anasayfa_dropdown_js = () => {
  const generateDropdown = () => {
    const oldProductSection = document.querySelector("body > section.campaign-content.mb-3 > div.d-flex.flex-wrap > div:nth-child(1)")
    if(oldProductSection){
        oldProductSection.style.display = "none";
    }
    if (document.querySelector(".anatomi-dropdown-container")) return; 

    const dropdown = [
        {
          src: "https://www.elogo.com.tr/e-donusum/e-fatura/",
          text: "e-Fatura",
          img: "https://r.resimlink.com/2uxw6.png",
        },
        {
          src: "https://www.elogo.com.tr/e-donusum/e-adisyon/",
          text: "e-Adisyon",
          img: "https://r.resimlink.com/yrlwYDm.png",
        },
        {
          src: "https://www.elogo.com.tr/e-donusum/e-arsiv/",
          text: "e-Arşiv",
          img: "https://r.resimlink.com/kGDgHNy.png",
        },
        {
          src: "https://www.elogo.com.tr/e-donusum/e-irsaliye/",
          text: "e-İrsaliye",
          img: "https://r.resimlink.com/-DojaIzvwPe.png",
        },
      ];
  
      const container = document.createElement("div");
      container.className = "anatomi-dropdown-container";
  
      dropdown.forEach((dropdownData) => {
        const anchor = document.createElement("a");
        anchor.className = `anatomi-${dropdownData.text}`;
        anchor.href = dropdownData.src;


        const item = document.createElement("div");
        item.className = "anatomi-dropdown-item";
  
        const image = document.createElement("img");
        image.src = dropdownData.img;
        image.alt = dropdownData.text;
  
        const text = document.createElement("p");
        text.textContent = dropdownData.text;
  
        const arrow = document.createElement("i");
        arrow.className = "fa-solid fa-angle-right anatomi-left-arrow";

  
        item.appendChild(image);
        item.appendChild(text);
        item.appendChild(arrow);
        anchor.appendChild(item);
  
        container.appendChild(anchor);
      });
  
    const targetElement = document.querySelector("body > section.campaign-content.mb-3 > div.d-flex.flex-wrap > div.campaing.col-md-6.col-12.d-flex.align-items-center")
    targetElement.insertAdjacentElement("beforebegin", container);

  };

  setInterval(generateDropdown, 100);
};

const anasayfa_dropdown_init = () => {
  anasayfa_dropdown_html();
  anasayfa_dropdown_css();
  anasayfa_dropdown_js();
};

const anasayfa_dropdown_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

if (anasayfa_dropdown_condition()) {
  anasayfa_dropdown_init();
}
