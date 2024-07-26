const anatomi_anlasmali_sticky_style = `
<style>

@media screen and (min-width: 769px) {
    .anatomi_sticky_button_container {
    position: absolute;
    top: 0;
    right: 0;
    height: 70%;
    z-index: 9999;

}

.anatomi_sticky_button_content {
    position: sticky;
    top: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    height: fit-content;
    padding: 10px 0;
}

.anatomi_sticky_button_trafik,.anatomi_sticky_button_kasko {
    background-color: #3074FF;
    color: #fff;
    padding: 12px 25px;
    text-align: center;
    cursor: pointer;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    text-transform: capitalize;
    text-decoration: none;
    border: none;
    font-size: 16px;
    font-weight: 400;
}

}
@media screen and (max-width: 768px) {
    .anatomi_sticky_button_container {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    background-color: #fff;
}
.anatomi_sticky_button_content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 0;
}
.anatomi_sticky_button_trafik,.anatomi_sticky_button_kasko {
    background-color: #3074FF;
    color: #fff;
    padding: 12px 25px;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
    text-transform: capitalize;
    text-decoration: none;
    border: none;
    font-size: 16px;
    font-weight: 400;
}
}

</style>
`;	


const anatomi_anlasmali_sticky_html = `
<div class="anatomi_sticky_button_container">
<div class="anatomi_sticky_button_content">
    <a href="/trafik-sigortasi" class="anatomi_blog_teklif_button anatomi_sticky_button_trafik">
        trafik teklifi al
    </a>
    <a href="/kasko-sigortasi" class="anatomi_blog_teklif_button anatomi_sticky_button_kasko">
        kasko teklifi al
    </a>
</div>
</div>
`;

const anatomi_head = document.querySelector("head");
anatomi_head.insertAdjacentHTML("beforeend", anatomi_anlasmali_sticky_style);

const solution = document.querySelector(".container .row");

solution.insertAdjacentHTML("beforeend", anatomi_anlasmali_sticky_html);