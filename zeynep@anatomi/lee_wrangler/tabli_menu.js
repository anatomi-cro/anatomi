<<<<<<< HEAD

const formElement = document.querySelector('#register-form');

let data = fetch('https://www.wrangler.com.tr/login')
.then(response => response.json())
.then(veri => {
  console.log(veri); 
  let veriler = JSON.stringify(veri);
  console.log(veriler);
})








const formElement = document.querySelector('#register-form');

const formData = new FormData(formElement);
fetch('https://www.wrangler.com.tr/login', {
  method: 'GET',
  body: localStorage.setItem("key", JSON.stringify(formData)),
  headers: { "Content-Type": "application/json" }
 
})
.then(response => {
  if(response.ok)
      return response.json();
  else 
      throw new Error("Request failed");
})
.then(data => {
  console.log(data);
  // do something with the data
})
.catch(error => {
  console.log(error);
});


// -------------
// const formElement = document.querySelector('#register-form');

// const formData = new FormData(formElement);
// const params = new URLSearchParams(location.search);
// const url = new URL("https://www.wrangler.com.tr/login");
// url.search = params.toString();

// window.location.href = url;


// --------------



fetch('https://www.wrangler.com.tr/login', {
    method: 'GET'
  })
//   .then(response => response.json())
.then(response => response.text())
.then(str => (new window.DOMParser()).parseFromString(str, "text/html"))
  .then(data => {
    console.log(data);

  })
  .catch(error => console.log(error));







// const formData = new FormData(formElement);
// const url = new URL('https://www.wrangler.com.tr/login');
// for (let pair of formData.entries()) {
//     url.searchParams.append(pair[0], pair[1]);
// }
// fetch(url, {
//   method: 'GET'
// })
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log(error));


// const divContent = document.querySelector('#register-form').innerHTML;

// fetch("https://www.wrangler.com.tr/login", {
//   method: "GET",
//   body: JSON.stringify({divContent}),
//   headers: { "Content-Type": "application/json" }
// })


=======
fetch('https://jackjones.com.tr/sezon-sonu-indirim?sort=p.price&order=DESC%27')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })
    .then(function(html) {
        // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        console.log(doc);
        const productListItems = doc.querySelectorAll('.scroll-product-item.item ');
        let products = [];
productListItems.forEach((item, index) =>{
    if(index <= 10){
        products.push(item)
    }

})
        return products
    })
    .then(function(zey){
        console.log(zey)
    })
    .catch(function(err) {
        console.log('Failed to fetch page: ', err);
    });
>>>>>>> 498cbb0 (anatomi-task)
