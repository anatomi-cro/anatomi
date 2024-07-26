if(window.innerWidth < 900){
  
  const anatomi_kategori_html = `
  <div class="anatomi_category_container">
  <div class="anatomi_category_content">
    <div class="anatomi_category_titles">
      <a class="anatomi_category_title anatomi_category_woman"
        >Kadın</a
      >
      <a class="anatomi_category_title anatomi_category_man"
        >Erkek</a
      >
    </div>
  
    <div class="anatomi_category_body">
      <div class="anatomi_category_body_woman">
        <div class="anatomi_category_body_woman_list">
          <a href="/kadin-elbise-ve-etek" class="anatomi_category_body_woman_item">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Kad%C4%B1n+Elbise.jpg" alt="" />
            <h4>Elbise</h4>
          </a>
  
                  <a href="/kadin-tisort-ve-bluz" class="anatomi_category_body_woman_item">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Kad%C4%B1n+Ti%C5%9F%C3%B6rt.jpg" alt="" />
            <h4>T-shirt</h4>
          </a>
  
          <a href="/kadin-sort" class="anatomi_category_body_woman_item">
          <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Kad%C4%B1n+%C5%9Eort.jpg" alt="" />
          <h4>Şort</h4>
        </a>
  
  
          <a href="/kadin-jean" class="anatomi_category_body_woman_item">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Kad%C4%B1n+Jean.jpg" alt="" />
            <h4>Jean</h4>
          </a>
  
          
        <a href="/kadin-aksesuar" class="anatomi_category_body_woman_item">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Kad%C4%B1n+Aksesuar.jpg" alt="" />
        <h4>Aksesuar</h4>
      </a>

          <a href="/kadin-elbise-ve-etek" class="anatomi_category_body_woman_item">
          <img src="https://anatomi.s3.eu-north-1.amazonaws.com/etek.jpg" alt="" />
          <h4>Etek</h4>
        </a>

          <a href="/kadin-plaj-giyim?sort=p.price&order=ASC" class="anatomi_category_body_woman_item">
          <img src="https://anatomi.s3.eu-north-1.amazonaws.com/plaj+giyim.jpg" alt="" />
          <h4>Plaj Giyim <img src="https://anatomi.s3.eu-north-1.amazonaws.com/sun-umbrella+(1)+1.png"/></h4>
        </a>
        </div>
      </div>
      <div class="anatomi_category_body_man">
        <div class="anatomi_category_body_man_list">
  
               <a href="/erkek-tisort" class="anatomi_category_body_man_item">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Erkek+Ti%C5%9F%C3%B6rt.jpg" alt="" />
            <h4>T-shirt</h4>
          </a>
  
          <a href="/erkek-sort" class="anatomi_category_body_man_item">
          <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Erkek+%C5%9Eort.jpg" alt="" />
          <h4>Şort</h4>
        </a>
  
                <a href="/erkek-gomlek" class="anatomi_category_body_man_item">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Erkek+G%C3%B6mlek.jpg" alt="" />
            <h4>Gömlek</h4>
          </a>
  
          <a href="/erkek-pantolon" class="anatomi_category_body_man_item">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Erkek+Jean.jpg" alt="" />
            <h4>Jean</h4>
          </a>

          <a href="/erkek-plaj-giyim" class="anatomi_category_body_man_item">
          <img src="https://anatomi.s3.eu-north-1.amazonaws.com/deniz+s%CC%A7ortu.jpg" alt="" />
          <h4>Plaj Giyim <img src="https://anatomi.s3.eu-north-1.amazonaws.com/sun-umbrella+(1)+1.png"/></h4>
        </a>
  
          <a href="/erkek-aksesuar" class="anatomi_category_body_man_item">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Erkek+Aksesuar.jpg" alt="" />
            <h4>Aksesuar</h4>
          </a>
  
        </div>
      </div>
    </div>
  </div>
  </div>
  `;
  
  const anatomi_kategori_style = `
  <style>
  .anatomi_category_container {
    width: 100%;
    height: fit-content;
    margin-top: 50px;
  }
  
  .container-active {
      margin-bottom: 150px;
      transition: all 0.5s ease-in-out;
  }
  
  .anatomi_category_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  
  .anatomi_category_titles {
    display: flex;
    gap: 50px;
  }
  
  .anatomi_category_titles a {
    font-size: 25px;
    color: #000;
  }
  
  .anatomi_category_woman.anatomi_category_title_active {
    color: blue;
  }
  
  .anatomi_category_man.anatomi_category_title_active {
    color: blue;
  }
  
  .anatomi_category_body {
    padding: 10px;
    width: 100vw;
    overflow: hidden;
  }
  
  .anatomi_category_body_woman {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    gap: 20px;
    transform: translateX(-100%);
    opacity: 0;
    transition: all 0.5s ease-in-out;
    overflow: auto;
    padding-left: 10px;
  }
  
  .anatomi_category_body_woman_list, .anatomi_category_body_man_list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }
  
  .anatomi_category_body_man {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    gap: 20px;
    transform: translateX(-100%);
    opacity: 0;
    transition: all 0.5s ease-in-out;
    overflow: auto;
    padding-left: 10px;
  }
  
  .anatomi_category_body_man::-webkit-scrollbar,.anatomi_category_body_woman::-webkit-scrollbar {
    display: none;
  }
  
  .anatomi_category_body_woman.anatomi_category_body_active {
    transform: translateX(0%);
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }
  
  .anatomi_category_body_man.anatomi_category_body_active {
    transform: translateX(0%);
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }
  
  .anatomi_category_body_woman_item,
  .anatomi_category_body_man_item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100px;
    height: 100%;
    gap: 10px;
    padding: 10px;
    text-decoration: none;
    border: none ;
  }
  
  .item-active{
    border: 1px solid #1D49F1;
    color: #1D49F1 !important;
    transition: all 0.5s ease-in-out;
  }
  
  .anatomi_category_body_woman_item h4,
  .anatomi_category_body_man_item h4 {
    font-size: 14px;
    height: 100%;
    color: #000;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  
  .item-title-active {
      color: #1D49F1 !important;
      transition: all 0.5s ease-in-out;
  }
  
  .anatomi_category_body_woman_item img,
  .anatomi_category_body_man_item img {
    width: 60px;
    height: 60px;
    object-fit: cover;
  }

  .anatomi_category_body_woman_item h4 img,
  .anatomi_category_body_man_item h4 img{
    width: 18px;
    height: 18px;
  }
  </style>
  `;
  
  const parent = document.querySelectorAll(".uk-section.uk-section-large")[0];
  const head = document.querySelector("head");
  
  parent.insertAdjacentHTML("afterend", anatomi_kategori_html);
  head.insertAdjacentHTML("beforeend", anatomi_kategori_style);
  
  
  const container = document.querySelector(".anatomi_category_container");
  const manItem = document.querySelectorAll(".anatomi_category_body_man_item");
  const womanItem = document.querySelectorAll(".anatomi_category_body_woman_item");
  const womanButton = document.querySelector(".anatomi_category_woman");
  const manButton = document.querySelector(".anatomi_category_man");
  const womanBody = document.querySelector(".anatomi_category_body_woman");
  const manBody = document.querySelector(".anatomi_category_body_man");
  const womanList = document.querySelector(
    ".anatomi_category_body_woman_list"
  );
  
  let isDragging = false;
  let startX;
  let scrollLeft;
  
  womanButton.addEventListener("click", (e) => {
    e.preventDefault();
    manButton.classList.remove("anatomi_category_title_active");
    womanButton.classList.add("anatomi_category_title_active");
    manBody.classList.remove("anatomi_category_body_active");
    womanBody.classList.add("anatomi_category_body_active");
    container.classList.add("container-active");
  });
  
  manButton.addEventListener("click", (e) => {
    e.preventDefault();
    womanButton.classList.remove("anatomi_category_title_active");
    manButton.classList.add("anatomi_category_title_active");
    womanBody.classList.remove("anatomi_category_body_active");
    manBody.classList.add("anatomi_category_body_active");
    container.classList.add("container-active");
  });
  
  manItem.forEach((item) => {
    const h4 = item.querySelector("h4");
    item.addEventListener("click", (e) => {
      h4.classList.add("item-title-active");
    });
    item.addEventListener("click", (e) => {
      item.classList.add("item-active");
    });
  });
  
  womanItem.forEach((item) => {
    const h4 = item.querySelector("h4");
    item.addEventListener("click", (e) => {
      h4.classList.add("item-title-active");
    });
    item.addEventListener("click", (e) => {
      item.classList.add("item-active");
    });
  });
  }