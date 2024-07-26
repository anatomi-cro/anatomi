const style = function () {
  const style = `
    <style>
      #tabBtn {
        flex-direction: column;
        gap: 7px;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
      }

      #tabBtn li {
        cursor: pointer;
        background: #dddddd;
        line-height: 60px;
        width: 99% !important;
        color: #000;
        text-align: center;
        padding: 15px;
        display: flex;
        justify-content: space-between;
      }

      #tabBtn li img {
    width: 20px !important;
    height: 20px;
    object-fit: contain;
      }

      #tabBtn li.active {
        background: #dddddd !important;
        border: 1px solid #efefef;
        border-bottom: none;
      }
    </style>
    `;

  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};

const js = function () {
  const downArrow =
    "https://anatomi.s3.eu-north-1.amazonaws.com/Arrow+1+(Stroke)+(1).png";
  const rightArrow =
    "https://anatomi.s3.eu-north-1.amazonaws.com/Arrow+1+(Stroke).png";

  const tabBtnLi = document.querySelectorAll("#tabBtn li");

  tabBtnLi.forEach((item) => {
    if (item.classList.contains("active")) {
      item.innerHTML += `<img src="${downArrow}" alt="downArrow">`;
    } else {
      item.innerHTML += `<img src="${rightArrow}" alt="downArrow">`;
    }
  });

  tabBtnLi.forEach((item) => {
    item.addEventListener("click", function () {
      tabBtnLi.forEach((item) => {
        item.classList.remove("active");
        item.innerHTML = item.innerHTML.replace(downArrow, rightArrow);
      });

      item.classList.add("active");
      item.innerHTML = item.innerHTML.replace(rightArrow, downArrow);
    });
  });
};

const init = function () {
  style();
  js();
};

init();
