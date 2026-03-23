const sizden_gelenler_alani_rd_html = () => {};

const sizden_gelenler_alani_rd_css = () => {
  const style = `
      <style id="sizden_gelenler_alani_rd_css">
      .owl-item{
        height: 410px !important;
      }    
      .anatomi_sizden_gelenler_container{
        background: linear-gradient(to bottom, #3F5243 0%, #5C7862 37%, #536C58 63%) !important;
        height: 250px !important;
        min-height: auto !important;
        border-radius: 45px;
        margin: 115px 0 0 0 !important;
      }
      .anatomi_sizden_gelenler_container  .imgArea{
        width: 150px;
        border-radius: 30px;
        background-color: #ffff;
      }
      .anatomi_sizden_gelenler_container .imgArea img{
        width: 100%;
      }
      .anatomi_sizden_gelenler_container .titleH , .anatomi_sizden_gelenler_container .commentH{
        font-size: 20px;
        margin: 0 !important;
      }
      .anatomi_sizden_gelenler_container .commentH{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 140px;
        width: 90% !important;

      }
      .anatomi_comment_arrow_container{
        height: 0;
        position: relative;
        top: 0px;
        left: 70px;
      }
      .commentsArea .ProductListnext , .commentsArea .ProductListprev{
        top: 50px !important;
        background: none !important;
        box-shadow: none !important;
      }
      .commentsArea .ProductListnext:hover , .commentsArea .ProductListprev:hover{
        background: none !important;
        box-shadow: none !important;
      }

      .commentsArea .ProductListnext{
        right: -25px !important;
      }
      .commentsArea .ProductListprev{
        left: -25px !important;
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
    "#boshtml_14 > div > div > div > div > div > div > div.commentsArea > ul > div.owl-stage-outer > div > div > li > a > div",
  );
  sizdenGelenlerContainers.forEach((container) => {
    if (
      container &&
      !container.classList.contains("anatomi_sizden_gelenler_container")
    ) {
      container.classList.add("anatomi_sizden_gelenler_container");
      let arrowContainer = container.querySelector(
        ".anatomi_comment_arrow_container",
      );
      if (!arrowContainer) {
        const arrowContainer = document.createElement("div");
        arrowContainer.classList.add("anatomi_comment_arrow_container");
        container.appendChild(arrowContainer);

        let arrow = container.querySelector(".anatomi_comment_arrow");
        if (!arrow) {
          const arrow = document.createElement("img");
          arrow.classList.add("anatomi_comment_arrow");
          arrow.src = "https://r.resimlink.com/c2mD5Mj.png";
          arrowContainer.appendChild(arrow);
        }
      }
    }
  });

  const titleH = document.querySelectorAll(".titleH");

  titleH.forEach((title) => {
    const nextEl = title.nextElementSibling;

    if (nextEl && nextEl.classList.contains("commentH")) {
      nextEl.insertAdjacentElement("afterend", title);
    }
  });
};

const sizden_gelenler_alani_rd_init = () => {
  sizden_gelenler_alani_rd_html();
  sizden_gelenler_alani_rd_css();
  sizden_gelenler_alani_rd_js();
};

const sizden_gelenler_alani_rd_condition = () => {
  const device = window.innerWidth > 768;
  return device;
};

setInterval(() => {
  if (sizden_gelenler_alani_rd_condition()) {
    sizden_gelenler_alani_rd_init();
  }
}, 50);
