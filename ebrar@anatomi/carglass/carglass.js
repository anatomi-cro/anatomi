const add_form_in_anasayfa = () => {
  const buttons = document.querySelectorAll(".anatomi_form_tab_btn");

  buttons[1].classList.add("active");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });


  const anasayfa_submit_button = document.querySelector("#submitButton");
  if(anasayfa_submit_button){
    anasayfa_submit_button.textContent = "Sizi Arayalım";
  }

  setInterval(() => {
    const yurtdisiCheckbox = document.getElementById(
      "anatomi_kisisel_veri_yurtdisi_checkbox"
    );
    const korunmasiCheckbox = document.getElementById(
      "anatomi_kisisel_veri_korunması_checkbox"
    );
    const islenmesiCheckbox = document.getElementById(
      "anatomi_kisisel_veri_islenmesi_checkbox"
    );
    const anasayfa_orijinal_name_input = document.querySelector(
      "#frmSiziArayalim > p:nth-child(2) > input"
    );
    const anasayfa_orijinal_phone_input = document.querySelector(
      "#frmSiziArayalim > p:nth-child(3) > input"
    );

    const allCheckboxesChecked =
      yurtdisiCheckbox.checked &&
      korunmasiCheckbox.checked &&
      islenmesiCheckbox.checked;

    if (
      anasayfa_submit_button &&
      anasayfa_orijinal_name_input &&
      anasayfa_orijinal_phone_input
    ) {
      if (
        anasayfa_orijinal_name_input.value &&
        anasayfa_orijinal_phone_input.value &&
        allCheckboxesChecked
      ) {
        anasayfa_submit_button.disabled = false;
      } else {
        anasayfa_submit_button.disabled = true;
      }
    }

    if (anasayfa_submit_button) {
      if (anasayfa_submit_button.disabled) {
        anasayfa_submit_button.style.backgroundColor = "gray";
        anasayfa_submit_button.style.color = "white";
      } else {
        anasayfa_submit_button.style.backgroundColor = "#FEDD44";
        anasayfa_submit_button.style.color = "black";
      }
    }
  }, 100);

 

  const randevuAlinButton = document.querySelector(".anatomi_randevuAlın");
  const siziArayalimButton = document.querySelector(".anatomi_siziArayalım");

  const anasayfa_orijinal_homeCallArea = document.querySelector(
    ".homeCallArea"
  );

  const anatomi_randevuAlın_form = document.querySelector(
    ".anatomi_randevu_form"
  );

  if (anasayfa_orijinal_homeCallArea && anatomi_randevuAlın_form) {
    const toggleFormVisibility = (buttonClicked) => {
      if (buttonClicked === "siziArayalim") {
        anasayfa_orijinal_homeCallArea.style.display = "block";
        anasayfa_orijinal_homeCallArea.style.visibility = "visible";

        anatomi_randevuAlın_form.style.display = "none";
        anatomi_randevuAlın_form.style.visibility = "hidden";
      } else if (buttonClicked === "randevuAlin") {
        anatomi_randevuAlın_form.style.display = "block";
        anatomi_randevuAlın_form.style.visibility = "visible";

        anasayfa_orijinal_homeCallArea.style.display = "none";
        anasayfa_orijinal_homeCallArea.style.visibility = "hidden";
      }
    };

    window.onload = () => {
      toggleFormVisibility("siziArayalim");
    };

    siziArayalimButton.addEventListener("click", () => {
      toggleFormVisibility("siziArayalim");
    });

    randevuAlinButton.addEventListener("click", () => {
      toggleFormVisibility("randevuAlin");
    });
  }

 
  const phoneInputs = document.querySelectorAll(".phone_req");

  phoneInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      if (input.value === "") {
        input.value = "0";
      }
    });
  
    input.addEventListener("input", (e) => {
      let value = e.target.value;

      value = value.replace(/[^0-9]/g, "");

      if (!value.startsWith("0")) {
        value = "0" + value;
      }
  
      if (value.length > 11) {
        value = value.slice(0, 11);
      }
  
      if (value.length > 6) {
        value = value.replace(
          /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
          "$1 ($2) $3 $4 $5"
        );
      }
  
      e.target.value = value;
    });
  
    input.addEventListener("blur", () => {
      if (input.value === "0") {
        input.value = "";
      }
    });
  });
  

  const nameSurnameInput = document.getElementById("anatomi_nameSurname");
  nameSurnameInput.addEventListener("input", (e) => {
   nameSurnameInput.value = nameSurnameInput.value.replace(
     /[^A-Za-zğüşöçıİĞÜŞÖÇ\s]/g,
     ""
   );
  });

  const nameSurnameInputSiziArayalim = document.querySelector(".name_req")
  nameSurnameInputSiziArayalim.addEventListener("input", (e) => {
    nameSurnameInputSiziArayalim.value = nameSurnameInputSiziArayalim.value.replace(
      /[^A-Za-zğüşöçıİĞÜŞÖÇ\s]/g,
      ""
    );
    });
  };
