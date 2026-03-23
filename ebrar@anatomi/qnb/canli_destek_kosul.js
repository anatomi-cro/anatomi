portalButton = document.querySelector(".portalButton");

if (portalButton) {
  portalButton.addEventListener("click", () => {
    localStorage.setItem("anatomi_portal_clicked", "clicked");
  });
}

if ((window.dataLayer = window.dataLayer || [])) {
  const hasFormSubmitEvent = window.dataLayer?.some(
    (item) => item?.event === "form_submit"
  );
  if (hasFormSubmitEvent === true) {
    localStorage.setItem("anatomi_form_submit", "true");
  }
}

const cookies = document
  .querySelector("body > efilli-layout-dynamic")
  ?.shadowRoot?.querySelector("#\\33 e3285d2-83d7-4c4c-ba85-0f82f0bae5a6");

if (!cookies) {
  console.log("cookies element bulunamadı");
} else {
  const checkDisplay = () => {
    const display = getComputedStyle(cookies).display;
    console.log("display:", display);

    if (display === "flex") {
      localStorage.setItem("anatomi_cookie", "true");
    }
  };
  checkDisplay();

  const observer = new MutationObserver(checkDisplay);

  observer.observe(cookies, {
    attributes: true,
    childList: true,
    subtree: true,
  });
}
