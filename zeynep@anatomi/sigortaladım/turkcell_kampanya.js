const a_style = `
<style>
.a_create_div{
    display: flex;
    flex-direction: column;
}

.anatomi_container {
    padding: 0px !important;
    display: initial !important;
}
.campaign-detail .details a {
    display: inline-block !important;
    border-radius: 5px !important;
    font-weight: bold; 
    font-size: 16px;
    padding: 8px 10px !important;
    letter-spacing: 1px;
    background-color: #3074FF !important;
    color: #fff !important;
    text-transform: none !important;
    margin: 10px 0 !important;
    width: 60% !important;
}
.a_dask{
    width: 100% !important;
    margin-bottom: 0px !important;
}

.campaign-detail .details a {
    background-color: white !important;
    border: 1px solid #3074FF !important;
    color: #3074FF !important
}
.a_buton_dask{
    background-color: #3074FF !important;
    height: 45px !important;
    border-radius: 5px !important;
    width: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    color: white !important;
    padding: 0 !important;
    padding: 0 6px !important;
    font-size: 14px !important;
    margin-bottom: 0px !important;
    border-style: none !important;
    border: none !important;

}

.a_kasko_up_text{
    padding: 10px;
    display: flex;
    justify-content: center;
    font-size: 13px;
    color: #3074FF;

}

</style>
`

// Dask butonun stick olacak şekilde sayfanın aşagısına taşıyorum
const anatomi_container = document.querySelector('.anatomi_container')

const a_dask = document.querySelector('.col-lg-12.col-md-12.col-sm-12');
a_dask.classList.add('a_dask');


const cocukElementDask = a_dask.children[0]; // Çocuk elementi seçin, gerektiğinde indeksi değiştirebilirsiniz
cocukElementDask.classList.add("a_buton_dask"); // Class'ı ekle

cocukElementDask.textContent = "DASK Sigortası Teklifi Al";

anatomi_container.appendChild(a_dask);

// Daskın üstündeki yazıyı yaratıyorum
const a_kasko_up_text = document.createElement('div')
a_kasko_up_text.classList.add('a_kasko_up_text')
a_kasko_up_text.textContent = "500 TL ve üzeri DASK yaptıran herkese 50 ₺ değerinde hediye."

anatomi_container.insertAdjacentElement('afterbegin', a_kasko_up_text)


// Trafik ve kaskoyu yukarı taşıyorum, yarattıgım divin içine attıyorum
const a_buton = document.querySelectorAll('.a_buton');

const a_tables = document.querySelectorAll('table')
const a_table = a_tables[0].parentElement.parentElement

const a_create_div = document.createElement('div')
a_create_div.classList.add('a_create_div')
a_table.insertAdjacentElement('beforebegin',a_create_div )


a_create_div.appendChild(a_buton[0]);
a_create_div.appendChild(a_buton[1]);



const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style); 