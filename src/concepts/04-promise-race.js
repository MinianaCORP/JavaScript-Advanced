

// el objeto "process" no lo tiene vite, dependiendo del framework podemos acceder a eso, para vite se utiliza import.meta.env

export const promiseRaceComponent = ( element ) => {
  
  element.innerHTML = 'Loading...'

  const renderValue = ( value )  => {
    element.innerHTML = value;
  }

  //Competir endpoints
  Promise.race([
    slowPromise()
    , mediumPromise()
    , fastPromise()
  ])
  .then( renderValue );
}

const slowPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve( 'Slow promise' );
  }, 2000);
});

// //!Da error
// const slowPromise2 = () => {
//   new Promise( resolve => {
//     setTimeout(() => {
//       resolve( 'Slow promise' );
//     }, 2000);
//   })
// }

const mediumPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve( 'Medimun promise' );
  }, 1500);
});

const fastPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve( 'Fast promise' );
  }, 1000);
});

