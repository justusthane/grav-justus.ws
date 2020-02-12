console.log("Loaded");
$( "body.home dl dt" ).hover(
  function() {
      console.log("Hover");
    $( this ).next().css("visibility","visible");
  }, function() {
    $( this ).next().css("visibility","hidden");
  }
);

$( "body.home a[href='/blog']" ).hover(
    function() {
        $( this ).html('blag');
    }, function() {
        $( this ).html('blog');
    }

);
