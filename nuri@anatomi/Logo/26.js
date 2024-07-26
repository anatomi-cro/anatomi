const tumFirsatlar = document.querySelector(".section.style_customSection__q2V63 .row");
const tumFirsatlarDiv = document.querySelectorAll(".section.style_customSection__q2V63 .row .col-md-12.col-lg-6.col-xl-4");
const tumFirsatlarDivText = document.querySelectorAll(".section.style_customSection__q2V63 .row .col-md-12.col-lg-6.col-xl-4 span h3");
const head = document.querySelector("head");

const tumFirsatlar_style = `
<style>

.section.style_customSection__q2V63 .row {
    gap: 10px ;
    justify-content: center;
    align-items: center;
}

.style_card__ZxRwv {
    padding: 0px !important;
}

.section.style_customSection__q2V63 .row .col-md-12.col-lg-6.col-xl-4 {
    width: 45% !important;
    height: 70% !important;
    border: 1px solid #DDDDDD !important;
    border-radius: 30px !important;
    font-sizee: 12px !important;
    padding: 0px !important;
}

.section.style_customSection__q2V63 .row .col-md-12.col-lg-6.col-xl-4 img {
    width: 100% !important;
    height: 100% !important;
    border-top-left-radius: 30px !important;
    border-top-right-radius: 30px !important;
}

.section.style_customSection__q2V63 .row .col-md-12.col-lg-6.col-xl-4 .style_contentBox__xj_HL{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:  10px;
    row-gap: 0px !important;
    height: auto !important;
}

.section.style_customSection__q2V63 .row .col-md-12.col-lg-6.col-xl-4 .style_contentBox__xj_HL span h3 {
    font-weight: 600 ;
}

.section.style_customSection__q2V63 .row .col-md-12.col-lg-6.col-xl-4 span h3 {
    font-size: 12px !important;
}

.style_tag__pF_hS {
    top: 8px !important;
    left: 15px !important;
}

.style_chatContainer__ixxKd {
    display: none !important;
}
`;


if (window.innerWidth <= 767) {

    head.insertAdjacentHTML("beforeend", tumFirsatlar_style);
}