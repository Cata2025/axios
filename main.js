
// Lo primero que debemos hacer es obtener los datos de la API utilizando Axios.
// Importar Axios:
// Variable global para almacenar los usuarios:

let usuarios = [];

// Hacer la solicitud a la API y rellenar la variable global con los usuarios:

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {

// Guardar los usuarios en la variable global

console.log(response);
    
usuarios = response.data;

// Imprimir toda la lista de usuarios (el array completo):

    console.log('Lista de usuarios:');
    console.log(usuarios);


    usuarios.forEach(element => {
        
    console.log(element.name);
        
    });
    
  });




let users
axios.get("https://jsonplaceholder.typicode.com/users") 
 .then((res) => {
    users = res.data
})    
 .catch((err) => console.error(err));

  

const showUsers = () => {
    console.log(users);
    const contenedor = document.getElementById("contenedor")

    users.forEach(element => { // suma += 2

        contenedor.innerHTML += element.name+ "<br>" //contenedor.innerHTML = contenedor.innerHTML + element.name
        console.log(contenedor.innerHTML);
        
    });
}

const btn = document.getElementById("boton")
btn.addEventListener("click", showUsers)


