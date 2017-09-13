var btnRegistrar = $('#btnRegistrar');

btnRegistrar.click(fnRegistro);
llenarTabla();


//Pryzma,
function fnRegistro(){
  var sNombre = $('#txtNombre').val(),
      sApellido1 = $('#txtApellido1').val(),
      sApellido2 = $('#txtApellido2').val(),
      sCorreo = $('#txtCorreo').val(),
      sTelefono = $('#txtTelefono').val(),
      sProvincia = $('#seleccionProvincias>option:selected').text(),
      sCanton = $('#seleccionCantones>option:selected').text(),
      sDistrito = $('#seleccionDistrito>option:selected').text(),
      sContrasenna = $('#txtContrasenna').val(),
      sMensaje = $('#txtMensaje');

  if (sNombre == '' | sApellido1 == '' | sApellido2 == '' | sCorreo == '') {
    sMensaje.val('Hay campos vacios')
  }else {
    nuevoAlumno(sNombre, sApellido1, sApellido2, sCorreo, sTelefono, sProvincia, sCanton, sDistrito, sContrasenna);

    $('#txtNombre').val('');
    $('#txtApellido1').val('');
    $('#txtApellido2').val('');
    $('#txtCorreo').val('');
    $('#txtTelefono').val('');
    $('#txtContrasenna').val('');

    sMensaje.val('Registro exitoso');

  }
  llenarTabla();
}

function llenarTabla(){
  var tbody = $('#tblAlumnos tbody'),
      lista = getListaAlumnos();

  tbody.html('');
  for (var i = 0; i < lista.length; i++) {
    var zelda = $('<tr/>');
    var link = $('<td/>').append(lista[i].nombre);
    zelda.append(link);

    var link = $('<td/>').append(lista[i].apellido1);
    zelda.append(link);

    var link = $('<td/>').append(lista[i].apellido2);
    zelda.append(link);

    var link = $('<td/>').append(lista[i].correo);
    zelda.append(link);

    var link = $('<td/>').append(lista[i].telefono);
    zelda.append(link);

    var link = $('<td/>').append(lista[i].provincia);
    zelda.append(link);

    var link = $('<td/>').append(lista[i].canton);
    zelda.append(link);

    var link = $('<td/>').append(lista[i].distrito);
    zelda.append(link);

    var link = $('<td/>').append(lista[i].contrasenna);
    zelda.append(link);

    tbody.append(zelda);
  }

}
