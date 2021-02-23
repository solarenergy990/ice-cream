function checkParams() {
            var name = $('#name').val();
            var email = $('#email').val();
            var phone = $('#phone').val();
    
            if (name.length != 0 && email.length >= 6 && phone.length >= 10) {
                $('#submit').removeAttr('disabled');
            } else {
                $('#submit').attr('disabled', 'disabled');
            }
        }