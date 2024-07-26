const mainColumn = document.querySelector("#mainColumn .col.col-12");
const leftColumn = document.getElementById("leftColumn");
const twoCol = document.getElementById("twoCol");
const head3 = document.querySelector("head");

leftColumn.parentNode.insertBefore(mainColumn, leftColumn);

const img_style = `
<style>

.row.mb p {
    height: 300px;
    overflow: hidden;
    position: relative;
}

#twoCol {
    overflow: hidden;
}
`;

const imgContainer = document.querySelector(".row.mb p");
const img = document.querySelector(".row.mb p img");
img.classList.add("anatomi_markalar_banner");

const anatomiBanner = document.querySelector(".anatomi_markalar_banner");

if(window.location == "https://www.istanbulticaret.com/veo"){
    anatomiBanner.src = "https://anatomi.s3.eu-north-1.amazonaws.com/VEO.png"
}else if (window.location == "https://www.istanbulticaret.com/3m"){
    anatomiBanner.src = "https://anatomi.s3.eu-north-1.amazonaws.com/3M.png"
}else if (window.location == "https://www.istanbulticaret.com/ansell"){
    anatomiBanner.src = "https://anatomi.s3.eu-north-1.amazonaws.com/Ansell.png"
}else if (window.location == "https://www.istanbulticaret.com/dupont"){
    anatomiBanner.src = "https://anatomi.s3.eu-north-1.amazonaws.com/Dupont.png"
}else if (window.location == "https://www.istanbulticaret.com/maxeo"){
    anatomiBanner.src = "https://anatomi.s3.eu-north-1.amazonaws.com/Maxeo.png"
}else if (window.location == "https://www.istanbulticaret.com/univet"){
    anatomiBanner.src = "https://anatomi.s3.eu-north-1.amazonaws.com/Univet.png"
}