add_form_in_anasayfa();

const add_modal_in_form = () => {
  const modal = document.getElementById("anatomi_modal");
  const modalCheckbox = document.getElementById("anatomi_modal_checkbox");
  const mainCheckbox = document.getElementById(
    "anatomi_kisisel_veri_islenmesi_checkbox"
  );
  const closeButton = document.querySelector(".anatomi_modal-close");

  mainCheckbox.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    mainCheckbox.checked = false;
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  modalCheckbox.addEventListener("change", () => {
    if (modalCheckbox.checked) {
      mainCheckbox.checked = true;
      mainCheckbox.disabled = false;
      modal.style.display = "none";
    } else {
      mainCheckbox.checked = false;
      mainCheckbox.disabled = false;
    }
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    mainCheckbox.checked = false;
    mainCheckbox.disabled = false;
  });

  const modal2 = document.getElementById("anatomi_modal_second");
  const modalCheckbox2 = document.getElementById(
    "anatomi_modal_checkbox_second"
  );
  const mainCheckbox2 = document.getElementById(
    "anatomi_kisisel_veri_korunması_checkbox"
  );
  const closeButton2 = document.querySelector(".anatomi_modal-close_second");

  mainCheckbox2.addEventListener("click", (e) => {
    e.preventDefault();
    modal2.style.display = "flex";
    mainCheckbox2.checked = false;
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal2) {
      modal2.style.display = "none";
    }
  });

  modalCheckbox2.addEventListener("change", () => {
    if (modalCheckbox2.checked) {
      mainCheckbox2.checked = true;
      mainCheckbox2.disabled = false;
      modal2.style.display = "none";
    } else {
      mainCheckbox2.checked = false;
      mainCheckbox2.disabled = false;
    }
  });

  closeButton2.addEventListener("click", () => {
    modal2.style.display = "none";
    mainCheckbox2.checked = false;
    mainCheckbox2.disabled = false;
  });

  const modal3 = document.getElementById("anatomi_modal_third");
  const modalCheckbox3 = document.getElementById(
    "anatomi_modal_checkbox_third"
  );
  const mainCheckbox3 = document.getElementById(
    "anatomi_kisisel_veri_yurtdisi_checkbox"
  );
  const closeButton3 = document.querySelector(".anatomi_modal-close_third");

  mainCheckbox3.addEventListener("click", (e) => {
    e.preventDefault();
    modal3.style.display = "flex";
    mainCheckbox3.checked = false;
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal3) {
      modal3.style.display = "none";
    }
  });

  modalCheckbox3.addEventListener("change", () => {
    if (modalCheckbox3.checked) {
      mainCheckbox3.checked = true;
      mainCheckbox3.disabled = false;
      modal3.style.display = "none";
    } else {
      mainCheckbox3.checked = false;
      mainCheckbox3.disabled = false;
    }
  });

  closeButton3.addEventListener("click", () => {
    modal3.style.display = "none";
    mainCheckbox3.checked = false;
    mainCheckbox3.disabled = false;
  });
};

