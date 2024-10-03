const a_style = `
<select>
.black {
    background-color: #000;
    color: #fff;
  }
  
  .gray {
    background-color: #ccc;
    color: #000;
  }
  
</select>
`
//keyup
// 2 array tut keyupı kontrol et activeleri , her aktiv olurken diger diziye atmam lazım
let anatomi_form = document.querySelectorAll('.edit-address.row')[1];
let form_elements = anatomi_form.querySelectorAll('p.input-top-text');
let anatomi_btn = document.querySelector('.cl-big-button.save-address-button.temp-shipping-save-button');
anatomi_btn.classList.add('a_kaydet_btn');







  const head = document.querySelector('head');
  head.insertAdjacentHTML('beforeend', a_style);  



  // form_elements.forEach(function(element) {
  //   element.addEventListener('input', function() {
  //     let all_active = false;
  //     form_elements.forEach(function(el) {
  //       if (!el.classList.contains('active')) {
  //         all_active = false;
  //       }
  //     });
  
  //     if (all_active) {
  //       anatomi_btn.classList.add('black');
  //       anatomi_btn.classList.remove('gray');
  //     } else {
  //       anatomi_btn.classList.add('gray');
  //       anatomi_btn.classList.remove('black');
  //     }
  //   });
  
  //   element.addEventListener('change', function() {
  //     let all_active = true;
  //     form_elements.forEach(function(el) {
  //       if (!el.classList.contains('active')) {
  //         all_active = false;
  //       }
  //     });
  //     if (all_active) {
  //       anatomi_btn.classList.add('black');
  //       anatomi_btn.classList.remove('gray');
  //     } else {
  //       anatomi_btn.classList.add('gray');
  //       anatomi_btn.classList.remove('black');
  //     }
  //   });
  // });


