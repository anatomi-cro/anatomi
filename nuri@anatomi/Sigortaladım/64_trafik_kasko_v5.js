const body = document.querySelector('body');
const anaHead = document.querySelector('head');

const anatomi_sticky_kampanya_html = `
<div class="anatomi_kampanya_sticky_container">
      <div class="anatomi_kampanya_sticky_content">
        <div class="anatomi_kampanya_sticky_buttons">
            <a href="/trafik-sigortasi" class="anatomi_kampanya__sticky_buttons_trafik anatomi_kampanya__sticky_buttons_kasko_trafik">
                Trafik Teklifi Al
            </a>
            <a href="/kasko-sigortasi" class="anatomi_kampanya__sticky_buttons_kasko anatomi_kampanya__sticky_buttons_kasko_trafik">
                Kasko Teklifi Al
            </a>
        </div>
      </div>
    </div>
`;

const anatomi_kampanya_sticky_style = `
<style>
.anatomi_kampanya_sticky_container {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9999;
    width: 100%;
    height: fit-content;
  }
  .anatomi_kampanya_sticky_content {
    display: flex;
    flex-direction: column;
  }
  .anatomi_kampanya_sticky_buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }
  .anatomi_kampanya_sticky_buttons a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    width: 40%;
    border: none;
    border-radius: 5px;
    background-color: #4372f6;
    color: white;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
  }
</style>
`;

if (window.innerWidth < 768) {
    body.insertAdjacentHTML('beforeend', anatomi_sticky_kampanya_html);
    anaHead.insertAdjacentHTML('beforeend', anatomi_kampanya_sticky_style);
}