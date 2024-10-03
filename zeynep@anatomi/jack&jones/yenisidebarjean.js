const a_style = `
<style>

.anatomi_jean{
    color: #2948E8 !important;
}
.anatomi_span{
    color: #2948E8 !important;
    font-size: 14px !important;
    font-weight:600 !important;
    font-style: italic !important;
    padding-right: 85px !important;
}

</style>
`

//Mont - ceket kategorisinin a linklerini seçiyoruz
const jean = document.querySelectorAll('.sub.uk-background-default .uk-nav.uk-nav-default a[href="/denim-jean"]');
jean[1].classList.add('anatomi_jean');
if (jean[1]) {
    const a_div = document.createElement('span');
    a_div.classList.add('anatomi_span');
    a_div.innerText = 'POPÜLER';
    jean[1].insertAdjacentElement('beforeend', a_div);

  }
  
  const populer_texts = document.querySelectorAll('.anatomi_span');
  if (populer_texts.length > 1) {
      // Remove all but the first element
      for (let i = 1; i < populer_texts.length; i++) {
          populer_texts[i].remove();
      }
  }


const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);


