$(function() {
    
    $('.panel-button').on('click', function(){
        var panelId = $(this).attr('data-questionid');
        $('#'+panelId).toggle();
    });

});

$(document).ready(function(){
    $("#hide").click(function(){
        $("#childrenBlock").hide();
    });
    $("#show").click(function(){
        $("#childrenBlock").show();
    });
});