import React, { Component } from 'react'
import Input from '../input'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import authenticate from '../../utils/authenticate'
import Context from '../../Context'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    static contextType = Context

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

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            username,
            password
        } = this.state

        await authenticate('http://localhost:8000/api/user/login', { username: username, password: password }
            , (user => {
                this.context.logIn(user)
                this.props.history.push('/')
            })
            , (e => {
                console.log("error")
            }))
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