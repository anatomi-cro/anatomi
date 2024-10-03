const a_style = `<style>
.a_list_container{
    margin-top: 25px;
    overflow-x: scroll;
    width: 100%;
    flex-wrap: nowrap;
    display: flex !important;
}
.a_list{
    display: flex;
    justify-content: center;
    gap: 10px;
    list-style-type: none;
    padding-left: 0 !important


}
.a_li{
    border: 0.5px solid #CCCCCC;
    padding: 5px;
    display: flex;
    gap: 6px;
    align-items: center;
    color: black !important;
    font-size: 14px !important;
    border-radius: 4px;
    width: 132px;
    height: 34px;
    justify-content: center;
}
.anatomi_link{
    text-decoration: none !important;

}
.anatomi_link:hover{
    background-color: #091E87 !important;
    color: white !important;
    text-decoration: none !important;
    
}
.a_li:hover {
    color: white !important;

}

.a_li:hover .a_svg_icon svg path {
    fill: white; /* SVG ikonunun path'leri beyaz olacak */
}

/* SVG içindeki fill özelliğini geçersiz kılmak için */
.a_li:hover .a_svg_icon svg:not(:root) path {
    fill: currentColor; /* Mevcut renk */
}



.ins-preview-wrapper.ins-preview-wrapper-1253{
    margin-top:20px !important;
}

</style>`


const a_container_button = document.querySelector('.ins-selectable-element.ins-element-wrap.ins-element-question.ins-top-search-wrap-element')
a_container_button.remove();


const a_html = `
<div class="a_list_container">
<ul class="a_list">


<a href="https://jackjones.com.tr/buyuk-indirim" class="anatomi_link">
<li class="a_li">
Büyük İndirim
</li>
</a>

<a href="https://jackjones.com.tr/sort" class="anatomi_link">
<li class="a_li">
Şort Fırsatı
</li>
</a>


<a href="https://jackjones.com.tr/index.php?route=product%2Fcategory&path=196&sort=p.price&order=DESC" class="anatomi_link">
<li class="a_li">
3 Al 2 Öde Tişört
</li>
</a>

<a href="https://jackjones.com.tr/index.php?route=product/category&path=198" class="anatomi_link">
<li class="a_li">
3 Al 2 Öde Boxer
</li>
</a>


<a href="https://jackjones.com.tr/index.php?route=product/category&path=197" class="anatomi_link">
<li class="a_li">
3 Al 2 Öde Çorap
</li>
</a>

</ul>
</div>
`



const a_fırsat = document.querySelector('.adaptive-title.ins-selectable-element.ins-element-wrap.ins-element-text.ins-top-search-wrap-element.ins-adaptive-title')
a_fırsat.insertAdjacentHTML('beforeend', a_html)

const a_icon_html = `
<div class="a_svg_icon">
<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.92872 0.25853L7.25487 5.87585C7.58171 6.22056 7.58171 6.77944 7.25487 7.12415L1.92872 12.7415C1.60188 13.0862 1.07197 13.0862 0.74513 12.7415C0.41829 12.3968 0.41829 11.8379 0.74513 11.4932L5.47949 6.5L0.74513 1.50682C0.41829 1.16212 0.41829 0.603237 0.74513 0.25853C1.07197 -0.0861768 1.60188 -0.0861768 1.92872 0.25853Z" fill="black"/>
</svg>
</div>

`;

const anatomi_li = document.querySelectorAll('.a_li');

anatomi_li.forEach(item => {
    item.insertAdjacentHTML('beforeend', a_icon_html);
});



const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);