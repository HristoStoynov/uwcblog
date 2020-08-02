import React, { Component } from 'react'
import UserContext from './Context'

function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return cookieValue ? cookieValue[2] : null;
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: null,
      id: null,
    }
  }

  logIn = (id) => {
    this.setState({
      loggedIn: true,
      id: id
    })
  }

  logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    this.setState({
      loggedIn: false
    })
  }

  componentDidMount() {
    const token = getCookie('x-auth-token')

    if (!token) {
      this.logOut()
      return
    }

    fetch('http://localhost:8000/api/user/verify', {
      method: 'POST',
      body: JSON.stringify({
        token
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(promise => {
      console.log(promise)
      return promise.json()
    }).then(response => {
      if (response.status) {
        this.logIn(
          response.user._id
        )
      } else {
        this.logOut()
      }
    })
  }

  render() {
    const {
      loggedIn,
      id
    } = this.state

    if (loggedIn === null) {
      return (<div>Loading...</div>)
    }

    return (
      <UserContext.Provider value={{
        loggedIn,
        id: id,
        logIn: this.logIn,
        logOut: this.logOut
      }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default App