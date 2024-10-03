
// ürün özellikleri 
const a_tab = document.querySelector('#divUrunOzellikAlani')

const sepet_container = document.querySelector('.MiddleList')

sepet_container.insertAdjacentElement('afterend',a_tab)




// wp kaldırıldı
const a_style = `<style>
a.whatsBtn {
    display: none !important;
}
</style`


document.querySelector('head').insertAdjacentHTML('beforeend', a_style)

// const a_style = ` 
// <style>
// #logo{
//     float: inherit !important;
//     position: inherit !important;
//     display: inherit !important;
// }
// #logo .logo {
//     margin: 0 auto !important;
// }

// </style>

// `
// document.querySelector('head').insertAdjacentHTML('beforeend', a_style)
