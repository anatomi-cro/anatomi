// V1

const a_section = document.querySelectorAll('section.uk-section.uk-section-large')[1];

const a_jj_badge = document.querySelector('.parallax-text-container.uk-background-primary')

a_jj_badge.insertAdjacentElement('afterend', a_section)

// V2

const a_style = `
<style>

.a_container{
    color: white !important;
    display: flex;
    align-items: center;
    justify-content : center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #2948E8;
    padding: 10px 5px;
    z-index: 9999999999;
    text-align: center;
    gap:20px;
}
</style>

`


const a_html = `
<a class="a_container" href="https://jackjones.com.tr/index.php?route=product/category&path=192&sort=p.date_added&order=DESC">
<div class=a_bade_bottom>
KUBİLAY AKA KOLEKSİYONUNU İNCELE
</div>
<div class="a_svg">
<svg width="7" height="15" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.83692 0.818191L8.68483 7.73182C9.10506 8.15607 9.10506 8.84393 8.68483 9.26818L1.83692 16.1818C1.4167 16.6061 0.735388 16.6061 0.315166 16.1818C-0.105055 15.7576 -0.105055 15.0697 0.315166 14.6454L5.89495 9.01212V7.98788L0.315166 2.35455C-0.105055 1.9303 -0.105055 1.24245 0.315166 0.818191C0.735388 0.393936 1.4167 0.393936 1.83692 0.818191Z" fill="white"/>
</svg>
</div>

</a>
`

const a_body = document.querySelector('body');
a_body.insertAdjacentHTML('afterend', a_html);

const head = document.querySelector('head');
head.insertAdjacentHTML("beforeend", a_style);