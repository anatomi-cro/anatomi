setTimeout(() => {
  const menuHatasi_html = () => {};

  const menuHatasi_css = () => {
    const style = `
      <style id="anatomiMenuFix-css">
      .anatomiSubMenu {
        height: calc(100% - 95px) !important;
      }
    </style>
      `;

    const head = document.querySelector("head");
    const styleSheet = document.querySelector("#anatomiMenuFix-css");
    if (!styleSheet) {
      head.insertAdjacentHTML("beforeend", style);
    }
  };

  const menuHatasi_js = () => {
    function fixKolonya() {
      const kolonyaContainer = document.querySelector(
        "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(4) > div.menu-wrap.active > div > div.menu-list-kolon > ul:nth-child(1) > li.nav-item.ulVar > ul",
      );
      if (!kolonyaContainer) return;
      const kolonyaSubItems = document.querySelectorAll(
        "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(4) > div.menu-wrap.active > div > div.menu-list-kolon > ul:nth-child(2) > li > ul > li",
      );
      if (!kolonyaSubItems) return;

      kolonyaContainer.classList.add("anatomiSubMenu");

      kolonyaSubItems.forEach((item, idx) => {
        kolonyaContainer.insertAdjacentElement(
          "afterbegin",
          kolonyaSubItems[kolonyaSubItems.length - idx - 1],
        );
      });

      const oldContainer = document.querySelector(
        "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(4) > div.menu-wrap.active > div > div.menu-list-kolon > ul:nth-child(2)",
      );

      if (!oldContainer) return;
      oldContainer.remove();
    }

    function fixAgizBakim() {
      const agizBakimContainer = document.querySelector(
        "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(7) > div.menu-wrap.active > div > div.menu-list-kolon > ul:nth-child(1) > li > ul",
      );
      if (!agizBakimContainer) return;
      const agizBakimSubItems = document.querySelectorAll(
        "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(7) > div.menu-wrap.active > div > div.menu-list-kolon > ul:nth-child(2) > li > ul > li",
      );
      if (!agizBakimSubItems) return;

      agizBakimContainer.classList.add("anatomiSubMenu");

      agizBakimSubItems.forEach((item, idx) => {
        agizBakimContainer.insertAdjacentElement(
          "afterbegin",
          agizBakimSubItems[agizBakimSubItems.length - idx - 1],
        );
      });

      const oldContainer = document.querySelector(
        "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(7) > div.menu-wrap.active > div > div.menu-list-kolon > ul:nth-child(2)",
      );

      if (!oldContainer) return;
      oldContainer.remove();
    }

    function fixMenu() {
      fixKolonya();
      fixAgizBakim();
    }

    const targetNode = document.querySelector(
      "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(4) > div.menu-wrap",
    );

    if (!targetNode) return;

    const observer = new MutationObserver((mutation, obs) => {
      const targetNode = document.querySelector(
        "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(4) > div.menu-wrap",
      );

      if (targetNode.classList.contains("active")) {
        fixMenu();
        obs.disconnect();
      }
    });

    observer.observe(targetNode, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    const targetNode2 = document.querySelector(
      "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(7) > div.menu-wrap",
    );

    if (!targetNode2) return;

    const observer2 = new MutationObserver((mutation, obs2) => {
      const targetNode2 = document.querySelector(
        "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(7) > div.menu-wrap",
      );
      if (targetNode2.classList.contains("active")) {
        fixMenu();
        obs2.disconnect();
      }
    });

    observer2.observe(targetNode2, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  };

  const menuHatasi_init = () => {
    menuHatasi_html();
    menuHatasi_css();
    menuHatasi_js();
  };

  const menuHatasi_conditions = () => {
    const phone = matchMedia("(max-width: 768px)").matches;
    const desktop = matchMedia("(min-width: 768px)").matches;
    const location = window.location.href.includes("/checkout");
    return phone && !location;
  };

  if (menuHatasi_conditions()) {
    menuHatasi_init();
  }
}, 1000);
