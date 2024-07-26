const textWrapper = document.querySelectorAll('.info-text-wrapper');
const text = document.querySelectorAll('.info-text-wrapper .text');
const title = document.querySelectorAll('.info-text-wrapper .title');
const showMeButton = document.querySelectorAll('.info-text-wrapper .info-text-showmore-button');
const upperGroup = document.createElement('div');
upperGroup.classList.add('upper-group');
const articleMoreContent2 = document.querySelectorAll('.article-more-content');

articleMoreContent2[0].insertAdjacentElement('afterbegin', text[0]);
articleMoreContent2[1].insertAdjacentElement('afterbegin', text[1]);
articleMoreContent2[2].insertAdjacentElement('afterbegin', text[2]);

textWrapper[0].insertAdjacentElement('afterbegin', upperGroup);
textWrapper[1].insertAdjacentElement('afterbegin', upperGroup.cloneNode(true));
textWrapper[2].insertAdjacentElement('afterbegin', upperGroup.cloneNode(true));



const upperGroups = document.querySelectorAll('.upper-group');

upperGroups.forEach((itm,idx) => {
    itm.insertAdjacentElement('afterbegin', title[idx]);
    itm.insertAdjacentElement('beforeend', showMeButton[idx]);
})


//-----------------Devamını Oku-----------------//
const showMeArticle = document.querySelectorAll('.article-showmore-btn');
const articleMoreContent = document.querySelectorAll('.article-more-content');
const anatomiShowText = document.createElement('div');


anatomiShowText.classList.add('anatomi-show-text');
anatomiShowText.innerHTML = `<svg class="anatomi-show-text-button" xmlns="http://www.w3.org/2000/svg" width="14" height="25" viewBox="0 0 14 25" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.82492 0.978115L13.356 11.3082C14.0022 11.9421 14.0022 12.9699 13.356 13.6038L2.82492 23.9338C2.17868 24.5678 1.13092 24.5678 0.484678 23.9338C-0.161559 23.2999 -0.161559 22.2722 0.484678 21.6383L9.84563 12.456L0.484678 3.27369C-0.161559 2.63978 -0.161559 1.61202 0.484678 0.978115C1.13092 0.344209 2.17868 0.344209 2.82492 0.978115Z" fill="#333333"/>
</svg>`;

articleMoreContent.forEach((item) => {
  item.style.display = 'block';
})

showMeArticle[0].insertAdjacentElement('afterend', anatomiShowText);
showMeArticle[1].insertAdjacentElement('afterend', anatomiShowText.cloneNode(true));
showMeArticle[2].insertAdjacentElement('afterend', anatomiShowText.cloneNode(true));

showMeArticle.forEach((item) => {
    item.style.display = 'none';
})

const showText = document.querySelectorAll(".anatomi-show-text");

showText.forEach((item, idx) => {
    item.addEventListener('click', () => {
        articleMoreContent[idx].classList.toggle('show');
        if(articleMoreContent[idx].classList.contains('show')) {
            showText[idx].innerHTML = `<svg class="anatomi-show-text-button" xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4308 3.36056L13.1007 13.8916C12.4668 14.5379 11.4391 14.5379 10.8052 13.8916L0.475086 3.36056C-0.158819 2.71432 -0.158819 1.66656 0.475086 1.02032C1.10899 0.374084 2.13675 0.374084 2.77066 1.02032L11.953 10.3813L21.1352 1.02032C21.7692 0.374085 22.7969 0.374085 23.4308 1.02032C24.0647 1.66656 24.0647 2.71432 23.4308 3.36056Z" fill="#333333"/>
            </svg>`;
            articleMoreContent[idx].classList.add('show');
            articleMoreContent[idx].style.display = 'block';
        } else {
            showText[idx].innerHTML = `<svg class="anatomi-show-text-button" xmlns="http://www.w3.org/2000/svg" width="14" height="25" viewBox="0 0 14 25" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82492 0.978115L13.356 11.3082C14.0022 11.9421 14.0022 12.9699 13.356 13.6038L2.82492 23.9338C2.17868 24.5678 1.13092 24.5678 0.484678 23.9338C-0.161559 23.2999 -0.161559 22.2722 0.484678 21.6383L9.84563 12.456L0.484678 3.27369C-0.161559 2.63978 -0.161559 1.61202 0.484678 0.978115C1.13092 0.344209 2.17868 0.344209 2.82492 0.978115Z" fill="#333333"/>
            </svg>`;
            articleMoreContent[idx].classList.remove('show');
            articleMoreContent[idx].style.display = 'block';
        }
    })
})

