const mobilGenislik = 540;

// Tarayıcının ekran genişliğini al
const ekranGenislik = window.innerWidth;

// Ekran genişliği eşik değerinden küçükse
if (ekranGenislik < mobilGenislik) {
  const anatomiStyle = `
    <style>
      .story_container {
        margin-top: 0px !important;
      }
      img {
        pointer-events: none;
      }
      .story_container ul {
        list-style-type: none;
        user-select: none;
        display: flex;
        overflow-y: auto;
        padding: 10px 0;
        margin: 0 0 0 0 !important;
      }
      .story_container ul li {
        padding: 0 3px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .story_container ul li:first-child {
        padding-left: 20px;
      }
      .story_container ul li:last-child {
        padding-right: 20px;
      }
      .story_container ul li .story {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, .7);
        padding: 1px;
        position: relative;
      }
      .story_container ul li .story img {
        padding: 3px;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        border: 1px solid #0B2583;
      }
      .story_container ul li span {
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
      .story_container {
        margin-top: 40px;
      }
      #ceket {
        font-size: 12px !important;
      }
      .category {
        text-align: center;
        width: 86px;
      }
      .a_link_story {
        text-align: center;
      }
      .a_text_new {
        font-size: 12px !important;
      }
    </style>
  `;

  const aHtml = `
    <hr>
    <div class="story_container">
      <ul>
        <li class="has_story">
          <a class="a_link_story" href="https://jackjones.com.tr/kubilay-aka">
            <div class="story">
              <picture>
                <source srcset="https://anatomi.s3.eu-north-1.amazonaws.com/1080x1080-3.jpg" type="image/webp">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/1080x1080-3.jpg" alt="">
              </picture>
            </div>
            <span class="category">Kubilay Aka</span>
          </a>
        </li>
        <li class="has_story">
          <a class="a_link_story" href="https://jackjones.com.tr/kadin-giyim">
            <div class="story">
              <picture>
                <source srcset="https://anatomi.s3.eu-north-1.amazonaws.com/1080x1080-2.jpg" type="image/webp">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/1080x1080-2.jpg" alt="">
              </picture>
            </div>
            <span class="category">J&J Girls</span>
          </a>
        </li>
        <li class="has_story">
        <a class="a_link_story" href="https://jackjones.com.tr/indirimli-urunler">
          <div class="story">
            <picture>
              <source srcset="https://resmim.net/cdn/2024/07/26/WbOhuH.webp" type="image/webp">
              <img src="https://resmim.net/cdn/2024/07/26/WbOhuH.webp" alt="">
            </picture>
          </div>
          <span class="category">İndirim</span>
        </a>
      </li>
        <li class="has_story">
          <a class="a_link_story" href="https://jackjones.com.tr/450tl-ve-alti-tisortler">
            <div class="story">
              <picture>
                <source srcset="https://anatomi.s3.eu-north-1.amazonaws.com/tisort.jpg" type="image/webp">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/tisort.jpg" alt="">
              </picture>
            </div>
            <span class="category a_text_new">450 TL ve Altı Tişörtler</span>
          </a>
        </li>
        <li class="has_story">
          <a class="a_link_story" href="https://jackjones.com.tr/1000tl-ve-alti-jeanler">
            <div class="story">
              <picture>
                <source srcset="https://anatomi.s3.eu-north-1.amazonaws.com/Jean.jpg" type="image/webp">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Jean.jpg" alt="">
              </picture>
            </div>
            <span class="category a_text_new">1000 TL ve Altı Jeanler</span>
          </a>
        </li>
        <li class="has_story">
          <a class="a_link_story" href="https://jackjones.com.tr/1500tl-ve-alti-gomlekler">
            <div class="story">
              <picture>
                <source srcset="https://anatomi.s3.eu-north-1.amazonaws.com/gomlek.jpg" type="image/webp">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/gomlek.jpg" alt="">
              </picture>
            </div>
            <span class="category a_text_new">1500 TL ve Altı Gömlekler</span>
          </a>
        </li>
        <li class="has_story">
          <a class="a_link_story" href="https://jackjones.com.tr/buyuk-beden">
            <div class="story">
              <picture>
                <source srcset="https://anatomi.s3.eu-north-1.amazonaws.com/gorsel_2.webp" type="image/webp">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/gorsel_2.webp" alt="">
              </picture>
            </div>
            <span class="category">Büyük Beden</span>
          </a> 
        </li>
        <li class="has_story">
          <a class="a_link_story" href="https://jackjones.com.tr/cocuk">
            <div class="story">
              <picture>
                <source srcset="https://anatomi.s3.eu-north-1.amazonaws.com/gorsel_1.webp" type="image/webp">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/gorsel_1.webp" alt="">
              </picture> 
            </div>
            <span class="category">Çocuk</span>
          </a>  
        </li>
      </ul>
    </div>
  `;

  const abcContainer = document.querySelector(".uk-background-secondary.uk-background-cover.uk-cover-container.section-home-slider");
  abcContainer.insertAdjacentHTML("beforebegin", aHtml);
  const anatomiHead = document.querySelector("head");
  anatomiHead.insertAdjacentHTML("afterbegin", anatomiStyle);
}


