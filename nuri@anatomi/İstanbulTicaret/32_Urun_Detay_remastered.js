const box = document.querySelectorAll('.variantLine .variantBox .variantList a');

box.forEach((item) => {
  item.classList.add("anatomi_variantBox");
})

const anatomi_variantBox_style = `
<style>
.anatomi_variantBox {
  border: solid 1px #93959B !important;
  width: 69px !important;   
  height: 45px !important;
    background-color: #F1F1F1 !important;
}

.anatomi_variantBox.anatomi_selected{
    border: solid 2px #fcb827 !important;
    transition: border 0.2s ease-in-out;
}

</style>
`;	

const anatomiVB = document.querySelectorAll('.anatomi_variantBox');

anatomiVB.forEach((item) => {
    item.addEventListener('click', () => {
        anatomiVB.forEach((item) => {
            item.classList.remove('anatomi_selected');
        });
        item.classList.add('anatomi_selected');
    });
});

const variantTitle = document.querySelector(".VariantTitle");
variantTitle.innerHTML = "Beden Seçimi";

const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', anatomi_variantBox_style);