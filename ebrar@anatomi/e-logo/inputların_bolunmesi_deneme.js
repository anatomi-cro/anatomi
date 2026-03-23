const deneme_html = () => {
    const html = `
    `;
  }
  const deneme_css =() => {
    const style = `
      <style>
    </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  }
  const deneme_js = () => {
    
  }
  const deneme_init = () => {
    deneme_html();
    deneme_css();
    deneme_js();
  }
  const deneme_condition = () => {

  }
  if(deneme_condition()){
    deneme_init();
  }