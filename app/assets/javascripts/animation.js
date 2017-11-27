
$(document).ready(function(){

    $('#button1').click(function(){
        $('#cont1').fadeToggle();
        $('#cont2').hide();
        $('#cont3').hide();
    });
    $('#button2').click(function(){
        $('#cont1').hide();
        $('#cont2').fadeToggle();
        $('#cont3').hide();
    });
    $('#button3').click(function(){
        $('#cont1').hide();
        $('#cont2').hide();
        $('#cont3').fadeToggle();
    });
});