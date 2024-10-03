const a_style = `<style>
.productName{
    font-size: 16px !important;
    text-align:center !important;
    color: black !important;
    font-weight: 600 !important;
}
.a_price_container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

}
.discountPrice{
    font-size: 18px !important;
    font-weight: 600 !important;
    display: flex;
    gap: 5px;

}
#price-flexer{
    justify-content: center !important;
}
.a_kargo_bilgilendirme{
    display: inline-flex;
    gap: 25px;
    border: 1px solid #388e3c70;
    width: 100%;
    justify-content: center;
    margin-top: 20px;
    padding: 7px 0px;
    color: #388E3C;
    font-size: 15px;
    font-weight: 500;
}
.a_kargo_bilgilendirme p {
    padding:0px !important;
}

</style>`

const productName = document.querySelector('#productName');
productName.classList.add('productName')

const a_price_container = document.querySelector('#price-flexer .col')
a_price_container.classList.add('a_price_container')

const a_kargo = document.querySelectorAll('.box.p-top.p-left.productSymbol')
a_kargo[0].remove();

const a_price_info = document.querySelector('#price-flexer')

const a_html = `
<div class="a_kargo_bilgilendirme">
<svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3965 0.639336C18.3906 1.11528 19.1534 2.31461 20.1097 3.96535H16.3965V0.639336ZM4.74277 4.10396C5.1332 4.10396 5.4166 4.2978 5.4166 4.75082C5.4166 5.13292 5.116 5.44281 4.7447 5.44389H0.673828C0.301643 5.44389 0 5.75433 0 6.13696C0 6.51978 0.301643 6.83003 0.673828 6.83003H6.73828C7.11398 6.83003 7.41474 7.14011 7.41474 7.5231C7.41474 7.90591 7.1131 8.21617 6.74091 8.21617H0.673828C0.301643 8.21617 0 8.52643 0 8.90924C0 9.29205 0.301643 9.60231 0.673828 9.60231H2.15625V11.6815C2.15625 12.0643 2.45789 12.3746 2.83008 12.3746H4.18458C4.42603 13.5979 5.47696 14.5 6.71582 14.5C7.95468 14.5 9.00561 13.5979 9.24706 12.3746H16.0889C16.3303 13.5979 17.3813 14.5 18.6201 14.5C19.859 14.5 20.9099 13.5979 21.1514 12.3746H22.3262C22.6984 12.3746 23 12.0643 23 11.6815V7.5231C23 5.48956 20.9146 5.35455 20.9127 5.35148H15.7227C15.3505 5.35148 15.0488 5.04123 15.0488 4.65842V0.5H2.83008C2.45789 0.5 2.15625 0.810257 2.15625 1.19307V2.71782H1.34766C0.975471 2.71782 0.673828 3.02808 0.673828 3.41089C0.673828 3.7937 0.975471 4.10396 1.34766 4.10396H4.74277ZM19.4936 10.9448C19.976 11.4409 19.976 12.2457 19.4936 12.7419C18.7177 13.54 17.3848 12.9722 17.3848 11.8432C17.3848 10.7145 18.7177 10.1467 19.4936 10.9448ZM7.58934 10.9448C8.07172 11.4409 8.07172 12.2457 7.58934 12.7419C6.81339 13.54 5.48047 12.9722 5.48047 11.8432C5.48047 10.7145 6.81339 10.1467 7.58934 10.9448Z" fill="#388E3C"/>
</svg>
<p>500 TL ve Üzeri Ücretsiz Kargo</p>
</div>
`

a_price_info.insertAdjacentHTML('afterend', a_html);

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);