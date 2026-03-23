const iframe_video_responsive_html = () => {};

const iframe_video_responsive_css = () => {
  const style = `
      <style id="iframe_video_responsive_css">    
      .anatomi_video_container{
          padding: 30px !important;
      }
      </style>
    `;
  const css = document.querySelector("#iframe_video_responsive_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const iframe_video_responsive_js = () => {
  const videoContainer = document.querySelector(".videoContainer");
  if (videoContainer) {
    videoContainer.classList.add("anatomi_video_container");
  }
};

const iframe_video_responsive_init = () => {
  iframe_video_responsive_html();
  iframe_video_responsive_css();
  iframe_video_responsive_js();
};

const iframe_video_responsive_condition = () => {
  return true;
};

setInterval(() => {
  if (iframe_video_responsive_condition()) {
    iframe_video_responsive_init();
  }
}, 50);
