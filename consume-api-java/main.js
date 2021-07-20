$(document).ready(() => {

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

})