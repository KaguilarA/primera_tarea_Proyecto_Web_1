var listaAlumnos = [];


function nuevoAlumno(psNombre, psApellido1, psApellido2, psCorreo, psTelefono, psProvincia, psCanton, psDistrito, psContrasenna){
  var objetoAlumno = {
    nombre : psNombre,
    apellido1 : psApellido1,
    apellido2 : psApellido2,
    correo : psCorreo,
    telefono : psTelefono,
    provincia : psProvincia,
    canton : psCanton,
    distrito : psDistrito,
    contrasenna : psContrasenna
  }
  listaAlumnos.push(objetoAlumno);
  guardarLocalStorage();
  

}

function getListaAlumnos(){
  var objetos = localStorage.getItem('listaAlumnos');

  if (objetos == null) {
    listaAlumnos = [];
  }else {
    listaAlumnos = JSON.parse(objetos);
  }
  return listaAlumnos;
}

function guardarLocalStorage(){
  localStorage.setItem('listaAlumnos',JSON.stringify(listaAlumnos));
}
