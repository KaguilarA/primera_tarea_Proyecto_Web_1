llenarProvincia();

$('#seleccionCantones').prop( "disabled", true );
$('#seleccionDistrito').prop( "disabled", true );

$('#seleccionProvincias').change(function() {
 var selector = $('#seleccionProvincias'),
      valorProvincia = selector.val();

  llenarCanton(valorProvincia);
});

$('#seleccionCantones').change(function() {
  var selector = $('#seleccionCantones'),
      valorCanton = selector.val();

  llenarDistrito(valorCanton);
})

function llenarProvincia(){
  $.getJSON('http://costa-rica-places.herokuapp.com/api/provinces')
    .done(function(data){
      var selector = $('#seleccionProvincias');
      var option = $('<option/>');

      option.attr({'value':''}).text('<--Seleccione una provincia-->');
      $('#seleccionProvincias').append(option)

      for(var i = 0;  i < data.length; i++){
        var options = $('<option/>');
        options.attr({'value': data[i].idProvincia}).text(data[i].nombre);
        $('#seleccionProvincias').append(options)
      }
    }
  )
}

function llenarCanton(pvalorProvincia){
  $.getJSON('http://costa-rica-places.herokuapp.com/api/cantons')
   .done(function(data){
    var selector = $('#seleccionCantones').prop( "disabled", false );

    selector.html('');

    for(var i = 0;  i < data.length; i++){
      if(pvalorProvincia == data[i].Provincia_idProvincia){
        var options = $('<option/>');
        options.attr({'value': data[i].idCanton}).text(data[i].nombre);
        $('#seleccionCantones').append(options)
      }
    }
  })
}

function llenarDistrito(pvalorCanton){
  $.getJSON('http://costa-rica-places.herokuapp.com/api/districts')
   .done(function(data){
    var selector = $('#seleccionDistrito').prop( "disabled", false );

    selector.html('');
    for(var i = 0;  i < data.length; i++){
      if(pvalorCanton == data[i].Canton_idCanton){
        var options = $('<option/>');
        options.attr({'value': data[i].idDistrito}).text(data[i].nombre);
        $('#seleccionDistrito').append(options)
      }
    }
  })
}
