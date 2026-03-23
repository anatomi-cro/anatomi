setTimeout(() =>{
const nav_duzenlemesi_html = () => {};

const nav_duzenlemesi_css = () => {
    const style = `
      <style id="anatomi_nav_duzenlemesi_css">    
        .dropdown:hover>ul {
        padding-top: 24px;
    }
@media screen and (max-width: 1200px) {
        .dropdown:hover>ul {
        padding-top: 38px;
    }
}
      </style>
    `;
    const css = document.querySelector("#anatomi_nav_duzenlemesi_css");
    const head = document.querySelector("head");
    if(!css){
    head.insertAdjacentHTML("beforeend", style);
    }
};

const nav_duzenlemesi_js = () => {
  const button = document.querySelector("#firstDropdownLink");
  const content = document.getElementById("kurumsal-content-block");

  if (button && content) {
    button.addEventListener("mouseenter", () => {
      content.style.marginTop = "350px";
    });

    button.addEventListener("mouseleave", () => {
    });
  }
};



const nav_duzenlemesi_init = () => {
    nav_duzenlemesi_html();
    nav_duzenlemesi_css();
    nav_duzenlemesi_js();
};

const nav_duzenlemesi_condition = () => {
    const device = window.innerWidth > 768;
    return device;
};



setInterval(() => {
    if (nav_duzenlemesi_condition()) {
        nav_duzenlemesi_init();
    }
}, 100);
},500);