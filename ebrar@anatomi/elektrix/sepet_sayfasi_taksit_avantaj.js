const doksansekiz_html = () => {};

const doksansekiz_css = () => {
  const css = `
    <style>
      .anatomi_basket_container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        height: fit-content;
      }

      .anatomi_basket_container .middleItem {
        width: 70% !important;
      }

      .anatomi_order_summary {
        border: 1px solid #92959b50;
        padding: 20px;
        margin: 0;
        border-radius: 10px;
        width: 100%;
      }

      .anatomi_order_summary div {
        border: none !important;
        border-right: none !important;
      }

      .anatomi_order_summary .box.col-6 {
        font-size: 14px;
        display: flex;
        width: 100%;
        justify-content: space-between;
      }

      .anatomi_order_summary .box.col-6.a-right {
        font-weight: 600;
        margin: 0;
        text-align: right;
        display: block;
      }

      .anatomi_addToCart_button {
        width: 100%;
        border-radius: 10px;
        margin: 0;
        padding: 0;
      }

      .anatomi_addToCart_button div {
        margin: 0;
        padding: 0;
      }

      .anatomi_addToCart_button a {
        border-radius: 4px;
        padding: 0px;
        margin: 0;
        width: 100%;
        text-transform: capitalize;
        font-weight: 600;
        margin-top: 10px;
      }

      .anatomi_order_summary_title {
        font-size: 16px;
        font-weight: 700;
        margin: 0 0 10px 0;
        padding: 0;
      }

      .anatomi_order_summary .row {
        margin: 0;
        width: 100%;
      }

      .anatomi_order_summary .row.box-border.b-top {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }

      .anatomi_order_summary .col.col-12 {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 0;
        padding: 0;
        width: 100%;
      }

      #SepetForm
        > div
        > div.anatomi_basket_container
        > div.col.col-3.col-md-6.col-sm-12.fr.anatomi_order_summary
        > div.row
        > div
        > div.row.mb.box-border.b-top
        > div.box.col-6.line-right {
        font-weight: 700;
      }

      .anatomi_discount_area {
        width: 100%;
        float: right;
        border: 1px solid #92959b50;
        border-radius: 10px;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        padding: 20px;
        padding-bottom: 20px !important;
      }

      .anatomi_basket_group {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        width: 25%;
      }

      .anatomi_discount_area .row {
        width: 100%;
        margin: 0;
        padding: 0;
      }

      #SepetForm
        > div
        > div.anatomi_basket_container
        > div.anatomi_basket_group
        > div.box.col-12.p-bottom.anatomi_discount_area
        > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .anatomi_discount_area .col.col-9.col-md-6 col-sm-12 {
        width: 100%;
      }

      .anatomi_discount_area .form-control {
        background-color: #fff;
      }

      .anatomi_discount_area .lightBg {
        background-color: #fff !important;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      .anatomi_discount_area .lightBg  .text-title {
      font-weight: 700;}

      .anatomi_discount_area .lightBg span {
        margin: 0;
        padding: 0;
      }

      .anatomi_discount_area .lightBg .f1.col-12 {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #order-note-save-btn,
      #indirim {
        padding: 0;
        border-radius: 30px;
        text-transform: capitalize;
      }

      #indirimkuponu,
      #order-note-input {
        padding: 0;
        margin: 0;
        height: 30px;
        border-radius: 10px !important;
      }

      #SepetForm
        > div
        > div.anatomi_basket_container
        > div.anatomi_basket_group
        > div.box.col-12.p-bottom.anatomi_discount_area
        > div
        > div {
        width: 100%;
      }

      .anatomi_discount_area div {
        margin: 0;
        padding: 0;
      }

      .anatomi_discount_area #basketOptions > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      #basketOptions
        > div.col.col-12.p-left
        > div.fl.col-12
        > div
        > div
        > label
        > span.fl.col-12 {
        display: flex;
        gap: 10px;
      }

      #basketOptions
        > div.col.col-12.p-left
        > div.col.col-12
        > div
        > div
        > div.fl.col-12 {
        display: flex;
        gap: 10px;
      }

      .productPrcRow {
        width: fit-content;
        margin: 0;
        padding: 0;
        float: none;
        display: flex;
        justify-content: flex-end;
      }

      .productInfoRow {
        width: 80%;
      }

      .productRow {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      .anatomi_product_remove {
        margin: 0;
        padding: 0;
        display: none;

      }

      .anatomi_product_remove a {
        display: flex;
                background-color: #fff;
                        border: 1px solid #e65049 !important;
                                border-radius: 50%;
        }

      .incBasketProduct {
        display: flex;
        border-radius: 50%;
        border: 1px solid #dddddd;
      }

      .anatomi_product_remove.anatomi_product_remove_active {
        display: block;
      }

      .decBasketProduct {
        display: none;
        border-radius: 50%;
        border: 1px solid #dddddd !important;
      }

      .decBasketProduct.decBasketProduct_active {
        display: flex;
      }

      .qtyBtns {
        height: 100% !important;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
        background: #fff !important;
        display: flex !important;
        flex-direction: column-reverse !important;
      }

      .productPrcRow .forDesktop {
        display: flex;
        width: 100%;
        white-space: nowrap;
        gap: 20px;
        padding: 0;
      }

      .anatomi_product_remove_active a::before {
        display: none;
      }

      .anatomi_product_remove_active {
        background-color: #fff;
      }

      .anatomi_product_list .qtyBtns a {
      width: 30px;
        height: 30px;
        opacity: 1;
        padding: 1px;
        border: 1px solid #dddddd;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }

      .anatomi_product_list .qtyBtns img {
        height: auto;
        cursor: pointer;
        object-fit: contain;
      }

      .anatomi_basket_title {
      margin: 0;
        padding: 0;
        margin-bottom: 20px;
      }

      .anatomi_cargo .a-right {
      color: #5C9C54;
      font-weight: 700;
      }

      .anatomi_product_free_cargo {
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
        width: fit-content;
        margin-top: 10px;
        padding: 0;
      }

      .anatomi_product_free_cargo h4 {
      color: #5C9C54;
      font-weight: 700;
      font-size: 12px;
      margin: 0;
      padding: 0;
      }

      .anatomi_total_price div {
      font-weight: 700;
      }

      .anatomi_order_summary .box.col-6.line-right {
      padding: 10px 0 !important;
      }

          .anatomi_taksit_avantaj {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-bottom: 15px;
      }

      .anatomi_taksit_avantaj h2 {
        font-size: 14px;
        color:#5C9C54;
        text-decoration: underline;
        margin: 0;
      }
    </style>
    `;

  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", css);
};

