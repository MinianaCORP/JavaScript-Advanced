import { heroes } from "../data/heroes";

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
  }) 
}

const findHero = ( id, callback ) => {
  const hero = heroes.find( hero => hero.id === id );

  if ( !hero ) {
    callback( `Hero with id ${ id } not found` );
    return;
  }
  

  callback( null, hero );
}

