// external js: isotope.pkgd.js


$( function() {

  var $container = $('.packery').packery();

  $container.on( 'click', '.element-item-quote', function( event ) {
     // change size of item by toggling gigante class
    $( this ).toggleClass('gigante');
    $container.packery( 'fit', event.currentTarget, 0, 0 );
  });

  $container.on( 'click', '.element-item-box', function( event ) {
    $( this ).toggleClass('gigante');
    $container.packery( 'fit', event.currentTarget, 0, 0 );
  });

});




// //$( document ).ready( function() {

//   var $container = $('.packery').packery({
//   itemSelector: '.element-item'

//   });

//  $container.on( 'click', '.element-item-quote', function() {
//     // change size of item by toggling gigante class
//     $( this ).toggleClass('gigante');
//     $container.packery( 'fit', event.currentTarget, 0, 0 );
//   });
  
//     $container.on( 'click', '.element-item-box', function() {
//     // change size of item by toggling gigante class
//     $( this ).toggleClass('gigante');
//     $container.packery( 'fit', event.currentTarget, 1, 1 );
//   });

// });//

