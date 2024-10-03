const a_style = `<style>


  .a_hello_icon{
    height: 92px !important;
    width: 92px !important;
} 

  .open-conv-wrap{
    right: -15px !important;
  }

.open-conv .open-text{
  margin-right: -5px !important;
  padding: 0 0px 0 16px !important;
}


</style>`


// iframe'i seçin
const a_iframe = document.querySelectorAll('iframe')[2];


// iframe içeriğine erişin
const iframeDocument = a_iframe.contentDocument || a_iframe.contentWindow.document;

// iframe içeriğindeki body etiketini seçin
const iframeBody = iframeDocument.body;

if (iframeBody) {
  // iframe içeriğindeki body etiketi bulundu, şimdi içinde .jetlink-launcher.launcher-custom sınıfına sahip öğeyi seçin
  const targetElement = iframeBody.querySelector('.jetlink-launcher.launcher-custom');
  console.log(targetElement);

    if (targetElement) {
    console.log('deneme');
    targetElement.classList.add('a_hello_icon')
  } else {
    console.log(".jetlink-launcher.launcher-custom sınıfına sahip öğe bulunamadı.");
  }

} else {
  console.log("iframe içeriğindeki body etiketi bulunamadı.");
}


// iframe içeriğindeki head etiketini seçin
const iframeHead = iframeDocument.head;

if (iframeHead) {
  // iframe içeriğindeki head etiketi bulundu, şimdi bu etiketi kullanabilirsiniz
  console.log(iframeHead);
  iframeHead.insertAdjacentHTML('afterbegin', a_style)
} else {
  console.log("iframe içeriğindeki head etiketi bulunamadı.");
}





// "use strict";

// var a_style = "<style>\n\n\n  .a_hello_icon{\n    height: 92px !important;\n    width: 92px !important;\n} \n\n  .open-conv-wrap{\n    right: -15px !important;\n  }\n\n.open-conv .open-text{\n  margin-right: -5px !important;\n  padding: 0 0px 0 16px !important;\n}\n\n\n</style>";

// // iframe'i seçin
// var a_iframe = document.querySelectorAll('iframe')[2];

// // iframe içeriğine erişin
// var iframeDocument = a_iframe.contentDocument || a_iframe.contentWindow.document;

// // iframe içeriğindeki body etiketini seçin
// var iframeBody = iframeDocument.body;
// if (iframeBody) {
//   // iframe içeriğindeki body etiketi bulundu, şimdi içinde .jetlink-launcher.launcher-custom sınıfına sahip öğeyi seçin
//   var targetElement = iframeBody.querySelector('.jetlink-launcher.launcher-custom');
//   console.log(targetElement);
//   if (targetElement) {
//     console.log('deneme');
//     targetElement.classList.add('a_hello_icon');
//   } else {
//     console.log(".jetlink-launcher.launcher-custom sınıfına sahip öğe bulunamadı.");
//   }
// } else {
//   console.log("iframe içeriğindeki body etiketi bulunamadı.");
// }

// // iframe içeriğindeki head etiketini seçin
// var iframeHead = iframeDocument.head;
// if (iframeHead) {
//   // iframe içeriğindeki head etiketi bulundu, şimdi bu etiketi kullanabilirsiniz
//   console.log(iframeHead);
//   iframeHead.insertAdjacentHTML('afterbegin', a_style);
// } else {
//   console.log("iframe içeriğindeki head etiketi bulunamadı.");
// }



var a_cookie = document.querySelector('[data-name="Edit Consent Float Button"]');

a_cookie.style.bottom = "80px";













