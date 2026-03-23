const urun_detay_form_duzenlemesi_html = () => {
  const html = `
  `;
}
const urun_detay_form_duzenlemesi_css =() => {
  const style = `
    <style>
  .anatomi_homecallarea{
  border: 1px solid #8080803d;
  border-radius: 5px;
  height: 400px;
  width: 400px;
  padding: 30px;
  margin-top: 20px;
  }
   .anatomi_form_h1{
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      color: #1e1e1e;
      margin: 15px !important;
   }
  .anatomi_form_p{
  padding-top: 10px;
  color: #838383;
  font-weight: normal;
  font-size: 15px;
  }
  .anatomi_form_input{
  border: none !important;
  border-radius: 5px !important;
  background-color: #eff1f9 !important;

  }
  .anatomi_form_label{
      color: #838383 !important;
  }
  .anatomi_form_btn{
      width: 100%;
  background: #fedd44 !important;
  color: black !important;
  border: none;
  font-weight: normal;
  text-shadow: none !important;
  }
  .anatomi_form_btn:hover{
  color: black !important;
  }
  @media (max-width: 768px) {
  .anatomi_homecallarea{
  width: 300px;
  }
  </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
}
const urun_detay_form_duzenlemesi_js = () => {
  const generateFormCss = () => {
  const homeCallArea = document.querySelector("#content > div > div.homeCallArea.hidden")
  homeCallArea.classList.remove("hidden");
  homeCallArea.classList.add("anatomi_homecallarea")
  
  const form = document.querySelector("#frmSiziArayalim")
  if(form){
      form.classList.add("anatomi_formSiziArayalim");
  }
  const formH1 = document.querySelector("#frmSiziArayalim > h1")
  if(formH1){
      formH1.classList.add("anatomi_form_h1");
      }
  const formSpan = document.querySelector("#frmSiziArayalim > h1 > span")
  if(formSpan){
      formSpan.classList.remove("color");
      }
  const formSmall = document.querySelector("#frmSiziArayalim > h1 > small")
  if(formSmall){
      const p = document.createElement("p");
      p.classList.add("anatomi_form_p");
      p.innerHTML = formSmall.innerHTML;
      formSmall.parentNode.replaceChild(p, formSmall);
  }
  const firstP = document.querySelector("#frmSiziArayalim > p:nth-child(2)")
  if(formSmall && firstP){
      firstP.insertAdjacentElement("beforebegin", formSmall);
}
const formSmallDNone = document.querySelector("#frmSiziArayalim > small")
if(formSmallDNone){
  formSmallDNone.style.display = "none";
}
const formInputs = document.querySelectorAll("#frmSiziArayalim > p> input")
  formInputs.forEach((input) => {
      input.classList.add("anatomi_form_input");
  })
 

  const formLabel1 = document.querySelector("#frmSiziArayalim > p:nth-child(3) > label")
  if(formLabel1){
      formLabel1.textContent = "İsim Soyisim*";
  }
  const formLabel2 = document.querySelector("#frmSiziArayalim > p:nth-child(4) > label")
  if(formLabel2){
      formLabel2.textContent = "Telefon Numarası*";
  }
  const formLabels = document.querySelectorAll("#frmSiziArayalim > p > label")
  formLabels.forEach((label) => {
      label.classList.add("anatomi_form_label");
  })
  const formBtn = document.querySelector("#submitButton")
  if(formBtn){
      formBtn.classList.add("anatomi_form_btn");
      formBtn.textContent="Kaydet"
  }
  const islemYapiliyor = document.querySelector("#submitLoading")
  if(islemYapiliyor){
      islemYapiliyor.style.display = "none";
  }
}

const generateFormInputs = () => {
  const nameSurname = document.querySelector("#frmSiziArayalim > p:nth-child(3) > input");
  nameSurname.id = "anatomi_nameSurname";
  const phone = document.querySelector("#frmSiziArayalim > p:nth-child(4) > input");
  phone.id = "anatomi_phone";

  document.querySelector(".anatomi_form_btn").addEventListener("click", () => {
   
    if (nameSurname && phone) {
        const inputDataSiziArayalim = {
            nameSurname: nameSurname.value,
            phone: phone.value
        };
        localStorage.setItem("inputDataSiziArayalim", JSON.stringify(inputDataSiziArayalim));

        nameSurname.value = "";
        phone.value = "";
    } 
});

phone.addEventListener("focus", (e) => {
  if (phone.value === "") {
    phone.value = "0";
  }
});

phone.addEventListener("input", (e) => {
  let value = phone.value;

  value = value.replace(/[^0-9]/g, "");

  if (!value.startsWith("0")) {
    value = "0" + value;
  }

  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  if (value.length > 6) {
    value = value.replace(
      /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
      "$1 ($2) $3 $4 $5"
    );
  }

  phone.value = value;
});

phone.addEventListener("blur", (e) => {
  if (phone.value === "0") {
    phone.value = "";
  }
});

nameSurname.addEventListener("input", (e) => {
  nameSurname.value = nameSurname.value.replace(
    /[^A-Za-zğüşöçıİĞÜŞÖÇ\s]/g,
    ""
  );
});

};
  generateFormCss();
  generateFormInputs();
}
const urun_detay_form_duzenlemesi_init = () => {
  urun_detay_form_duzenlemesi_html();
  urun_detay_form_duzenlemesi_css();
  urun_detay_form_duzenlemesi_js();
}
const urun_detay_form_duzenlemesi_condition = () => {
  if (window.location.pathname !== "/" && window.location.pathname !== "/Randevu/SiziArayalim") {
      return true;

}
}
if(urun_detay_form_duzenlemesi_condition()){
  urun_detay_form_duzenlemesi_init();
}



const carglass_sizi_arayalim_input_doldurma_html = () => {
  const html = `
  `;
};
const carglass_sizi_arayalim_input_doldurma_css = () => {
  const style = `
    <style>
  </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const carglass_sizi_arayalim_input_doldurma_js = () => {
  const storedData = localStorage.getItem("inputDataSiziArayalim");

  if (storedData) {
      const parsedData = JSON.parse(storedData); 
  
      const nameSurname = parsedData.nameSurname; 
      const phone = parsedData.phone; 
  
      const inputElementNameSurname = document.querySelector("#frmSiziArayalim > div:nth-child(4) > div:nth-child(2) > p > input");
      const inputElementPhone = document.querySelector("#frmSiziArayalim > div:nth-child(4) > div:nth-child(3) > p > input");

      if (nameSurname && inputElementNameSurname) {
          inputElementNameSurname.value = nameSurname;
      }
      if (phone && inputElementPhone) {
          inputElementPhone.value = phone;
      }
  }
  
};
const carglass_sizi_arayalim_input_doldurma_init = () => {
  carglass_sizi_arayalim_input_doldurma_html();
  carglass_sizi_arayalim_input_doldurma_css();
  carglass_sizi_arayalim_input_doldurma_js();
};
const carglass_sizi_arayalim_input_doldurma_condition = () => {

      return window.location.pathname === "/Randevu/SiziArayalim";

};

  if (carglass_sizi_arayalim_input_doldurma_condition()) {
    carglass_sizi_arayalim_input_doldurma_init();
  }
