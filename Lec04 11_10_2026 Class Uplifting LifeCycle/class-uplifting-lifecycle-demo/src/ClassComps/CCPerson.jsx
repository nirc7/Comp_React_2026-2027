import { Component } from "react";
import FCHeart from "../FuncColmps/FCHeart";
import CChild from "./CCChild";


export default class CCPerson extends Component {
  constructor(props) {
    super(props);

    //let num=7;
    this.number = 9; //Field

    this.state = {
      count: this.props.age,
      color: 'green',
      colorToggle: true
    };

    console.log('ctor');
    //async 5 sec get From DB
    //code...setstate()
  }

  btnAddOne = () => {
    console.log(this.number);
    this.number++;
    console.log(this.number);

    //this.state.count++ //ERR!

    console.log('before', this.state.count);
    this.setState(pervS => ({ count: pervS.count + 1 }));
    //this.setState(pervS => ({ count: pervS.count + 1 }));
    //this.setState({ count: 100 });
    this.setState({ address: 'solkolov 1' });
    console.log('after', this.state.count);

    this.setState({ color: 'red' });

  }


  getData = (data) => {
    console.log('in Parent (Person)', data);
    //code...
  }

  componentDidMount() {
    console.log('componentDidMount');
    ////go get Student form DB 5 sec
    //setaStaTE();
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  btnTog = () => {
    this.setState(prevS => ({ colorToggle: !prevS.colorToggle }));
  }

  render() {
    console.log('render', this.state.count);

    //go get Student form DB 5 sec
    return (
      <div style={{
        margin: 10,
        padding: 10,
        border: 'dashed 2px red',
        borderRadius: 15
      }}>
        <h2>Person</h2>
        id={this.props.id} <br />
        name={this.props.name} <br />
        age={this.props.age} <br />
        this.number={this.number} <br />
        this.state.count={this.state.count} <br />
        {this.state.colorToggle && <div> this.state.color={this.state.color} <br /> </div>}
        this.state.address ={this.state.address} <br />
        <button onClick={this.btnAddOne}>AddOne</button> <br />
        <button onClick={this.btnTog}>Tog Col</button> <br />
        <FCHeart size={this.props.hSize} />
        <CChild sendData={this.getData} />
      </div>
    );
  }
}