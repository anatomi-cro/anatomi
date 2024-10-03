const a_style = `
<style>
.dropdown_menu {
    display: none;
  }
  
  .dropdown_menu.show {
    display: block;
  }
  .a_svg.rotate{
    transform: rotate(90deg);
  }

  .dropdown{
    padding: 20px 20px 0 20px;
  }
  .dropdown_btn{
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    cursor: pointer;
  }
</style>
`



// her contract classının içeriği farklı olduğu için bunları farklı değişkenlere atıyorum.
const contract = document.querySelectorAll('.contract');
const newContract = contract[0]
const newContract2 = contract[1]
const newContract3 = contract[2]


// contractların içeriklerini yani atadğım değişkenleri html yapısına gömüyorum
const a_html = `
<div class="dropdown">
  <button class="dropdown_btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Cayma Hakkı
  <svg class="a_svg" width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.83692 0.838078L8.68483 8.18381C9.10506 8.63458 9.10506 9.36542 8.68483 9.81619L1.83692 17.1619C1.4167 17.6127 0.735388 17.6127 0.315166 17.1619C-0.105055 16.7112 -0.105055 15.9803 0.315166 15.5295L5.89495 9.54413L5.89495 8.45587L0.315166 2.47046C-0.105055 2.01969 -0.105055 1.28885 0.315166 0.838078C0.735388 0.387307 1.4167 0.387307 1.83692 0.838078Z" fill="#333333"/>
</svg>
  </button>
  <div class="dropdown_menu" aria-labelledby="dropdownMenuButton">
    <div class="dropdown-item">
    ${newContract.outerHTML}
    </div>
  </div>
</div>

<div class="dropdown">
  <button class="dropdown_btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Ön Bilgilendirme Formu
  <svg class="a_svg" width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.83692 0.838078L8.68483 8.18381C9.10506 8.63458 9.10506 9.36542 8.68483 9.81619L1.83692 17.1619C1.4167 17.6127 0.735388 17.6127 0.315166 17.1619C-0.105055 16.7112 -0.105055 15.9803 0.315166 15.5295L5.89495 9.54413L5.89495 8.45587L0.315166 2.47046C-0.105055 2.01969 -0.105055 1.28885 0.315166 0.838078C0.735388 0.387307 1.4167 0.387307 1.83692 0.838078Z" fill="#333333"/>
</svg>
  </button>
  <div class="dropdown_menu" aria-labelledby="dropdownMenuButton">
    <div class="dropdown-item">
    ${newContract2.outerHTML}
    </div>
  </div>
</div>

<div class="dropdown">
  <button class="dropdown_btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Mesafeli Satış Sözleşmesi
  <svg class="a_svg" width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.83692 0.838078L8.68483 8.18381C9.10506 8.63458 9.10506 9.36542 8.68483 9.81619L1.83692 17.1619C1.4167 17.6127 0.735388 17.6127 0.315166 17.1619C-0.105055 16.7112 -0.105055 15.9803 0.315166 15.5295L5.89495 9.54413L5.89495 8.45587L0.315166 2.47046C-0.105055 2.01969 -0.105055 1.28885 0.315166 0.838078C0.735388 0.387307 1.4167 0.387307 1.83692 0.838078Z" fill="#333333"/>
</svg>
  </button>
  <div class="dropdown_menu" aria-labelledby="dropdownMenuButton">
    <div class="dropdown-item">
    ${newContract3.outerHTML}
    </div>
  </div>
</div>

`
// a_html yi sipariş özeti yazısının altına konumlandırıyorum.
const siparis_ozeti = document.querySelectorAll('.cl-payment-summary-col')[0];
siparis_ozeti.insertAdjacentHTML("afterend", a_html);

  
const dropdownBtns = document.querySelectorAll('.dropdown_btn');
const dropdownMenus = document.querySelectorAll('.dropdown_menu');
const svg_yon = document.querySelectorAll(".a_svg")

// burada dropdownın acılıp kapanması için show togglını ve içerik acıldığında okun yönünü aşagı gösterecek şekilde rotate toggle oluşturuyorum.
dropdownBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    dropdownMenus[index].classList.toggle('show');
    svg_yon[index].classList.toggle('rotate');


  });
});

// eski contract ögelerini siliyorum.
contract.forEach((item) => {
    item.remove();
})
  

const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);

