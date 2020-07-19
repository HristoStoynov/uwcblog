import React, { Component } from 'react'
import Input from '../input'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: ' ',
            password: ' '
        }
    }

    render() {

        const {
            email,
            password
        } = this.state



        return (
            <div className={styles.loginSector}>
                <h2 className={styles.loginComp}>Log In</h2>
                <Input value={email} id="email" label="Email" />
                <Input value={password} id="password" label="Password" />
                <p className={styles.loginComp}>Don't have an account? <Link to="/register">Register</Link></p>
                <button className={styles.loginBtn}>Log In</button>
            </div>
        )
    }
}

export default Login