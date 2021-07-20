$(document).ready(() => {

    // listado de alumnos
    const list = () => {
        $.ajax({
            url: 'http://localhost:8080/api/list',
            type: 'GET',
            dataType: 'json',
            success: function(res){
                let data = '';
                res.forEach(element => {
                    data += `
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.nombre}</td>
                            <td>${element.apellidos}</td>
                            <td>${element.curso}</td>
                            <td>${element.nota}</td>
                        </tr>
                    `
                });
    
                $('#tbody').html(data); // se llama igual que el id de index.html linea 34
            }
        })
    }
    
    // Guardar los alumnos
    const save = () => {
        $('#agregar').on('click', function(){   // son los nombre que hay en html
            const datosAlumno = {
                nombre: $('#nombre').val(),
                apellidos: $('#apellidos').val(),
                curso: $('#curso').val(),
                nota: $('#nota').val()
            }

            $.ajax({
                data: JSON.stringify(datosAlumno),
                url:'http://localhost:8080/api/save',
                contentType: 'application/json',
                type: 'POST',
                dataType: 'json',
                success: (data) => {
                    $('#messages').html('Alumno creado').css('display', 'block'); //para que pase de displau:none a display:block (que muestra)
                    list();
                    reset();
                    console.log('Alumno registrado!')
                }
            })
        })
    }

    //Metodo para limpiar el formulario
    const reset = () => {
        $('#nombre').val('');
        $('#apellidos').val('');
        $('#curso').val('');
        $('#nota').val('');
    }

    //Llamadas a funcion
    list();
    save();
})