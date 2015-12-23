// external js: isotope.pkgd.js

$( document ).ready( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'packery',
    getSortData: {
      name: '.name',
      gender: '.gender',
      town: '.town',
      age: '.age parseInt',
      category: '[data-category]',
      
    }
  });


  $container.on( 'click', '.element-item-quote', function() {
    // change size of item by toggling gigante class
    $( this ).toggleClass('gigante');
    $container.isotope('layout');
  });
  
    $container.on( 'click', '.element-item-box', function() {
    // change size of item by toggling gigante class
    $( this ).toggleClass('gigante');
    $container.isotope('layout');
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var age = $(this).find('.age').text();
      return parseInt( age, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.county').text();
      return name.match( /Essex$/ );
    }
  };


  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  
});