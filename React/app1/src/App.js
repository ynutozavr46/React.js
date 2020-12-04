import React, {Component} from 'react';
import './components/UserComponent'
import {cars} from './database/cars'
import UserComponent from "./components/UserComponent";

class App extends Component {
  render() {
    return (
        <div>
            {
                cars.map((cars,index)=>{
                    let css=index%2 ? 'purple':'black'
                    return(
                        <UserComponent item={cars} css={css} key={index}/>
                    )
                })
            }
        </div>
    );
  }
}

export default App;
