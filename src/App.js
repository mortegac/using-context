import React, {Component} from 'react';

import Header from './components/header/Header';
import List from './components/list/list';

import './App.css';

export const myFirstContext = React.createContext()

// function App() {
  class App extends Component {
    constructor(...props) {
      super(...props)
      this.data = ['Carmen','Alejandro', 'Ingrid']
  }

    render()
  {
    return (
      <div className="App">
        <myFirstContext.Provider value={this.data}>
          <Header title='Uso de Context'>
            <List/>
          </Header>
        </myFirstContext.Provider>
      </div>
    );
  }
}

export default App;
