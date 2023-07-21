

export const generatorFunctionsComponent = ( element ) => {
  
  // //!Ejemplo de lo que muestra la Generator Function
  // const myGenerator = myFirstGeneratorFunction();
  // console.log( myGenerator.next() );
  // console.log( myGenerator.next() );
  // console.log( myGenerator.next() );
  // console.log( myGenerator.next() );
  // console.log( myGenerator.next() );
  // console.log( myGenerator.next() );

  const genID = idGenerator();

  const button = document.createElement( 'button' );
  button.innerHTML = 'Click me';
  element.append( button );

  const renderButton = () => {
    const { value } = genID.next();
    button.innerHTML = `Click ${ value }`;
  }

  // //!Versión detallada
  button.addEventListener( 'click', ( element ) => renderButton() );
  //Como no le paso ningun parámetro a la funcion y al trabajar el callback de addEventListener no utilizo el elemento podría ser así 
  // -> button.addEventListener( 'click', () => renderButton() );

  // //!Versión simplificada
  button.addEventListener( 'click', renderButton );
}

function* idGenerator() {
  let currentID = 0;
  while (true) {
    yield ++currentID;
  }
}

function* myFirstGeneratorFunction() {

  //como un return
  yield 'Primer valor';
  yield 'Segundo valor';
  yield 'Tercero valor';
  yield 'Cuarto valor';

  return 'No hay valores';
  yield 'Ya no se pueden hacer nada';
}