const doksansekiz_js = () => {
  const cartEmpty = !document.querySelector("#cartEmpty");
  const create_summary_and_productList_container = () => {
    const oldContainer = document.querySelector("#SepetForm > div");
    if (!oldContainer.querySelector(".anatomi_basket_container") && cartEmpty) {
      const container = document.createElement("div");
      container.classList.add("anatomi_basket_container");
      oldContainer.insertAdjacentElement("afterbegin", container);
    }
  };

  const add_class_summary = () => {
    const orderSummary = document.querySelector(
      "#SepetForm > div > div.box.col-12.p-bottom > div > div.col.col-3.col-md-6.col-sm-12.fr"
    );

    if (orderSummary && cartEmpty) {
      if (!orderSummary.classList.contains("anatomi_order_summary")) {
        orderSummary.classList.add("anatomi_order_summary");
      }
    }
  };

  const transportSummary = () => {
    create_summary_and_productList_container();

    const discount_area = document.querySelector(
      "#SepetForm > div > div.box.col-12.p-bottom"
    );
    const middleItem = document.querySelector("#SepetForm .middleItem");
    const orderSummary = document.querySelector(
      "#SepetForm > div > div.box.col-12.p-bottom > div > div.col.col-3.col-md-6.col-sm-12.fr"
    );
    const container = document.querySelector(".anatomi_basket_container");
    const basket_group = document.querySelector(".anatomi_basket_group");

    if (container && cartEmpty) {
      if (!container.querySelector(".anatomi_basket_group") && cartEmpty) {
        const basket_group = document.createElement("div");
        basket_group && basket_group.classList.add("anatomi_basket_group");
        basket_group && orderSummary && basket_group.appendChild(orderSummary);
        basket_group &&
          discount_area &&
          basket_group.appendChild(discount_area);
        basket_group && container.appendChild(basket_group);
      }
    }

    if (container && cartEmpty) {
      if (!container.querySelector(".middleItem")) {
        middleItem && container.insertAdjacentElement("afterbegin", middleItem);
      }
    }
  };

  const update_order_summary = () => {
    const remove_idle_text = () => {
      const idle_text = document.querySelector(
        "#SepetForm > div > div.anatomi_basket_container > div.anatomi_basket_group > div.col.col-3.col-md-6.col-sm-12.fr.anatomi_order_summary > div.row > div.box.col-12"
      );
      idle_text && idle_text.remove();
    };

    const transport_button = () => {
      const cart_footer = document.querySelector("#cart-footer");
      const idle_text =
        cart_footer &&
        cart_footer.querySelector(".box.col-9.col-md-6.col-sm-12.p-top.p-left");
      const button =
        cart_footer &&
        cart_footer.querySelector(".col.col-3.col-md-6.col-sm-12");
      const order_summary = document.querySelector(".anatomi_order_summary");

      if (cart_footer && order_summary && cartEmpty) {
        if (!order_summary.querySelector("#cart-footer")) {
          order_summary.appendChild(cart_footer);
        }

        if (
          cart_footer.querySelector(
            ".box.col-9.col-md-6.col-sm-12.p-top.p-left"
          )
        ) {
          idle_text.remove();
        }

        if (!button.classList.contains("anatomi_addToCart_button")) {
          button.classList.add("anatomi_addToCart_button");
        }
      }
    };

    const add_title = () => {
      const order_summary = document.querySelector(".anatomi_order_summary");

      if (order_summary && cartEmpty) {
        if (!order_summary.querySelector(".anatomi_order_summary_title")) {
          const title = document.createElement("h2");
          title.classList.add("anatomi_order_summary_title");
          title.textContent = "Sipariş Özeti";
          order_summary.insertAdjacentElement("afterbegin", title);
        }
      }
    };

    const handle_free_cargo = () => {
      const check_cargo = document.querySelectorAll(
        ".anatomi_order_summary .row.box-border.b-top .line-right"
      );

      if (check_cargo && cartEmpty) {
        check_cargo.forEach((cargo) => {
          const anatomi_cargo = document.querySelectorAll(".anatomi_cargo");
          const kargo_bedeli = document.querySelectorAll(
            ".anatomi_kargo_bedeli"
          );

          if (
            cargo.textContent.toLowerCase().trim() === "kargo fiyatı" &&
            !cargo.parentElement.classList.contains("anatomi_cargo") &&
            !cargo.parentElement.classList.contains("anatomi_kargo_bedeli")
          ) {
            cargo.parentElement.classList.add("anatomi_kargo_bedeli");
          }

          if (kargo_bedeli.length === 0 && anatomi_cargo.length === 0) {
            const create_new_cargo = document.createElement("div");
            create_new_cargo.classList.add(
              "row",
              "box-border",
              "b-top",
              "anatomi_cargo"
            );

            const cargo_right = document.createElement("div");
            cargo_right.classList.add("box", "col-6", "line-right");
            cargo_right.textContent = "Kargo Fiyatı";

            const cargo_left = document.createElement("div");
            cargo_left.classList.add("box", "col-6", "a-right");
            cargo_left.textContent = "Ücretsiz";

            create_new_cargo.appendChild(cargo_right);
            create_new_cargo.appendChild(cargo_left);

            check_cargo[0].parentElement.insertAdjacentElement(
              "afterend",
              create_new_cargo
            );
          }
        });
      }

      const anatomi_cargo = document.querySelector(".anatomi_cargo");
      const kargo_bedeli = document.querySelector(".anatomi_kargo_bedeli");
      if (kargo_bedeli && anatomi_cargo && cartEmpty) {
        anatomi_cargo.remove();
      }
    };

    const total_price_add_class = () => {
      const total_price = document.querySelectorAll(
        ".anatomi_order_summary .row.box-border.b-top .line-right"
      );

      if (total_price) {
        total_price.forEach((price) => {
          if (
            price.textContent.toLowerCase().trim() === "genel toplam" &&
            !price.parentElement.classList.contains("anatomi_total_price")
          ) {
            price.parentElement.classList.add("anatomi_total_price");
          }
        });
      }
    };

    total_price_add_class();
    handle_free_cargo();
    add_title();
    remove_idle_text();
    transport_button();
  };

  const update_discount_area = () => {
    const add_class = () => {
      const discount_area = document.querySelector(
        "#SepetForm > div > div.anatomi_basket_container > div.anatomi_basket_group > div.box.col-12.p-bottom"
      );
      if (discount_area && cartEmpty) {
        if (!discount_area.classList.contains("anatomi_discount_area")) {
          discount_area.classList.add("anatomi_discount_area");
        }
      }
    };

    const remove_idle_area = () => {
      const idle_area = document.querySelector(
        "#SepetForm > div > div.anatomi_basket_container > div.anatomi_basket_group > div.box.col-12.p-bottom.anatomi_discount_area > div > div.col.col-12.line-bottom.line-left"
      );
      idle_area && idle_area.remove();
    };

    add_class();
    remove_idle_area();
  };

  const update_product_list = () => {
    const add_class = () => {
      const middleItem = document.querySelector(
        "#SepetForm > div > div.anatomi_basket_container > div.fl.col-12.middleItem"
      );
      if (middleItem && cartEmpty) {
        if (!middleItem.classList.contains("anatomi_product_list")) {
          middleItem.classList.add("anatomi_product_list");
        }
      }
    };

    const remove_header = () => {
      const product_list = document.querySelector(".anatomi_product_list");
      const header =
        product_list &&
        product_list.querySelector(".col.col-12.line-bottom.dn-xs");

      header && header.remove();
    };

    const remove_total_price = () => {
      const product_list = document.querySelector(".anatomi_product_list");
      const total_price =
        product_list && product_list.querySelectorAll(".productPrc");

      total_price && total_price.forEach((price) => price.remove());
    };

    const remove_idle_area = () => {
      const product_list = document.querySelector(".anatomi_product_list");
      const idle_area =
        product_list && product_list.querySelectorAll(".basketSubPro");
      idle_area && idle_area.forEach((area) => area.remove());
    };

    const transform_price = () => {
      const info_row = document.querySelectorAll(
        ".anatomi_product_list .productInfoRow"
      );
      const price = document.querySelectorAll(
        "#SepetForm > div > div.anatomi_basket_container > div.fl.col-12.middleItem > div.box.col-12.d-flex.line-top.productRow > div.fl.col-6.col-sm-9.col-xs-8.d-flex.productPrcRow > div.box.col-4.col-sm-12.text-center.forDesktop"
      );

      if (info_row && price && cartEmpty) {
        info_row.forEach((row, index) => {
          if (!row.querySelector(".productPrcRow")) {
            const productPrcRow = document.createElement("div");
            productPrcRow.classList.add("productPrcRow");
            productPrcRow.appendChild(price[index]);
            row.appendChild(productPrcRow);
          }
        });
      }
    };

    const transform_delete = () => {
      const buttons = document.querySelectorAll(
        "#SepetForm > div > div.anatomi_basket_container > div.fl.col-12.middleItem.anatomi_product_list > div > div.fl.col-6.col-sm-9.col-xs-8.d-flex.productPrcRow > div > div.fl.col-md-12.qtyBtns"
      );
      const remove = document.querySelectorAll(
        "#SepetForm > div > div.anatomi_basket_container > div.fl.col-12.middleItem.anatomi_product_list > div > div.box.col-1.col-sm-3.dn-sm"
      );

      if (buttons && remove && cartEmpty) {
        buttons.forEach((button, idx) => {
          if (!button.querySelector(".box.col-1.col-sm-3.dn-sm")) {
            button.insertAdjacentElement("afterbegin", remove[idx]);
          }
        });
      }
    };

    const delete_idle_text = () => {
      const product_list = document.querySelector(".anatomi_product_list");
      const idle_text =
        product_list && product_list.querySelectorAll(".productType");

      idle_text && idle_text.forEach((text) => text.remove());
    };

    const add_class_remove_button = () => {
      const remove = document.querySelectorAll(
        "#SepetForm > div > div.anatomi_basket_container > div.fl.col-12.middleItem.anatomi_product_list > div > div.fl.col-6.col-sm-9.col-xs-8.d-flex.productPrcRow > div > div.fl.col-md-12.qtyBtns > div"
      );
      if (remove && cartEmpty) {
        remove.forEach((button) => {
          if (!button.classList.contains("anatomi_product_remove")) {
            button.classList.add("anatomi_product_remove");
          }
        });
      }
    };

    const handle_button = () => {
      const remove = document.querySelectorAll(".anatomi_product_remove");
      const decBasketProduct = document.querySelectorAll(".decBasketProduct");
      const input = document.querySelectorAll(".qty");

      input.forEach((input, idx) => {
        if (input.value == 1) {
          decBasketProduct[idx] &&
            decBasketProduct[idx].classList.remove("decBasketProduct_active");
          remove[idx] &&
            remove[idx].classList.add("anatomi_product_remove_active");
        } else if (input.value > 1) {
          decBasketProduct[idx] &&
            decBasketProduct[idx].classList.add("decBasketProduct_active");
          remove[idx] &&
            remove[idx].classList.remove("anatomi_product_remove_active");
        }

        input.addEventListener("change", () => {
          if (input.value == 1) {
            decBasketProduct[idx] &&
              decBasketProduct[idx].classList.remove("decBasketProduct_active");
            remove[idx] &&
              remove[idx].classList.add("anatomi_product_remove_active");
          } else if (input.value > 1) {
            decBasketProduct[idx] &&
              decBasketProduct[idx].classList.add("decBasketProduct_active");
            remove[idx] &&
              remove[idx].classList.remove("anatomi_product_remove_active");
          }
        });
      });
    };

    const change_html_remove_button = () => {
      const remove = document.querySelectorAll(".anatomi_product_remove a");

      if (remove && cartEmpty) {
        remove.forEach((button) => {
          if (!button.querySelector("img")) {
            button.innerHTML = `<img class="anatomi_product_remove_img" src="https://anatomi.s3.eu-north-1.amazonaws.com/elektrix-sepet-decrase.png" alt="">`;
          }
        });
      }
    };

    const change_html_inc_button = () => {
      const inc = document.querySelectorAll(".incBasketProduct");

      if (inc && cartEmpty) {
        inc.forEach((button) => {
          if (!button.querySelector("img")) {
            button.innerHTML = `<img class="incBasketProduct_img" src="https://anatomi.s3.eu-north-1.amazonaws.com/%2B.png" alt="">`;
          }
        });
      }
    };

    const change_html_dec_button = () => {
      const dec = document.querySelectorAll(".decBasketProduct");

      if (dec && cartEmpty) {
        dec.forEach((button) => {
          if (!button.querySelector("img")) {
            button.innerHTML = `<img class="decBasketProduct_img" src="https://anatomi.s3.eu-north-1.amazonaws.com/minus+1.png" alt="">`;
          }
        });
      }
    };

    const add_free_cargo_product = () => {
      const anatomi_cargo = document.querySelector(".anatomi_cargo");

      if (anatomi_cargo && cartEmpty) {
        const productPrcRow = document.querySelectorAll(
          ".productInfoRow .productPrcRow"
        );
        const anatomi_product_free_cargo = document.querySelector(
          ".anatomi_product_free_cargo"
        );

        productPrcRow.forEach((row) => {
          if (!anatomi_product_free_cargo) {
            const product_free_cargo = document.createElement("div");
            product_free_cargo.classList.add("anatomi_product_free_cargo");
            product_free_cargo.innerHTML = `
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/elektrix-free-cargo.png" alt="">
                <h4>Kargo Bedava</h4>
            `;

            row.insertAdjacentElement("afterend", product_free_cargo);
          }
        });
      } else {
        const anatomi_product_free_cargo_all = document.querySelectorAll(
          ".anatomi_product_free_cargo"
        );

        anatomi_product_free_cargo_all.forEach((cargo) => {
          cargo.remove();
        });
      }
    };

    const remove_idle_area_2 = () => {
      const idle_area = document.querySelectorAll(
        ".anatomi_product_list .productInfoRow .box.col-12.p-bottom.note-btns"
      );
      idle_area && idle_area.forEach((area) => area.remove());
    };

    const fix_discount_area = () => {
      const discount_area = document.querySelectorAll(
        "#SepetForm > div > div.anatomi_basket_container > div.fl.col-12.middleItem.anatomi_product_list > div > div.col.col-3.col-sm-9.col-xs-8.productInfoRow > div.productPrcRow > div > span.fl.col-12"
      );
      discount_area &&
        discount_area.forEach((area) => {
          if (!area.querySelector(".discountedPrice")) {
            area.remove();
          }
        });
    };

    fix_discount_area();
    remove_idle_area_2();
    add_free_cargo_product();
    change_html_dec_button();
    change_html_remove_button();
    change_html_inc_button();
    add_class_remove_button();
    delete_idle_text();
    transform_delete();
    transform_price();
    remove_idle_area();
    remove_total_price();
    remove_header();
    add_class();
    handle_button();
  };

  const delete_header_title_and_create_new = () => {
    const SepetForm = document.querySelector("#SepetForm");
    const old_title = document.querySelector("#mainColumn > h1");
    old_title && old_title.remove();

    if (!SepetForm.querySelector(".anatomi_basket_title") && cartEmpty) {
      const title = document.createElement("h1");
      title.classList.add("anatomi_basket_title");
      title.textContent = "Sepetim";
      SepetForm.insertAdjacentElement("afterbegin", title);
    }
  };

  const handle_add_taksit = () => {
    const taksit = document.createElement("div");
    taksit.classList.add("anatomi_taksit_avantaj");

    taksit.innerHTML = `
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
    >
      <path
        d="M7.60975 17.9884L4.253 11.7317L1.67708 13.3298C0.0733437 14.3308 -0.47782 16.5385 0.452269 18.2685C1.37853 19.9943 3.43009 20.5875 5.03765 19.5907L7.60975 17.9884Z"
        fill="#5C9C54"
      />
      <path
        d="M18.7864 6.99891C18.8636 7.15283 18.9976 7.23942 19.1398 7.23942C19.2089 7.23942 19.278 7.22018 19.343 7.17688L22.6256 4.93052C22.8206 4.79584 22.8856 4.50241 22.7759 4.27152C22.6621 4.04063 22.4143 3.96367 22.2193 4.09355L18.9367 6.33991C18.7417 6.47459 18.6726 6.76802 18.7864 6.99891Z"
        fill="#5C9C54"
      />
      <path
        d="M23.6232 9.80632L20.25 9.91549C20.051 9.92082 19.8953 10.046 19.9026 10.1924C19.9098 10.3362 20.0727 10.448 20.2645 10.448H20.279L23.6522 10.3389C23.8513 10.3335 24.0069 10.2084 23.9997 10.0619C23.9924 9.91283 23.8259 9.80366 23.6232 9.80632Z"
        fill="#5C9C54"
      />
      <path
        d="M16.5816 3.96815C16.6525 4.01108 16.7276 4.03058 16.8069 4.03058C16.9445 4.03058 17.078 3.96815 17.1572 3.85109L19.2511 0.780211C19.3762 0.596817 19.3178 0.358794 19.126 0.241734C18.9299 0.124673 18.6755 0.179302 18.5504 0.362696L16.4565 3.43358C16.3314 3.61307 16.3898 3.85109 16.5816 3.96815Z"
        fill="#5C9C54"
      />
      <path
        d="M7.53805 18.791L5.52763 20.1522C5.25858 20.3317 4.97458 20.4673 4.68311 20.5724C5.04184 22.6645 5.95737 24.5728 7.29889 26.0171C7.79963 26.5555 8.53952 26.643 9.12621 26.2447C9.14116 26.236 9.15237 26.2272 9.16731 26.2185C10.023 25.6407 10.2174 24.2839 9.55594 23.4261C8.55447 22.1174 7.85568 20.5199 7.53805 18.791Z"
        fill="#5C9C54"
      />
      <path
        d="M12.4956 10.4679C11.2372 8.14594 10.2182 5.85274 9.62766 4.0075C9.29185 2.95132 9.11043 2.11295 9.08727 1.46362C8.29599 2.57323 7.8907 4.39792 7.35031 5.96781C6.71342 8.09251 5.83722 9.77747 4.68311 10.9405L8.20721 17.442C9.73188 16.9571 11.5422 16.994 13.5879 17.4667C15.1435 17.7502 16.8457 18.2968 18.1465 18.1119C15.8807 16.6201 12.8816 11.1748 12.4956 10.4679Z"
        fill="#5C9C54"
      />
      <path
        d="M10.2196 0.878809C9.49277 1.32274 10.2904 4.27672 12.027 7.94015C13.2803 7.31783 14.7969 7.79909 15.5002 9.08939C16.2074 10.3797 15.842 12.0102 14.7026 12.8441C16.8557 16.3001 18.9027 18.5405 19.6335 18.0924C20.5215 17.5489 19.1385 13.2548 16.5375 8.50025C13.9365 3.74567 11.1115 0.33531 10.2196 0.878809Z"
        fill="#5C9C54"
      />
    </svg>
    <h2>9 aya varan taksit seçenekleri ile</h2>

      `;

    const anatomi_order_summary = document.querySelector(
      "#SepetForm > div > div.anatomi_basket_container > div.anatomi_basket_group > div.col.col-3.col-md-6.col-sm-12.fr.anatomi_order_summary"
    );
    anatomi_order_summary.insertAdjacentElement("afterbegin", taksit);
  };

  setInterval(() => {
    if (cartEmpty) {
      add_class_summary();
      transportSummary();
      update_order_summary();
      update_discount_area();
      update_product_list();
      delete_header_title_and_create_new();
    }
  });

  setTimeout(() => {
    handle_add_taksit();
  }, 500);
};

const doksansekiz_init = () => {
  doksansekiz_html();
  doksansekiz_css();
  doksansekiz_js();
};

const doksansekiz_conditions = () => {
  const anatomi_basket_container = !document.querySelector(
    ".anatomi_basket_container"
  );
  const anatomi_basket_title = !document.querySelector(".anatomi_basket_title");
  const windowLocation =
    window.location.href === "https://www.elektrix.com/sepet";
  const windowInnerWidth = window.innerWidth > 768;
  const cartEmpty = !document.querySelector("#cartEmpty");

  return (
    anatomi_basket_container &&
    anatomi_basket_title &&
    windowLocation &&
    windowInnerWidth &&
    cartEmpty
  );
};

if (doksansekiz_conditions()) {
  doksansekiz_init();
}
