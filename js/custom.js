(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            console.log('validering misslyckades')
            event.preventDefault();
            event.stopPropagation();
          }
          else {
            form.classList.add('was-validated');
            let email = $("#validationTooltipEmail").val();
            let password = $("#validationTooltipPassword").val();
              if (email == "a@a.com" && password == "bytmig123") {
                window.location.href = 'profile.html';
              }
            console.log(email);
            event.preventDefault();
            event.stopPropagation();
          }
          
          
        }, false);
      });
    }, false);
  })();
  

 /*  function login() {
    var email = document.getElementById("validationTooltipEmail").value;
    var password = document.getElementById("validationTooltipPassword").value;

    if ( email == "a@a.com" && password == "bytmig123"){
      
      window.location = "../index.html"; // Redirecting to other page.
      return false;
      }
      else {
       
      }
  }
  */