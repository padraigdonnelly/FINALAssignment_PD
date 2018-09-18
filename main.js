$(document).ready(function() {
    $('#submit').click(function() {
        $('#form').attr('action',
                       'mailto:padraig.donnelly8@gmail.com' +
                       $('#name').val() + '&body=' + $('#email').val());
        $('#form').submit();
    });
});
