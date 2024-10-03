const a_style = `
<style>
  #tabBtn {
    display: flex;
    flex-direction: column;
  }

  #tabPanel {
    display: none;
  }

  .tabPanel .current {
    display: list-item;
  }
</style>

`

const tabBtn = document.getElementById("tabBtn");
const tabPanel = document.getElementById("tabPanel");

tabBtn.addEventListener("click", (event) => {
  const clickedTab = event.target.closest("li");
  console.log('li clickedTab : ' + clickedTab);
  if (!clickedTab) return;

  const tabId = clickedTab.querySelectorAll(".pos-r.btn.mr.double");
  console.log('tabId : ' + tabId);
  const panelToOpen = document.getElementById(tabId);
  console.log('panelToOpen : ' + panelToOpen);

  if (panelToOpen) {
    const currentPanel = tabPanel.querySelector(".current");
    currentPanel.classList.remove("current");
    panelToOpen.classList.add("current");
  }
});


  document.querySelector('head').insertAdjacentHTML('beforeend', a_style)
