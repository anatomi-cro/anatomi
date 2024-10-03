const a_new_style = `<style>

.a_new_container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 280px;
    background: #ffffff;
    z-index: 99999;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}
.a_title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 55px;
    border-bottom: 1px solid #EEEEEE;

}
.a_banner_text{
    display: flex;
    justify-content: center !important;
    font-size: 16px;
    font-weight: 600;
    color: #333333;
    gap: 15px;
    height: 50px;
    align-items: center;
    padding-left: 70px;
}
.a_kampanya{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
}
.a_kampanya_info{
    border: 0.5px solid #BDBDBD;
}

.a_img {
    width: 106px;
    position: relative;
    display: inline-block;
  }
  
  .a_text {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: start;
    font-size: 12px;
    font-weight: 600;
    color: white;
    margin: 0px !important;
    padding: 5px 0px 5px 2px;
  }
.a_link{
    display: flex;
    height: 25px;
    align-items: center;
    justify-content: center;
    color: #0D37A4;
}
.a_link a{
    text-decoration: none !important;
}

.a_close svg{
    pointer-events: none;
}


</style>`

const a_new_html = `

<div class="a_title">
<div class="a_banner_text">
<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.98411 17.4835L11.2555 19.8533C11.5286 20.1383 11.5286 20.6031 11.2555 20.888L10.3184 21.8657C10.0453 22.1507 9.5998 22.1507 9.32669 21.8657L6.52229 18.9398L8.67935 17.6404C8.7807 17.5873 8.88229 17.535 8.98411 17.4835ZM22.6129 8.50355C22.9071 8.60335 23.0681 8.93312 22.9724 9.24007C22.8767 9.54701 22.5607 9.71495 22.2665 9.61515L20.2265 8.92361C19.9323 8.82381 19.7713 8.49404 19.867 8.1871C19.9626 7.88015 20.2787 7.71221 20.5729 7.81206L22.6129 8.50355ZM20.3026 5.37273C20.0343 5.53438 19.6912 5.43843 19.5363 5.15846C19.3814 4.87854 19.4733 4.52052 19.7416 4.35893L21.5842 3.24894C21.8526 3.08729 22.1957 3.18324 22.3505 3.46316C22.5055 3.74313 22.4135 4.1011 22.1452 4.26274L20.3026 5.37273ZM17.2021 0.463156C17.2664 0.14743 17.5638 -0.0541599 17.8664 0.0128581C18.169 0.079876 18.3623 0.390188 18.298 0.705962L17.852 2.89502C17.7878 3.21075 17.4903 3.41234 17.1877 3.34532C16.8851 3.2783 16.6919 2.96799 16.7561 2.65226L17.2021 0.463156ZM11.3383 1.13436C10.8024 1.45716 10.6171 2.17884 10.9265 2.73796L17.076 13.851C17.3855 14.4102 18.0771 14.6035 18.6131 14.2807C19.149 13.9579 19.3343 13.2362 19.0249 12.6771L16.9328 8.89649L17.2062 8.73177C18.1593 8.15763 18.4889 6.87434 17.9387 5.8799C17.3884 4.88551 16.1584 4.54164 15.2053 5.11573L14.9318 5.28045L12.8753 1.56398C12.5659 1.00496 11.8742 0.811562 11.3383 1.13436ZM0.893663 16.1474L1.38374 17.0331C2.21695 18.5388 4.0794 19.0595 5.5226 18.1902L7.66278 16.901L3.65276 9.65437L1.51258 10.9436C0.0694251 11.8129 -0.429624 13.7561 0.40359 15.2618L0.893663 16.1474ZM4.60126 9.03731C6.92302 7.37356 8.71039 5.52291 10.0969 3.58012L15.9267 14.1154C13.6208 14.3967 11.191 15.0865 8.64915 16.3525L4.60126 9.03731Z" fill="#333333"/>
</svg>
<p>3 Al 2 Öde Kampanyaları</p>
</div>
<div class="a_close">
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.243 6.243L11.486 11.486M1 11.486L6.243 6.243L1 11.486ZM11.486 1L6.242 6.243L11.486 1ZM6.242 6.243L1 1L6.242 6.243Z" stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

</div>


<div class="a_kampanya">
<a href="https://jackjones.com.tr/index.php?route=product/category&path=196">
<div class="a_kampanya_info">
<div class="a_img">
<img src='https://jackjones.com.tr/image/cache/banners/TISORT-680x950-600x950.jpg'></img>
<p class='a_text'>Basic Tişörtlerde 3 Al 2 Öde</p>
</div>
<div class="a_link">
<a href="https://jackjones.com.tr/index.php?route=product/category&path=196">İncele</a>
</div>
</div>
</a>

<a href="https://jackjones.com.tr/index.php?route=product/category&path=198">
<div class="a_kampanya_info">
<div class="a_img">
<img src='https://jackjones.com.tr/image/cache/banners/CORAP-680x950-600x950.jpg'></img>
<p class='a_text'>Tekli Boxerlerda 3 Al 2 Öde</p>
</div>
<div class="a_link">
<a href="https://jackjones.com.tr/index.php?route=product/category&path=198">İncele</a>
</div>
</div>
</a>

<a href="https://jackjones.com.tr/index.php?route=product/category&path=197">
<div class="a_kampanya_info">
<div class="a_img">
<img src='https://jackjones.com.tr/image/cache/banners/BOXER-680x950-600x950.jpg'></img>
<p class='a_text'>Tekli Çoraplarda 3 Al 2 Öde</p>
</div>
<div class="a_link">
<a href="https://jackjones.com.tr/index.php?route=product/category&path=197">İncele</a>
</div>
</div>
</a>

</div>

`

const a_new_container = document.createElement('div');
a_new_container.classList.add('a_new_container');

const a_body = document.querySelector('body');
a_body.appendChild(a_new_container);

a_new_container.insertAdjacentHTML('afterbegin', a_new_html);

const a_close = document.querySelector('.a_close')
a_close.addEventListener('click', () => {
    a_new_container.remove();
})


const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_new_style);