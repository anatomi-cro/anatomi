"use strict";

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
          <a class="a_link_story" href="https://jackjones.com.tr/index.php?route=product%2Fcategory&path=192&sort=p.date_added&order=DESC">
            <div class="story">
              <picture>
                <source srcset="https://anatomi.s3.eu-north-1.amazonaws.com/jackjones_story_kubilay-aka+(1).webp" type="image/webp">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/jackjones_story_kubilay-aka+(1).webp" alt="">
              </picture>
            </div>
            <span class="category">Kubilay Aka</span>
          </a>
        </li>
        <li class="has_story">
          <a class="a_link_story" href="https://jackjones.com.tr/kadin-giyim">
            <div class="story">
              <picture>
                <source srcset="https://anatomi.s3.eu-north-1.amazonaws.com/jackjones_story_jj-girls.webp" type="image/webp">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/jackjones_story_jj-girls.webp" alt="">
              </picture>
            </div>
            <span class="category">J&J Girls</span>
          </a>
        </li>
        <li class="has_story">
          <a class="a_link_story" href="https://jackjones.com.tr/black-friday">
            <div class="story">
              <picture>
                <source srcset="https://anatomi.s3.eu-north-1.amazonaws.com/jackjones_yeni_story_kampanya.png" type="image/webp">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/jackjones_yeni_story_kampanya.png" alt="">
              </picture>
            </div>
            <span class="category">KASIM ÖZEL</span>
          </a>
        </li>
        <li class="has_story">
          <a class="a_link_story" href="https://jackjones.com.tr/buyuk-beden">
            <div class="story">
              <picture>
                <source srcset="https://anatomi.s3.eu-north-1.amazonaws.com/jackjones_story_buyuk-beden.webp" type="image/webp">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/jackjones_story_buyuk-beden.webp" alt="">
              </picture>
            </div>
            <span class="category">Büyük Beden</span>
          </a>
        </li>
        <li class="has_story">
          <a class="a_link_story" href="https://jackjones.com.tr/cocuk">
            <div class="story">
              <picture>
                <source srcset="https://anatomi.s3.eu-north-1.amazonaws.com/jackjones_story_junior.webp" type="image/webp">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/jackjones_story_junior.webp" alt="">
              </picture>
            </div>
            <span class="category">Çocuk</span>
          </a>
        </li>
      </ul>
    </div>
  `;

  const abcContainer = document.querySelector(
    ".uk-background-secondary.uk-background-cover.uk-cover-container.section-home-slider"
  );
  if (abcContainer) {
    abcContainer.insertAdjacentHTML("beforebegin", aHtml);
  }

  const anatomiHead = document.querySelector("head");
  if (anatomiHead) {
    anatomiHead.insertAdjacentHTML("afterbegin", anatomiStyle);
  }
}

