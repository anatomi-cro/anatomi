const body = document.querySelector('body');
const anaHead = document.querySelector('head');

const anatomi_sticky_kampanya_html = `
<div class="anatomi_saglik_sticky_container">
      <div class="anatomi_saglik_sticky_content">
        <div class="anatomi_saglik_sticky_buttons">
            <a href="/tamamlayici-saglik-sigortasi?blog" class="anatomi_saglik_sticky_button anatomi_saglik_sticky_buttons_dask">
                TSS Teklifi Al
            </a>
            <a href="/ozel-saglik-sigortasi?blog" class="anatomi_saglik_sticky_button anatomi_sticky_buttons_konut">
                Özel Sigortası Teklifi Al
            </a>
        </div>
      </div>
    </div>
`;

const anatomi_kampanya_sticky_style = `
<style>
.anatomi_saglik_sticky_container {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9999;
    width: 100%;
    height: fit-content;
  }
  .anatomi_saglik_sticky_content {
    display: flex;
    flex-direction: column;
  }
  .anatomi_saglik_sticky_buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }
  .anatomi_saglik_sticky_buttons a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    width: 45%;
    border: none;
    border-radius: 5px;
    background-color: #4372f6;
    color: white;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
  }
</style>
`;

if (window.innerWidth < 768) {
    body.insertAdjacentHTML('beforeend', anatomi_sticky_kampanya_html);
    anaHead.insertAdjacentHTML('beforeend', anatomi_kampanya_sticky_style);
}