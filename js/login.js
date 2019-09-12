(function() {
    'use strict';
    window.addEventListener('load', function() {
      localStorage.setItem('email', 'a@a.com');
      localStorage.setItem('password', 'bytmig123');
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
              if (email == localStorage.getItem('email') && password == localStorage.getItem('password') || email == localStorage.getItem('newEmail') && password == localStorage.getItem('newPassword') ) {
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