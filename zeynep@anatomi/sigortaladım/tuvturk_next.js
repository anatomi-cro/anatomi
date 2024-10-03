const a_style = `
    <style>
    .modal{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        padding-bottom: 20px;
        padding-right: 25px;

    }
    .modal-content{
        width: 450px !important;
        border: 1px solid red;
        background-color: white;
        color: red;
        width: 100%;
        padding: 15px;
        text-align: center;
        display: flex;
        font-size:12px;
        position: relative;

    }
    .modal-content::before {
        content: "";
        position: absolute;
        top: -20px;
        right: 5%;
        margin-left: -10px;
        border-style: solid;
        border-width: 0 10px 20px 10px;
        border-color: white transparent red transparent;
      }
    </style>
`

// tuvturk yazısını içeren classları seçiyorum
const scales = document.querySelectorAll('.offer-item-container .scale');
const tuvturkScales = Array.from(scales).filter(scale => scale.textContent.includes('TUVTURK'));

// tuvturk yazısını içeren classların parentını seçiyorum
const tuvturkParents = tuvturkScales.map(scale => scale.closest('.campaign'));

// mevcut modalı saklamak için bir değişken tanımlıyorum
let currentModal = null;

// seçtiğim üst divlere tıklandığında bir div oluşturup içinde modal oluşturuyorum.
tuvturkParents.forEach(scale => {
  scale.addEventListener('click', () => {
// eğer önceden bir modal gösterildiyse, onu sakla ve yeni modal oluştur
if (currentModal) {
    currentModal.style.display = 'none';
  }

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <p>Kasko poliçesinin sona erdiği gün, poliçede yer alan aracın plakasına tanımlanacaktır. Poliçenin 1 yıl aktif/yaşamış olması gerekmektedir, 1 yıl tamamlanmadan iptal edilen poliçeler kampanyadan yararlanamayacaktır.</p>
      </div>
    `;

    // modalın konumunu ayarlıyorum
    // const modalLocation = scale.closest('.campaign-table-container').querySelector('.campaign-table');

 
      if (scale) {
        scale.insertAdjacentElement("afterend", modal);
      }
    
  
    // oluşturulan modalı sakla
    currentModal = modal;

  });
});

// tuvturk yazısı içermeyen classların içindeki öğelere tıklandığında modal saklanır
document.addEventListener('click', (event) => {
    const target = event.target;
    // eğer tıklanan öğe tuvturk yazısı içermiyor ve bir modal gösteriliyorsa, modalı sakla
    if (!target.closest('.offer-item-container .scale') && currentModal) {
      currentModal.style.display = 'none';
    }
  });




const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);

