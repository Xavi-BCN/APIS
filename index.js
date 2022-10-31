// URL donde esta ubicado el servidor de dotos 
const API_URL = 'https://jsonplaceholder.typicode.com';

// LLamada de API con FETCH ********************
const HTMLResponse = document.querySelector('#app');
const ul = document.createElement('ul');

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
    users.forEach((user) => {
        let elem = document.createElement('li');
        elem.appendChild(
            document.createTextNode(`${user.name}  / ${user.email}`)
        );
        ul.appendChild(elem);
    });

    HTMLResponse.appendChild(ul);
        //const tpl = users.map(user => `<li>${user.name} - ${user.email}</li>`);
        //HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
});


// LLamada de API con XMLHttpRequest ********************
/* const xhr = new XMLHttpRequest();

function onRequestHandler(){
    //Verificar si la peticion ha sido exitosa
    // States:
    // 0 = UNSET no se ha llamado al metodo open
    // 1 = OPENED se ha llamado al metodo open
    // 2 = HEADERS_RECEIVED se ha llamado al metodo send()
    // 3 = LOADING Esta cargando, recibiendo la respuesta
    // 4 = DONE, se ha completa la operacion.

    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector('#app');

        const tpl = data.map(user => `<li>${user.name} - ${user.email}</li>`);
        HTMLResponse.innerHTML = `<UL>${tpl}</UL>`

        console.log(data);
    }
}

xhr.addEventListener('load', onRequestHandler);
xhr.open('GET',`${API_URL}/users` );
xhr.send(); */

