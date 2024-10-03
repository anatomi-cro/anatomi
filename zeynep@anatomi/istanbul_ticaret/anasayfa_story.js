const a_style = `<style>
.story_container ul {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    padding: 13px;
    width: 800px;

}

.story_container {
    overflow: scroll;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;

}


</style>`
const a_html = ` 
<hr>
<div class="story_container">
<ul>
    <li class="has_story">
        <div class="story">
            <a href="https://www.istanbulticaret.com/ansell"><img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Group+23+(2).svg" alt=""></a>
        </div>
        
    </li>
    <li class="has_story">
        <div class="story">
            <a href="https://www.istanbulticaret.com/yds"><img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Group+24+(1).svg" alt=""/></a>
        </div>
    </li>
    <li class="has_story">
        <div class="story">
        <a href="https://www.istanbulticaret.com/dupont"><img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Group+25.svg" alt=""/></a>        
        </div>
    </li>
    <li class="has_story">
        <div class="story">
            <a href="https://www.istanbulticaret.com/maxeo"><img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Group+26+(1).svg" alt="image host"/></a>
        </div>
    </li>
    <li class="has_story">
        <div class="story">
            <a href="https://www.istanbulticaret.com/veo"><img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Group+27+(1).svg" alt="image host"/></a>
        </div>
    </li>

    <li class="has_story">
        <div class="story">
            <a href="https://www.istanbulticaret.com/univet"><img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Group+30.svg" alt="image host"/></a>
        </div>
    </li>
    <li class="has_story">
        <div class="story">
            <a href="https://www.istanbulticaret.com/3m"><img src="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Group+29+(1).svg" alt="image host"/></a>
        </div>
    </li>

</ul>


</div> 


`;



const list_down_container = document.querySelector(`.contentWrapper.col.col-12`, );
list_down_container.insertAdjacentHTML(`beforebegin`, a_html);


const anatomi_img = document.querySelectorAll('.story_container img')
anatomi_img.forEach((item) => {

    item.classList.add('anatomi_img_story')

})



const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);





// @media only screen and (max-width: 600px) {

//     .anatomi_img_story{
//         width: 75px !important;
//         max-width: none;
//     }
//     }