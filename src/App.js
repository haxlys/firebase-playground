import React, { Component } from 'react'

import Books from './dev/Books'
import Login from './dev/Login'

class App extends Component {
  render() {
    return (
      <div>
        <Books />
        <Login />
      </div>
    )
  }
}

export default App
