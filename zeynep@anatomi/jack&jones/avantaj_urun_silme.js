
if (window.location.href === "https://jackjones.com.tr/suni-deri-ceket-rocky-kahverengi-cognac-fake-suede-12147218" || window.location.href === "https://jackjones.com.tr/suni-deri-ceket-rocky-siyah-jet-black-fake-suede-12147218" ||window.location.href === "https://jackjones.com.tr/glenn-bl-655-slim-fit-jean-siyah-black-denim-12111026") {
    const product_name = document.querySelector('.uk-grid.uk-grid-small.uk-flex-middle h1').innerText;
    if (
        product_name === "Glenn BL 655 Slim Fit Jean Siyah" ||
        product_name === "Suni Deri Ceket- Rocky Kahverengi" ||
        product_name === "Suni Deri Ceket- Rocky Siyah"
    ) {
        const successText = document.querySelector('b.uk-text-success');
        if (successText) {
            successText.remove();
        }
    }
}else if(window.location.href === "https://jackjones.com.tr/mont-ceket/deri-mont"){
    const products_name = document.querySelectorAll('h6.uk-text-normal.card-title');
products_name.forEach(product_name => {
    const productNameText = product_name.innerText;
    if (productNameText === "Suni Deri Ceket- Rocky") {
        console.log('DENEME');
        const successText = product_name.parentElement.querySelector('b.uk-text-success');
        if (successText) {
            successText.remove();
        }
    }
})


}else if(window.location.href === "https://jackjones.com.tr/denim-jean/glenn-slim"){
    const products_name = document.querySelectorAll('h6.uk-text-normal.card-title');
    products_name.forEach(product_name => {
        const productNameText = product_name.innerText;
        if (productNameText === "Glenn BL 655 Slim Fit Jean") {
            const successText = document.querySelector('b.uk-text-success');
            if (successText) {
                successText.remove();
            }
        }
    })
}else if(window.location.href === "https://jackjones.com.tr/denim-jean"){
 const products_name = document.querySelectorAll('h6.uk-text-normal.card-title');
    products_name.forEach(product_name => {
        const productNameText = product_name.innerText;
        if (productNameText === "Glenn BL 655 Slim Fit Jean") {
            const successText = document.querySelector('b.uk-text-success');
            if (successText) {
                successText.remove();
            }
        }
    })
}