/*var mobilGenislik = 540;

// Tarayıcının ekran genişliğini al
var ekranGenislik = window.innerWidth;

// Ekran genişliği eşik değerinden küçükse
if (ekranGenislik < mobilGenislik) {
  var anatomiStyle = "\n    <style>\n      .story_container {\n        margin-top: 0px !important;\n      }\n      img {\n        pointer-events: none;\n      }\n      .story_container ul {\n        list-style-type: none;\n        user-select: none;\n        display: flex;\n        overflow-y: auto;\n        padding: 10px 0;\n        margin: 0 0 0 0 !important;\n      }\n      .story_container ul li {\n        padding: 0 3px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n      .story_container ul li:first-child {\n        padding-left: 20px;\n      }\n      .story_container ul li:last-child {\n        padding-right: 20px;\n      }\n      .story_container ul li .story {\n        width: 75px;\n        height: 75px;\n        border-radius: 50%;\n        background-color: rgba(255, 255, 255, .7);\n        padding: 1px;\n        position: relative;\n      }\n      .story_container ul li .story img {\n        padding: 3px;\n        border-radius: 50%;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #0B2583;\n      }\n      .story_container ul li span {\n        color: black;\n        font-weight: 500;\n        font-size: 13px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: 5px;\n      }\n      .uk-hr, hr {\n        overflow: visible;\n        text-align: inherit;\n        margin: 0 !important;\n        border: 0;\n        border-top: 1px solid #e5e5e7;\n      }\n      .story_container {\n        margin-top: 40px;\n      }\n      #ceket {\n        font-size: 12px !important;\n      }\n      .category {\n        text-align: center;\n        width: 86px;\n      }\n      .a_link_story {\n        text-align: center;\n      }\n      .a_text_new {\n        font-size: 12px !important;\n      }\n    </style>\n  ";
  var aHtml = "\n    <hr>\n    <div class=\"story_container\">\n      <ul>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/kubilay-aka\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/1080x1080-3.jpg\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/1080x1080-3.jpg\" alt=\"\">\n              </picture>\n            </div>\n            <span class=\"category\">Kubilay Aka</span>\n          </a>\n        </li>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/kadin-giyim\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/1080x1080-2.jpg\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/1080x1080-2.jpg\" alt=\"\">\n              </picture>\n            </div>\n            <span class=\"category\">J&J Girls</span>\n          </a>\n        </li>\n        <li class=\"has_story\">\n        <a class=\"a_link_story\" href=\"https://jackjones.com.tr/indirimli-urunler\">\n          <div class=\"story\">\n            <picture>\n              <source srcset=\"https://resmim.net/cdn/2024/07/26/WbOhuH.webp\" type=\"image/webp\">\n              <img src=\"https://resmim.net/cdn/2024/07/26/WbOhuH.webp\" alt=\"\">\n            </picture>\n          </div>\n          <span class=\"category\">\u0130ndirim</span>\n        </a>\n      </li>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/450tl-ve-alti-tisortler\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/tisort.jpg\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/tisort.jpg\" alt=\"\">\n              </picture>\n            </div>\n            <span class=\"category a_text_new\">450 TL ve Alt\u0131 Ti\u015F\xF6rtler</span>\n          </a>\n        </li>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/1000tl-ve-alti-jeanler\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/Jean.jpg\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/Jean.jpg\" alt=\"\">\n              </picture>\n            </div>\n            <span class=\"category a_text_new\">1000 TL ve Alt\u0131 Jeanler</span>\n          </a>\n        </li>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/1500tl-ve-alti-gomlekler\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/gomlek.jpg\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/gomlek.jpg\" alt=\"\">\n              </picture>\n            </div>\n            <span class=\"category a_text_new\">1500 TL ve Alt\u0131 G\xF6mlekler</span>\n          </a>\n        </li>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/buyuk-beden\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/gorsel_2.webp\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/gorsel_2.webp\" alt=\"\">\n              </picture>\n            </div>\n            <span class=\"category\">B\xFCy\xFCk Beden</span>\n          </a> \n        </li>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/cocuk\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/gorsel_1.webp\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/gorsel_1.webp\" alt=\"\">\n              </picture> \n            </div>\n            <span class=\"category\">\xC7ocuk</span>\n          </a>  \n        </li>\n      </ul>\n    </div>\n  ";
  var abcContainer = document.querySelector(".uk-background-secondary.uk-background-cover.uk-cover-container.section-home-slider");
  abcContainer.insertAdjacentHTML("beforebegin", aHtml);
  var anatomiHead = document.querySelector("head");
  anatomiHead.insertAdjacentHTML("afterbegin", anatomiStyle);
}*/






