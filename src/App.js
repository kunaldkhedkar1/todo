import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputItem from './components/InputItem';
import ToDoList from './components/ToDoList';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
var store = createStore(reducers);
class App extends Component {
  constructor(props){
    super(props);
    this.state = { items : []};
  }



  addItem = (item) => {
    let items = [...this.state.items];
    items.push(item);
    this.setState({items})
  }

  removeItem = (index) => {
    console.log('index:', index);
    let items = [...this.state.items];
    items.splice(index, 1);
    this.setState({items});
  };

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <InputItem addItem={this.addItem}/>
        <ToDoList items={this.state.items} removeItem={this.removeItem} />
      </div>
      </Provider>
    );
  }
}

export default App;
