const a_style = `<style>

#app{
    margin-bottom:20px !important;
}

.a_title{
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    font-size: 16px !important;
    margin: 0 !important;
    padding-bottom: 10px !important;
    cursor: pointer !important;
    width: 100% !important;
}
.info-text-wrapper {
    margin: 0 15px 13px !important;
    padding: 10px !important;
    
}
.page-nav{
    margin-bottom :15px !important;
}

.info-text-wrapper.container .text{
    display:none;
}
.article-showmore-btn.btn-link.icon-link{
    display:none;
}

@media screen and (min-width: 900px){
    .anatomi_container {
        display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
  
       

      }
      .info-text-wrapper{
        display: flex !important;
        flex-direction: column !important;
        width: 100% !important;
        gap: 10px !important;
        justify-content: center !important;
  
      }
      .info-text-wrapper.container .text{
        width: 100% !important;
      }    
      .a_title{
        padding: 0 10px 0 10px !important;
      }
}

</style>`
const svgIcon = `
<div class="a_svg">
    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.24513 0.877852L10.6148 9.08778C11.1284 9.59159 11.1284 10.4084 10.6148 10.9122L2.24513 19.1221C1.73153 19.6259 0.898808 19.6259 0.385203 19.1221C-0.128401 18.6183 -0.128401 17.8015 0.385203 17.2977L7.82491 10L0.385203 2.70228C-0.128401 2.19848 -0.128401 1.38165 0.385203 0.877852C0.898808 0.374049 1.73153 0.374049 2.24513 0.877852Z" fill="#333333"/>
    </svg>
</div>
`;


//containerleri yaratılan parent divin içine atma 
const a_container = document.createElement('div');
a_container.classList.add('anatomi_container');

const a_page_nov = document.querySelector('.page-nav');
a_page_nov.insertAdjacentElement('afterend', a_container);

const a_mini_containers = document.querySelectorAll('.info-text-wrapper.container');

a_mini_containers.forEach((miniContainer) => {
    // Clone the mini container
    
    // Append the cloned mini container to the a_container
    a_container.appendChild(miniContainer);
});




const dropdown_titles = document.querySelectorAll('.info-text-wrapper.container .title');
dropdown_titles.forEach(item =>{
    item.classList.add('a_title');
})

for (const title of dropdown_titles) {

    title.addEventListener('click', function (event) {
       
        event.preventDefault();
        // Tıklanan title'a ait p etiketini bulun (kardeşi olan p etiketi)
        const siblingTextElement = title.nextElementSibling;

        // Kardeş p etiketi varsa ve display none ise açın, yoksa kapatın
        if (siblingTextElement && siblingTextElement.tagName === 'P') {
            siblingTextElement.style.display = siblingTextElement.style.display === 'none' ? 'block' : 'none';
        }

        // Kardeş button etiketini bulun
        const siblingButtonElement = title.parentNode.querySelector('.info-text-showmore-button button');

        // Kardeş button etiketi varsa ve display none ise açın, yoksa kapatın
        if (siblingButtonElement && siblingButtonElement.tagName === 'BUTTON') {
            siblingButtonElement.style.display = siblingButtonElement.style.display === 'none' ? 'block' : 'none';
        }
    });
}





const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);