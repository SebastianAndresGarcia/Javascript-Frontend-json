
async function bloquear(id,lock) {
    
    let respuesta = confirm("¿Realmente desea bloquear?");
    if (respuesta == true) {
        console.log(id)
        await fetch(`http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=${id}&estado=${lock}`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
            });
            window.location.href = "lista.html";
        return true;
    } else {
        return false;
    }   
}
