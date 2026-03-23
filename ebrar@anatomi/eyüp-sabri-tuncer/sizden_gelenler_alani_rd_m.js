const sizden_gelenler_alani_rd_html = () => {};

const sizden_gelenler_alani_rd_css = () => {
  const style = `
      <style id="sizden_gelenler_alani_rd_css">  
      .owl-stage{
        height: 350px !important;
      }
     .anatomi-bg-area{
         display: none !important;
     }
     .anatomi-box{
        display: flex;
        flex-direction: column !important;
        justify-content: center;
        align-items: center !important;
        background-color: #264734 !important;
        border-radius: 30px;
        margin-top: 80px !important;
        padding: 0px !important;
     }
    .anatomi-box > li{
        position: relative;
        height: 0;
        top: -80px;
    }
    .anatomi-box .imgArea img{
        border: 1px solid gray;
    }

    .anatomi-box-left-col{
        justify-content: center !important;
        align-items: center !important;
        width: 90% !important;
        gap: 10px !important;
    }
    .anatomi-box-left-col .titleH , .anatomi-box-left-col .commentH{
        text-align: center !important;
    }
     .anatomi_comment_arrow_container{
        height: 0;
        position: relative;
        top: -25px;
        left: 70px;
      }
      </style>
    `;
  const css = document.querySelector("#sizden_gelenler_alani_rd_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const sizden_gelenler_alani_rd_js = () => {
  const sizdenGelenlerContainers = document.querySelectorAll(
    ".anatomi-box-left-col",
  );
  sizdenGelenlerContainers.forEach((container) => {
    if (container) {
      let arrowContainer = container.nextElementSibling;
      if (!arrowContainer) {
        const arrowContainer = document.createElement("div");
        arrowContainer.classList.add("anatomi_comment_arrow_container");
        container.insertAdjacentElement("afterend", arrowContainer);

        let arrow = container.querySelector(".anatomi_comment_arrow");
        if (!arrow) {
          const arrow = document.createElement("img");
          arrow.classList.add("anatomi_comment_arrow");
          arrow.src = "https://r.resimlink.com/6iPkU2z7A5x.png";
          arrowContainer.appendChild(arrow);
        }
      }
    }
  });
};

const sizden_gelenler_alani_rd_init = () => {
  sizden_gelenler_alani_rd_html();
  sizden_gelenler_alani_rd_css();
  sizden_gelenler_alani_rd_js();
};

const sizden_gelenler_alani_rd_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
  if (sizden_gelenler_alani_rd_condition()) {
    sizden_gelenler_alani_rd_init();
  }
}, 50);
