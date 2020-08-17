$(function() {
    $("a").click(function(event) {
    if (this.hash!=="") {
        event.preventDefault();
        var gato=this.hash;
        alert('prueba de bloque '+gato);     
        $('html, body').animate({scrollTop: $(gato).offset().top}, 800, function(){
        window.location.hash=gato; 
        alert('prueba de bloque '+gato);
            });
        } // Fin del if    
    })
});

$(function(){
    $('[data-toggle="popover"]').popover({
        trigger:'hover'
    });

});
// Tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });