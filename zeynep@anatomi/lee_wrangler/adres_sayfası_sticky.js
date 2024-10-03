<<<<<<< HEAD
  const a_style = `
  <style>

    .buton_container{
       
=======
const a_style = `
  <style>
 
    @media screen and (max-width: 710px){
      .buton_container {
>>>>>>> 498cbb0 (anatomi-task)
        display: flex !important;
        position: fixed !important;
        bottom: 0 !important;
        width: 100% !important;
        right: 0 !important;
        height: 55px !important;
      }
<<<<<<< HEAD
      .a_btn_input{
        width:100% !important;
        border-bottom-right-radius: 0px !important;
        border-bottom-left-radius: 0px !important;
      }

  </style>

  `
=======
  
      .a_btn_input {
        width: 100% !important;
        border-bottom-right-radius: 0px !important;
        border-bottom-left-radius: 0px !important;
      }
  
  
    }
   
  </style>
`;

const a_btn = document.querySelectorAll('.cl-checkout-tab-section-button.cl-big-button');
a_btn[0].value = 'Sonraki Adıma Devam Et';
a_btn[0].classList.add('a_btn_input');
>>>>>>> 498cbb0 (anatomi-task)

const buton_container = document.querySelector('.cl-checkout-tab-section-buttons');
buton_container.classList.add('buton_container');

<<<<<<< HEAD
const a_btn = document.querySelectorAll('.cl-checkout-tab-section-button.cl-big-button');
a_btn[0].innerText = 'Sonraki Adıma Devam Et';
a_btn[0].classList.add('a_btn_input');


const a_completed = document.querySelector('.cl-checkout-tab-section.allow.active.completed')
setTimeout(function(){ 
if (a_completed == null) {

  buton_container.addEventListener('click', function(){
    const a_container = document.querySelector('.cl-checkout-tab-section.allow.active');
    a_container.style.border = "2px solid #ff0000";
    a_container.style.borderRadius = "10px";
  })
}
}, 1000);

const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);
    
=======
//kaydedilmi adres yoksa yani null sa .cl-address-card.active bu class kaydedilmis bir adres varsa gözüküyor.
const kayıtlı_adres = document.querySelector('.cl-address-card.active');

setTimeout(function () {
  const a_yeni_adres = document.querySelector('.cl-checkout-tab-section.allow.active');

  if (kayıtlı_adres == null) {
    buton_container.addEventListener('click', function () {
      a_yeni_adres.style.border = "2px solid #ff0000";
      a_yeni_adres.style.borderRadius = "10px";
    });
  } else {
    a_yeni_adres.style.border = "none";
    a_yeni_adres.style.borderRadius = "none";
  }
}, 1000);



const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);


//yeni adres ekle ve 

const yeni_adres = document.querySelectorAll('.cl-checkout-tab-section-header .add-new-address-button')[0];
  
yeni_adres.addEventListener('click', function () {
  const anatomi_checkbox = document.querySelectorAll('.custom-control-input.cl-switcher.cl-company-checker')

  if (anatomi_checkbox[1].checked == false) {
    console.log('işaretli değil');



  const anatomi_form = document.querySelectorAll(".edit-address.row")[1];

  // "Vergi Numarası" içeren elementleri seç ve bir array'e at
  let form_noactive = Array.from(anatomi_form.querySelectorAll("p.input-top-text:not(.active)"));
  form_noactive = Array.from(form_noactive); 
  
  const form_active = anatomi_form.querySelectorAll("p.input-top-text.active");
  const anatomi_btn = document.querySelector(
    ".cl-big-button.save-address-button.temp-shipping-save-button"
  );
  anatomi_btn.classList.add("a_kaydet_btn");
  
  function changeButtonColor() {
    const noactiveLength = form_noactive.length;
    const activeLength = form_active.length;
  
    if (noactiveLength === 0 && activeLength > 0) {
      anatomi_btn.style.backgroundColor = "black";
    } else {
      anatomi_btn.style.backgroundColor = "grey";
    }
  }
  
  //benim aktif olmayan classlarım p elementleri
  form_noactive.forEach(function (item) {
    //onun altındaki inputlar
    item.nextElementSibling.addEventListener("input", () => {
      //class'ı aktif mi?
      if (item.classList.contains("active")) {
        //bu item'ın dizide bulunduğu yeri al
        let indexOf = form_noactive.indexOf(item);
        if (form_noactive[indexOf].classList.contains("active")) {
          console.log(form_noactive[indexOf]);
          form_noactive.splice(form_noactive[indexOf].indexOf, 1);
        }
      }
      if (!item.classList.contains("active")) {
        form_noactive.push(item);
      }
      if (form_noactive.length <= 0) {
        changeButtonColor();
      }
  
    
    });
  
    item.nextElementSibling.addEventListener("select", () => {
      if (item.classList.contains("active")) {
        let indexOf = form_noactive.indexOf(item);
        if (form_noactive[indexOf].classList.contains("active")) {
          form_noactive.splice(form_noactive[indexOf].indexOf, 1);
        }
      }
      if (!item.classList.contains("active")) {
        form_noactive.push(item);
      }
      if (form_noactive.length <= 0) {
        changeButtonColor();
      }
  
    
    })
  
  });
  
  
  changeButtonColor();

    
  }

})




// ---------



// ilk adres ekleyecek olan hesaplarda adres sayfasın çalışacak kod -------------

const anatomi_form = document.querySelectorAll(".edit-address.row")[1];

// "Vergi Numarası" içeren elementleri seç ve bir array'e at
let form_noactive = Array.from(anatomi_form.querySelectorAll("p.input-top-text:not(.active)")).filter(item => !item.innerText.includes("Vergi Numarası") && !item.innerText.includes("Vergi Dairesi"));
form_noactive = Array.from(form_noactive);

const form_active = anatomi_form.querySelectorAll("p.input-top-text.active");
const anatomi_btn = document.querySelector(
  ".cl-big-button.save-address-button.temp-shipping-save-button"
);
anatomi_btn.classList.add("a_kaydet_btn");

function changeButtonColor() {
  const noactiveLength = form_noactive.length;
  const activeLength = form_active.length;

  if (noactiveLength === 0 && activeLength > 0) {
    anatomi_btn.style.backgroundColor = "black";
  } else {
    anatomi_btn.style.backgroundColor = "grey";
  }
}

//benim aktif olmayan classlarım p elementleri
form_noactive.forEach(function (item) {
  //onun altındaki inputlar
  item.nextElementSibling.addEventListener("input", () => {
    //class'ı aktif mi?
    if (item.classList.contains("active")) {
      //bu item'ın dizide bulunduğu yeri al
      let indexOf = form_noactive.indexOf(item);
      if (form_noactive[indexOf].classList.contains("active")) {
        console.log(form_noactive[indexOf]);
        form_noactive.splice(form_noactive[indexOf].indexOf, 1);
      }
    }
    if (!item.classList.contains("active")) {
      form_noactive.push(item);
    }
    if (form_noactive.length <= 0) {
      changeButtonColor();
    }
  });

  item.nextElementSibling.addEventListener("select", () => {
    if (item.classList.contains("active")) {
      let indexOf = form_noactive.indexOf(item);
      if (form_noactive[indexOf].classList.contains("active")) {
        form_noactive.splice(form_noactive[indexOf].indexOf, 1);
      }
    }
    if (!item.classList.contains("active")) {
      form_noactive.push(item);
    }
    if (form_noactive.length <= 0) {
      changeButtonColor();
    }

  })

});

changeButtonColor();



>>>>>>> 498cbb0 (anatomi-task)
