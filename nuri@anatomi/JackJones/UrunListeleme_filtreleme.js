const anatomi_category_style = () => {
  const anatomi_category_style = `
        <style>
      .anatomi_category_container {
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 0px 0px 0px !important;
    overflow-y: hidden;
    padding: 0 !important;
      }
      .anatomi_category_container::-webkit-scrollbar{
        display: none;
      }
      .anatomi_category_list{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
      }
      .anatomi_category_list ul{
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
      }
      .anatomi_category_item {
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-radius: 5px;
        transition: 0.3s;
        border: 1px solid #D9D9D9;
      }
        .anatomi_category_item a{
        color: #000;
          margin: 0px !important;
          white-space: nowrap;
        }
    </style>
    `;

  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", anatomi_category_style);
};

const anatomi_category_html = () => {
  const anatomi_category_html = `
      <div class="anatomi_category_container">
      <div class="anatomi_category_content">
        <div class="anatomi_category_list">
          <ul>

          </ul>
        </div>
      </div>
    </div>
  `;

  const main = document.querySelector(".uk-first-column");
  main.insertAdjacentHTML("afterend", anatomi_category_html);
};

const anatomi_category_script = () => {

    const turkishToEnglish = (str) => {
        const turkishMap = {
          'ç': 'c',
          'ğ': 'g',
          'ı': 'i',
          'ö': 'o',
          'ş': 's',
          'ü': 'u',
          'Ç': 'C',
          'Ğ': 'G',
          'İ': 'I',
          'Ö': 'O',
          'Ş': 'S',
          'Ü': 'U'
        };
        return str.replace(/[çğışöüÇĞİŞÖÜ]/g, function(ch) {
          return turkishMap[ch] || ch;
        });
      };

    const menuItems = document.querySelectorAll('.uk-background-default .uk-nav.uk-nav-default .uk-parent');
    

    menuItems.forEach((item) => {
        const menuItemA = item.querySelector('a');
        const engText = turkishToEnglish(menuItemA.textContent.trim().replace(/\//g, '-').replace(/ /g,"").toLowerCase());
        const check = document.querySelector('.uk-first-column h1');
      if(window.location.href === "https://jackjones.com.tr/erkek-tisort"){
        console.log(menuItemA.textContent.trim().toLowerCase());
        if(menuItemA.textContent.toLowerCase() === "ti̇şört"){
            console.log(menuItemA.textContent.trim());
            const subMenu = item.querySelectorAll('.uk-nav-sub li a');
            subMenu && subMenu.forEach((subItem) => {
              const anatomi_category_list = document.querySelector('.anatomi_category_list ul');
                const anatomi_category_item = document.createElement('li');
                anatomi_category_item.classList.add('anatomi_category_item');
                anatomi_category_item.insertAdjacentElement('beforeend', subItem.cloneNode(true));
                anatomi_category_list.insertAdjacentElement('beforeend', anatomi_category_item);
                if(subItem.textContent === "Tümünü Gör"){
                    anatomi_category_list.prepend(anatomi_category_item);
                    subItem.style.color = "#002689";
                }
            })
        }
      }

      if(check.textContent.toLowerCase().includes(menuItemA.textContent.trim().replace(/\//g, '&').toLowerCase())){
        const subMenu = item.querySelectorAll('.uk-nav-sub li a');
        subMenu && subMenu.forEach((subItem) => {
          const anatomi_category_list = document.querySelector('.anatomi_category_list ul');
            const anatomi_category_item = document.createElement('li');
            anatomi_category_item.classList.add('anatomi_category_item');
            anatomi_category_item.insertAdjacentElement('beforeend', subItem.cloneNode(true));
            anatomi_category_list.insertAdjacentElement('beforeend', anatomi_category_item);
            if(subItem.textContent === "Tümünü Gör"){
                anatomi_category_list.prepend(anatomi_category_item);
                subItem.style.color = "#002689";
            }
        })
      }
    })

    const parentElement = document.querySelector('.anatomi_category_container');
    parentElement.parentElement.style.flexDirection = "column";
};

const anatomi_category_init = () => {
    anatomi_category_style();
    anatomi_category_html();
    anatomi_category_script();
};

anatomi_category_init();
