const blogTitle = document.querySelectorAll('#Blog\\ \\|\\ İstanbul\\ Ticaret .pageTitle h3');
const blogLink = document.querySelectorAll("#Blog\\ \\|\\ İstanbul\\ Ticaret .box .row a");

blogTitle.forEach((title, idx) => {
    title.addEventListener('click', () => {
        window.location = blogLink[idx].href;
        title.style.cursor = "pointer";
    });
});