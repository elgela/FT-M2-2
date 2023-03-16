const URL = 'http://localhost:5000';
const boton = document.getElementById('boton');
const lista = document.getElementById('lista');
const loader = document.querySelector('loader');

const input = document.getElementById('input');
const search = document.getElementById('search');
const amigo = document.getElementById('amigo');

const inputDelete = document.getElementById('inputDelete');
const borrarAmigo = document.getElementById('delete');
const succes = document.getElementById('succes');

const getFriends = () => {
    $.get(`${URL}/amigos`, (respuesta) => {
        respuesta.forEach(amigo => {
            let showFriends = document.createElement('li');
            showFriends.innerHTML = `${amigo.id} - ${amigo.name}`;
            lista.appendChild(showFriends);
        });
        loader.setAttribute('src', '')
    })
    lista.innerHTML = '';
}

const getFriend = () => {
    let amigoId = input.value;
    $.get(`${URL}/amigos/${amigoId}`, (respuesta) => {
        amigo.innerHTML = respuesta.name;
    })
}

const deleteFriend = () => {
    let amigoId = inputDelete.value;
    $.ajax({
        url: `${URL}/amigos/${amigoId}`,
        type: 'DELETE',
        succes: () => {
            // succes.innerHTML = 'Juira amigo!!'
            alert(`el amigo ${id} fué borrado`)
            // lista.innerHTML = ''
            getFriends()
        }
    })
}
 

boton.addEventListener('click', getFriends);
search.addEventListener('click', getFriend);
borrarAmigo.addEventListener('click', deleteFriend);



// function getFriends() {
//     //Limpia la lista anterior
//     let lista = document.getElementById('lista');
//     lista.innerHTML = '';

//     //Eliminamos el loading si es que no se eliminó antes
//     let img = document.getElementsByTagName('img'); //<img src='url'>
//     if(img.length > 0) {
//         img[0].remove()
//     }

//     //Traigo los amigos del server y creo la lista
//     fetch('http://localhost:5000/amigos') // hace una petisión al servidor
//     .then(data => data.json()) //transformamos el json recibido en un objeto
//     .then(data => { //tengo un array con la lista de amigos
//         data.forEach(amigo => { // array de amigos [amigo1, amigo2, amigo3, etc.]
//             let li = document.createElement('li'); //<li></li>
//             li.textContent = amigo.name; //<li>Toni</li>
//             document.getElementById('lista').appendChild(li);
//         });
//     })
// }

// document.getElementById('boton').addEventListener('click', getFriends);

// //Busco amigo por id
// function searchFriend() {
//     let id = document.getElementById('input').value; //1
//     fetch(`http://localhost:5000/amigos/${id}`) //si no aclaro segundo argumento es de tipo GET
//     .then(data => data.json())
//     .then(data => {
//         document.getElementById('amigo').textContent = data.name; //<span>Toni</span>
//     })
//     document.getElementById('input').value = ''; //Limpia el input
// }

// document.getElementById('search').addEventListener('click', searchFriend);

// //Elimimo amigo por id
// function deleteFriend() {
//     let id = document.getElementById('inputDelete').value; //nro
//     fetch(`http://localhost:5000/amigos/${id}`, { //le aclaro que es un delete
//         method: 'DELETE'
//     })
//     .then(() => {
//         alert(`El amigo ${id} fue borrado`)
//         getFriends()
//     })
//     document.getElementById('inputDelete').value = '';

// }

// document.getElementById('delete').addEventListener('click', deleteFriend);


