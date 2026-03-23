const header_sticky_html = () => {
    html = `
    <a href="#teklif-al" class="anatomi_teklif_al_btn flex-grow-1 flex-shrink-0">
        Teklif Al
    </a>
    `;
    const nav = document.querySelector("#casco-page > nav")
    // const nav = document.querySelector("#zorunlu-trafik-page > nav")
    if (nav) {
        nav.insertAdjacentHTML("afterbegin", html);
    }

     window.addEventListener("scroll", () => {
            if (window.scrollY >= 600) {
                document.querySelector(".anatomi_teklif_al_btn").style.display = "flex";
            } else {
                document.querySelector(".anatomi_teklif_al_btn").style.display = "none";
            }
        });
};

const header_sticky_css = () => {
    const style = `
      <style>    
      #zorunlu-trafik-page > nav > a.btn-solid.flex-grow-1.flex-shrink-0.text-center.py-2.px-1.m-2 {
        display: none !important;
      }
      .anatomi_teklif_al_btn {
      display: none;
      width: 120px;
    text-align: center;
    background-color: #3B4145;
    color: white;
    padding: 10px;
    border-radius: 8px;
    font-weight: normal;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
      }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const header_sticky_js = () => {
   

};

const header_sticky_init = () => {
    header_sticky_html();
    header_sticky_css();
    header_sticky_js();
};

const header_sticky_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (header_sticky_condition()) {
    header_sticky_init();
}
