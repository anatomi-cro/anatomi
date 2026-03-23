const jk_header_html = () => {
    const html = `
    `;
  }
  const jk_header_css =() => {
    const style = `
      <style>
      /* profile styles */

    .anatomi_profile_icon {
        display: flex !important;
        align-items: center;
    }

    .anatomi_profile_icon_title {
        font-size: 14px;
        color: #000;
        margin: 0px;
        white-space: nowrap;
        text-transform: uppercase;
    }

    /* favorites styles */

      .anatomi_favorites_container {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .anatomi_favorites_icon{
            width: 30px;
            height: 30px;
        }
        .anatomi_favorites_title {
            font-size: 14px;
            color: #000;
            margin: 0px;
            text-transform: uppercase;
        }


        /* basket styles */

         .anatomi_basket_icon {
            display: flex !important;
            align-items: center;
         }

         .anatomi_basket_icon_title {
            font-size: 14px;
            color: #000;
            margin: 0px;
            white-space: nowrap;
            text-transform: uppercase;
        }

    </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);

   
  }
  const jk_header_js = () => {

        const generateProfileIcon = () => {

            const profileIconA = document.querySelector("#UserAndBasket > div.TopRightItem > a");
            if(profileIconA && !profileIconA.classList.contains("anatomi_profile_icon")){
                profileIconA.classList.add("anatomi_profile_icon");
                const profileIconTitle = document.createElement("p");
                if(!profileIconTitle.classList.contains("profileIconTitle")){
                    profileIconTitle.classList.add("anatomi_profile_icon_title");
                    profileIconTitle.textContent = "Giriş Yap";
                    profileIconA.appendChild(profileIconTitle);
                }
            }


        }
        const generateFavoriteContainer = () => {
            const TopRightItem = document.querySelector("#UserAndBasket > div.TopRightItem");
            if(TopRightItem){
                const favoritesDiv = document.createElement("div");
                if(!favoritesDiv.classList.contains("anatomi_favorites_container")){
                    favoritesDiv.classList.add("anatomi_favorites_container");
                    
                    TopRightItem.insertAdjacentElement("afterend", favoritesDiv);
                }
                if (favoritesDiv) {
                    const favoritesLink = document.createElement("img");
                    if (!favoritesLink.classList.contains("anatomi_favorites_icon")) {
                        favoritesLink.classList.add("anatomi_favorites_icon");
                        favoritesLink.src = "https://static.jimmykey.com/Images/JMK/Icons/kalp.png";
                        favoritesLink.href = "#"; 
                        favoritesDiv.appendChild(favoritesLink);
    
                        const favoritesTitle = document.createElement("p");
                        if (!favoritesTitle.classList.contains("anatomi_favorites_title")) {
                            favoritesTitle.classList.add("anatomi_favorites_title");
                            favoritesTitle.textContent = "Favorilerim";
                            favoritesDiv.appendChild(favoritesTitle);
                        }
                    }
                }
            };  
        }    

        const generateBasketIcon = () => {
            const basketIconA = document.querySelector("#UserAndBasket > div.TopRightItem.RightBasket > div.SepetButton.tr > a")
            if(basketIconA && !basketIconA.classList.contains("anatomi_basket_icon")){
                basketIconA.classList.add("anatomi_basket_icon");
                const basketIconTitle = document.createElement("p");
                if(!basketIconTitle.classList.contains("profileIconTitle")){
                    basketIconTitle.classList.add("anatomi_profile_icon_title");
                    basketIconTitle.textContent = "Sepetim";
                    basketIconA.appendChild(basketIconTitle);
                }
            }


        }

        generateProfileIcon();
        generateFavoriteContainer();
        generateBasketIcon();
  }
  const jk_header_init = () => {
    jk_header_html();
    jk_header_css();
    jk_header_js();
  }
  const jk_header_condition = () => {
    const device = window.innerWidth >= 768;
    return device;
  }
  if(jk_header_condition()){
    jk_header_init();
  }