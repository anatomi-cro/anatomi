const dogum_tarihi_input_rd_html = () => {
  const container = document.createElement("div");
  container.className = "dogum-tarihi-container";

  container.innerHTML = `
    <div class="custom-select" id="gun-select">
      <div class="select-trigger">Gün</div>
      <ul class="options"></ul>
    </div>
    <div class="custom-select" id="ay-select">
      <div class="select-trigger">Ay</div>
      <ul class="options"></ul>
    </div>
    <div class="custom-select" id="yil-select">
      <div class="select-trigger">Yıl</div>
      <ul class="options"></ul>
    </div>
  `;
const targetElement = document.querySelector("#customerInfoForm > div > div:nth-child(6)")
  targetElement.insertAdjacentElement("afterend", container);
};

const dogum_tarihi_input_rd_css = () => {
  const style = `
    <style>
      .dogum-tarihi-container {
        display: flex;
        gap: 12px;
        margin: 20px 0;
      }

      .custom-select {
        position: relative;
        width: 100px;
        cursor: pointer;
      }

      .select-trigger {
        padding: 8px 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        background: #fff;
        font-size: 14px;
      }

      .options {
        list-style: none;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        max-height: 150px;
        overflow-y: auto;
        border: 1px solid #ccc;
        border-radius: 6px;
        background: #fff;
        display: none;
        z-index: 10;
      }

      .options li {
        padding: 8px 10px;
        cursor: pointer;
      }

      .options li:hover {
        background: #f0f0f0;
      }

      .custom-select.active .options {
        display: block;
      }
    </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};

const dogum_tarihi_input_rd_js = () => {

  const datePicker = document.querySelector("#customerInfoForm > div > div.datepicker")
  if(datePicker){
    datePicker.style.display = "none";
  }
  const gunSelect = document.querySelector("#gun-select .options");
  const aySelect = document.querySelector("#ay-select .options");
  const yilSelect = document.querySelector("#yil-select .options");

  for (let i = 1; i <= 31; i++) {
    gunSelect.innerHTML += `<li data-value="${i}">${i}</li>`;
  }

  const aylar = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];
  aylar.forEach((ay, index) => {
    aySelect.innerHTML += `<li data-value="${index + 1}">${ay}</li>`;
  });

  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= 1900; i--) {
    yilSelect.innerHTML += `<li data-value="${i}">${i}</li>`;
  }

  let selectedDay = "";
  let selectedMonth = "";
  let selectedYear = "";

  document.querySelectorAll(".custom-select").forEach(select => {
    const trigger = select.querySelector(".select-trigger");
    const options = select.querySelectorAll(".options li");

    trigger.addEventListener("click", () => {
      select.classList.toggle("active");
    });

    options.forEach(option => {
      option.addEventListener("click", () => {
        const value = option.getAttribute("data-value");
        trigger.textContent = option.textContent;
        select.classList.remove("active");

        if (select.id === "gun-select") {
        selectedDay = String(value).padStart(2, "0");
        } else if (select.id === "ay-select") {
        selectedMonth = String(value).padStart(2, "0");
        } else if (select.id === "yil-select") {
        selectedYear = value;
        }

if (selectedDay && selectedMonth && selectedYear) {
  const input = document.querySelector("#birthday");
  const tarih = `${selectedDay}.${selectedMonth}.${selectedYear}`;

  input.setAttribute("data-mask", tarih);
  input.setAttribute("data-mask-raw-value", tarih);
  input.value = tarih;

  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new Event("change", { bubbles: true }));

  const wrapper = document.querySelector("#customerInfoForm .mx-datepicker > div");
  if (wrapper) wrapper.classList.add("has-value");
}

      });
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select")) {
      document.querySelectorAll(".custom-select").forEach(s => s.classList.remove("active"));
    }
  });
};

const dogum_tarihi_input_rd_init = () => {
  dogum_tarihi_input_rd_html();
  dogum_tarihi_input_rd_css();
  dogum_tarihi_input_rd_js();
};

const dogum_tarihi_input_rd_condition = () => {
    const device = window.innerWidth <= 768;
  return device;
};

if (dogum_tarihi_input_rd_condition()) {
  dogum_tarihi_input_rd_init();
}
