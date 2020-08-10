import React, { Component } from 'react'
import Input from '../../components/input'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import authenticate from '../../utils/authenticate'
import Context from '../../Context'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            error: false
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
            , (id => {
                this.context.logIn(id)
            })
            , (e => {
                this.setState({
                    error: true
                })
            }))
    }

    render() {

        const {
            username,
            password,
            error
        } = this.state



        return (
            <form className={styles.loginSector} onSubmit={this.handleSubmit}>
                <h2 className={styles.loginComp}>Log In</h2>
                <Input value={username} id="username" label="Username" onChange={this.changeUsername} />
                <Input value={password} id="password" label="Password" onChange={this.changePassword} type="password" />
                <p className={styles.loginComp}>Don't have an account? <Link to="/register">Register</Link></p>
                <button type="submit" value="Submit" className={styles.loginBtn}>Log In</button>
                {error ? (<div className={styles.validator}>Username and password don't match.</div>) : null}
            </form>
        )
    }
}

export default Login