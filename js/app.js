$(document).ready(function() {

  var endRange;

  function fizzBuzz(num) {
    var output = '';

    if ( (num % 3) === 0 ) {
      output += 'Fizz';
    }
    if ( (num % 5) === 0 ) {
      output += 'Buzz';
    }
    return ( output || num );

  }

  // Get the endRange input and call fizzBuzz
  $( 'button' ).click( function() {
    endRange = 0;
    var input = document.getElementById("number");
    var num = input.value;
    if  ( ( +num % 1 !== 0 ) || ( num[0] === '0' ) ) {
      alert('Please enter an integer greater than 0!');
    } else {
      endRange = parseInt(num, 10);

      if ( ( isNaN(endRange) ) || ( endRange <= 0 ) ) {
        alert('Please enter an integer greater than 0!');
      }
    }
    input.value = '';

    $( '#fizzbuzz-result' ).empty();
    for (var i = 1; i <= endRange; i++) {
      $( '#fizzbuzz-result' ).append('<p style="color:blue; font-weight:bold; font-size:18px">' + fizzBuzz(i) + '</p>');
    }

  });

});
