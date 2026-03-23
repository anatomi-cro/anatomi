const hamburger_menu_redesign_html = () => {};

const hamburger_menu_redesign_css = () => {
    const style = `
      <style>    

    .anatomi_li_title{
        display:flex;
        justify-content: space-between;
        align-items: center;
        transition: .3s;
    }
    .anatomi_li_title{
        transition: .3s;
    }
    .anatomi_li_title.active{
        color: #3074FF;
    }
    .anatomi_li_title.active span{
        transform : rotate(180deg);
    }
    .anatomi_dropdown_menu{
        display: none;
    }
    .anatomi_dropdown_menu.active{
        display: block;
    }

    .anatomi_contact_container{
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-bottom: 20px;
    gap: 20px;
    }
    .anatomi_number{
        font-weight: bold;
    }
    .anatomi_giris_uye_container{
        display: flex;
    margin: 20px 0px;
    }
    .anatomi_giris_yap{
    padding: 10px;
    width: 90%;
    margin: 0 auto;
    border-radius: 8px;
    background-color: #37424A;
    color: white;
    text-align: center;
    font-weight: normal;
    }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
   
};

const hamburger_menu_redesign_js = () => {

    const li = document.createElement("li");
    li.classList.add( "anatomi_dropdown");

    const a = document.createElement("a");
    a.classList.add("anatomi_li_title");
    a.innerText = "Ürünlerimiz";

    const span = document.createElement("span");
    span.classList.add("fa", "fa-chevron-down");

    a.appendChild(span);

    li.appendChild(a)

    const ul = document.createElement("ul");
    ul.classList.add( "anatomi_dropdown_menu");

    const trafikSigorta = document.querySelector("#dealHeader > div.sideNav > ul > li:nth-child(1)")
    ul.appendChild(trafikSigorta);
    const kaskoSigorta = document.querySelector("#dealHeader > div.sideNav > ul > li:nth-child(1)")
    ul.appendChild(kaskoSigorta);
    const aracimaSigorta = document.querySelector("#dealHeader > div.sideNav > ul > li:nth-child(1)")
    ul.appendChild(aracimaSigorta);
    const sagligimGuvende = document.querySelector("#dealHeader > div.sideNav > ul > li:nth-child(1)")
    ul.appendChild(sagligimGuvende);
    const evimGuvende = document.querySelector("#dealHeader > div.sideNav > ul > li:nth-child(1)");
    ul.appendChild(evimGuvende);
    const digerSigorta = document.querySelector("#dealHeader > div.sideNav > ul > li:nth-child(1)")
    ul.appendChild(digerSigorta);
    const onlineUrunler = document.querySelector("#dealHeader > div.sideNav > ul > li:nth-child(1)")
    ul.appendChild(onlineUrunler);

    li.appendChild(ul);

    const targetElement = document.querySelector("#dealHeader > div.sideNav > ul")
    if(targetElement){

        targetElement.insertAdjacentElement("afterbegin", li);
    }
   
    const anatomiTitle = document.querySelector(".anatomi_li_title");
    anatomiTitle.addEventListener("click", function(){
        const anatomiDropdown = document.querySelector("#dealHeader > div.sideNav > ul > li.anatomi_dropdown > ul")
        if (!anatomiDropdown.classList.contains("active")) {
            anatomiDropdown.classList.add("active");
            anatomiTitle.classList.add("active");
        } else {
            anatomiDropdown.classList.remove("active");
            anatomiTitle.classList.remove("active");
        }
        });

    const iletisim = document.querySelector("#dealHeader > div.sideNav > ul > li:nth-child(6)")
    if(iletisim){
        iletisim.style.display = "none";
    }
    
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("anatomi_contact_container");

    const phoneImageDiv = document.createElement("div");
    phoneImageDiv.classList.add("anatomi_phone_image");
    
    const phoneImage = document.createElement("img");
    phoneImage.src = "https://r.resimlink.com/GJwCOd3Yap.png";  
    phoneImage.alt = "Telefon Resmi";
    
    phoneImageDiv.appendChild(phoneImage);
    
  
    const contactTextDiv = document.createElement("div");
    contactTextDiv.classList.add("anatomi_contact_text");
  
    const callNowText = document.createElement("p");
    callNowText.classList.add("anatomi_call");
    callNowText.textContent = "Hemen Ara";
  
    const phoneNumber = document.createElement("p");
    phoneNumber.classList.add("anatomi_number");
    phoneNumber.textContent = "444 9 832";

    contactContainer.addEventListener("click", function() {
        window.location.href = "tel: 444 98 32";
      });
  
    contactTextDiv.appendChild(callNowText);
    contactTextDiv.appendChild(phoneNumber);
  
    contactContainer.appendChild(phoneImageDiv);
    contactContainer.appendChild(contactTextDiv);
    
    const targetElement2 = document.querySelector("#dealHeader > div.sideNav > div.partners-logo.d-flex.align-items-center.p-0")
    if(targetElement2){
        targetElement2.insertAdjacentElement("beforebegin", contactContainer);
    }
    const girisUyeContainer = document.createElement("div");
    girisUyeContainer.classList.add("anatomi_giris_uye_container");


    const girisUyeAnchor = document.createElement("a")
    girisUyeAnchor.classList.add("anatomi_giris_yap")
    girisUyeAnchor.textContent = "Giriş Yap/ Üye Ol";
    girisUyeAnchor.href = "https://www.sigortaladim.com/uye-giris";


    girisUyeContainer.appendChild(girisUyeAnchor)

    const targetElement3 = document.querySelector("#dealHeader > div.sideNav > div.logo");
    if(targetElement3){
        targetElement3.insertAdjacentElement("afterend", girisUyeContainer);  
        }
   
};

const hamburger_menu_redesign_init = () => {
    hamburger_menu_redesign_html();
    hamburger_menu_redesign_css();
    hamburger_menu_redesign_js();
};

const hamburger_menu_redesign_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (hamburger_menu_redesign_condition()) {
    hamburger_menu_redesign_init();
}
