const jk_hamburger_html = () => {
    const html = `
    `;
  }
  const jk_hamburger_css =() => {
    const style = `
      <style>
/* Main Menu List */

.anatomi_main_menu_list li>.MainNavItem>a{
    border-bottom: none !important;

}


/* Koleksiyonları Kesfet */

.anatomi_koleksiyonlar_container {
    margin: 20px 0;
    padding: 10px;
    text-align: left;
}

.anatomi_koleksiyonları_kesfet_title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: capitalize;
}

.anatomi_koleksiyonları_kesfet_image_list {
    display: flex;
    overflow-x: auto; 
    scrollbar-width: none;
    gap: 10px; 
    padding: 5px;
}

.anatomi_kesfet_image {
    flex: 0 0 100px; 
    height: 150px; 
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
    </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  }
  const jk_hamburger_js = () => {

    const generateMainMenuList = () => {
        const mainMenuList = document.querySelector("#MainMenu > ul")
        if(mainMenuList && !mainMenuList.classList.contains("anatomi_main_menu_list")){
            mainMenuList.classList.add("anatomi_main_menu_list");
        }
        
    }
    const generateKoleksiyonlarıKeşfet = () => {

        const mainMenuList = document.querySelector("#MainMenu > ul");
        if(mainMenuList){
            const koleksiyonlarıKesfetContainer = document.createElement("div");
            if(!koleksiyonlarıKesfetContainer.classList.contains("anatomi_koleksiyonlar_container")){
                koleksiyonlarıKesfetContainer.classList.add("anatomi_koleksiyonlar_container");
                mainMenuList.insertAdjacentElement("afterend", koleksiyonlarıKesfetContainer);
            }
        
        if(!koleksiyonlarıKesfetContainer.querySelector("anatomi_koleksiyonları_kesfet_title")){
            const koleksiyonlarıKesfetTitle = document.createElement("h2");
            if(!koleksiyonlarıKesfetTitle.classList.contains("anatomi_koleksiyonları_kesfet_title") &&
                !koleksiyonlarıKesfetTitle.textContent.includes("Koleksiyonları Keşfet")){
                koleksiyonlarıKesfetTitle.classList.add("anatomi_koleksiyonları_kesfet_title");
                koleksiyonlarıKesfetTitle.textContent = "Koleksiyonları Keşfet";
            }
            
            koleksiyonlarıKesfetContainer.appendChild(koleksiyonlarıKesfetTitle);
        }
        if (!koleksiyonlarıKesfetContainer.querySelector(".anatomi_koleksiyonları_kesfet_image_list")) {
            const imageList = document.createElement("div");
            if(!imageList.classList.contains("anatomi_koleksiyonları_kesfet_image_list")){
                imageList.classList.add("anatomi_koleksiyonları_kesfet_image_list");
            }

            const imageSources = [
                "https://r.resimlink.com/rbndafkD0QK9.png",
                "https://r.resimlink.com/CszoBZ6.png",
                "https://r.resimlink.com/CszoBZ6.png" 
            ];

            imageSources.forEach(src => {
                const image = document.createElement("img");
                image.src = src;
                if(!image.classList.contains("anatomi_kesfet_image")){
                    image.classList.add("anatomi_kesfet_image");
                }
                imageList.appendChild(image);
            });

            koleksiyonlarıKesfetContainer.appendChild(imageList);
        }

    }

    }

    generateMainMenuList();
    generateKoleksiyonlarıKeşfet();


  }
  const jk_hamburger_init = () => {
    jk_hamburger_html();
    jk_hamburger_css();
    jk_hamburger_js();
  }
  const jk_hamburger_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
  }
  if(jk_hamburger_condition()){
    jk_hamburger_init();
  }