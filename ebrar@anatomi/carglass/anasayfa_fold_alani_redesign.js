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
      if (window.innerWidth < 768) {
       const num = phoneNumber.textContent.trim();
        window.location.href = `tel:${num.replace(/\s+/g, "")}`;

      }
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
         const mail = mailText.textContent.trim();
       window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${mail}`, '_blank');

      });
    });
  }

  const now = new Date();
  const day = now.getDay(); 
  const hour = now.getHours();

  const isWeekday = day >= 1 && day <= 5;
  const isWorkingHour = hour >= 9 && hour < 18;

  const btnRandevu = document.getElementById("btnRandevu");
  const btnArayalim = document.getElementById("btnArayalim");

  if (!(isWeekday && isWorkingHour)) {
    
    btnRandevu.href = "https://www.carglass.com.tr/randevu/bayi-sec"
    btnRandevu.textContent = "Online Randevu Alın";

    btnArayalim.href = "https://www.carglass.com.tr/randevu/sizi-arayalim"
    btnArayalim.textContent = "Sizi Arayalım";
  }

