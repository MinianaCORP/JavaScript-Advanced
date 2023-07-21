export const asyncAwait2Component = async ( element ) => {

  // //!Aquí se llaman de manera síncrona
  // const value1 = await slowPromise();
  // const value2 = await mediumPromise();
  // const value3 = await fastPromise();

  // //!Aquí de manera asíncrona, solo colocamos await a Promise.all
  const [ value1, value2, value3 ] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise()
  ]);

  console.time('parametro');
  element.innerHTML = `
    value1: ${ value1 } </br>
    value2: ${ value2 } </br>
    value3: ${ value3 } </br>
  `;
  console.timeEnd('parametro');
}

const slowPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve( 'Slow promise' );
  }, 2000);
});

const mediumPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve( 'Medimun promise' );
  }, 1500);
});

const fastPromise = () => new Promise( resolve => {
  setTimeout(() => {
    resolve( 'Fast promise' );
  }, 4000);
});
