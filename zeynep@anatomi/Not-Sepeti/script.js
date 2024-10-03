const yeniGorev = document.querySelector('.input-gorev');
const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');

yeniGorevEkleBtn.addEventListener('click', gorevEkle);
gorevListesi.addEventListener('click', gorevSilTamamla);

function gorevSilTamamla(e){
console.log(e.target);
const tiklanilanEleman = e.target;

if(tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')){
    console.log('checked tıklandı');
    tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi')
}
if (tiklanilanEleman.classList.contains('gorev-btn-sil')) {
    console.log('sil tıklandı');
    tiklanilanEleman.parentElement.classList.remove() ;
    
}
}


function gorevEkle(e) {
    e.preventDefault();

    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    const gorevLi = document.createElement('li');
    gorevLi.classList.add('gorev-tanim');
    gorevLi.innerText = yeniGorev.value;

    gorevDiv.appendChild(gorevLi);

    const gorevTamamBtn = document.createElement('button');
    gorevTamamBtn.classList.add('gorev-btn');
    gorevTamamBtn.classList.add('gorev-btn-tamamlandi');
    gorevTamamBtn.innerHTML = <i class="far fa-check-square"></i>;

    gorevDiv.appendChild(gorevTamamBtn);

    const gorevSilBtn = document.createElement('button');
    gorevSilBtn.classList.add('gorev-btn');
    gorevSilBtn.classList.add('sil-btn-sil');
    gorevSilBtn.innerHTML = '<i class="fas fa-trash"></i>';

    gorevDiv.appendChild(gorevSilBtn);

    yeniGorev.value = '';

    gorevListesi.appendChild(gorevDiv);


}