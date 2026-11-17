

import { Component } from 'react';
import FCResult from '../FunctionComps/FCResult';
import FCInputs from '../FunctionComps/FCInputs';

export default class CCMyDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      res: 0
    };

  }


  getRes = (res) => {
    this.setState({res : res});
  }


  render() {
    console.log('render');
    
    return (
      <div style={{ border: '2px dashed red', margin: 10, padding: 10 }}>
        <h3>My Demo</h3>
        <FCInputs sendRes={this.getRes} />
        <FCResult res={this.state.res} />
      </div>
    )
  }
}
