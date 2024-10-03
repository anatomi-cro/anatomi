const a_style = `<style>

.a_new_div{
    display: flex !important;
}

.trafik_kasko_btn{
    display: flex !important;
}

.a_kasko{
    margin-left:10px !important;

}

.campaign-detail .details .a_kasko a{
    background-color: white !important;
    border: 1px solid #3074FF !important;
    color: #3074FF !important;
}
.a_trafik{
    margin-left:10px !important;
    
}

.campaign-detail .details .a_trafik a{
    background-color: white !important;
    border: 1px solid #3074FF !important;
    color: #3074FF !important;
}

.row.dask_btn.scroll {
    position: fixed;
    top: 30%;
    right: 15px;
    transform: translateY(0);
    z-index: 99999 !important;
    display: flex;
    align-items: center;
  }
  
  .a_kasko_div{
    margin-bottom: 0px !important;
  }

  .anatomi_icon{
    display: none;
    margin-top: 4px;

  }
  }
  

</style>`


const a_newDiv = document.createElement("div");
a_newDiv.className = "a_new_div";

const a_petiketi = document.querySelectorAll('.tab-1.details p')[2];
a_petiketi.classList.add('a_petiketi');

a_petiketi.insertAdjacentElement('afterend', a_newDiv);


// // tab-1 details divine yeni divi ekleme

// 3 row classlı elementleri yeni divin içine taşıma
const a_rows = document.querySelectorAll(".tab-1.details .row");


    a_newDiv.insertAdjacentElement('afterbegin',a_rows[1]);
    a_newDiv.insertAdjacentElement('afterbegin',a_rows[0]);

    a_rows[0].classList.add('dask_btn')
    a_rows[1].classList.add('trafik_kasko_btn');


    const a_kasko_trafik = document.querySelectorAll('.col-lg-6.col-md-6.col-sm-12');
    a_kasko_trafik[1].classList.add('a_kasko');
    a_kasko_trafik[0].classList.add('a_trafik');

    const a_kasko_div = document.querySelector('.col-lg-12.col-md-12.col-sm-12')
    a_kasko_div.classList.add('a_kasko_div')
    


    // scroll
    const dask_btn = document.querySelector('.row.dask_btn'); // "row.dask_btn" sınıfını içeren öğeyi seçiyoruz
    const scrollThreshold = document.documentElement.scrollHeight * 0.1; // Sayfanın yüksekliğinin yüzde 10'u olarak bir scroll eşiği belirliyoruz
    let isButtonAdded = false; // Butonun eklenip eklenmediğini takip etmek için bir değişkenken
    let isButtonScrolled = false; // Butonun scroll edilip edilmediğini takip etmek için bir değişkenken

    const a_html = `
    <div class="anatomi_icon">
      <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 16L-3.30611e-06 32L-1.90735e-06 -1.18021e-06L27 16Z" fill="#4372F6"/>
      </svg>
    </div>
    `;
    dask_btn.insertAdjacentHTML('beforeend', a_html);

    const anatomi_icon = this.document.querySelector('.anatomi_icon')

    
    window.addEventListener("scroll", function() { // Scroll olayını dinlemek için bir event listener ekliyoruz
      const scrollPosition = window.scrollY; // Sayfanın dikey eksende scroll pozisyonunu alıyoruz
    


if (scrollPosition > scrollThreshold) {

    anatomi_icon.style.display = "block"

}else if(scrollPosition < scrollThreshold){

    anatomi_icon.style.display = "none"

}else{
    console.log('zeyyy');

}


// a_html ekleme
//     if (scrollPosition > scrollThreshold && dask_btn.classList.contains("scroll")) {
//     dask_btn.classList.add("scroll");
//     const a_html = `
//       <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M27 16L-3.30611e-06 32L-1.90735e-06 -1.18021e-06L27 16Z" fill="#4372F6"/>
//       </svg>
//     `;
//     dask_btn.insertAdjacentHTML('beforeend', a_html);
//   }
//   else{
//     // a_html display none olsun
//   }
      if (scrollPosition <= scrollThreshold && isButtonAdded && !isButtonScrolled) {
        // Scroll pozisyonu scroll eşiğinden küçük veya eşit olduğunda ve buton eklenmiş ve scroll edilmemişse
        dask_btn.classList.remove("scroll"); // "scroll" sınıfını kaldırıyoruz
        isButtonAdded = false; // Butonun eklenmediğini işaretliyoruz
      }
    
      if (scrollPosition === 0) {
        // Scroll pozisyonu 0 olduğunda (en üstte olduğunda)
        isButtonScrolled = false; // Butonun scroll edilmediğini işaretliyoruz
        dask_btn.classList.remove("scroll"); // "scroll" sınıfını kaldırıyoruz
      } else {
        isButtonScrolled = true; // Butonun scroll edildiğini işaretliyoruz
      }
    
      if (scrollPosition >= scrollThreshold && !isButtonAdded && isButtonScrolled) {
        // Scroll pozisyonu scroll eşiğinden büyük veya eşit olduğunda ve buton eklenmemiş ve scroll edilmişse
        dask_btn.classList.add("scroll"); // "scroll" sınıfını ekliyoruz
        isButtonAdded = true; // Butonun eklenmiş olduğunu işaretliyoruz
      }

    

    });
    

    


const head = document.querySelector("head");
head.insertAdjacentHTML("beforeend", a_style);


// if (scrollPosition > scrollThreshold && dask_btn.classList.contains("scroll")) {
//     dask_btn.classList.add("scroll");
//     const a_html = `
//       <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M27 16L-3.30611e-06 32L-1.90735e-06 -1.18021e-06L27 16Z" fill="#4372F6"/>
//       </svg>
//     `;
//     dask_btn.insertAdjacentHTML('beforeend', a_html);
//   }