const online_urunler_li = document.querySelector('.title.online').parentElement;

const tel_sigorta = document.createElement('li');
tel_sigorta.innerHTML = `<a href="https://www.sigortaladim.com/cep-telefonu-sigortasi">Cep Telefonu Sigortası</a>`;

online_urunler_li.insertAdjacentHTML('beforeend', tel_sigorta.outerHTML);




// "PET SİGORTASI" yazısını içeren elemanı bulun
const sidebar_li = Array.from(document.querySelectorAll('.sideNav ul li'))
    .find(item => item.querySelector('a').innerText === 'PET SİGORTASI');

// "CEP TELEFONU SİGORTASI" için yeni bir liste öğesi oluştur
const tel_sigorta = document.createElement('li');
tel_sigorta.classList.add('item');
tel_sigorta.innerHTML = `<a href="https://www.sigortaladim.com/cep-telefonu-sigortasi">CEP TELEFONU SİGORTASI</a>`;

// Yukarıda bulunan öğeden sonra yeni liste öğesi öğesini ekleyin
sidebar_li.parentNode.insertBefore(tel_sigorta, sidebar_li.nextSibling);


