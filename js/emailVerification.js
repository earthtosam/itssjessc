$(document).ready(function () {
    $('#submit-btn').click(function (event) {
        $.ajax({
            dataType: 'JSON',
            url: 'emailForm.php', //PHP Mail Code Page location
            type: 'POST', //Form Method
            data: $('#contact').serialize(), //Form ID
            beforeSend: function () {
                $('.txt').html('SENDING...');
            },
            complete: function () {
                $('.txt').html('SEND MESSAGE');
            },
            success: function () {
                $('.alert-success').show();
            },
            error: function () {
                $('.alert-danger').show();
            }
        });
    });
});