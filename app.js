//Crear una función que encuentre el número más repetido en un array.
//Ejemplo Input -> [3,3,1,8,2,3,3,3,2,5,3]
//Salida -> 3
//ejercicio 1 busqueda secuencual

class Numbers {
  constructor() {
    this.array = [];
  }

  push(element) {
    this.array.push(element);
  }

searchElement(element){
  const positions = []
  for (let i = 0; i < this.array.length; i++) {
    if (this.array[i]=== element) {
      positions.push(i);      
    }
  }
  return  positions;
}

findMostRepeatedElement() {
  const countMap = new Map();
  let mostRepeatedElement = null;
  let maxCount = 0;

  for (const element of this.array) {
    if (countMap.has(element)) {
      countMap.set(element, countMap.get(element) + 1);
    } else {
      countMap.set(element, 1);
    }

    if (countMap.get(element) >= maxCount) {
      maxCount = countMap.get(element);
      mostRepeatedElement = element;
    }
  }
  console.log(countMap);

  return mostRepeatedElement;
}


}

const number = new Numbers();
number.push(3);
number.push(6);
number.push(1);
number.push(8);
number.push(2);
number.push(3);
number.push(6);
number.push(3);
number.push(2);
number.push(5);
number.push(6);
console.log(number);

function position(element) {
  let result = number.searchElement(element)
  if (result.length >  0) {
    console.log(`${element} se encuentra  en la posicion ${result}`)
    
  } else {
    console.log(`elemento no encontrado`)
    
  }
  
}

position(6);
position(3);

console.log(" el numero es",number.findMostRepeatedElement());


//ejercicio 1 busqueda binaria;

/*class MyArray {
  constructor() {
    this.array = [];
  }

  push(element) {
    if (Array.isArray(element)) {
      this.array.push(...element);
    } else {
      this.array.push(element)

    }

  }

  findMostRepeatedElement() {
    
    this.array.sort((a, b) => a - b);

    let mostRepeatedElement = null;
    let maxCount = 0;
    let currentElement = null;
    let currentCount = 0;

    for (const element of this.array) {
      if (element === currentElement) {
        currentCount++;
      } else {
        currentElement = element;
        currentCount = 1;
      }

      if (currentCount >= maxCount) {
        maxCount = currentCount;
        mostRepeatedElement = currentElement;
      }
    }

    return mostRepeatedElement;
  }


  position(element) {
    const position =[];
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === element) {
        position.push(i)
        
      } 
    }
    if (position.length >0) {
      console.log(`${element} se encuentra en la posicion ${position.join(',')}`)
      
    } else {
      console.log(`elemento no encontrado`)
      
    }
  }
}

const number = new MyArray();
number.push([3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6]);
console.log(number);
console.log("el numero es", number.findMostRepeatedElement());
number.position(6);*/

//Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.
//Ejemplo input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]
//Salida → [‘e’,‘a’,‘d’,‘f’]
//ejercio 2  

/*class MyArray{
  constructor(){
    this.array = [];
  }

  push(element){
    this.array.push(element);
  }

  findLetters(array){
    const lettersfind = [];

    for (let i = 0; i < this.array.length; i++) {
      if (typeof this.array[i] === 'string') {
        lettersfind.push(this.array[i]);
        
      }
    }
    return lettersfind;

  }
}


const searching = new MyArray();
searching.push(8);
searching.push('e');
searching.push(7);
searching.push(2);
searching.push('a');
searching.push('d');
searching.push('f');
searching.push(2);
searching.push(3);
searching.push(1);
searching.push(4);
searching.push(3);
console.log(searching);
console.log(searching.findLetters());*/


//Crear una función que busque el número más grande en un arreglo.
//Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
//Salida -> 12
// ejercico 3

/*class N {
  constructor() {
    this.array = [];
  }

  push(number) {
    this.array.push(number);
  }

  searchBiggerNumber() {
    if (this.array.length === 0) {
      return undefined;
    }

    let biggerNumber = this.array[0];

    for (let i = 1; i < this.array.length; i++) {
      if (this.array[i] > biggerNumber) {
        biggerNumber = this.array[i];
      }
    }

    return biggerNumber;
  }
}

const numero = new N();
numero.push(1);
numero.push(4);
numero.push(7);
numero.push(2);
numero.push(4);
numero.push(1);
numero.push(9);
numero.push(4);
numero.push(0);
numero.push(2);
numero.push(4);
numero.push(5);
numero.push(12);

console.log(numero);

const search = numero.searchBiggerNumber()
console.log(` el numero mas grande es: ${search}`);*/


