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
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    border: 1px solid #0B2583;
   }
   .story_container ul li span{
    color: black;
    font-weight: 500;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
   }

   .uk-hr, hr {
    overflow: visible;
    text-align: inherit;
     margin: 0 !important; 
    border: 0;
    border-top: 1px solid #e5e5e7;
  }
  .story_container{
    margin-top:40px;
  }

</style>`


function getElement(a_class, status){
    return status ? document.querySelector(a_class) : document.querySelectorAll(a_class);
}

const a_html = ` 
<hr>
<div class="story_container">
<ul>
    <li>
        <div class="story">
            <a href="https://jackjones.com.tr/denim"><img src="https://thumbs2.imgbox.com/25/62/HNwjXSCS_t.png" alt=""></a>
        </div>
        <span class="category">Denim</span>
    </li>
    <li class="has_story">
        <div class="story">
            <a href="https://jackjones.com.tr/mont"><img src="https://thumbs2.imgbox.com/d7/b9/zqdJYy7r_t.png" alt=""/></a>
        </div>
        <span class="category">Mont</span>
    </li>
    <li class="has_story">
        <div class="story">
        <a href="https://jackjones.com.tr/sweatshirt"><img src="https://thumbs2.imgbox.com/8e/3b/eE0fuyjj_t.png" alt=""/></a>        
        </div>
        <span class="category">Sweatshirt</span>
    </li>
    <li class="has_story">
        <div class="story">
            <a href="https://jackjones.com.tr/kazak"><img src="https://thumbs2.imgbox.com/b2/df/38RqHtue_t.png" alt="image host"/></a>
        </div>
        <span class="category">Kazak</span>
    </li>
    <li class="has_story">
        <div class="story">
            <a href="https://jackjones.com.tr/gomlek"><img src="https://thumbs2.imgbox.com/8d/1b/HjnyDyGX_t.png" alt="image host"/></a>
        </div>
        <span class="category">Gömlek</span>
    </li>

</ul>

</div>
`;


const abc_container = getElement(`.uk-background-secondary.uk-background-cover.uk-cover-container.section-home-slider`, true);
abc_container.insertAdjacentHTML(`beforebegin`, a_html);


const head = document.querySelector('head');
head.insertAdjacentHTML(`beforeend`, a_style);


