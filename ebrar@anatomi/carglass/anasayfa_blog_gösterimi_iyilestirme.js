const blog_gösterimi_iyilestirme_html = () => {
    const html = `
    <p class="anatomi_devamini_oku_btn">Devamını Oku</p>
    `;

    const targetElement = document.querySelectorAll("#carouselContainer > a > div");

    targetElement.forEach((element) => {
        element.insertAdjacentHTML("beforeend", html);
    });
};

const blog_gösterimi_iyilestirme_css = () => {
    const style = `
      <style>    
      .carousel-section {
          padding-top: 20px !important;
      }
      .carousel-item {
          padding: 0 !important;
          text-decoration: none !important;
      }
    .carousel-title {
       padding: 0 !important;
    }
    .anatomi_blog_yazilari_exp{
        padding-bottom: 30px;
    }

      .anatomi_devamini_oku_btn {
         text-decoration: underline;
         cursor: pointer;
         color: black !important;
         font-size: 16px;
      }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const blog_gösterimi_iyilestirme_js = () => {
    const blogYazilariTitle = document.querySelector("#content > div.anatomi_content > section > h2")
    if(blogYazilariTitle){
        blogYazilariTitle.textContent = "Blog";
    }

    const blogYazilariExp = document.createElement("p");
    blogYazilariExp.textContent = "Oto cam hasarları ve çözümleri hakkında güncel bilgiler";
    blogYazilariExp.classList.add("anatomi_blog_yazilari_exp");
    blogYazilariTitle.insertAdjacentElement("afterend", blogYazilariExp);
};

const blog_gösterimi_iyilestirme_init = () => {
    blog_gösterimi_iyilestirme_html();
    blog_gösterimi_iyilestirme_css();
    blog_gösterimi_iyilestirme_js();
};

const blog_gösterimi_iyilestirme_condition = () => {
    return true;
};

if (blog_gösterimi_iyilestirme_condition()) {
    blog_gösterimi_iyilestirme_init();
}    