/*old version
"use strict";

var mobilGenislik = 540;

// Tarayıcının ekran genişliğini al
var ekranGenislik = window.innerWidth;

// Ekran genişliği eşik değerinden küçükse
if (ekranGenislik < mobilGenislik) {
  var anatomiStyle = "\n    <style>\n      .story_container {\n        margin-top: 0px !important;\n      }\n      img {\n        pointer-events: none;\n      }\n      .story_container ul {\n        list-style-type: none;\n        user-select: none;\n        display: flex;\n        overflow-y: auto;\n        padding: 10px 0;\n        margin: 0 0 0 0 !important;\n      }\n      .story_container ul li {\n        padding: 0 3px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n      .story_container ul li:first-child {\n        padding-left: 20px;\n      }\n      .story_container ul li:last-child {\n        padding-right: 20px;\n      }\n      .story_container ul li .story {\n        width: 75px;\n        height: 75px;\n        border-radius: 50%;\n        background-color: rgba(255, 255, 255, .7);\n        padding: 1px;\n        position: relative;\n      }\n      .story_container ul li .story img {\n        padding: 3px;\n        border-radius: 50%;\n        width: 100%;\n        height: 100%;\n        border: 1px solid #0B2583;\n      }\n      .story_container ul li span {\n        color: black;\n        font-weight: 500;\n        font-size: 13px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: 5px;\n      }\n      .uk-hr, hr {\n        overflow: visible;\n        text-align: inherit;\n        margin: 0 !important;\n        border: 0;\n        border-top: 1px solid #e5e5e7;\n      }\n      .story_container {\n        margin-top: 40px;\n      }\n      #ceket {\n        font-size: 12px !important;\n      }\n      .category {\n        text-align: center;\n        width: 86px;\n      }\n      .a_link_story {\n        text-align: center;\n      }\n      .a_text_new {\n        font-size: 12px !important;\n      }\n    </style>\n  ";
  var aHtml = "\n    <hr>\n    <div class=\"story_container\">\n      <ul>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/kubilay-aka\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/1080x1080-3.jpg\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/1080x1080-3.jpg\" alt=\"\">\n              </picture>\n            </div>\n            <span class=\"category\">Kubilay Aka</span>\n          </a>\n        </li>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/kadin-giyim\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/1080x1080-2.jpg\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/1080x1080-2.jpg\" alt=\"\">\n              </picture>\n            </div>\n            <span class=\"category\">J&J Girls</span>\n          </a>\n        </li>\n        <li class=\"has_story\">\n        <a class=\"a_link_story\" href=\"https://jackjones.com.tr/indirimli-urunler\">\n          <div class=\"story\">\n            <picture>\n              <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/indirim-story-alani.webp\" type=\"image/webp\">\n              <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/indirim-story-alani.webp\" alt=\"\">\n            </picture>\n          </div>\n          <span class=\"category\">\u0130ndirim</span>\n        </a>\n      </li>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/450tl-ve-alti-tisortler\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/tisort.jpg\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/tisort.jpg\" alt=\"\">\n              </picture>\n            </div>\n            <span class=\"category a_text_new\">450 TL ve Alt\u0131 Ti\u015F\xF6rtler</span>\n          </a>\n        </li>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/1000tl-ve-alti-jeanler\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/Jean.jpg\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/Jean.jpg\" alt=\"\">\n              </picture>\n            </div>\n            <span class=\"category a_text_new\">1000 TL ve Alt\u0131 Jeanler</span>\n          </a>\n        </li>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/1500tl-ve-alti-gomlekler\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/gomlek.jpg\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/gomlek.jpg\" alt=\"\">\n              </picture>\n            </div>\n            <span class=\"category a_text_new\">1500 TL ve Alt\u0131 G\xF6mlekler</span>\n          </a>\n        </li>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/buyuk-beden\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/gorsel_2.webp\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/gorsel_2.webp\" alt=\"\">\n              </picture>\n            </div>\n            <span class=\"category\">B\xFCy\xFCk Beden</span>\n          </a> \n        </li>\n        <li class=\"has_story\">\n          <a class=\"a_link_story\" href=\"https://jackjones.com.tr/cocuk\">\n            <div class=\"story\">\n              <picture>\n                <source srcset=\"https://anatomi.s3.eu-north-1.amazonaws.com/gorsel_1.webp\" type=\"image/webp\">\n                <img src=\"https://anatomi.s3.eu-north-1.amazonaws.com/gorsel_1.webp\" alt=\"\">\n              </picture> \n            </div>\n            <span class=\"category\">\xC7ocuk</span>\n          </a>  \n        </li>\n      </ul>\n    </div>\n  ";
  var abcContainer = document.querySelector(".uk-background-secondary.uk-background-cover.uk-cover-container.section-home-slider");
  abcContainer.insertAdjacentHTML("beforebegin", aHtml);
  var anatomiHead = document.querySelector("head");
  anatomiHead.insertAdjacentHTML("afterbegin", anatomiStyle);
}
*/