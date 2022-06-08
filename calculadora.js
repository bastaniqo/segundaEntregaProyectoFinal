console.log('Incorporando Arrays para Interes Compuesto');

let usserName = prompt("Para su seguridad vamos a pedirle que ingrese su nombre completo por favor");

const conJSON = JSON.stringify(usserName);

localStorage.setItem("nombreUsuario", conJSON);

usserName = localStorage.getItem("nombreUsuario");

const h2 = document.createElement("h2");
h2.innerHTML = "Bienvenido " + usserName + "! Gracias por utilizar nuestros servicios";
document.body.prepend(h2);

//Definimos las constantes de calculos
function producto(a, b) {
    return a * b;
} //donde a es el capital inicial e b el resultado de los interes
const basePotencia = (r)=> 1 + (r/100) //donde r es el interes mensual
const calcInteres =(b,e)=> Math.pow(b,e)//donde b es la base y e el exponente resultante del producto frecuencia y anual
//creamos la variable para arrays
let calculoInteresCompuesto = [];
//let CompuestoAportes para una futura implementación
let calculoInteresCompuestoAportes = [];
const boton = document.getElementById('boton')


boton.addEventListener ('click', () => {
    
    capital = document.getElementById('capitalInicial');
    interes0 = document.getElementById('interes');
    frecuencia0 = document.getElementById('frecuencia');
    anual0 = document.getElementById('anual');
    capitalInicial= capital.value
    interes= interes0.value
    frecuencia= frecuencia0.value
    anual= anual0.value
    capitalFinal = producto(capitalInicial,calcInteres(basePotencia(interes),producto(frecuencia,anual)));
    calculoInteresCompuesto.push (new interesCompuesto (capitalInicial,interes,anual,frecuencia,capitalFinal));
    console.log(capitalFinal);
    console.log(calculoInteresCompuesto);
    console.log(document.getElementById('capitalInicial').value);
    const table = document.getElementById ('resultado')
    calculoInteresCompuesto.forEach( (parametros) => { 
        
        const capitalInicial = document.createElement('td')
        const interes0 = document.createElement('td')
        const anual0 = document.createElement('td')
        const frecuencia0 = document.createElement('td')
        const capitalFinal = document.createElement('td')
        capitalInicial.innerHTML = calculoInteresCompuesto[0].capitalI
        interes0.innerHTML = calculoInteresCompuesto[0].interes
        anual0.innerHTML = calculoInteresCompuesto[0].anual
        frecuencia0.innerHTML = calculoInteresCompuesto[0].frecuencia
        capitalFinal.innerHTML = calculoInteresCompuesto[0].capitalFinal
        
    
        table.appendChild (capitalInicial)
        table.appendChild (interes0)
        table.appendChild (anual0)
        table.appendChild (frecuencia0)
        table.appendChild (capitalFinal)
    })
})

