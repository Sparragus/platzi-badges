import React from 'react';
import ReactDOM from 'react-dom';

//const container = document.getElementById('app');
//const element = <h1>Hola Mundo</h1>;
//ReactDOM.render(element, container);
//const jsx = <h1>Hello, platzi Badges!!</h1>
//const element = React.createElement("a",{href:'https://wikipedia.com',},'Wikipedia') 
const name = "Ever Alfredo"
//const element = React.createElement('h1',{},`hola soy ${name}`)
//const jsx = (<div>
  //   <h1>hola soy {name}</h1>
    // <p>Hola mundo desde Rect</p>
//</div>)

const element = React.createElement('div', {}, 
    React.createElement('h1',{},`hola soy ${name}`),
    React.createElement('p',{},"Estudio para seguridad informatica")
)
   
const container = document.getElementById('app')
ReactDOM.render(element,container)



