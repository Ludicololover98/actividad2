const user='administrador'
const pass='1234'
let usuario=prompt ('ingrese nombre de usuario')
let contraseña=prompt ('ingrese contraseña')
if (usuario==user && contraseña==pass){alert('Bienvenido!')}
else {alert('Incorrecto')}
let numero=prompt ('ingrese un número:');
let numeroa=prompt ('ingrese otro número');
let numerob=prompt ('ingrese un último número');
if (numero>numeroa && numero>numerob) {console.log('el número mayor es: '+numero);}
else if (numeroa >numero && numeroa>numerob) {console.log('el número mayor es: '+numeroa)}
else if (numerob>numeroa && numerob>numero) {console.log('el número mayor es: '+numerob)};

function hola(){console.log('Hola mundo');}