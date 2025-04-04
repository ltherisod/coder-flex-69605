const SugarSyntax = () => {

    //Spread Operator ...

    //Antes
    const numeros = [1,2,3]
    const nuevosNumeros =[4,5,6]
    const numerosFinal= numeros.concat(nuevosNumeros)
    console.log(numerosFinal)// [1,2,3,4,5,6]

   //Ahora
   const numerosSugar=[...numeros, ...numerosFinal, 7, 8, 9, 10]


   //Destructuring de Arrays
   //Antes 
   const colores = ['rojo', 'amarillo', 'azul']
   const primero = colores[0]
   const segundo = coleres[1]

   //Ahora
   const [primeroSugar, segundoSugar] = colores


   //Destructurin de objetos

   const persona = {
    nombre:'Pepe',
    edad:30,
    ciudad:'Mendoza'
   }

   const nombre=persona.nombre

//Ahora
const {nombre: nombreSugar, edad: edadSugar, ciudad} = persona


//Operador

if(usuario){
    console.log('Hola usuario')
}else{
    console.log('No se encontro el usuario')
}

console.log(usuario ? 'Holis usuaio' : 'No se encontro el usuario')


let nombreUser = null

console.log(`Hola ${nombreUser || 'Usuario'}`)


//Arrow

function sumar(a,b){
    return a+b
}

const arrowSumar = (a,b) => {
    return a+b
}


const arrowSugarSumar = (a,b) => a+b

    return(
        <h1>Sugar Syntax</h1>
    )
}