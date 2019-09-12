(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            form.classList.add('was-validated');
            let email = $("#validationCustomEmail").val();
            let password = $("#validationCustomPassword").val();
            let firstname = $("#firstName").val();
            let lastname = $("#lastName").val();
            localStorage.setItem('name', `${firstname} ${lastname}`);
            localStorage.setItem('newEmail', email);
            localStorage.setItem('newPassword', password);
          
             window.location.href = 'login.html';
          }
          
          
             event.preventDefault();
             event.stopPropagation();
        }, false);
      });
    }, false);
  })();