$(document).ready(function() {

    $('#remplir').on('click', function() {
      $('.forme').addClass('fond');
    });
    $('#vider').on('click', function() {
      $('.forme').removeClass('fond');
    });

/* change la classe aux ronds avec une boucle
$('.rond').on('click', function (){
if ($(this).hasClass('fond')) {
  $(this).removeClass('fond');
}
else
{
  $(this).addClass('fond');
}

})
*/

// Change la classe aux ronds


$('.rond').click(function(){
  $(this).toggleClass('fond');
});



// Au clic sur le carré, applique la classe fond à toute sa ligne en allant selectionner son parent, puis les enfants de ce parent
$ ('.carre').click(function(){
  $(this).parent().children().toggleClass('fond');

})

// Au clic sur le losange , applique la classe fond à toute sa ligne et rangée
$('.transformation').click(function(){
  $(this).toggleClass('fond');
  $(this).parent().children().toggleClass('fond');
  $('main div div:nth-child(3)').toggleClass('fond');

})

})
