const paymentTab = document.getElementById("paymentTab");


paymentTab.click();


setTimeout(() => {
  const imgs = document.querySelectorAll("#banks > div > div > div > div > img");
  
  imgs.forEach((img) => {
    if (img.src === "https://www.istanbulticaret.com//Data/KrediKartLogo/8.jpg") {
      img.src = "https://anatomi.s3.eu-north-1.amazonaws.com/image+4.png";
    } else if (img.src === "https://www.istanbulticaret.com//Data/KrediKartLogo/17.jpg") {
      img.src = "https://anatomi.s3.eu-north-1.amazonaws.com/image+2.png";
    } else if (img.src === "https://www.istanbulticaret.com//Data/KrediKartLogo/20.jpg") {
      img.src = "https://anatomi.s3.eu-north-1.amazonaws.com/image+1.png";
    }
  });
}, 500);

const ozellikler = document.querySelector("#tabBtn > li.pos-r.fl.btn.mr.double.loaded")
ozellikler.click();
setTimeout(() => {
    window.scrollTo(0, 0);
}, 1000);


const anatomi_taksit_style = `
<style>
.row.line-bottom:nth-child(2) span {
    font-size: 14px;
    font-weight: 700;
    background-color: #F2F2F2;
}

.box.col-4.col-md-6.col-sm-12 .row.line-bottom {
    margin-bottom: 0;
    display: flex;
}

#tabPanel li {
    right: 0 !important;
    left: 0 !important;
}

.row.line-bottom img {
    width: 150px;
    height: 100px;
    object-fit: contain;
    margin: 0 auto;
}
</style>
`;

document.querySelector("head").insertAdjacentHTML("beforeend", anatomi_taksit_style);
