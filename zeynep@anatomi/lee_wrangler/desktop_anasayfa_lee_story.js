const a_style = `
<style>
.story_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    margin-top: 50px;
}
.story_container ul{
    display: flex;
    align-items: center;
    gap: 20px;
    list-style-type: none;
    user-select: none;
}

.story_container ul li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
   }

   .story_container ul li .story{
    width: 115px;
    height: 115px;
    background-color: rgba(255, 255, 255, .7);
    padding: 1px;
    position: relative;
   }


   .story_container ul li .story img{
    padding: 3px;
    width: 100%;
    height: 100%;
    border: 1px solid #BA289F;
   }

   .story_container ul {
    padding-left: 0px !important;
   }
   .has_story span{
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    
   }
</style>`



const a_html = ` 
<hr>
<div class="story_container">
<ul>
<li class="has_story">
<a href="https://www.lee.com.tr/lee-erkek-denim-jean-pantolon">
    <div class="story">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/lee+erkek+jean.jpg" alt="">
    </div>
</a>
    <span class="category">Erkek Jean</span>
</li>
<li class="has_story">
<a href="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/lee+kad%C4%B1n+jean.jpg">
    <div class="story">
        <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/lee+kad%C4%B1n+jean.jpg" alt=""/>
    </div>
</a>
    <span class="category">Kadın Jean</span>
</li>
<li class="has_story">
<a href="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/lee+erkek+tshirt.jpg">
    <div class="story">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/lee+erkek+tshirt.jpg" alt=""/>       
    </div>
</a> 
    <span class="category">Erkek T-Shirt</span>
</li>
<li class="has_story">
<a href="https://www.lee.com.tr/lee-kadin-giyim-t-shirt">
    <div class="story">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/lee+kad%C4%B1n+t-shirt.jpg" alt=""/>        
    </div>
</a>
    <span class="category">Kadın T-Shirt</span>
</li>
<li class="has_story">
<a href="https://www.lee.com.tr/lee-erkek-giyim-gomlek">
    <div class="story">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Artboard+9.jpg" alt=""/>       
    </div>
</a> 
    <span class="category">Erkek Gömlek</span>
</li>

<li class="has_story">
<a href="https://www.lee.com.tr/lee-erkek-giyim-sort">
    <div class="story">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/lee+s%CC%A7ort.jpg" alt=""/>       
    </div>
</a> 
    <span class="category">Erkek Şort</span>
</li>

<li class="has_story">
<a href="https://www.lee.com.tr/lee-kadin-giyim-sort">
    <div class="story">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Artboard+8.jpg" alt=""/>       
    </div>
</a> 
    <span class="category">Kadın Şort</span>
</li>

<li class="has_story">
<a href="https://www.lee.com.tr/lee-erkek-giyim-sweatshirt">
    <div class="story">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Artboard+7.jpg" alt=""/>       
    </div>
</a> 
    <span class="category">Erkek Sweatshirt</span>
</li>

<li class="has_story">
<a href="https://www.lee.com.tr/lee-kadin-giyim-sweatshirt">
    <div class="story">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Artboard+6.jpg" alt=""/>       
    </div>
</a> 
    <span class="category">Kadın Sweatshirt</span>
</li>

<li class="has_story">
<a href="https://www.lee.com.tr/lee-outlet-urunler">
    <div class="story">
    <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Artboard+1.png" alt=""/>       
    </div>
</a> 
    <span class="category">Kampanyalar</span>
</li>


    

</ul>

</div>
`;


const anatomi_container = document.querySelector('#cl-main-slider');
anatomi_container.insertAdjacentHTML(`afterend`, a_html);



const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);
// document.querySelector('#header .ins-preview-wrapper').remove();

document.querySelectorAll('.has_story a').forEach(item => {
    item.addEventListener('click', (e) => {
        window.dataLayer.push({
            event: "anatomi_click",
            category: "story",
            label: e.target.parentElement.href,
        })
    })
})