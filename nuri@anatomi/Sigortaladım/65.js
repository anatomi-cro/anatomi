if (
  window.location == "https://www.sigortaladim.com/arac-muayene-ucretleri-2024"
) {
  const table = document.querySelector("table");
  console.log(table);
  var imgURL;

  const div = document.createElement("a");
  div.href = "https://www.sigortaladim.com/kasko-sigortasi";
  div.classList.add("anatomi_arac_muayne_img");

  if(window.innerWidth > 768) {
    imgURL = "https://anatomi.s3.eu-north-1.amazonaws.com/745x350_opet.jpg";
    } else {
    imgURL = "https://anatomi.s3.eu-north-1.amazonaws.com/335x225_opet.jpg";
    }

    div.innerHTML = `
    <img src=${imgURL} alt="">
`;


    table.insertAdjacentElement("beforebegin", div);

    const anatomi_arac_muayne_style = `
    <style>
        .anatomi_arac_muayne_img {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0px;
            width: 100%;
            height: auto;
        }
        .anatomi_arac_muayne_img img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    </style>
    `;

    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", anatomi_arac_muayne_style);
}
