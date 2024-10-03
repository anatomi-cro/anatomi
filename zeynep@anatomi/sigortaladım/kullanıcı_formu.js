document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document.querySelector('.btn-solid.a_btn').click();
    }
  });


  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      dataLayer.push({
        'event': 'formButtonClicked'
      });
      document.querySelector('.btn-solid.a_btn').click();    }
  });




  