import { heroes } from "../data/heroes";



// //!Callback básico
// export const callbacksComponent = ( element ) => {
  
//   const id = '5d86371f1efebc31def272e2';

//   findHero( id, ( hero ) => { 
//     element.innerHTML = hero.name;
//   }) 
// }

// const findHero = ( id, callback ) => {
//   const hero = heroes.find( hero => hero.id === id );

//   callback( hero );
// }

// //!Manejo de errores CallBack
// export const callbacksComponent = ( element ) => {
  
//   const id = '5d86371f1efebc31def272e2';

//   //La cantidad de argumentos del callback se definen al ejecutarlo.
//   findHero( id, ( error, hero ) => { 
    
//     // Si no existe hero, validar el resultado, la siguiente forma es básica
//     // element.innerHTML = hero?.name || 'No existe el heroe'; 
    
//     if ( error ) {
//       element.innerHTML = error;
//       return
//     }

//     element.innerHTML = hero.name;
//   }) 
// }

// const findHero = ( id, callback ) => {
//   const hero = heroes.find( hero => hero.id === id );

//   //Ejecutar un callback, no detiene la ejecución, las líneas de abajo se siguien ejecutando, para detenerlo, retornar la función "return;"
//   if ( !hero ) {
//     //no retornar el callback -> NO -> return callback();
//     callback( `Hero with id ${ id } not found` );
//     return; //Esto regresa undefined
//   }

//   //En esta parte estoy definiendo cuantos argumentos ingresarán en el callback
//   callback( null, hero );
// }

// //!Callback Hell
export const callbacksComponent = ( element ) => {
  
  const id1 = '5d86371f1efebc31def272e2';
  const id2 = '5d86371f2343e37870b91ef1';

  findHero( id1, ( error1, hero1 ) => { 
    if ( error1 ) {
      element.innerHTML = error1;
      return;
    }
    
    findHero( id2, (error2, hero2) => {
      if ( error2 ) {
        element.innerHTML = error2;
        return;
      }

      element.innerHTML = ` ${ hero1.name } / ${ hero2.name } `;

    });
  });
}

const findHero = ( id, callback ) => {
  const hero = heroes.find( hero => hero.id === id );

  if ( !hero ) {
    callback( `Hero with id ${ id } not found` );
    return;
  }
  

  callback( null, hero );
}