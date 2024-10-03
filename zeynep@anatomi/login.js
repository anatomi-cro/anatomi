//login form
const loginForm = document.querySelector('#login form');
//signup form
let signupForm = "";
//login container
const loginContainer = document.querySelector('#login');

//buttons html
const a_html = `
    <div class="a_buttons">
        <button class="a_btn" id="login_button">
            Giriş Yap
        </button>
        <button class="a_btn" id="signup_button">
            Kaydol
        </button>
    </div>
`;

//style
const style = `
<style>
    form.hidden {
        display: none;
    }
</style>
`;

//functions
//  insert function
function addElement(container, type, html) {
    container.insertAdjacentHTML(type, html);
}

addElement(loginContainer, 'afterbegin', a_html);
/* old version
//loginContainer.insertAdjacentHTML('afterbegin', a_html);
*/

//get signup form
fetch("https://sihirlibilet.com/uye-kaydol").then(response => {
    return response.text();
}).then(data => {
    const parser = new DOMParser();
    let HTML = parser.parseFromString(data, "text/html");
    return HTML;
}).then(html => {
    signupForm = html.querySelector('#login form');
    return signupForm;
}).then(signupForm => {
    signupForm.classList.add('hidden');
    loginContainer.appendChild(signupForm)
}).catch(e => console.log(e));

//click takibi
const buttons = [document.querySelector('#login_button'), document.querySelector('#signup_button')]
buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        let clickedId = e.target.id;
        let loginForm = loginContainer.children[1];
        let signUpForm = loginContainer.children[2];
        if (clickedId === "signup_button") {
            loginForm.classList.add("hidden");
            signUpForm.classList.remove('hidden');
        }
        if (clickedId === "login_button") {
            loginForm.classList.remove("hidden");
            signUpForm.classList.add('hidden');
        }
    });
});

addElement(document.querySelector('head'), "beforeend", style);