function getColorIs() {
    var getId = document.getElementById('getValue').value;
  
    $(".box1").removeClass('Color');
    $("#box"+getId).addClass('Color')
  
}