const showPopup = () => {
  const popup = document.getElementById("anatomi_map_popup_phone_copy");
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 500);
};

const copyPhoneNumberMap = (phoneNumber) => {
  navigator.clipboard
    .writeText(phoneNumber)
    .then(() => {
      showPopup();
    })
    .catch((err) => {
      console.error("Kopyalama başarısız:", err);
    });
};

document.getElementById("phone1").addEventListener("click", () => {
  copyPhoneNumberMap(document.getElementById("phone1").textContent);
});

document.getElementById("phone2").addEventListener("click", () => {
  copyPhoneNumberMap(document.getElementById("phone2").textContent);
});

add_modal_in_form();

const copyPhoneNumber = () => {
  document
    .querySelectorAll(".anatomi_form_phone_container .anatomi_form_phone_btn")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const phoneNumber = button.textContent.trim();

        navigator.clipboard
          .writeText(phoneNumber)
          .then(() => {
            button.classList.add("copied");
            setTimeout(() => {
              button.classList.remove("copied");
            }, 400);
          })
          .catch((err) => {
            console.error("Kopyalama başarısız:", err);
          });
      });
    });

 
  const phoneNumber = document.querySelector("#anatomi_phoneNumber");
  const mailText = document.querySelector("#anatomi_mailText");
  const copyMessage = document.querySelector("#copyMessage");
  if (phoneNumber && copyMessage) {
    phoneNumber.addEventListener("click", () => {
      navigator.clipboard.writeText(phoneNumber.textContent).then(() => {
        copyMessage.style.display = "inline-block";

        setTimeout(() => {
          copyMessage.style.display = "none";
        }, 1000);
      });
    });
  }
  const copyMessage2 = document.querySelector("#copyMessage2");
  if (mailText && copyMessage2) {
    mailText.addEventListener("click", () => {
      navigator.clipboard.writeText(mailText.textContent).then(() => {
        copyMessage2.style.display = "inline-block";

        setTimeout(() => {
          copyMessage2.style.display = "none";
        }, 2000);
      });
    });
  }
};

copyPhoneNumber();

const add_hamburger_icon = () => {
  const hamburgerIcon = document.getElementById("anatomi_hamburger_icon");
  const sidebar = document.getElementById("anatomi_sidebar");
  const closeBtn = document.getElementById("anatomi_closebutton");

  hamburgerIcon.addEventListener("click", () => {
    sidebar.style.right = "0";
  });

  closeBtn.addEventListener("click", () => {
    sidebar.style.right = "-300px";
  });

  document.addEventListener("click", (event) => {
    if (
      !sidebar.contains(event.target) &&
      !hamburgerIcon.contains(event.target)
    ) {
      sidebar.style.right = "-300px";
    }
  });
};

add_hamburger_icon();


const generate_hamburger_menu = () => {
  document.querySelectorAll(".anatomi_dropdown-trigger").forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      const dropdown = this.querySelector(".anatomi_dropdown");

      if (dropdown) {
        if (dropdown.style.display === "block") {
          dropdown.style.display = "none";
        } else {
          dropdown.style.display = "block";
        }
      }
    });
  });

  document
    .querySelectorAll(".anatomi_nested-dropdown-trigger")
    .forEach((trigger) => {
      trigger.addEventListener("click", function (e) {
        e.stopPropagation();
        const nestedDropdown = this.querySelector(".anatomi_dropdown");

        if (nestedDropdown) {
          if (nestedDropdown.style.display === "block") {
            nestedDropdown.style.display = "none";
          } else {
            nestedDropdown.style.display = "block";
          }
        }
      });
    });

  document.addEventListener("click", () => {
    document.querySelectorAll(".anatomi_dropdown").forEach((menu) => {
      menu.style.display = "none";
    });
  });
};

generate_hamburger_menu();
const mobileBreakpoint = 768;
let currentIndex = 0;
const products = document.querySelectorAll(
  ".anatomi_our_services_content_info"
);

