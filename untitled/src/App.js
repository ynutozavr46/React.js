import React, {Component} from 'react';

class App extends Component {
  // flag=false
  test=()=>{
    // this.flag=!this.flag
    this.setState({flag:!this.state.flag})
    console.log('hi',!this.state.flag)

  }
  state={flag:false}
  render() {
    return (
        <div>
          <button onClick={this.test}>Click{}</button>
          {/*this.flag.toString()*/}
          <users/>
        </div>
    );
  }
}

export default App;
