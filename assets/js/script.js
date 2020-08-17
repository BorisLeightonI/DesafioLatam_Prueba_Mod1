$(function() {
    $("a").click(function(event) {
    if (this.hash!=="") {
        event.preventDefault();
        var gato=this.hash
        alert(gato);     
        $('html, body').animate({scrollTop: $(gato).offset().top}, 800, function(){
        window.location.hash=gato; 
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