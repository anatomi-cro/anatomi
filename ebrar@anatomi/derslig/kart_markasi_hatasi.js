const kart_markasi_hatasi_html = () => {};

const kart_markasi_hatasi_css = () => {};

const kart_markasi_hatasi_js = () => {
  const kartMarkasiImg = document.querySelector(
    "#tab-odeme-kart > div.grid.grid-cols-1.sm\\:grid-cols-2.gap-4.xl\\:gap-12 > div.hidden.sm\\:block.card-box.w-full.h-44.rounded-xl.border.border-gray-500.shadow-lg > div.cc-front.absolute.top-0.left-0.w-full.h-44.p-4.bg-gray-200.text-gray-970.rounded-xl > div.cc-header.h-8.flex.justify-between > img.cc-brand-logo"
  );

  const input = document.querySelector("#cc_number");
  if (!kartMarkasiImg || !input) return;

  const src = kartMarkasiImg.getAttribute("src");

  if (src && src.startsWith("/")) {
    kartMarkasiImg.style.display = "block";
    input.classList.remove("is-invalid");
    const hataMessage = document.querySelector(".form-error");
    if (hataMessage) hataMessage.remove();
  } else if (kartMarkasiImg.classList.contains("hidden")) {
    input.classList.remove("is-invalid");
    const hataMessage = document.querySelector(".form-error");
    if (hataMessage) hataMessage.remove();
  } else {
    kartMarkasiImg.style.display = "none";
    input.classList.add("is-invalid");
    let hataMessage = document.querySelector(".form-error");
    if (!hataMessage) {
      hataMessage = document.createElement("div");
      hataMessage.classList.add("form-error");
      hataMessage.textContent = "Hatalı veya eksik kart numarası girdiniz.";
      input.parentElement.appendChild(hataMessage);
    }
  }

  input.addEventListener("blur", () => {
    const src = kartMarkasiImg.getAttribute("src");
    const hataMessage = document.querySelector(".form-error");

    if ((src && src.startsWith("/")) || kartMarkasiImg.classList.contains("hidden")) {
      input.classList.remove("is-invalid");
      if (hataMessage) hataMessage.remove();
    }
  });
};

const kart_markasi_hatasi_init = () => {
  kart_markasi_hatasi_html();
  kart_markasi_hatasi_css();
  kart_markasi_hatasi_js();
};

const kart_markasi_hatasi_condition = () => true;

setInterval(() => {
  if (kart_markasi_hatasi_condition()) {
    kart_markasi_hatasi_init();
  }
}, 500);