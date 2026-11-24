import { Component } from 'react'

export default class CCInputs extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '' };
  }

  cngName = (e) => {
    this.setState({ name: e.target.value.toUpperCase() });
  }


  btnAddPerson = () => {
    this.props.sendName(this.state.name);
    this.setState({ name: '' });
  }

  render() {
    return (
      <div>
        <h3>CCInputs</h3>
        <div style={{ border: '2px red solid', margin: 10, padding: 10 }}>
          <h3>Inputs</h3>
          NAME: <input type="text"
            placeholder="please enter ur name..."
            value={this.state.name}
            onChange={this.cngName} /> <br />
          {this.state.name} <br />
          <button onClick={this.btnAddPerson} >Add Person</button>
        </div>
      </div>
    )
  }
}
