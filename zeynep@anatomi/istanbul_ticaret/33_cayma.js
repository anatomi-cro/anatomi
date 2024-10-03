const a_style = `<style>
.a_container{
    
    width: 92%;
    z-index: 999999999;
    background-color: white;
    position: fixed !important;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4) !important;

    }
    .anatomi_overlay{
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99999998;
    }

    .img_container img{
width: 100% !important;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
    }
    .a_title h4{
        text-align: center;
    font-size: 20px;
    color: #FFC20C;
    }

    .a_title p{
        font-size: 18px;
        text-align: center;
        color: #1E1E1E;
        padding: 0px 20px;
    }
    .indirim_btn{
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background: #FFC20C;
    font-weight: 600;
    margin: 15px 70px;
    border-radius: 6px;

    }

</style>`


setTimeout(() => {
    const a_new_container = document.createElement('div');
a_new_container.classList.add('a_container');

// arka planını koyulaştırmak için
const overlay = document.createElement('div');
overlay.classList.add('anatomi_overlay');
document.body.appendChild(overlay);


// Overlay'a tıklama olayını ekle
overlay.addEventListener('click', () => {
    // Overlay'ı kaldırın
    overlay.remove();
    // a_container'ı kaldırın
    a_new_container.remove();
  });
// Oluşturulan div'i <body> içine ekleyin
const a_body = document.querySelector('body');
a_body.appendChild(a_new_container);

a_new_container.innerHTML = `
  <div class="a_icerik">

<div class="img_container">
<img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/image+1+(1).svg">
</div>
    <div class="a_title">
    <h4>Fırsat Ürünlerine Göz Atmak İster misin?</h4>  
    <p>%25’e varan indirimli ürünler seni bekliyor, fırsat ürünlerini hemen keşfet!</p>  
    </div>
<a href="https://www.istanbulticaret.com/firsat-urunleri" class="indirim_btn">
İndirimli Ürünleri Keşfet
</a>
  </div>
`;


const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);

}, 1400);

  

