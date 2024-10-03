var emailInput = document.getElementById("email");

emailInput.addEventListener("input", autoCompleteEmailDomain);
emailInput.addEventListener("keydown", clearAutoComplete);

function autoCompleteEmailDomain() {
  var emailValue = emailInput.value.toLowerCase();

  if (emailValue.includes("@")) {
    var atIndex = emailValue.indexOf("@");
    var domain = emailValue.substring(atIndex + 1);

    if (domain.startsWith("gm")) {
      emailInput.value = emailValue.substring(0, atIndex + 1) + "gmail.com";
      emailInput.setSelectionRange(atIndex + 1, atIndex + 1); // Seçim aralığını ayarla
    } else if (domain.startsWith("hot")) {
      emailInput.value = emailValue.substring(0, atIndex + 1) + "hotmail.com";
      emailInput.setSelectionRange(atIndex + 1, atIndex + 1); // Seçim aralığını ayarla
    }
  }
  emailInput.dispatchEvent(new Event('input', { bubbles: true }));
}

function clearAutoComplete(event) {
  if (event.key === "Backspace" || event.key === "Delete") {
    var emailValue = emailInput.value.toLowerCase();
    if (emailValue.endsWith("gmail.com")) {
      var atIndex = emailValue.indexOf("@");
      if (atIndex >= 0) {
        emailInput.value = emailValue.substring(0, atIndex + 1);
        emailInput.setSelectionRange(atIndex + 1, atIndex + 1); // Seçim aralığını ayarla
      }
    } else if (emailValue.endsWith("hotmail.com")) {
      var atIndex = emailValue.indexOf("@");
      if (atIndex >= 0) {
        emailInput.value = emailValue.substring(0, atIndex + 1);
        emailInput.setSelectionRange(atIndex + 1, atIndex + 1); // Seçim aralığını ayarla
      }
    }
  }
}





















// input parcalama

var parentElement = document.querySelector(".customer-form.inner");

// Parent elementin bütün çocuklarını seçin
var childElements = parentElement.children;

// Her çocuk elementine "a_element" sınıfını ekleyin
for (var i = 0; i < childElements.length; i++) {
  childElements[i].classList.add("a_element");
}

var parentElement = document.querySelector(".customer-form.inner");

// Parent elementin bütün çocuklarını seçin
var childElements = parentElement.children;

// Her çocuk elementine "a_element" sınıfını ekleyin
for (var i = 0; i < childElements.length; i++) {
  childElements[i].classList.add("a_element");

  // İlk iki çocuğun dışındaki çocuklara "display: none" ekleyin
  if (i >= 2) {
    childElements[i].style.display = "none";
  }
}


// devam butonu yarat

var devamButton = document.createElement("button");
devamButton.classList.add("a_button");
devamButton.innerHTML = "Devam";
parentElement.insertAdjacentElement('afterend', devamButton)



var currentStep = 1; // İlk adımda başlıyoruz
var stepSize = 2; // Her adımda kaç elementin gösterileceğini belirliyoruz

// Devam butonunu bulun
var devamButton = document.querySelector(".a_button");

// Devam butonuna tıklanınca çalışacak işlevi tanımlayın
devamButton.addEventListener("click", function () {
  var elements = document.querySelectorAll(".a_element");

  // Önceki adımda gösterilen elementleri gizle
  for (var i = (currentStep - 1) * stepSize; i < currentStep * stepSize; i++) {
    elements[i].style.display = "none";
  }

  currentStep++; // Bir sonraki adıma geç

  // Bir sonraki adımda gösterilmesi gereken elementleri göster
  for (var i = (currentStep - 1) * stepSize; i < currentStep * stepSize; i++) {
    if (i < elements.length) {
      elements[i].style.display = "block";
    }
  }

  // Tüm elementler doldurulduğunda Devam butonunu gizle
  if (currentStep * stepSize >= elements.length) {
    devamButton.style.display = "none";
  }
});



// ---------







var currentStep = 1; // İlk adımda başlıyoruz

function goToNextInputs() {
  var inputsToShow = document.querySelectorAll('.a_element');

  // İlk 2 inputları göster ve diğerlerini gizle
  for (var i = 0; i < inputsToShow.length; i++) {
    if (i < currentStep * 2) {
      inputsToShow[i].style.display = 'block';
    } else {
      inputsToShow[i].style.display = 'none';
    }
  }

  currentStep++; // Bir sonraki adıma geç

  // Tüm inputlar doldurulduğunda işlemi bitir
  if (currentStep * 2 > inputsToShow.length) {
    document.getElementById('devamButton').style.display = 'none';
  }
}