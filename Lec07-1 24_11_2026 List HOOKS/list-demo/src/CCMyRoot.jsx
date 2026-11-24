import { Component } from 'react';
import FCInputs from './FCInputs';
import FCPersonsList from './FCPersonsList';
import CCInputs from './CCInputs';

export default class CCMyRoot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: ['avi', 'ben']
    };

  }

  getName = (name) => {
    console.log(name);
    let newNames = [...this.state.names, name];
    console.log(newNames);
    this.setState({ names: newNames });
  }

  render() {
    return (
      <div style={{
        border: '2px purple solid',
        margin: 10,
        padding: 10,
        display: 'flex'
      }}>

        <CCInputs sendName={this.getName}/>
        <FCInputs sendName={this.getName} />
        <FCPersonsList names={this.state.names} />
      </div>
    )
  }
}
