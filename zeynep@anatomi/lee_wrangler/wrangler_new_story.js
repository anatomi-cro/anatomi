const a_style = `
<style>
.story_container{
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    overflow-y: auto !important;
}
.story_container ul{
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
    list-style-type: none !important;
    user-select: none !important;
}
.story_container ul {
    padding-left: 0px !important;
}
.story_container ul li{
    display: flex !important;
    flex-direction: column !important;
    gap: 10px !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0 10px !important;
    gap: 25px !important;
   }

   .story_container ul li .story{
    width: 100px !important;
    height: 100px !important;
    background-color: rgba(255, 255, 255, .7) !important;
    padding: 1px !important;
    position: relative !important;
   }


   .story_container ul li .story img{
    padding: 3px !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 50% !important;
    border: 1px solid black !important;
   }

   .has_story a{
    border-radius: 50% !important;
   }
   .has_story span{
    text-align: center;
    font-size: 13px;
    
   }

</style>`


const a_html = ` 
<hr>
<div class="story_container">
<ul>
    <li class="has_story">
    <a href="https://www.wrangler.com.tr/wrangler-erkek-denim-jean-pantolon">
        <div class="story">
        <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/wr+erkek+jean+copy.jpg" alt="">
        </div>
    </a>
        <span class="category">Erkek Jean</span>
    </li>
    <li class="has_story">
    <a href="https://www.wrangler.com.tr/wrangler-kadin-denim-jean-pantolon">
        <div class="story">
            <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/wr+kad%C4%B1n+jean+copy.jpg" alt=""/>
        </div>
    </a>
        <span class="category">Kadın Jean</span>
    </li>
    <li class="has_story">
    <a href="https://www.wrangler.com.tr/wrangler-erkek-giyim-t-shirt">
        <div class="story">
        <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/wr+erkek+tshirt+copy.jpg" alt=""/>       
        </div>
    </a> 
        <span class="category">Erkek T-Shirt</span>
    </li>
    <li class="has_story">
    <a href="https://www.wrangler.com.tr/wrangler-kadin-giyim-t-shirt">
        <div class="story">
        <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/wr+kad%C4%B1n+t-shirt+copy.jpg" alt=""/>        
        </div>
    </a>
        <span class="category">Kadın T-Shirt</span>
    </li>
    <li class="has_story">
    <a href="https://www.wrangler.com.tr/wrangler-erkek-giyim-gomlek">
        <div class="story">
        <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Artboard+1.jpg" alt=""/>       
        </div>
    </a> 
        <span class="category">Erkek Gömlek</span>
    </li>

    <li class="has_story">
    <a href="https://www.wrangler.com.tr/wrangler-erkek-giyim-sort">
        <div class="story">
        <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Artboard+5.jpg" alt=""/>       
        </div>
    </a> 
        <span class="category">Erkek Şort</span>
    </li>

    <li class="has_story">
    <a href="https://www.wrangler.com.tr/wrangler-kadin-giyim-sort">
        <div class="story">
        <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Artboard+4.jpg" alt=""/>       
        </div>
    </a> 
        <span class="category">Kadın Şort</span>
    </li>

    <li class="has_story">
    <a href="https://www.wrangler.com.tr/wrangler-erkek-giyim-sweatshirt">
        <div class="story">
        <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Artboard+2.jpg" alt=""/>       
        </div>
    </a> 
        <span class="category">Erkek Sweatshirt</span>
    </li>

    <li class="has_story">
    <a href="https://www.wrangler.com.tr/wrangler-kadin-giyim-sweatshirt">
        <div class="story">
        <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Artboard+3.jpg" alt=""/>       
        </div>
    </a> 
        <span class="category">Kadın Sweatshirt</span>
    </li>

    <li class="has_story">
    <a href="https://www.wrangler.com.tr/wrangler-outlet-urunler">
        <div class="story">
        <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Artboard+2.png" alt=""/>       
        </div>
    </a> 
        <span class="category">Kampanyalar</span>
    </li>

    

</ul>

</div>
`;


const anatomi_container = document.querySelector('.navigation.navigation-landscape');
anatomi_container.insertAdjacentHTML(`afterend`, a_html);



const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);