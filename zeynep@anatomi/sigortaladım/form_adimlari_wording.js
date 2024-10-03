function getElement(a_class, status){
    return status ? document.querySelector(a_class) : document.querySelectorAll(a_class);
}
getElement('#vehicleForm .btn-solid',true).innerText = "Teklifleri Listele";
document.querySelector('#vehicleForm .btn-solid').innerText = "Teklif Karşılaştır";


document.querySelector('#vehicleForm .btn-solid').innerText = "Teklif Karşılaştır";
document.querySelector('#vehicleForm .btn-solid').innerText = "Sana özel teklifleri görüntüle";
<<<<<<< HEAD
=======


const trafik_wording = document.querySelector('.pre-form .form p');
trafik_wording.innerText = "Trafik Sigortası ile Aracını güvence altına alacak bolca seçeneği incelemeye hazır mısın?";

const kasko_wording = document.querySelector('.pre-form .form p');
kasko_wording.innerText = "Kasko Sigortası ile Aracını güvence altına alacak bolca seçeneği incelemeye hazır mısın?";
>>>>>>> 498cbb0 (anatomi-task)
