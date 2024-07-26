const menu = document.getElementById("mobileMenuMain");
const menuUl = menu.querySelector("ul");
const menuItems = menu.querySelectorAll("ul .fl.col-12.line-bottom");

const urunList = document.getElementById("mainColumn");
const head = document.querySelector("head");

const anatomi_kategori_style = `
<style>
.anatomi_anasayfa_kategori {
  overflow: hidden;
  margin-bottom: 20px;
}

.anatomi_anasayfa_kategori ul {
  position: relative;
  width: 100%;
  height: fit-content;
  color: #000;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #077FBD transparent;
  scroll-behavior: smooth;
  scroll-snap-type: proximity;
}


.anatomi_anasayfa_kategori ul li {
  list-style: none;
  margin: 0 10px;
}

.anatomi_anasayfa_kategori a {
  text-decoration: none;
  color: #000;
  font-size: 13px;
  white-space: nowrap;
}

.li-subMenu {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: none;
  overflow: auto;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: #077FBD transparent;
  scroll-behavior: smooth;
  scroll-snap-type: proximity;
  padding: 10px 0;
}

.anatomi_anasayfa_kategori ul li h4 {
  white-space: nowrap;
  font-size: 12px;
}

.li-subMenu.subMenu-active {
  display: flex;
}

.subMenu-title-active {
  color: #077FBD !important;
}

.li-subMenu a {
  border: 1px solid #d9d9d9;
  padding: 5px 20px;
  border-radius: 5px;
}
</style>
`;

const anamoti_anasayfa_kategori_html = `
<div class="anatomi_anasayfa_kategori">
<ul>
  <li class="anatomi-kategori-aydinlatma anatomi-kategori-title">
    <h4>Aydınlatma</h4>
  </li>
  <li class="anatomi-kategori-anahtar anatomi-kategori-title">
    <h4>Anahtar ve Priz</h4>
  </li>
  <li class="anatomi-kategori-salt anatomi-kategori-title">
    <h4>Şalt Malzemeleri</h4>
  </li>
  <li class="anatomi-kategori-guc anatomi-kategori-title">
    <h4>Güç Kaynağı</h4>
  </li>
  <li class="anatomi-kategori-guvenlik anatomi-kategori-title">
    <h4>Güvenlik</h4>
  </li>
  <li class="anatomi-kategori-elektirik anatomi-kategori-title">
    <h4>Ev ELektiriği</h4>
  </li>
  <li class="anatomi-kategori-sarf anatomi-kategori-title">
    <h4>Sarf</h4>
  </li>
  <li class="anatomi-kategori-otomasyon anatomi-kategori-title">
    <h4>Otomasyon</h4>
  </li>
  <li class="anatomi-kategori-kablo anatomi-kategori-title">
    <h4>Kablo</h4>
  </li>
  <li class="anatomi-kategori-kanal anatomi-kategori-title">
    <h4>Kablo Kanalı</h4>
  </li>
</ul>

<div class="li-subMenu li-subMenu-aydinlatma">

</div>

<div class="li-subMenu li-subMenu-anahtar">
</div>

<div class="li-subMenu li-subMenu-anahtar">
</div>

<div class="li-subMenu li-subMenu-anahtar">
</div>

<div class="li-subMenu li-subMenu-anahtar">
</div>

<div class="li-subMenu li-subMenu-anahtar">
</div>
<div class="li-subMenu li-subMenu-anahtar">
</div>
<div class="li-subMenu li-subMenu-anahtar">
</div>
<div class="li-subMenu li-subMenu-anahtar">
</div>
<div class="li-subMenu li-subMenu-anahtar">
</div>
<div class="li-subMenu li-subMenu-anahtar">
</div>

</div>
`;

menuUl.classList.add("anatomi_kategori");
menuItems.forEach((item) => {
  item.classList.add("anatomi_urunList_kategori");
});

const anatomi_kategori = document.querySelector(".anatomi_anasayfa_kategori");

urunList.insertAdjacentHTML("afterbegin", anamoti_anasayfa_kategori_html);
head.insertAdjacentHTML("beforeend", anatomi_kategori_style);

const title = document.querySelectorAll(".anatomi_anasayfa_kategori li h4");
const subMenu = document.querySelectorAll(".li-subMenu");

title.forEach((item, idx) => {
  item.addEventListener("click", () => {
    subMenu.forEach((item) => {
      item.classList.remove("subMenu-active");
    });
    subMenu[idx].classList.toggle("subMenu-active");
  });

  item.addEventListener("click", () => {
    title.forEach((item) => {
      item.classList.remove("subMenu-title-active");
    });
    title[idx].classList.toggle("subMenu-title-active");
  });
});

const anatomiA = document.createElement("a");
const aparent = document.querySelectorAll(".anatomi_urunList_kategori");



for (let i = 1; i <= 10; i++) {
  const li = aparent[i].querySelectorAll("ul li");
  
  li.forEach((item) => {
    const anatomi_a = document.createElement("a");
    anatomi_a.classList.add("anatomi_kategori_item");
    anatomi_a.href = item.querySelector("a").href;
    anatomi_a.textContent = item.querySelector("a").textContent;
    subMenu[i-1].appendChild(anatomi_a);
  });
}

const kategoriItem = document.querySelectorAll(".anatomi_kategori_item");

if(kategoriItem){
  kategoriItem.forEach((item,idx) => {
    if(kategoriItem[idx+1]){
      if(kategoriItem[idx].textContent === kategoriItem[idx+1].textContent){
        kategoriItem[idx+1].remove();
      }
    }
  });
}
