const style = `
<style>


.pWin{
    width: 100% !important;
    max-width: none;
    max-height: none;
    border-radius: 0;
    position: absolute;
    left: 0;
    bottom: 0;
}

</style>
`


const deneme1 = document.querySelector('#cartPopup.pWin');
deneme1.querySelector('head').insertAdjacentHTML("beforeend", style);