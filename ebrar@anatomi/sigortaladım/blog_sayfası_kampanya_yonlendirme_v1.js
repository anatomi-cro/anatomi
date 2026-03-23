const kampanya_yonlendirme_html = () => {};

const kampanya_yonlendirme_css = () => {
    const style = `
      <style>    
       .anatomi_sticky_container {
        position: fixed;
        width: 100%;
        bottom: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        padding: 10px 0px 15px 0px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        text-align: center;
        cursor: pointer;
        z-index: 9999;
      }
    .anatomi_sticky_buton_kampanya_title{
       font-size: 16px;
        font-weight: bold;
        text-align: center;
        padding: 10px;
        margin: 0px;
    }
    .anatomi_sticky_kampanyalar{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
      .anatomi_sticky_buton_kampanya {
       display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 40%;
        height: 250px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        text-align: center;
        cursor: pointer;
     }
    .anatomi_sticky_buton_kampanya h6{
        margin: 10px 10px;
        font-weight: bold;
    }
     .anatomi_sticky_buton_kampanya a {
          display: block;
          padding: 5px;
          background-color: #324050;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          margin: 10px 20px;
          text-align: center;
      }
    .anatomi_sticky_buton_kampanya img{
        border-top-left-radius: 8px;
         border-top-right-radius: 8px;
    }
    .anatomi_sticky_close_btn{
         position: absolute;
        top: 5px;
        right: 10px;
        color: black;
        border: none;
        width: 24px;
        height: 24px;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
    }
    #button-back-top{
        bottom: 350px !important;
    }
        
        
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const kampanya_yonlendirme_js = () => {
        fetch("https://www.sigortaladim.com/kampanyalar") 
        .then(response => response.text()) 
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
  
            const blogItems = doc.querySelectorAll(".campaign");
            console.log(blogItems)
    
            const data = [];
            blogItems.forEach(item => {
                const imgElement = item.querySelector("img");
                const img = imgElement ? imgElement.getAttribute("data-src") || imgElement.getAttribute("src") : null;
                const title = item.querySelector(".title")?.innerText;
                const link = item.querySelector("a")?.href;
                
                if (img && title && link) {
                    data.push({ img, title, link });
                }
            });
    
            kampanyaGoster(data);
        })
        .catch(error => console.error("Blog verileri çekilemedi:", error));

    
    

function kampanyaGoster(data) {
    if (data.length < 2) return;

    const kampanyaContainer = document.createElement("div");
    kampanyaContainer.classList.add("anatomi_sticky_container");

    const closeButton = document.createElement("button");
    closeButton.classList.add("anatomi_sticky_close_btn");
    closeButton.innerHTML = "✖";

    kampanyaContainer.appendChild(closeButton);

    closeButton.addEventListener("click", () => {
        kampanyaContainer.style.display = "none";
    });


    const kampanyaContainerTitle = document.createElement("h3");
    kampanyaContainerTitle.classList.add("anatomi_sticky_buton_kampanya_title");
    kampanyaContainerTitle.textContent = "Sana Özel Kampanyaları Hemen İncele";

    const kampanyalar = document.createElement("div");
    kampanyalar.classList.add("anatomi_sticky_kampanyalar");

    function getRandomItems() {
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 2);
    }

    const [randomItem1, randomItem2] = getRandomItems();

    function createKampanyaElement(item) {
        const kampanyaDiv = document.createElement("div");
        kampanyaDiv.classList.add("anatomi_sticky_buton_kampanya");

        const img = document.createElement("img");
        img.src = item.img;

        const title = document.createElement("h6");
        title.textContent = item.title;

        const linkButton = document.createElement("a");
        linkButton.href = item.link;
        linkButton.textContent = "Keşfet";

        const parts = item.link.split("/");
        let lastPart = parts.pop() || parts.pop(); 
        
    
       
        linkButton.classList.add(`${lastPart}`);

        kampanyaDiv.appendChild(img);
        kampanyaDiv.appendChild(title);
        kampanyaDiv.appendChild(linkButton);

        return kampanyaDiv;
    }

    kampanyalar.appendChild(createKampanyaElement(randomItem1));
    kampanyalar.appendChild(createKampanyaElement(randomItem2));

    kampanyaContainer.appendChild(kampanyaContainerTitle);
    kampanyaContainer.appendChild(kampanyalar);

    document.body.appendChild(kampanyaContainer);
}

};
const kampanya_yonlendirme_init = () => {
    kampanya_yonlendirme_html();
    kampanya_yonlendirme_css();
    kampanya_yonlendirme_js();
};

const kampanya_yonlendirme_condition = () => {
    const device = window.innerWidth <= 768;
   return device;
};

if (kampanya_yonlendirme_condition()) {
    kampanya_yonlendirme_init();
}