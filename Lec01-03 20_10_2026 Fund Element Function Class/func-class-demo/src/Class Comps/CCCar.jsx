import { Component } from "react";

export default class CCCar extends Component {
  constructor(props) {
    super(props);

    let num = 7;
    this.number = 8;

    this.state = {
      year: 2000,
      speed: this.props.speed + 50
    };

  }

  btnAddOne = () => {
    //ERR!
    // this.number++; 
    // console.log(this.number);
    //this.state.year++;
    //this.state.year=888;


    //OK
    //this.setState({ year: 3000, speed: 400 });
    console.log('before:', this.state.speed);
    this.setState(pervS => ({ year: 3000, speed: pervS.speed + 1 }));
    console.log('after', this.state.speed);
  }

  render() {


    console.log('render:', this.state.speed);


    return (
      <div style={{
        border: 'solid red 2px',
        margin: 10,
        padding: 10,
        borderRadius: 5
      }}>
        <h3>Car</h3>
        model= BMW <br />
        props.speed = {this.props.speed} <br />
        number = {this.number} <br />
        <button onClick={this.btnAddOne} >Add One</button> <br />
        year={this.state.year} <br />
        state.speed = {this.state.speed}
      </div>
    );
  }
}