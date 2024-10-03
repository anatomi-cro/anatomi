
//v3
//ürün görseli üzerinden container seçme işlemi
const container = document.querySelectorAll('.card-image');
const cardContainer = document.querySelectorAll(".card-product");

//seçilen container üzerinden class atama işlemi
container.forEach(item => {
    item.children[2].classList.add('anatomi_container');
    item.children[3].classList.add('anatomi_open');
});

//style dosyası
const style = `
<style>
    .card-product{
        height: 100%;
    }

    .anatomi_container {
        width: 100%;
        display: flex !important;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }

    .anatomi_container div {
        margin-bottom: 0 !important;
        opacity: 1;
    }

    .card-product .uk-dropdown {
        z-index: 9999999999999;
        bottom: 0 !important;
        left: 50% !important;
        top: 50% !important;
        padding: 0 !important;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        width: 100%;
        height: 100% !important;
        padding-top: 45px !important;
        
    }

    .filter-items > ul{
        display: grid !important;
        gap: 5px;
        grid-template-columns: repeat(3, 43px);
        justify-content: center;
        align-items: center;
    }

    .anatomi_open{
        min-width: 185px !important;
        height: 100%;
    }

    .card-product.uk-transition-toggle.product-detail-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    
    .anatomi_container *{
        width: 100%;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 4px;
    }

@media screen and (max-width: 340px){
.anatomi_container a {
        font-size: 10px;
    }
}


@media screen and (max-width: 414px) {
    .anatomi_open {
        min-width: 50px !important;
        height: 100%;
    }
    .card-product .uk-dropdown {
       
        transform: translate(-50%, -54%);
        width: 100%;
       
        z-index: 999999 !important;
        
    }
    .a_little {
        transform: translate(-50%, -36%) !important;
        height: 65% !important;
    }
}

@media screen and (min-width: 470px) {
    .card-product .uk-dropdown {
       
        transform: translate(-50%, -51%);
       
    }
    
    .a_little{
        transform: translate(-50%, -14%) !important;
        height: 50% !important;
    }
}

@media screen and (min-width: 414px) {
.card-product .uk-dropdown {
       
        transform: translate(-50%, -53%);
       
    }
    
    .a_little{
        transform: translate(-50%, -16%) !important;
        height: 50% !important;
    }
}

@media screen and (min-width: 500px) {
    .card-product .uk-dropdown {
       
        transform: translate(-50%, -42%);
        
    }
    
    .a_little{
        transform: translate(-50%, -14%) !important;
        height: 50% !important;
    }
}

@media screen and (min-width: 580px) {
    .card-product .uk-dropdown {
        transform: translate(-50%, -31%);
         
    }
    
    .a_little{
        transform: translate(-50%, -1%) !important;
    }
}

@media screen and (min-width: 750px) {
    .card-product .uk-dropdown {
        transform: translate(-50%, -14%);
    }
}

@media screen and (min-width: 814px) {
    .card-product .uk-dropdown {
        transform: translate(-50%, 10%);
    }
}

@media screen and (min-width: 960px){
    .card-product .uk-dropdown {
        transform: translate(-50%, 5%);
    }
}


@media screen and (min-width: 1000px){
    .card-product .uk-dropdown {
        transform: translate(-50%, -15%);
    }
}

.filter-items > ul{

    height: 70px;
    overflow-y: auto;
}


</style>
`;
document.querySelector('head').insertAdjacentHTML('beforeend', style);

//elementi aşağıya taşıma
const containers = document.querySelectorAll('.anatomi_container');
containers.forEach(item => {
    let container = item.parentElement.parentElement;
    container.appendChild(item)
});

//Açılan pencerenin sepete eklenin üstüne eklenmesi
const anatomiOpen = document.querySelectorAll(".anatomi_open");
anatomiOpen.forEach(item => {
    item.parentElement.parentElement.appendChild(item);
});

//ekle butonunu kaldırma
// const links = document.querySelectorAll('.anatomi_open > .uk-text-center > a');
// links.forEach(item => {
//     let attr = item.getAttribute('onclick');
//     let items = Array.from(item.parentElement.previousElementSibling.children[0].children[1].children);
//     items.forEach(subItems => {
//         console.log(subItems.children[0].children[0].setAttribute('onclick', attr));
//     });
//     item.remove();
// });

document.querySelectorAll('.anatomi_open').forEach(item => {
    if(item.children[0].children.length <= 1){
        item.classList.add('a_little');
    }
});

//yeni elementler eklendiğinde
const allContainer = document.querySelector('.product-container');
const mutationObserver = new MutationObserver(entries => {
    entries.forEach(item => {
        if(item.target.classList.contains('product-container') && item.addedNodes.length > 0){
            item.addedNodes.forEach(item => {
                item.querySelectorAll('.card-image').forEach(subItem => {
                    subItem.children[2].classList.add('anatomi_container');
                    subItem.children[3].classList.add('anatomi_open');
                });
                const newContainers = item.querySelectorAll('.anatomi_container');
                newContainers.forEach(subItem => {
                    let container = subItem.parentElement.parentElement;
                    container.appendChild(subItem)
                });
                const newAnatomiOpen = item.querySelectorAll(".anatomi_open");
                newAnatomiOpen.forEach(item => {
                    item.parentElement.parentElement.appendChild(item);
                });
                item.querySelectorAll('.scroll-product-item.item').forEach(subItem => {
                    subItem.children[0].children[4].style.display = "none"
                    subItem.addEventListener('mouseenter', () => {
                        subItem.children[0].children[4].style.display = "flex"
                    });
                    subItem.addEventListener('mouseleave', () => {
                        subItem.children[0].children[4].style.display = "none"
                    });
                });
            })
        }
    })
});
mutationObserver.observe(allContainer, {
    childList: true,
    attributes: true,
});




const zey = document.querySelectorAll('.uk-dropdown.anatomi_open.a_little.uk-open');
zey.forEach(item => {
  if (window.getComputedStyle(item).display === 'block') {
    const gul = document.zey
    gul.forEach(element => {
        element.style.display = 'flex';
        element.style.alignItems = 'center';
        element.style.justifyContent = 'center';
        element.style.flexDirection = 'column';
    })
   
  }
});

