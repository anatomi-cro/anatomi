const button_html = `
<div class="sticky-button-container">
<div class="sticky-button-content">
    <button>
        <p>Trafik Sigortası Teklifi Al</p>
    </button>
</div>
</div>
`;

const button_css = `
<style>

.sticky-button-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999999999;
    background-color: #fff;
    transform: translateY(100%);
    transition: transform 0.5s ease-in-out;
}

.sticky-button-container.sticky-button-active {
    transform: translateY(0);
    transition: transform 0.5s ease-in-out;
}

.sticky-button-content {
    width: 100%;
    padding: 15px;
}

.sticky-button-content button {
    width: 100%;
    background-color: #B61539;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    padding: 5px;
}
</style>`;

const head = document.querySelector("head");
const scrollCheckPoint = document.getElementById("section-0");
var check = scrollCheckPoint.getBoundingClientRect().top + window.scrollY - 100


if ( window.innerWidth < 768 ) {
    head.insertAdjacentHTML("beforeend", button_css);
    document.body.insertAdjacentHTML("beforeend", button_html);

    window.addEventListener("scroll", function() {
        if (window.scrollY > check) {
            document.querySelector(".sticky-button-container").classList.add("sticky-button-active");
        } else {
            document.querySelector(".sticky-button-container").classList.remove("sticky-button-active");
        }
    });

}

