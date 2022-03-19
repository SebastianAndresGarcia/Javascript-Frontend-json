async function login() {
  const user = document.getElementById("usuario").value
  const pass = document.getElementById("clave").value
  console.log("usuario: " + user)
  console.log("clave: " + pass)

  let url = `http://168.194.207.98:8081/tp/login.php?user=${user}&pass=${pass}`
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ user, pass }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  console.log(data);
  mostrar(data);
}

function mostrar(data) {
  const label = document.getElementById("label");
  const lista = document.getElementById("lista");
  /*if (data.respuesta === 'ERROR') {
    label.hidden = false;
    label.textContent = data.mje

  }
  else if (data.respuesta === 'OK') {
    label.hidden = false;
    label.textContent = data.mje
    lista.hidden = false;
  }*/
  let aaa = (data.respuesta === 'ERROR') ? (label.hidden = false, label.textContent = data.mje)
    : (data.respuesta === 'OK') ? (label.hidden = false, label.textContent = data.mje, lista.hidden = false)
      : "";
}