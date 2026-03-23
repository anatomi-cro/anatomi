const iletisim_formu_chckbox_html = () => {};

const iletisim_formu_chckbox_css = () => {
    const style = `
      <style>    
      </style>
    `;
    document.head.insertAdjacentHTML("beforeend", style);
};

const iletisim_formu_chckbox_js = () => {
    const checkbox = document.querySelector("#aydinlatma-metin-check");
    const submitBtn = document.querySelector("#frmDinamikForm > div.btnAlan > button");

    if (checkbox && submitBtn) {
        submitBtn.disabled = !checkbox.checked;


        checkbox.addEventListener("change", () => {
            submitBtn.disabled = !checkbox.checked;
        });

        submitBtn.addEventListener("click", (e) => {
            if (!checkbox.checked) {
                e.preventDefault(); 
            }
        });
    }
};



const iletisim_formu_chckbox_init = () => {
    iletisim_formu_chckbox_html();
    iletisim_formu_chckbox_css();
    iletisim_formu_chckbox_js();
};

const iletisim_formu_chckbox_condition = () => {
    return true;
};


setInterval(() => {
if (iletisim_formu_chckbox_condition()) {
    iletisim_formu_chckbox_init();
}    
},1000)

