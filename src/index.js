import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./global.css";
import App from './components/App'

//para poder tener este elemento asi es de vital importancia importar import React from 'react' esta es la unica forma de poder hacerlo de lo contrario obtendre error 
const container = document.getElementById('app');

ReactDOM.render(<App />, container)

/*
ReactDOM.render(, container) //asegurarnos de siempre darle un elemento a ReactDOM.render 
  
  class Toggle extends React.Component {
    constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,container);

const Welcome = props => <h1>Hi {props.name}</h1>;

const Clock = () => {
  const [name, setName] = React.useState('')  
  const printName = e =>  setName(e.target.value)

  return  (
  <div>
    <input placeholder="Write your name"  onChange={printName} value={name} />
    <Welcome name={name}/> 
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
    <img src={"https://i.blogs.es/594843/chrome/450_1000.jpg"} ></img>
  </div>
  
  
)

}

const tick = () => {
    ReactDOM.render(<Clock />, container);
}
  
setInterval(tick, 1000);
// ReactDOM.render(__qué__, __dónde__);


// const jsx = <h1>Hola {"Los elementos dentro de estas llaves nos permiten introducir expresiones de js"}</h1>
//las expresiones en js se interpretn y se evaluan. 
//los valores que sean falsos como el 0,null,undefined etc, no se mostraran 

// Los componentes deben de vivir en su propio archivo 

 

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,container);
*/
