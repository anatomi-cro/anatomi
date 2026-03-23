if (window.innerWidth < 768 && document.querySelector("#catImg")) {
  const insert_tukendi_css = () => {
    if (!document.querySelector("#anatomi_tukendi_badge_css")) {
      const style = `
        <style id="anatomi_tukendi_badge_css">
          .a_tükendi {
            background-color: rgb(127, 127, 127) !important;
          }
        </style>
      `;
      document.head.insertAdjacentHTML("beforeend", style);
    }
  };

  const update_tukendi_badge = () => {
    const badges = document.querySelectorAll(".darkFluBg");
    badges.forEach((item) => {
      item.classList.add("a_tükendi");
    });
  };


  insert_tukendi_css();
  setInterval(() => {
    update_tukendi_badge();
  }, 500);
}
