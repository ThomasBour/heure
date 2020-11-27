const main = document.querySelector('main');
document.querySelector('.main').innerHTML = "";

const date = new Date();
console.log(date);

let weekday = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'];
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const conteneur = document.createElement('div');
conteneur.className = 'container';
main.appendChild(conteneur);

