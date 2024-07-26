

const button_html = `
<div class="anatomi_sticky-button-container">
<div class="anatomi_sticky-button-content">
    <button class="anatomi_sticky_button anatomi_trafik">
        <a href="/trafik-sigortasi" class = "anatomi_sticky_button_link" >Trafik Teklifi Al</a>
    </button>
    <button class="anatomi_sticky_button anatomi_kasko">
        <a href="/full-kasko" class = "anatomi_sticky_button_link" >Kasko Teklifi Al</a>
    </button>
</div>
</div>
`;

const button_css = `
<style>

.anatomi_sticky-button-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99999999999999999;
    background-color: #fff;
}

.anatomi_sticky-button-content {
    display: flex;
    gap: 10px;
    width: 100%;
    padding: 10px;
}

.anatomi_sticky_button_link {
    text-decoration: none;
    color: #fff
}

.anatomi_sticky-button-content button {
    width: 100%;
    background-color: #B61539;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    padding: 15px;
}
</style>`;

const head = document.querySelector("head");


if (window.innerWidth < 768) {
    head.insertAdjacentHTML("beforeend", button_css);
    document.body.insertAdjacentHTML("beforeend", button_html);
}
