const urun_detay_form_sadelestirme_html = () => {
  const html = `
    `;
};
const urun_detay_form_sadelestirme_css = () => {
  const style = `
      <style>
    .anatomi_section_container{
      flex-direction: column;
      padding-top: 0px !important;
    }
     .anatomi_image_container{
        display: none !important;
      }
    .anatomi_image_desc{
        display: none !important;
      }
    .anatomi_image_title{
        display: none !important;
      }
     .anatomi_breadcrumb{
        display: none !important;
      }
      .anatomi_privileges{
        display: none !important;
      }
      .anatomi_badge{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #B61539;
      color: white;
      width: 100%;
      height: 35px;
      }
      .anatomi_badge img{
        width: 24px;
        height: 20px;
      }
    </style>
    `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const urun_detay_form_sadelestirme_js = () => {

  const generateFormContainer = () => {
  const sectionImageDetail = document.querySelector("body > main > section.image-detail")
  if(sectionImageDetail && !sectionImageDetail.querySelector(".anatomi_section_container")){
    sectionImageDetail.classList.add("anatomi_section_container");
    }

  const formContainer = document.querySelector("body > main > section.image-detail > div.image-detail__content.-campaign > div")
  const imageContainer = document.querySelector("body > main > section.image-detail > div.image-detail__content.-campaign")
  if(imageContainer && !imageContainer.classList.contains("anatomi_image_container")){
    imageContainer.classList.add("anatomi_image_container");
  }
  if(formContainer && imageContainer){
    imageContainer.insertAdjacentElement("afterend", formContainer);
  }
  const imageDetailDesc =document.querySelector("body > main > section.image-detail > div.container > div.image-detail__desc")
  if(imageDetailDesc && !imageDetailDesc.classList.contains("anatomi_image_desc")){
    imageDetailDesc.classList.add("anatomi_image_desc");
  }
  const imageDetailTitle = document.querySelector("body > main > section.image-detail > div.container > h1")
  if(imageDetailTitle && !imageDetailTitle.classList.contains("anatomi_image_title")){
    imageDetailTitle.classList.add("anatomi_image_title");
    }

  const breadCrumb = document.querySelector("body > main > section.image-detail > div.-white")
  if(breadCrumb && !breadCrumb.classList.contains("anatomi_breadcrumb")){
    breadCrumb.classList.add("anatomi_breadcrumb");
    }
    const privileges = document.querySelector("body > main > section.image-detail > div.privileges")
      if(privileges && !privileges.classList.contains("anatomi_privileges")){
        privileges.classList.add("anatomi_privileges");
      }

      const existingBadge = document.querySelector(".anatomi_badge");

      if (!existingBadge) {
        const badge = document.createElement("div");
        badge.classList.add("anatomi_badge");
      
        const img = document.createElement("img");
        const paragraph = document.createElement("p");
        badge.appendChild(img);
        badge.appendChild(paragraph);
      
        const targetElement = document.querySelector("body > main > section.image-detail > div.container");
      
        if (targetElement) {
          targetElement.insertAdjacentElement("beforebegin", badge);
        }
      
        const badgeContent = [
          {
            text: "Hızlı hasar ödeme ve takip kolaylığı",
            imageUrl: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sp_world_icon.png"
          },
          {
            text: "Günün her saati kesintisiz hizmet",
            imageUrl: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sp_world_icon.png"
          },
          {
            text: "Güvenli satın alma süreci",
            imageUrl: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sp_world_icon.png"
          },
          {
            text: "Mobil cihazlardan erişim",
            imageUrl: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sp_world_icon.png"
          },
          {
            text: "Uygun fiyatlarla taksitli ödeme seçeneği",
            imageUrl: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sp_world_icon.png"
          }
        ];
      
        let index = 1; 
        const initialContent = badgeContent[0]; 
        paragraph.textContent = initialContent.text;
        img.src = initialContent.imageUrl;
      
        setInterval(() => {
          const currentContent = badgeContent[index];
          paragraph.textContent = currentContent.text;
          img.src = currentContent.imageUrl;
          
          index = (index + 1) % badgeContent.length; 
        }, 3000); 
      }
      
      

        const existingDesc = document.querySelector(".anatomi_desc_container"); 
      
        if (!existingDesc) {
          const desc = document.createElement("div");
          desc.classList.add("anatomi_desc_container");
      
          const p = document.createElement("p");
          p.textContent = ""; 
      
          desc.appendChild(p);
      
          const targetElement = document.querySelector("body > main > section.image-detail > div.container");
      
          if (targetElement) {
            targetElement.insertAdjacentElement("beforebegin", desc);
          }
        }
  
  }

  setInterval(() => {
    generateFormContainer();
  },100);
};
const urun_detay_form_sadelestirme_init = () => {
  urun_detay_form_sadelestirme_html();
  urun_detay_form_sadelestirme_css();
  urun_detay_form_sadelestirme_js();
};
const urun_detay_form_sadelestirme_condition = () => {
  const device = window.innerWidth <= 768;
  return device;

};
if (urun_detay_form_sadelestirme_condition()) {
  urun_detay_form_sadelestirme_init();
}
