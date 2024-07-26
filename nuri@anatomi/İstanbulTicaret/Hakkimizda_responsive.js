const title = document.querySelector('.fl.col-12.a-center.pageTitle.b-bottom');
title.classList.add('anatomi_title');

const firstTable = document.querySelectorAll('#mainColumn .row.text-description table');
firstTable.forEach((table) => {
    table.classList.add('anatomi_table');
});

const social = document.querySelectorAll('#mainColumn .row.text-description div');
social[social.length - 1].classList.add('anatomi_social');

const td = document.querySelectorAll('.anatomi_table .anatomi_table td');
td.forEach((td) => {
    if(td.innerHTML.includes('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;')) {
        td.innerHTML = td.innerHTML.replace('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;', '');
    }
});

const anatomi_hakkimizda_style = `
<style>

@media screen and (max-width: 768px) {
    .anatomi_title {
        text-align: center;
    }

    .anatomi_table {
        width: 100% !important;
        margin: 0 auto;
    }

    .tinymceVarsayilan {
        font-size: 25px !important;
    }

    .anatomi_table .anatomi_table  {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin: 0 auto;
        width: 100% !important;
        height: fit-content !important;
    }

    .anatomi_table .anatomi_table td {
        display: grid;
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 10px;
        justify-content: center;
        width: fit-content !important;
        padding: 0 !important;
        margin: 0 !important;
    }

    .anatomi_table .anatomi_table a  {
        display: block;
        width: 100px !important;
    }

    .anatomi_table .anatomi_table  span{
        display: none;
    }

    .anatomi_table .anatomi_table a img {
        width: fit-content !important;
    }

    .anatomi_social {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 100% !important;
        margin: 0 auto;
        height: 100%;
    }

    .anatomi_social a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px !important;
        height: 50px !important;
    }

    .anatomi_social a img {
        width: 100% !important;
        height: 100% !important;
    }

    .anatomi_social a:last-child {
        display: none;
    }

}

</style>
`;

document.head.insertAdjacentHTML('beforeend', anatomi_hakkimizda_style);
