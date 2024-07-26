const cardTitles = document.querySelectorAll(".uk-text-normal.card-title");
const imageBoxes = document.querySelectorAll(".uk-inline-clip.uk-width-1-1.mobile-card-image");

cardTitles.forEach((cardTitle, index) => {
    var text = cardTitle.textContent || cardTitle.innerText;
    if (text.includes("Rüzgara Dayanıklı")) {
        cardTitle.innerHTML = text.replace("Rüzgara Dayanıklı", "<span>🍃  Rüzgara Dayanıklı</span>");

        const parentContainer = imageBoxes[index];

        if (parentContainer) {
            const img = document.createElement("div");
            const inSideImg = document.createElement("img");
            inSideImg.src = "https://resmim.net/cdn/2024/01/15/Ziprsx.png";
            inSideImg.style.width = "40px";
            inSideImg.style.height = "40px";
            inSideImg.style.objectFit = "contain";
            inSideImg.style.position = "absolute";
            inSideImg.style.bottom = "3%";
            inSideImg.style.left = "3%";
            img.appendChild(inSideImg);
            img.classList.add("image-box");
            parentContainer.appendChild(img);
        }
    }

    if (text.includes("Suya Dayanıklı")){
        cardTitle.innerHTML = text.replace("Suya Dayanıklı", "<span>🌧️ Suya Dayanıklı</span>");

        const parentContainer = imageBoxes[index];

        if (parentContainer) {
            const img = document.createElement("div");
            const inSideImg = document.createElement("img");
            inSideImg.src = "https://resmim.net/cdn/2024/01/15/ZipRIC.png";
            inSideImg.style.width = "30px";
            inSideImg.style.height = "30px";
            inSideImg.style.objectFit = "contain";
            inSideImg.style.position = "absolute";
            inSideImg.style.bottom = "3%";
            inSideImg.style.left = "3%";
            img.appendChild(inSideImg);
            img.classList.add("image-box");
            parentContainer.appendChild(img);
        }
    }
    
});
