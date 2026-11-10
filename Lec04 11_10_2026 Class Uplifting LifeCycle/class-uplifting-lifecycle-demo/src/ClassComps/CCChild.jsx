import { Component } from "react";


export default class CChild extends Component {
  constructor(props) {
    super(props);
  }

  btnSendD2P = () => {
    this.props.sendData(7);
  }

  render() {
    return (
      <div style={{
        margin: 10,
        padding: 10,
        border: 'dashed 2px yellow',
        borderRadius: 15
      }}>
        <h3>Child</h3>
        <button onClick={this.btnSendD2P} >Send data 2 Parent</button>
      </div>
    );
  }
}