//Crear una función que busque el número más pequeño en el arreglo.
//Ejemplo input - > [1,4,5,-1,-7,2,3,9]
//Salida -> -7
//ejercicio 4

/*class Numero{
  constructor(){
    this.array = [];
  }

  push(number){
    this.array.push(number);
  }

  findSmallNumber(){
    if (this.array.length === 0 ) {
      return undefined; 
    }

    let SmallNumber = this.array[0];

    for (let i = 1; i < this.array.length; i++) {
      if (this.array[i]< SmallNumber) {
        SmallNumber= this.array[i];
        
      }
      
    }
    return SmallNumber;

  }
}

const numbers = new Numero();
numbers.push(1);
numbers.push(4);
numbers.push(5);
numbers.push(-1);
numbers.push(-7);
numbers.push(2);
numbers.push(3);
numbers.push(9);
console.log(numbers);

const result = numbers.findSmallNumber();
console.log(` el numero mas pequeño es: ${result}`);*/


//Crear una clase llamada ``Contacto`` con los siguientes datos:
//Nombre
//Apellidos
//Teléfono
//Después crear una clase que sea ListaContactos la cual tendrá dos métodos:
//Agregar un contacto.
//Buscar un contacto por nombre.
//busqueda secuencial 
//ejercicio5

/*class Contact {
  constructor(nombre, apellidos, telefono) {
    this.array = []
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telefono = telefono;

  }

  agregarContacto(contacto) {
    this.array.push(contacto);

  }

  buscarNombre(nombreBuscado) {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].nombre === nombreBuscado) {
        return this.array[i];

      }

    }
    return -1;
  }



}


const contactos = new Contact();
contactos.agregarContacto({ nombre: 'bulbasaur', apellidos: 'hierba', telefono: 1234531234 });
contactos.agregarContacto({ nombre: 'ivysaur', apellidos: 'hierba', telefono: 9451234124 });
contactos.agregarContacto({ nombre: 'venusaur', apellidos: 'hierba', telefono: 9231234537 });
contactos.agregarContacto({ nombre: 'charmander', apellidos: 'fuego', telefono: 9841238737 });
contactos.agregarContacto({ nombre: 'charmeleon', apellidos: 'fuego', telefono: 9771231737 });
contactos.agregarContacto({ nombre: 'charizard', apellidos: 'fuego', telefono: 7721234577 });
contactos.agregarContacto({ nombre: 'squirtle', apellidos: 'agua', telefono: 9251238533 });
contactos.agregarContacto({ nombre: 'wartortle', apellidos: 'agua', telefono: 9211234587 });
contactos.agregarContacto({ nombre: 'blastoise', apellidos: 'agua', telefono: 9241234537 });
contactos.agregarContacto({ nombre: 'caterpie', apellidos: 'insecto', telefono: 9771239557 });
contactos.agregarContacto({ nombre: 'metapod', apellidos: 'insecto', telefono: 7773244517 });
contactos.agregarContacto({ nombre: 'butterfree', apellidos: 'insecto', telefono: 5521234537 });
contactos.agregarContacto({ nombre: 'weedle', apellidos: 'insecto', telefono: 5571231587 });
contactos.agregarContacto({ nombre: 'kakuna', apellidos: 'insecto', telefono: 9871034507 });
contactos.agregarContacto({ nombre: 'breedrill', apellidos: 'insecto', telefono: 9870034577 });
contactos.agregarContacto({ nombre: 'pidgey', apellidos: 'volador', telefono: 7771534577 });
contactos.agregarContacto({ nombre: 'pidgeotto', apellidos: 'volador', telefono: 43571234537 });
contactos.agregarContacto({ nombre: 'pidgeot', apellidos: 'volador', telefono: 3011234537 });
contactos.agregarContacto({ nombre: 'rattata', apellidos: 'normal', telefono: 3011134537 });
contactos.agregarContacto({ nombre: 'raticate', apellidos: 'normal', telefono: 9871132537 });
contactos.agregarContacto({ nombre: 'spearow', apellidos: 'volador', telefono: 7771032577 });
contactos.agregarContacto({ nombre: 'fearow', apellidos: 'volador', telefono: 772174535 });
contactos.agregarContacto({ nombre: 'ekans', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'arbok', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'picachu', apellidos: 'electrico', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'raichu', apellidos: 'electrico', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'sandshrew', apellidos: 'tierra', telefono: 7651234537 });
contactos.agregarContacto({ nombre: 'sandslash', apellidos: 'tierra', telefono: 9831234537 });
contactos.agregarContacto({ nombre: 'nidoran', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'nidorina', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'nidoqueen', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'nidoran', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'nidorino', apellidos: 'veneno', telefono: 9051234537 });
contactos.agregarContacto({ nombre: 'nidoking', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'clefairy', apellidos: 'hada', telefono: 6751234537 });
contactos.agregarContacto({ nombre: 'clefable', apellidos: 'hada', telefono: 7251234537 });
contactos.agregarContacto({ nombre: 'vulpix', apellidos: 'fuego', telefono: 7771234537 });
contactos.agregarContacto({ nombre: 'ninetales', apellidos: 'fuego', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'jigglypuff', apellidos: 'hada', telefono: 3041234537 });
contactos.agregarContacto({ nombre: 'wigglytuff', apellidos: 'hada', telefono: 9991234537 });
contactos.agregarContacto({ nombre: 'zubat', apellidos: 'volador', telefono: 6531234537 });
contactos.agregarContacto({ nombre: 'golbat', apellidos: 'volador', telefono: 6541234537 });
contactos.agregarContacto({ nombre: 'oddish', apellidos: 'planta', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'glomm', apellidos: 'planta', telefono: 9721234537 });
contactos.agregarContacto({ nombre: 'vileplume', apellidos: 'planta', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'paras', apellidos: 'insecto', telefono: 9071234537 });
contactos.agregarContacto({ nombre: 'parasect', apellidos: 'insecto', telefono: 5871234537 });
contactos.agregarContacto({ nombre: 'venonat', apellidos: 'insecto', telefono: 3011234537 });
contactos.agregarContacto({ nombre: 'venomoth', apellidos: 'insecto', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'diglett', apellidos: 'tierra', telefono: 3011234537 });
contactos.agregarContacto({ nombre: 'dugtrio', apellidos: 'tierra', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'meowth', apellidos: 'normal', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'persian', apellidos: 'normal', telefono: 4251234537 });
contactos.agregarContacto({ nombre: 'psyduck', apellidos: 'agua', telefono: 5501234537 });
contactos.agregarContacto({ nombre: 'golduck', apellidos: 'agua', telefono: 5271234537 });
contactos.agregarContacto({ nombre: 'mankey', apellidos: 'lucha', telefono: 7071234537 });
contactos.agregarContacto({ nombre: 'primeape', apellidos: 'lucha', telefono: 9991234537 });
contactos.agregarContacto({ nombre: 'growlithe', apellidos: 'fuego', telefono: 5371234537 });
contactos.agregarContacto({ nombre: 'arcaine', apellidos: 'fuego', telefono: 5551234537 });
contactos.agregarContacto({ nombre: 'poliwag', apellidos: 'agua', telefono: 9171234537 });
contactos.agregarContacto({ nombre: 'poliwhirl', apellidos: 'agua', telefono: 9271734537 });
contactos.agregarContacto({ nombre: 'poliwrath', apellidos: 'agua', telefono: 9371034537 });
contactos.agregarContacto({ nombre: 'abra', apellidos: 'psiquico', telefono: 9671734537 });
contactos.agregarContacto({ nombre: 'kadabra', apellidos: 'psiquico', telefono: 9371234537 });
contactos.agregarContacto({ nombre: 'alakazam', apellidos: 'psiquico', telefono: 3371234537 });
contactos.agregarContacto({ nombre: 'machop', apellidos: 'lucha', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'machoke', apellidos: 'lucha', telefono: 9991234537 });
contactos.agregarContacto({ nombre: 'machamp', apellidos: 'lucha', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'bellsprout', apellidos: 'planta', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'weepinbell', apellidos: 'planta', telefono: 9991234537 });
contactos.agregarContacto({ nombre: 'victreebel', apellidos: 'planta', telefono: 3021234537 });

console.log(contactos);

const result = contactos.buscarNombre('picachu');
if (result === -1) {
  console.log('Contacto No Encontrado')
  
} else {
  console.log(` encontramos a nombre: ${result.nombre}  ${result.apellidos} telefono: ${result.telefono}`);
  
};*/



