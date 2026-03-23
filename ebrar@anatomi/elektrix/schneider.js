const schenider_html = () => {
    const html = `
    <a class="anatomi_gorsel_link"></a>
    `;
    const targetElement = document.querySelector("#mainColumn > div.d-none.d-lg-block > div.resim-ustu-yazi")
    targetElement.insertAdjacentHTML("beforeend", html);

};

const schenider_css = () => {
    const style = `
      <style>    
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const schenider_js = () => {
  const img =document.querySelector("#mainColumn > div.d-none.d-lg-block > div.resim-ustu-yazi > img")
  const link = document.querySelector(".anatomi_gorsel_link");
  const target = document.querySelector("#text-1454703450633 > a");

  if(link && img){
    link.appendChild(img);
  }

  if (link && target) {
    link.addEventListener("click", (e) => {
      e.preventDefault(); 
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
};


const schenider_init = () => {
    schenider_html();
    schenider_css();
    schenider_js();
};

const schenider_condition = () => {
  const device = window.innerWidth > 768;
    return device;
};

if (schenider_condition()) {
    schenider_init();
}
