const scrollPushHandler = () => {
  let pushed = false;

  window.addEventListener("scroll", () => {
    if (pushed) return;

    if (window.scrollY >= 400) {
      const loader = document.querySelector("#anatomi-trafikLoader-css");
      const scrollEventVariation = loader ? "trafik-loader" : "trafik-original";

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "scroll_done",
        scroll_event_variation: scrollEventVariation,
      });

      pushed = true;
    }
  });
};

scrollPushHandler();

/*

const scrollPushHandler = () => {
  let pushed = false;

  window.addEventListener("scroll", () => {
    if (pushed) return;

    if (window.scrollY >= 400) {
      const loader = document.querySelector("#anatomi-kaskoLoader-css");
      const scrollEventVariation = loader ? "kasko-loader" : "kasko-original";

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "scroll_done",
        scroll_event_variation: scrollEventVariation,
      });

      pushed = true;
    }
  });
};

scrollPushHandler();


*/
