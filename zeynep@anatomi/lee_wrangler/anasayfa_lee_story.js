const a_style = `
<style>
img{
    pointer-events: none;
   }
   .story_container ul{
    list-style-type: none;
    user-select: none;
    display: flex;
    overflow-y: auto;
    padding: 10px 0;
    margin: 0 0 0 0 !important;
   }
   .story_container ul li{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
   }

   .story_container ul li:first-child{
    padding-left: 20px;
   }
   .story_container ul li:last-child{
    padding-right: 20px;
   }
   .story_container ul li .story{
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, .7);
    padding: 1px;
    position: relative;
   }


   .story_container ul li .story img{
    padding: 3px;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    border: 1px solid #BA289F;
   }
   .story_container ul li span{
    color: black;
    font-weight: 500;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
    text-align: center;
height: 34px;
   }

   .uk-hr, hr {
    overflow: visible;
    text-align: inherit;
     margin: 0 !important; 
    border: 0;
    border-top: 1px solid #e5e5e7;
  }



</style>`



const a_html = ` 
<hr>
<div class="story_container">
<ul>
    <li class="has_story">
    <a href="https://www.lee.com.tr/lee-erkek-denim-jean-pantolon">
        <div class="story">
        <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Lee_lee+erkek+jean.jpg" alt="">
        </div>
    </a>
        <span class="category">Erkek Jean</span>
    </li>
    <li class="has_story">
    <a href="https://www.lee.com.tr/lee-kadin-denim-jean-pantolon">
        <div class="story">
            <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/lee+kad%C4%B1n+jean.jpg" alt=""/>
        </div>
    </a>
        <span class="category">Kadın Jean</span>
    </li>
    <li class="has_story">
    <a href="https://www.lee.com.tr/lee-erkek-giyim-t-shirt">
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
    <a href="https://www.lee.com.tr/lee-erkek-giyim-deniz-sortu">
        <div class="story">
        <img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/lee+erkek+mayo.jpg" alt=""/>       
        </div>
    </a> 
        <span class="category">Erkek Deniz Şortu</span>
    </li>

    

</ul>

</div>
`;


const anatomi_container = document.querySelector('.cl-home-page');
anatomi_container.insertAdjacentHTML(`beforebegin`, a_html);



const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);
// document.querySelector('#header .ins-preview-wrapper').remove();