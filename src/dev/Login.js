import React, { Component } from 'react'
import firebase from '../firebase'

class Login extends Component {
  state = {
    user: firebase.auth().currentUser,
    pending: false,
  }

  constructor(props) {
    super(props)
  }

  signInWithPopup = () => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION) // 인증 상태 지속성 설정
      .then(function() {
        const provider = new firebase.auth.GoogleAuthProvider()
        return firebase.auth().signInWithPopup(provider)
      })
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        console.log(token)
        // The signed-in user info.
        var user = result.user
        console.log(user)
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
      })
  }

  styles = {
    container: {
      textAlign: 'center'
    },
    img: {
      width: 100,
      borderRadius: 50
    }
  }

  render() {
    const { user } = this.state
    // console.log('user :', this.state.user);

    if (user != null) {
      // name = user.displayName;
      // email = user.email;
      // photoUrl = user.photoURL;
      // emailVerified = user.emailVerified;
      // uid = user.uid; 
    }

    if (this.state.pending) return null;

    return (
      <div>
        {
          !user 
            ? <button onClick={this.handleClickLogin}>로그인</button>
            : (
              <div style={this.styles.container}>
                <img style={this.styles.img} src={user.photoURL} alt="사용자 이미지"/>
                <div>{user.displayName}</div>
                <div>{user.email}</div>
                <div>{user.uid}</div>
              </div>
            )
        }
      </div>
    )
  }

  componentDidMount() {
    this.setState({ ...this.state, pending: true })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ ...this.state, user, pending: false })
      } else {
        this.signInWithPopup()
      }
    });
  }
  
}

export default Login
