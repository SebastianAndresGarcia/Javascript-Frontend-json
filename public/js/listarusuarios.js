
//https://www.codegrepper.com/code-examples/javascript/frameworks/dist/await+fetch
let contenido = document.getElementById("contenido");
//LISTAR TODOS LOS USUARIOS
const obtener = async () => {
    await fetch("http://168.194.207.98:8081/tp/lista.php?action=BUSCAR")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            tabla(data);
        });
};
const tabla = (datos) => {
contenido.innerHTML = "";
    for (let dato of datos) {
        contenido.innerHTML += `
        <tr>
            <td>${dato.id}</td>
            <td>${dato.usuario}</td>
            <td>${dato.bloqueado}</td>
            <td>${dato.apellido}</td>
            <td>${dato.nombre}</td>
            <td><button type="button" class="btn btn-red" onclick="bloquear(${dato.id},'Y')"><img src='./images/lock.jpg' width="50px"></button></td>
            <td><button type="button" class="btn btn-red" onclick="bloquear(${dato.id},'N')"><img src='./images/unlock.jpg' width="50px"></button></td>           
        </tr>
        `
    }
}

obtener();

async function buscar() {
    let busqueda = document.getElementById("busqueda").value;
    contenido.innerHTML = "";
    await fetch(`http://168.194.207.98:8081/tp/lista.php?action=BUSCAR&usuario=${busqueda}`)
        .then((res) => res.json())
        .then((databusqueda) => {
            console.log(databusqueda);
            tabla(databusqueda);
        });
}