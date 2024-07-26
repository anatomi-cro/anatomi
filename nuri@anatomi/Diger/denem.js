
const element = document.querySelectorAll("#hero > div.container > div > div.col-md-6.main-header-section-1 > div > ul > li > a")
if (element) {
    const triggerMouseOver = function () {
        const mouseOverEvent = new MouseEvent('mouseenter', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        element.forEach(function (e) {
            e.dispatchEvent(mouseOverEvent);
        });
    }
    setInterval(triggerMouseOver, 1);
} else {
    console.log("Öğe bulunamadı");
}



/*
const element = document.querySelector("#hero > div.container > div > div.col-md-6.main-header-section-1 > div > ul > li:nth-child(1) > a")
if (element) {
    const triggerMouseOver = function () {
        const mouseOverEvent = new MouseEvent('mouseenter', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        element.dispatchEvent(mouseOverEvent);
    }
    setInterval(triggerMouseOver, 1);
} else {
    console.log("Öğe bulunamadı");
}
*/


