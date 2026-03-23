const sepete_eklendi_popup_html = () => {};

const sepete_eklendi_popup_style = () => {
  const sepete_eklendi_popup_style = `
      <style>
    .pWrapper {
      height: 220px;
      bottom: 0;
      top: auto;
      border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    }

    .pClose {
      display: none;
    }

    .panelPopupTitle {
      display: none;
    }

    #basketPopupItems > div > table > tbody > tr:nth-child(1) {
      display: none;
    }

    #basketPopupItems > div > div {
      display: none;
    }

    #basketPopupItems > div > table > tbody > tr.line-bottom {
      border: none;
    }

    #basketPopupItems td {
      border: none
    }

    #basketPopupItems table {
      border: none;
    }

    .pText::-webkit-scrollbar {
      display: none;
    }

    #cartPopup {
    background-color: #fff;
    }

    .pButtons {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px !important;
    }

    .pButtons > button {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    font-weight: 600;
    text-transform: uppercase;
    }

    .pButtons > button:nth-child(1) {
    background-color: #0581BF;
    color: white;
    }

    .pButtons > button:nth-child(2) {
    background-color: #D5D5D5;
    color: black;
    }

    .anatomi_sepeteEklendi_popUp_title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    }

    .anatomi_sepeteEklendi_popUp_title p {
font-size: 16px;
    font-weight: 700;
    color: #5C9C54;
    padding: 0;
    margin: 0;
    letter-spacing: -.7px;
    word-spacing: -0.5px;
    }

    .anatomi_sepeteEklendi_popUp_title img {
       padding: 0;
    margin: 0 !important;
    width: 20px;
    height: 20px;
    }

    .priceBasketProduct {
    color: #000;
    font-size: 16px;
    margin: 0;
    padding: 10px 0 !important;
    }

    body > div.pWrapper > div {
      justify-content: flex-end;
    }

    @media screen and (max-width: 768px){
      #cartPopup {
        height:fit-content !important;
      }
    }

    .pWrapper {
    height: 220px;
    bottom: 0;
    top: auto;
    border-radius: 20px;
    box-shadow: none;
}

.anatomi_formCloseBtn {
display: none;
top: 350px !important;}
  </style>
    `;

  const head = document.querySelector("head");
  head.insertAdjacentHTML(
    "beforeend",
    sepete_eklendi_popup_style
  );
};

const sepete_eklendi_popup_js = () => {
  const handleChangePriceLocation = () => {
    const price = document.querySelectorAll(".priceBasketProduct");
    const text = document.querySelectorAll(
      "#basketPopupItems > div > table > tbody > tr.line-bottom> td.col-4.col-xs-6.text-semibold.line-right"
    );

    text.forEach((item, index) => {
      item.insertAdjacentElement("beforeend", price[index]);
    });
  };

  const addTitle = () => {
    const text = document.querySelectorAll(
      "#basketPopupItems > div > table > tbody > tr.line-bottom> td.col-4.col-xs-6.text-semibold.line-right"
    );
    const title = document.createElement("div");
    title.classList.add("anatomi_sepeteEklendi_popUp_title");
    const titleImg = document.createElement("img");
    titleImg.src = "https://anatomi.s3.eu-north-1.amazonaws.com/Group+2.png";
    const titleText = document.createElement("p");
    titleText.textContent = "Ürün Sepetinize Eklendi";

    title.appendChild(titleImg);
    title.appendChild(titleText);

    text.forEach((item) => {
      item.insertAdjacentElement("afterbegin", title);
    });
  };

  const deleteRows = () => {
    const rows = document.querySelectorAll(
      "#basketPopupItems > div > table > tbody > tr.line-bottom"
    );

    rows.forEach((item, index) => {
      if (index > 0 && index < rows.length - 1) {
        item.remove();
      }
    });
  };


    const handleChangePriceLocation_interval = setInterval(() => {
      const text = document.querySelector(
        "#basketPopupItems > div > table > tbody > tr.line-bottom> td.col-4.col-xs-6.text-semibold.line-right"
      );
      if (text) {
        if (
          !text.querySelector(".priceBasketProduct") &&
          document.querySelector(".pWrapper")
        ) {
          handleChangePriceLocation();
        }
      }
    }, 100);

    const deleteRows_interval = setInterval(() => {
      const rows = document.querySelectorAll(
        "#basketPopupItems > div > table > tbody > tr.line-bottom"
      );
      if (rows.length > 1) {
        deleteRows();
      }
    }, 10);

    const addTitle_interval = setInterval(() => {
      const text = document.querySelector(
        "#basketPopupItems > div > table > tbody > tr.line-bottom> td.col-4.col-xs-6.text-semibold.line-right"
      );
      if (text) {
        if (!text.querySelector(".anatomi_sepeteEklendi_popUp_title")) {
          addTitle();
        }
      }
    }, 100);
  
};

const sepete_eklendi_popup_init = () => {
  sepete_eklendi_popup_html();
  sepete_eklendi_popup_style();
  sepete_eklendi_popup_js();
};

const sepete_eklendi_popup_conditions = () => {
  const  width = window.innerWidth < 768;
  const element = document.querySelector("#catImg");
  const homepage = window.location.pathname === "/";

  return width && (homepage || element);;
};

if (sepete_eklendi_popup_conditions()) {
  sepete_eklendi_popup_init();
}