function updateVisibleProducts() {
  const productCount = window.innerWidth <= mobileBreakpoint ? 1 : 3;
  const visibleProducts = Array.from(products).slice(
    currentIndex,
    currentIndex + productCount
  );

  products.forEach((product) => {
    product.style.display = "none";
  });

  visibleProducts.forEach((product) => {
    product.style.display = "flex";
  });

  currentIndex += productCount;
  if (currentIndex >= products.length) {
    currentIndex = 0;
  }
}

updateVisibleProducts();
window.addEventListener("resize", updateVisibleProducts);

setInterval(updateVisibleProducts, 5000);

const addExternalScriptElfsight = () => {
  const script = document.createElement("script");
  script.src = "https://static.elfsight.com/platform/platform.js";
  script.async = true;
  document.body.appendChild(script);
};

addExternalScriptElfsight();
const show_email = () => {
  const span = document.querySelector(".anatomi_show_email");
  const text_1 = "kisiselverilerim@carglass.com.tr";
  const text_2 = "(E-Postayı görmek için tıklayın.)";

  span &&
    span.addEventListener("click", () => {
      span.textContent = text_1;
    });
};

show_email();
 const phoneNumberFooter = document.querySelector(
   ".anatomi_footer-links li i.fa-phone-volume"
 );
 const mailTextFooter = document.querySelector(
   ".anatomi_footer-links li i.fa-envelope"
 );
 const copyMessage = document.querySelector("#copyMessage_f");
 const copyMessage2 = document.querySelector("#copyMessage2_f");

 if (phoneNumberFooter) {
   phoneNumberFooter.parentElement.style.cursor = "pointer";
   phoneNumberFooter.parentElement.addEventListener("click", () => {
     if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
       window.location.href = `tel:${phoneNumberFooter.parentElement.textContent.trim()}`;
     } else {
       navigator.clipboard
         .writeText(phoneNumberFooter.parentElement.textContent.trim())
         .then(() => {
           copyMessage.style.display = "inline-block";
           setTimeout(() => {
             copyMessage.style.display = "none";
           }, 1000);
         });
     }
   });
 }

 if (mailTextFooter) {
   mailTextFooter.parentElement.style.cursor = "pointer";
   mailTextFooter.parentElement.addEventListener("click", () => {
     const email = mailTextFooter.parentElement.textContent.trim();
     const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}`;

     window.open(gmailUrl, "_blank");

     navigator.clipboard.writeText(email).then(() => {
       copyMessage2.style.display = "inline-block";
       setTimeout(() => {
         copyMessage2.style.display = "none";
       }, 2000);
     });
   });
 }

 set_local_storage_RandevuAlın = () => {
  const randevuAlınform = document.querySelector(".anatomi_form_randevu_btn");
 
 
  randevuAlınform.addEventListener("click", (e) => {
    e.preventDefault();
    const nameSurname = document.querySelector("#anatomi_nameSurname").value;
    const phone = document.querySelector("#anatomi_phone").value;
 
 
    const inputArray = [nameSurname, phone];
 
 
    localStorage.setItem("inputArray", JSON.stringify(inputArray));
 
 
    document.querySelector("#anatomi_nameSurname").value = "";
    document.querySelector("#anatomi_phone").value = "";
  });
  const button = document.querySelector(".anatomi_form_randevu_btn");
  const input_1 = document.getElementById("anatomi_nameSurname");
  const input_2 = document.getElementById("anatomi_phone");
  setInterval(() => {
    if (button && input_1 && input_2) {
      if (input_1.value && input_2.value) {
        button.disabled = false;
      } else if (!input_1.value || !input_2.value) {
        button.disabled = true;
      }
    }
    if (button) {
      if (button.disabled) {
        button.style.backgroundColor = "gray";
        button.style.color = "white";
      } else {
        button.style.backgroundColor = "#FEDD44";
        button.style.color = "black";
      }
    }
  }, 100);
 };
 
 
 set_local_storage_RandevuAlın();
 
 
