import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import asyncComponent from './hoc/asyncComponent';

// import Books from './dev/Books'
// import Login from './dev/Login'

const Books = asyncComponent(() => import('./dev/Books'));
const Login = asyncComponent(() => import('./dev/Login'));
const Firestore = asyncComponent(() => import('./dev/Firestore'));

class App extends Component {
  styles ={
    ul: {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-around',
    }
  }

  render() {
    return (
      <div>
        <ul style={this.styles.ul}>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/login'>LOGIN</Link></li>
          <li><Link to='/books'>BOOKS</Link></li>
          <li><Link to='/firestore'>firestore</Link></li>
        </ul>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} />
        <Route path="/books" component={Books} />
        <Route path="/firestore" component={Firestore} />
      </div>
    )
  }
}

function Home() {
  return <div>hello my home</div>
}

export default App
