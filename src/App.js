import React, { Component } from 'react'
import employees from './employees'
import Employees from './components/employees'


class App extends Component {
  render() {
    return (<Employees employees={employees}/>);
  }
}

export default App; 
