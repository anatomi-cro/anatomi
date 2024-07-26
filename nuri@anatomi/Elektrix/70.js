const aParent = document.querySelector('.storyContainer_mobile');
const head = document.querySelector('head');


const anatomi_feateres_html = `
<div class="anatomi_features_container">
<a class="anatomi_features_next">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="31" viewBox="0 0 18 31" fill="none">
        <path
            d="M16.8802 13.96L3.33146 0.531773C2.73695 -0.0561508 1.77788 -0.0520268 1.18696 0.540995C0.59753 1.13401 0.601654 2.09309 1.19616 2.68101L13.6702 15.0438L1.30443 27.5134C0.715005 28.1064 0.719129 29.0655 1.31364 29.6549C1.90814 30.2428 2.86871 30.2387 3.45814 29.6457L16.8909 16.1015C17.4712 15.5147 17.4671 14.5405 16.8802 13.96Z"
            fill="#387FBA" />
    </svg>
</a>
<a class="anatomi_features_prev">
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="30" viewBox="0 0 17 30" fill="none">
        <path
            d="M0.438465 16.0706L13.9293 29.557C14.5213 30.1475 15.4804 30.1475 16.0738 29.557C16.6658 28.9665 16.6658 28.0075 16.0738 27.417L3.65307 15.0007L16.0724 2.58439C16.6643 1.99391 16.6643 1.03483 16.0724 0.442856C15.4804 -0.147619 14.5198 -0.147619 13.9278 0.442856L0.43697 13.9291C-0.145906 14.5135 -0.145906 15.4876 0.438465 16.0706Z"
            fill="#387FBA" />
    </svg>
</a>
<div class="anatomi_feature_content">
    <ul class="anatomi_feature_list">
        <li class="anatomi_feature_list_item">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Shield.png" alt="">
            <h3>Güvenli Alışveriş</h3>
            <p>Ödeme bilgileriniz, 256 Bit SSL & 3D Secure sertifikamız ile şifrelenerek işlenir.</p>
        </li>

        <li class="anatomi_feature_list_item">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Surprise.png" alt="">
            <h3>Kargo Bedava</h3>
            <p>2000 TL ve üzeri alışverişlerinizde kargo bedava.</p>
        </li>

        <li class="anatomi_feature_list_item">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Credit.png" alt="">
            <h3>Taksit İmkanı</h3>
            <p>Alışverişlerinizde 9 aya varan taksit seçenekleriyle bütçenizde kolaylık imkanı.</p>
        </li>

        <li class="anatomi_feature_list_item">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Shield.png" alt="">
            <h3>Hızlı Kargo</h3>
            <p>Ürünlerin 95%’inde aynı gün kargo imkanı. </p>
        </li>
    </ul>
</div>
</div>
`;

const anatomi_features_style = `
<style>

.anatomi_features_container {
    position: relative;
    overflow: hidden;
    margin: 20px 0;
}

.anatomi_feature_content {
    width: 82%;
    overflow: auto;
    margin: 0 auto;
}

.anatomi_feature_content::-webkit-scrollbar {
    display: none;
}

.anatomi_feature_list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 650px;
    gap: 10px;
}

.anatomi_feature_list_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 20px;
    background-color: #F4F2F2;
    width: 40%;
    height: 200px;
    border-radius: 5px;
}

.anatomi_feature_list_item img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}

.anatomi_feature_list_item h3 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
    width: 100%;
}

.anatomi_feature_list_item p {
    font-size: 12px;
    color: #000000;
}

.anatomi_features_next {
    position: absolute;
    top: 50%;
    right: 2%;
    transform: translateY(-50%);
    color: #ffffff;
}

.anatomi_features_prev {
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translateY(-50%);
    color: #ffffff;

}
</style>
`;

aParent.insertAdjacentHTML('afterend', anatomi_feateres_html);
head.insertAdjacentHTML('beforeend', anatomi_features_style);

const anatomi_features_next = document.querySelector('.anatomi_features_next');
const anatomi_features_prev = document.querySelector('.anatomi_features_prev');
const anatomi_feature_list = document.querySelector('.anatomi_feature_content');

anatomi_features_next.addEventListener('click', () => {
    anatomi_feature_list.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});

anatomi_features_prev.addEventListener('click', () => {
    anatomi_feature_list.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});
