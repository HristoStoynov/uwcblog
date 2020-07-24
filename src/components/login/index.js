import React, { Component } from 'react'
import Input from '../input'
import { Link, Redirect } from 'react-router-dom'
import styles from './index.module.css'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    changeUsername = value => {
        this.setState({
            username: value
        })
    }

    changePassword = value => {
        this.setState({
            password: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {
            username,
            password
        } = this.state

        async function postData(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return response.json();
        }

        postData('http://localhost:8000/api/user/login', { username: username, password: password })
            .then(data => {
                return (
                    <Redirect to="/" />
                )
            });
    }

    render() {

        const {
            username,
            password
        } = this.state



        return (
            <form className={styles.loginSector} onSubmit={this.handleSubmit}>
                <h2 className={styles.loginComp}>Log In</h2>
                <Input value={username} id="username" label="Username" onChange={this.changeUsername} />
                <Input value={password} id="password" label="Password" onChange={this.changePassword} type="password" />
                <p className={styles.loginComp}>Don't have an account? <Link to="/register">Register</Link></p>
                <button type="submit" value="Submit" className={styles.loginBtn}>Log In</button>
            </form>
        )
    }
}

export default Login