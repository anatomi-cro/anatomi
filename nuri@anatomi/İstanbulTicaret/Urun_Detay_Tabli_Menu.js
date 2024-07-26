const anatomi_head = document.querySelector("head");
const tabMenuUl = document.getElementById("tabBtn");
tabMenuUl.classList.add("anatomi_dropdown");

const aDropdown = document.querySelector(".anatomi_dropdown");
const aDropdownLi = document.querySelectorAll(".anatomi_dropdown li");


/*------------------------DROPDOWN ARROW BUTTON------------------------*/

var dropdownActiveButton = `<svg class="anatomi-show-text-button" xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.4308 3.36056L13.1007 13.8916C12.4668 14.5379 11.4391 14.5379 10.8052 13.8916L0.475086 3.36056C-0.158819 2.71432 -0.158819 1.66656 0.475086 1.02032C1.10899 0.374084 2.13675 0.374084 2.77066 1.02032L11.953 10.3813L21.1352 1.02032C21.7692 0.374085 22.7969 0.374085 23.4308 1.02032C24.0647 1.66656 24.0647 2.71432 23.4308 3.36056Z" fill="#333333"/>
</svg>`;

var dropdownDeactiveButton = `<svg class="anatomi-show-text-button" xmlns="http://www.w3.org/2000/svg" width="14" height="25" viewBox="0 0 14 25" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.82492 0.978115L13.356 11.3082C14.0022 11.9421 14.0022 12.9699 13.356 13.6038L2.82492 23.9338C2.17868 24.5678 1.13092 24.5678 0.484678 23.9338C-0.161559 23.2999 -0.161559 22.2722 0.484678 21.6383L9.84563 12.456L0.484678 3.27369C-0.161559 2.63978 -0.161559 1.61202 0.484678 0.978115C1.13092 0.344209 2.17868 0.344209 2.82492 0.978115Z" fill="#333333"/>
</svg>`


/*------------------------DROPDOWN YAPISI------------------------*/



const anatomi_dropdown_style = `
<style>
.anatomi_dropdown {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    gap: 20px;
    margin-bottom: 20px;
    width: 80%;
}

.anatomi_dropdown li {
    display: block;
    text-align: left;
    padding: 10px 15px;
    text-decoration: none;
    color: #000;
    font-size: 14px;
    cursor: pointer;
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
    justify-content: space-between !important;
    border-radius: 5px;

}

@media (max-width: 768px) {
    .anatomi_dropdown {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        gap: 20px;
        margin-bottom: 20px;
        width: 100%;
    }
}
</style>
`;

const tabPanel = document.getElementById("tabPanel");
tabPanel.classList.remove("fade");
anatomi_head.insertAdjacentHTML("beforeend", anatomi_dropdown_style);