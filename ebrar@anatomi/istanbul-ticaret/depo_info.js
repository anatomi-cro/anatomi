const depo_info_html = () => {};

const depo_info_css = () => {
    const style = `
      <style>    
      .anatomi_info_section{
        display: flex;
        align-items: center;
        justify-content:center;
        font-size: 14px;
        background-color: #43B54C;
        color: white;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 5px 10px;
      }
           .anatomi_info_section::before {
        content: "";
        background: url("https://r.resimlink.com/dEoTG-lg6.png") no-repeat center;
        background-size: contain;
        width: 35px;
        height: 20px;
        display: inline-block;
        margin-right: 8px;
        transform: rotate(20deg);
      }
    @media (max-width: 768px) {
        .anatomi_info_section{
        padding: 5px 10px;
        position: fixed;
        width: 100%;

        left: 0;
        bottom: 118px;
        font-size: 12px;
        }
        .anatomi_modal {
    bottom: 170px !important;
}
.anatomi_ls_button {
    bottom: 160px !important;
}
    }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const depo_info_js = () => {
    const addInfoSectionDesktop = () => {
        let itemContainer = document.querySelector(".anatomi_info_section");
        if(!itemContainer){
            const itemContainer = document.querySelector("#cart-page > div > div.row > div:nth-child(2) > div > div.col-12.col-md-9 > div.w-100.border.border-light.border-bottom-0.cart-item-list.px-2")
            if (itemContainer) {
                const infoSection = document.createElement("div");
                infoSection.classList.add("anatomi_info_section");
                infoSection.textContent = "Depomuzun taşınması sebebiyle 30 Mayıs – 10 Haziran tarihleri arasında verdiğiniz siparişler, 10 Haziran’dan sonra kargoya verilecektir.";
                itemContainer.insertAdjacentElement("beforebegin", infoSection);
            }
        }
     
    };
    const addInfoSectionMobile = () => {
        let itemContainer = document.querySelector(".anatomi_info_section");
        if(!itemContainer){
            const itemContainer = document.querySelector("#cart-price-container > div.w-100.bg-white.buy-sticky.anatomi-sepet-sticky")
            if (itemContainer) {
                const infoSection = document.createElement("div");
                infoSection.classList.add("anatomi_info_section");
                infoSection.textContent = "Depomuzun taşınması sebebiyle 30 Mayıs – 10 Haziran tarihleri arasında verdiğiniz siparişler, 10 Haziran’dan sonra kargoya verilecektir.";
                itemContainer.insertAdjacentElement("beforebegin", infoSection);
            }

            const modal = document.querySelector("#ls-openButton")
            if(modal){
                modal.classList.add("anatomi_modal")
            }
        }
        const lsButton = document.querySelector("#ls-openButton")
        if(lsButton){
            lsButton.classList.add("anatomi_ls_button")
        }
    }

    const checkScreenSize = () => {
        if (window.innerWidth > 768) {
            addInfoSectionDesktop();
        } else {
            addInfoSectionMobile();
        }
    };

    setInterval(() => {
        checkScreenSize();
        }, 100);
};

const depo_info_init = () => {
    depo_info_html();
    depo_info_css();
    depo_info_js();
};

const depo_info_condition = () => {
    const device = window.innerWidth <= 768;
    return true;
};

if (depo_info_condition()) {
    depo_info_init();
}

