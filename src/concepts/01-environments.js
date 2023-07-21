

// el objeto "process" no lo tiene vite, dependiendo del framework podemos acceder a eso, para vite se utiliza import.meta.env

export const enviromentsComponent = ( element ) => {
  
  console.log( import.meta.env );
  
  const html = `
    Dev: ${ import.meta.env.DEV } <br/>
    Prod: ${ import.meta.env.PROD } <br/>
    KEY: ${ import.meta.env.VITE_API_KEY } <br/>
    URL: ${ import.meta.env.VITE_BASE_URL } <br/>
  `;

  element.innerHTML = html;
}