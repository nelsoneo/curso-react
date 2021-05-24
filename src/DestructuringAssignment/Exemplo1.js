/* exemplo 1 */

const Cliente = {name:'Neo', age:'34', city:'Matrix'};

const name = Cliente.name;
const city = Cliente.city;

console.log(name, city);

//Or

const {name, city} = Cliente;
console.log(name, city);

//More

const Cliente = ['Neo', 23, 'Matrix'];

const [name, , city] = Cliente;

console.log(name, city);