const a_style = `<style>

#mainColumn{
    position: relative !important;
}
.a_container{
    background-color: #FCB711;
    width: 100%;
    height: 764px !important;
}
.a_container::before
{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    z-index:999999 !important;
}

.a_container::before {
    top: 21%;
    left: -133px;
    z-index: 999999 !important;
    transform: rotate(-90deg);
    width: 0;
    border-left: 350px solid transparent;
    border-right: 350px solid transparent;
    border-top: 435px solid white;
}
.a_front_color img {
    position: absolute;
    top: 32%;
    left: 0;
    width: 23% !important;
    z-index: 99999999999;
}
.a_info{
    position: absolute;
    top: 34%;
    width: 50%;
    right: 0;

}
.a_link_ul {
    display: flex !important;
    gap: 13px;
    flex-wrap: wrap !important;
 
}
.a_link_ul a{
    border: 1px solid white;
    padding: 10px;
    width: 41px;
    flex-basis: calc(33% - 82px);
    background: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.a_title{
    font-size: 27px;
    width: 59%;
    font-weight: 600;
    color: #C93737;
    margin-bottom: 20px;
    line-height: 35px;
}


@media only screen and (max-width: 600px){
    .a_container::before {
        left: -150px;
    z-index: 999999 !important;
    transform: rotate(-90deg);
    width: 0;
    border-left: 200px solid transparent;
    border-right: 200px solid transparent;
    border-top: 435px solid white;
    top: -25px;
    }
    .a_front_color img {
        position: absolute;
        left: 0;
        width: 155px !important;
        z-index: 99999999999;
        top: 17%;
    }
    .a_title {
        font-size: 22px;
        width: 59%;
        font-weight: 600;
        color: #C93737;
        margin-bottom: 20px;
        line-height: 28px;
    }
    .a_link_ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 50px);
    }
    .a_link_ul a {
        border: 1px solid white;
        padding: 9px;
        width: 40px;
        flex-basis: calc(33% - 116px);
        background: white;
        border-radius: 3px;
        font-size: 12px;
    }
    .a_info {
        position: absolute;
        top: 41%;
        width: 84%;
        right: 34;
    }
   

}
@media screen and (max-width: 1000px) and (min-width: 750px) {

    .a_container::before {
    left: -150px;
    z-index: 999999 !important;
    transform: rotate(-90deg);
    width: 0;
    border-left: 270px solid transparent;
    border-right: 270px solid transparent;
    border-top: 435px solid white;
    top: 87px;
    }

}

@media screen and (max-width: 750px) and (min-width: 600px) {
    .a_container::before {
        left: -150px;
        z-index: 999999 !important;
        transform: rotate(-90deg);
        width: 0;
        border-left: 220px solid transparent;
        border-right: 220px solid transparent;
        border-top: 435px solid white;
        top: 87px;
        }
}






</style>`


const a_html = `<div class="a_container">
<div class="a_front_color">
<div class="a_svg">
<img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Group+228.svg"></img>
</div>


<div class="a_info">
<div class="a_title">
Aradığın sayfa bulunamadı!
Aşağıdakilere Göz Atmak İster misin?
</div>
<div class="a_link">
<ul class="a_link_ul">
<a href="https://www.istanbulticaret.com/ayak-koruma-ekipmanlari"><li>Ayak Koruma </li></a>
<a href="https://www.istanbulticaret.com/bas-yuz-koruma-ekipmanlari"><li>Baş ve Yüz Koruma</li></a>
<a href="https://www.istanbulticaret.com/el-ve-kol-koruma-urunleri"><li>El ve Kol Koruma</li></a>
<a href="https://www.istanbulticaret.com/goz-koruma-urunleri"><li>Göz Koruma</li></a>
<a href="https://www.istanbulticaret.com/kulak-koruma-urunleri"><li>İşitme Koruma</li></a>
<a href="https://www.istanbulticaret.com/yapi-market-hirdavat"><li>Yapı Market Ve Hırdavat</li></a>
<a href="https://www.istanbulticaret.com/vucut-koruma-ekipmanlari"><li>Vücut Koruma</li></a>
<a href="https://www.istanbulticaret.com/yuksekte-calisma-ekipmanlari"><li>Yüksekte Çalışma</li></a>
<a href="https://www.istanbulticaret.com/solunum-koruma-ekipmanlari"><li>Solunum Koruma</li></a>
</ul>
</div>
</div>


</div>`


const a_delete = document.querySelector('#mainColumn .box.col-12')
a_delete.remove()

const abc = document.querySelector('#mainColumn')
abc.insertAdjacentHTML('afterbegin',a_html)

const a_head = document.querySelector('head')
a_head.insertAdjacentHTML('afterbegin', a_style)



