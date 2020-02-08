console.log("Loaded");
$( "body.home dl dt a" ).hover(
  function() {
      console.log("Hover");
    $( this ).parent().next().css("visibility","visible");
  }, function() {
    $( this ).parent().next().css("visibility","hidden");
  }
);
