const blog_display_html = () => {};

const blog_display_css = () => {
  const style = `
      <style id="blog_display_css">    
      #multiblok_1 , #boshtml_3 > div > div > div > div > div.blog-col-start > div:nth-child(6) , #boshtml_3 > div > div > div > div > div.blog-col-start > div:nth-child(8) , #boshtml_3 > div > div > div > div > div.blog-col-start > div:nth-child(9){
        display: none !important;
      }
      </style>
    `;
  const css = document.querySelector("#blog_display_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const blog_display_js = () => {};

const blog_display_init = () => {
  blog_display_html();
  blog_display_css();
  blog_display_js();
};

const blog_display_condition = () => {
  return true;
};

setInterval(() => {
  if (blog_display_condition()) {
    blog_display_init();
  }
}, 50);