title.forEach((item, idx) => {
    item.addEventListener('click', () => {
        articleMoreContent[idx].classList.toggle('show');
        if(articleMoreContent[idx].classList.contains('show')) {
            showText[idx].innerHTML = `<svg class="anatomi-show-text-button" xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4308 3.36056L13.1007 13.8916C12.4668 14.5379 11.4391 14.5379 10.8052 13.8916L0.475086 3.36056C-0.158819 2.71432 -0.158819 1.66656 0.475086 1.02032C1.10899 0.374084 2.13675 0.374084 2.77066 1.02032L11.953 10.3813L21.1352 1.02032C21.7692 0.374085 22.7969 0.374085 23.4308 1.02032C24.0647 1.66656 24.0647 2.71432 23.4308 3.36056Z" fill="#333333"/>
            </svg>`;
            articleMoreContent[idx].classList.add('show');
            articleMoreContent[idx].style.display = 'block';
        } else {
            showText[idx].innerHTML = `<svg class="anatomi-show-text-button" xmlns="http://www.w3.org/2000/svg" width="14" height="25" viewBox="0 0 14 25" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82492 0.978115L13.356 11.3082C14.0022 11.9421 14.0022 12.9699 13.356 13.6038L2.82492 23.9338C2.17868 24.5678 1.13092 24.5678 0.484678 23.9338C-0.161559 23.2999 -0.161559 22.2722 0.484678 21.6383L9.84563 12.456L0.484678 3.27369C-0.161559 2.63978 -0.161559 1.61202 0.484678 0.978115C1.13092 0.344209 2.17868 0.344209 2.82492 0.978115Z" fill="#333333"/>
            </svg>`;
            articleMoreContent[idx].classList.remove('show');
            articleMoreContent[idx].style.display = 'block';
        }
    })
})

const anatomi_tanitim_style = `
<style>
.page-nav {
    margin-bottom: 30px !important;
}
.info-text-wrapper {
    display: flex;
    flex-direction: column !important;
    background-color: #F0F0F0 !important;
    border: none !important;
    padding: 25px 40px !important;
    margin-bottom: 15px !important;
    border-radius: 10px !important;
    max-width: 70% !important;
    cursor: pointer;
}

.info-text-wrapper .text {
    width: 100%;
    margin-top: 30px;
}

.info-text-wrapper .title {
    width: 100% !important;
    font-size: 16px;
    font-weight: 600;
    color: #000;
    margin: 0px !important;

}

.upper-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.upper-group .title {
    cursor: pointer;
}

.anatomi-show-text {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}

.article-more-content {
    display: none;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
}

.article-more-content table {
    width: 100% !important;
}

.article-more-content.show {
    max-height: 6000px !important;
    transition: max-height 0.5s ease-in;
}

@media screen and (min-width: 1600px) {
    .info-text-wrapper {
        max-width: 50% !important;
    }
}

@media screen and (max-width: 767px) {
    .info-text-wrapper {
        padding: 12px 21px !important;
        margin: 20px auto !important;
    }

    .upper-group {
        align-items: center;
    }

    .info-text-wrapper .title {
        width: 180% !important;
    }
}


</style>
`;

head.insertAdjacentHTML('beforeend', anatomi_tanitim_style);