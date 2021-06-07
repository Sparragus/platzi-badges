import React from 'react';
import ReactDOM from 'react-dom';


//para poder tener este elemento asi es de vital importancia importar import React from 'react' esta es la unica forma de poder hacerlo de lo contrario obtendre error 
const container = document.getElementById('app');

/*
const Welcome = props => <h1>Hi, {props.name}</h1>;

const Clock = () => {
  return  (
  <div>
    <input placeholder="Write your name"></input>
    <Welcome name= "Carlos"/> 
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>)

}

const tick = () => {
    ReactDOM.render(<Clock />, container);
  }
  
  setInterval(tick, 1000);
  // ReactDOM.render(__qué__, __dónde__);

*/

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
