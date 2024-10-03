const a_style = `
<style>
.a_container {
    position: fixed !important;
    bottom: 0 !important;
    height: 40% !important; 
    background-color: white !important;

}
.a_box_in{
    border-radius: 10px !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border: 1px solid white !important;
    box-shadow: none !important;
}

</style>
`



// const a_html = `
// <div class="anatomi_container>
//     <div class="anatomi_in_content">

//     </div>
// </div>x
// `

const a_container_flex = document.querySelector('.flex');
a_container_flex.classList.add('a_container');

const a_top_text = document.querySelector('.fl.col-12.panelPopupTitle');
a_top_text.remove();
const a_close = document.querySelector('.pClose.close');
a_close.remove();
const a_close_2 = document.querySelector('.pBg.close');
a_close_2.remove();

a_bottom_content = document.querySelector('.col.fr.col-4.col-md-6.col-sm-12.whiteBg.box-border.b-top.b-bottom');
a_bottom_content.remove();

const a_box_in = document.querySelector('.pWin.box.whiteBg.flexbox.br5.withBtn');
a_box_in.classList.add('a_box_in');

const a_line_bottom = document.querySelectorAll('.line-bottom')
a_line_bottom[15].remove();


const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);


<<<<<<< HEAD

// pasbelge@nvi.gov.tr
=======
>>>>>>> 498cbb0 (anatomi-task)
