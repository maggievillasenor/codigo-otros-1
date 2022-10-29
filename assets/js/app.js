//comprobar correcto funcionamiento de .js con .html
console.log("APIs");
const button = document.getElementById('btn');
button.addEventListener("click", displayUser('stolinski'));
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//modificación del nombre de variables : n, b, l
const n = document.querySelector('.name');
const b= document.querySelector('.blog');
const l = document.querySelector('.location');

async function displayUser(username) {  //api fetch function
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  response.json().then((data) => {
    console.log(data);
    n.textContent = data.name;
    b.textContent = data.blog;
    l.textContent = data.location;
  }).catch(error => {
    console.log(error);
  })
};

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
};

displayUser('stolinski').catch(handleError);