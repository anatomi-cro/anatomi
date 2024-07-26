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

  const filterContainer = document.querySelector(".FilterForm");
  filterContainer.insertAdjacentHTML("afterend", anatomi_category_html);
};

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
    

};

const anatomi_category_init = () => {
    anatomi_category_style();
    anatomi_category_html();
    anatomi_category_script();
};

anatomi_category_init();
