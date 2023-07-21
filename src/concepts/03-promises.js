import { heroes } from "../data/heroes";

export const promiseCompenent = ( element ) => {
  const renderHero = ( hero ) => {
    element.innerHTML = hero.name;
  }

  const renderError = ( error ) => {
    element.innerHTML = `
      <h1>Error:</h1>
      <h3>${ error }</h3>
    `;
  }

  const renderTwoHeros = ( hero1, hero2 ) => {
    element.innerHTML = `
      <h3>${ hero1.name }</h3>
      <h3>${ hero2.name }</h3>
    `;
  }

  const id1 = '5d86371f1efebc31def272e2';
  const id2 = '5d86371f2343e37870b91ef1';
  
  // //!Ejecución normal
  // findHero( id1 )
  // .then( superHero => renderHero( superHero ) )
  // .catch( superHeroe => renderError( superHeroe ) );
  //Cuando se envían parámetros a una función flecha en el mismo orden se puede simplificar de la siguiente manera
  
  // //!Ejecución simplificada
  // findHero( id1 )
  //   .then( renderHero )
  //   .catch( renderError );

  
  // //!Promise Hell ( promesas anidades )
  // findHero( id1 )
  //   .then( ( _hero1 ) => {

  //     findHero( id2 )
  //     .then( ( hero2 ) => {
  //       renderTwoHeros( _hero1, hero2 );
  //     })
  //     .catch( renderError );
      
  //   })
  //   .catch( renderError );

  
  // //!Evitar el Promise Hell, solo cuando la ejecución de la promesa 2 no depende del resultado de la promesa 1;
  // let hero1;
  // findHero( id1 )
  //   .then( hero => {
  //     hero1 = hero;
  //     return findHero( id2 )
  //   })
  //   .then(
  //     _hero => {
  //       renderTwoHeros( hero1, _hero );
  //     }
  //   )
  //   .catch( renderError );

  // //!Promise All
  //Con que solo 1 promesa de error, se ejecuta el catch
  Promise.all([
    findHero( id1 ),
    findHero( id2 )
  ])
  //Desestructuración de argumentos
  .then(([ hero1, hero2 ]) => renderTwoHeros( hero1, hero2 ) )
  .catch( renderError );
}

const findHero = ( id ) => {

  return new Promise(( resolve, reject ) => {
    const hero = heroes.find( hero => hero.id == id );
    
    if ( hero ) {
      resolve( hero );
      return;
    }

    reject( `Hero with ${ id } not found` );
  });
}