const a_style_new = `
  <style>

.a_anatomi_overlay{
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999999;
}

.a_container_form {
    position: fixed !important;
    bottom: 35% !important;
    left: 0 !important;
    width: 100% !important;
    background: #ffffff !important;
    z-index: 99999 !important;
    border-radius: 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4) !important;
    z-index: 999999999999 !important;
    padding: 0 !important;

}
.a_container_form .tab-1.tab-content{
    display: block !important;
}

.a_container_form .tab-2.tab-content{
    display: none !important;
}

</style>
`



fetch('https://www.sigortaladim.com/')
  .then(response => {
    return response.text();
}).then(data => {
    const parser = new DOMParser();
    let HTML = parser.parseFromString(data, "text/html");
    return HTML;
}).then(html => {
    const anasayfa_form = html.querySelector('.form-tabs');
    const blog_etiketi = document.querySelector('.blog');
    blog_etiketi.appendChild(anasayfa_form);


    const a_overlay = document.createElement('div');
a_overlay.classList.add('a_anatomi_overlay');
document.body.appendChild(a_overlay);

const blog_form = document.querySelector('.form-tabs')
blog_form.classList.add('a_container_form');

const tab1 = document.querySelector('.a_container_form .tab-1.tab-content');
const tab2 = document.querySelector('.a_container_form .tab-2.tab-content');

let activeTab = 1; // Varsayılan olarak Tab 1 etkin

tab1.addEventListener('click', function(){
  if (activeTab !== 1) {
    tab1.style.display = "block";
    tab2.style.display = "none";
    activeTab = 1;
  }
});

tab2.addEventListener('click', function(){
  if (activeTab !== 2) {
    tab2.style.display = "block";
    tab1.style.display = "none";
    activeTab = 2;
  }
});




document.addEventListener('click', function(event) {
    var container = document.querySelector('.a_container_form');
    if (!container.contains(event.target) && !event.target.classList.contains('a_container_form')) {
      container.style.display = 'none';
      a_overlay.style.display = 'none';
      a_overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
  });


}).catch(e => console.log(e));



     

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style_new);