const a_style = `<style>
.anatomi_row{
    display: flex !important;
    flex-direction: column !important;
}
.a_wording{
    padding: 0px !important;
}
#anatomi_container{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #adafb35c;
    padding: 8px;
    margin-top: 12px;
    gap: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #333333;
}

#anatomi_container span{
    color: #4C914B !important;
}

</style>`

const a_htmml = `
<div id="anatomi_container">
<div class="a_svg">
<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6501 2.99943V2.99513L14.8688 4.43679L18.1005 3.22519L9.49993 0L0.899414 3.22519L9.49993 6.45039L12.7187 5.24309L9.49993 3.91646V3.91324L11.6501 2.99943Z" fill="#4C914B"/>
<path d="M0.899414 4.30029V13.9759L8.9624 17V7.32445L0.899414 4.30029ZM5.19967 14.0114L3.04954 13.2051V12.058L5.19967 12.8643V14.0114Z" fill="#4C914B"/>
<path d="M14.8753 5.50974V8.20278L12.7251 9.00908V6.31604L10.0375 7.32445V17L18.1005 13.9759V4.30029L14.8753 5.50974Z" fill="#4C914B"/>
</svg>
</div>
<p class="a_wording">
2000 TL ve üzerine <span>Kargo Bedava!</span>
</p>

</div>

`

const a_product_title = document.querySelector('#productInfo')

const anatomi_row = document.querySelector('#productMobileInfo .row')
anatomi_row.classList.add('anatomi_row')
a_product_title.insertAdjacentHTML('afterend', a_htmml);

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);