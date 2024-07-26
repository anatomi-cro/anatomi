const anatomi_blog_tabli_html = `
<div class="anatomi_blog_tabli_menu_container">
<div class="anatomi_blog_tabli_menu_content">
  <div class="anatomi_blog_tabli_menu_titles">
    <a href="" class="anatomi_blog_tabli_menu_titles_trafik title-active"> Trafik Sigortası </a>
    <a href="" class="anatomi_blog_tabli_menu_titles_kasko"> Kasko Sigortası </a>
  </div>

  <div class="anatomi_tabli_menu_forms">
    <div class="anatomi_blog_tabli_menu_trafik tabli_active"></div>
    <div class="anatomi_blog_tabli_menu_kasko"></div>
  </div>
</div>
</div>
`;

const anatomi_blog_tabli_style = `
<style>
        .anatomi_blog_tabli_menu_container {
            position: relative;
            border-bottom: 1px solid #C4C4C4;
            border-left: 1px solid #C4C4C4;
            border-right: 1px solid #C4C4C4;
            margin-bottom: 30px;
            margin-top: 60px;
            overflow: hidden;
            border-radius: 5px;
        }
        .anatomi_blog_tabli_menu_content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            height: 100%;
        }

        .anatomi_blog_tabli_menu_titles {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
        }

        .anatomi_blog_tabli_menu_titles::before {
            content: "";
            width: 10px;
            height: 1px;
            background-color: #C4C4C4;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }

        .anatomi_blog_tabli_menu_titles a {
            display: block;
            width: 100%;
            padding: 15px 0px;
            background-color: #F2F2F2;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #C4C4C4;
            border-radius: 5px 5px 0px 0px;
        }

        .anatomi_blog_tabli_menu_titles_trafik {
            border-left: none !important;
        }

        .anatomi_blog_tabli_menu_titles_kasko {
            border-right: none !important;
        }

        .title-active {
            color: red !important;
            border-bottom: none!important;
            background-color: white !important;
        }



        .blog .content .right-side .pre-form {
             margin-bottom: 0px !important;
        }

        .anatomi_tabli_menu_forms {
            position: relative;
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .anatomi_blog_tabli_menu_trafik {
            transform: translateX(-100%);
            opacity: 0;
            transition: all 0.5s ease-in-out;
        }

        .tabli_active {
            transform: translateX(0%) !important;
            opacity: 1 !important;
            transition: all 0.5s ease-in-out;
        }

        .anatomi_blog_tabli_menu_kasko {
            position: absolute;
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.5s ease-in-out;
        }

        .anatomi_blog_tabli_menu_container .pre-form {
            border: none;
        }

    </style>
`;

const rightSide = document.querySelector(".right-side");
const head = document.querySelector("head");

rightSide.insertAdjacentHTML("afterbegin", anatomi_blog_tabli_html);
head.insertAdjacentHTML("beforeend", anatomi_blog_tabli_style);

const anatomi_trafik = document.querySelector(
  ".anatomi_blog_tabli_menu_trafik"
);
const trafikForm = document.querySelector(".pre-form.traffic");
const kaskoForm = document.querySelector(".anatomi_blog_tabli_menu_kasko");

anatomi_trafik.appendChild(trafikForm);

const trafikFormAll = document.querySelectorAll(".pre-form.traffic");


const trafik_title = document.querySelector(
  ".anatomi_blog_tabli_menu_titles_trafik"
);
const kasko_title = document.querySelector(
  ".anatomi_blog_tabli_menu_titles_kasko"
);

trafik_title.addEventListener("click", function (e) {
    e.preventDefault();
  anatomi_trafik.classList.add("tabli_active");
  kaskoForm.classList.remove("tabli_active");
  trafik_title.classList.add("title-active");
    kasko_title.classList.remove("title-active");
});

kasko_title.addEventListener("click", function (e) {
    e.preventDefault();
  kaskoForm.classList.add("tabli_active");
  anatomi_trafik.classList.remove("tabli_active");
    kasko_title.classList.add("title-active");
    trafik_title.classList.remove("title-active");
});

const anatomi_kasko = document.querySelector(".anatomi_blog_tabli_menu_kasko");
const kaskoForm2 = document.querySelector(".pre-form.casco");

anatomi_kasko.appendChild(kaskoForm2);

const banner = document.querySelectorAll(".title.lazyloaded");
banner.forEach((item) => {
  item.style.display = "none";
}
);