//ejercicio5
//busqueda binaria

/*class Contacto {
  constructor(nombre, apellidos, telefono) {
    this.array = [];
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.telefono = telefono;
  }


  agregarContacto(contacto) {
    this.array.push(contacto);

    this.array.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }
  busquedaContactos(nombreBuscado) {
    let left = 0;
    let right = this.array.length - 1;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (this.array[middle].nombre === nombreBuscado) {
        return this.array[middle];
      } else if (this.array[middle].nombre.localeCompare(nombreBuscado) < 0) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return -1;
  }
}


const contactos = new Contacto();
contactos.agregarContacto({ nombre: 'bulbasaur', apellidos: 'hierba', telefono: 1234531234 });
contactos.agregarContacto({ nombre: 'ivysaur', apellidos: 'hierba', telefono: 9451234124 });
contactos.agregarContacto({ nombre: 'venusaur', apellidos: 'hierba', telefono: 9231234537 });
contactos.agregarContacto({ nombre: 'charmander', apellidos: 'fuego', telefono: 9841238737 });
contactos.agregarContacto({ nombre: 'charmeleon', apellidos: 'fuego', telefono: 9771231737 });
contactos.agregarContacto({ nombre: 'charizard', apellidos: 'fuego', telefono: 7721234577 });
contactos.agregarContacto({ nombre: 'squirtle', apellidos: 'agua', telefono: 9251238533 });
contactos.agregarContacto({ nombre: 'wartortle', apellidos: 'agua', telefono: 9211234587 });
contactos.agregarContacto({ nombre: 'blastoise', apellidos: 'agua', telefono: 9241234537 });
contactos.agregarContacto({ nombre: 'caterpie', apellidos: 'insecto', telefono: 9771239557 });
contactos.agregarContacto({ nombre: 'metapod', apellidos: 'insecto', telefono: 7773244517 });
contactos.agregarContacto({ nombre: 'butterfree', apellidos: 'insecto', telefono: 5521234537 });
contactos.agregarContacto({ nombre: 'weedle', apellidos: 'insecto', telefono: 5571231587 });
contactos.agregarContacto({ nombre: 'kakuna', apellidos: 'insecto', telefono: 9871034507 });
contactos.agregarContacto({ nombre: 'breedrill', apellidos: 'insecto', telefono: 9870034577 });
contactos.agregarContacto({ nombre: 'pidgey', apellidos: 'volador', telefono: 7771534577 });
contactos.agregarContacto({ nombre: 'pidgeotto', apellidos: 'volador', telefono: 43571234537 });
contactos.agregarContacto({ nombre: 'pidgeot', apellidos: 'volador', telefono: 3011234537 });
contactos.agregarContacto({ nombre: 'rattata', apellidos: 'normal', telefono: 3011134537 });
contactos.agregarContacto({ nombre: 'raticate', apellidos: 'normal', telefono: 9871132537 });
contactos.agregarContacto({ nombre: 'spearow', apellidos: 'volador', telefono: 7771032577 });
contactos.agregarContacto({ nombre: 'fearow', apellidos: 'volador', telefono: 772174535 });
contactos.agregarContacto({ nombre: 'ekans', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'arbok', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'picachu', apellidos: 'electrico', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'raichu', apellidos: 'electrico', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'sandshrew', apellidos: 'tierra', telefono: 7651234537 });
contactos.agregarContacto({ nombre: 'sandslash', apellidos: 'tierra', telefono: 9831234537 });
contactos.agregarContacto({ nombre: 'nidoran', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'nidorina', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'nidoqueen', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'nidoran', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'nidorino', apellidos: 'veneno', telefono: 9051234537 });
contactos.agregarContacto({ nombre: 'nidoking', apellidos: 'veneno', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'clefairy', apellidos: 'hada', telefono: 6751234537 });
contactos.agregarContacto({ nombre: 'clefable', apellidos: 'hada', telefono: 7251234537 });
contactos.agregarContacto({ nombre: 'vulpix', apellidos: 'fuego', telefono: 7771234537 });
contactos.agregarContacto({ nombre: 'ninetales', apellidos: 'fuego', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'jigglypuff', apellidos: 'hada', telefono: 3041234537 });
contactos.agregarContacto({ nombre: 'wigglytuff', apellidos: 'hada', telefono: 9991234537 });
contactos.agregarContacto({ nombre: 'zubat', apellidos: 'volador', telefono: 6531234537 });
contactos.agregarContacto({ nombre: 'golbat', apellidos: 'volador', telefono: 6541234537 });
contactos.agregarContacto({ nombre: 'oddish', apellidos: 'planta', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'glomm', apellidos: 'planta', telefono: 9721234537 });
contactos.agregarContacto({ nombre: 'vileplume', apellidos: 'planta', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'paras', apellidos: 'insecto', telefono: 9071234537 });
contactos.agregarContacto({ nombre: 'parasect', apellidos: 'insecto', telefono: 5871234537 });
contactos.agregarContacto({ nombre: 'venonat', apellidos: 'insecto', telefono: 3011234537 });
contactos.agregarContacto({ nombre: 'venomoth', apellidos: 'insecto', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'diglett', apellidos: 'tierra', telefono: 3011234537 });
contactos.agregarContacto({ nombre: 'dugtrio', apellidos: 'tierra', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'meowth', apellidos: 'normal', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'persian', apellidos: 'normal', telefono: 4251234537 });
contactos.agregarContacto({ nombre: 'psyduck', apellidos: 'agua', telefono: 5501234537 });
contactos.agregarContacto({ nombre: 'golduck', apellidos: 'agua', telefono: 5271234537 });
contactos.agregarContacto({ nombre: 'mankey', apellidos: 'lucha', telefono: 7071234537 });
contactos.agregarContacto({ nombre: 'primeape', apellidos: 'lucha', telefono: 9991234537 });
contactos.agregarContacto({ nombre: 'growlithe', apellidos: 'fuego', telefono: 5371234537 });
contactos.agregarContacto({ nombre: 'arcaine', apellidos: 'fuego', telefono: 5551234537 });
contactos.agregarContacto({ nombre: 'poliwag', apellidos: 'agua', telefono: 9171234537 });
contactos.agregarContacto({ nombre: 'poliwhirl', apellidos: 'agua', telefono: 9271734537 });
contactos.agregarContacto({ nombre: 'poliwrath', apellidos: 'agua', telefono: 9371034537 });
contactos.agregarContacto({ nombre: 'abra', apellidos: 'psiquico', telefono: 9671734537 });
contactos.agregarContacto({ nombre: 'kadabra', apellidos: 'psiquico', telefono: 9371234537 });
contactos.agregarContacto({ nombre: 'alakazam', apellidos: 'psiquico', telefono: 3371234537 });
contactos.agregarContacto({ nombre: 'machop', apellidos: 'lucha', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'machoke', apellidos: 'lucha', telefono: 9991234537 });
contactos.agregarContacto({ nombre: 'machamp', apellidos: 'lucha', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'bellsprout', apellidos: 'planta', telefono: 9871234537 });
contactos.agregarContacto({ nombre: 'weepinbell', apellidos: 'planta', telefono: 9991234537 });
contactos.agregarContacto({ nombre: 'victreebel', apellidos: 'planta', telefono: 3021234537 });


console.log(contactos);
const result = contactos.busquedaContactos('kada');

 if (result === -1) {
  console.log('Contacto No Encontrado')
  
 } else {
  console.log(` encontramos a nombre: ${result.nombre} ${result.apellidos} telefono: ${result.telefono}`);
  
 };*/
