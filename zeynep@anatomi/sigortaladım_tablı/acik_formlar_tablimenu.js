// const tab1 = document.querySelector(".pre-form.casco");
// tab1.style.display = "block";

// const div1 = document.querySelector('.pre-form.traffic');
// const div2 = document.querySelector('.pre-form.casco');

// const content1_title= document.querySelectorAll('.title')[6];
// const content1_form = document.querySelectorAll('.form')[0];


// const content2_title= document.querySelectorAll('.title')[9];
// const content2_form = document.querySelectorAll('.form')[1];



// div1.addEventListener("click", function() {
//     content1_title.style.display = "block";
//     content1_form.style.display = "block";
//     content2_title.style.display = "none";
//     content2_form.style.display = "none";

// });

// div2.addEventListener("click", function() {
//     content1_title.style.display = "none";
//     content1_form.style.display = "none";
//     content2_title.style.display = "block";
//     content2_form.style.display = "block";
// });


// -----------------------

// const a_style = `
// <style>
// .form_container{
//     width:%100;
// }

// .a_tirafik_form, .a_kasko_form{
//     display:none;
// }
// .a_tirafik_form.show, .a_kasko_form.show {
//     display:block;
// }

// </style>

// `

const tab1 = document.querySelector(".pre-form.casco");
tab1.style.display = "block";


const wrapper = document.createElement('div'); 
wrapper.classList.add("form_container");
const div1 = document.querySelector('.pre-form.traffic');
div1.classList.add("a_tirafik_form");
const div2 = document.querySelector('.pre-form.casco');
div2.classList.add("a_kasko_form");
wrapper.appendChild(div1.cloneNode(true)); 
wrapper.appendChild(div2.cloneNode(true));
div1.parentNode.replaceChild(wrapper, div1);
div2.parentNode.replaceChild(wrapper, div2);

const kampanyalar = document.querySelector('.campaigns-and-form');
const form_container = document.querySelector('.form_container');

kampanyalar.insertAdjacentElement('afterend', form_container);


// btn olusturma
const btn1 = document.createElement('button');
btn1.classList.add("a_tirafik_button");

const btn2 = document.createElement('button');
btn2.classList.add("a_kasko_button");

wrapper.appendChild(btn1.cloneNode(true)); 
wrapper.appendChild(btn2.cloneNode(true));
btn1.parentNode.replaceChild(wrapper, btn1);
btn2.parentNode.replaceChild(wrapper, btn2);




// wrapper.addEventListener("click", function(event) {
//   if (event.target.class === "a_tirafik_form") {
//     div1.classList.add("show");
//     div2.classList.remove("show");
//   } else if (event.target.class === "a_kasko_form") {
//     div2.classList.add("show");
//     div1.classList.remove("show");
//   }
// });

// const head = document.querySelector('head');
// head.insertAdjacentHTML('beforeend', a_style);
