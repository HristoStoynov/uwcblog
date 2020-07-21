import React, { Component } from 'react'
import Input from '../input'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: ' ',
            password: ' ',
            repeatPassword: ' '
        }
    }

    render() {

        const {
            email,
            password,
            repeatPassword
        } = this.state



        return (
            <div className={styles.registerSector}>
                <h2 className={styles.registerComp}>Register</h2>
                <Input value={email} id="email" label="Email" />
                <Input value={password} id="password" label="Password" />
                <Input value={repeatPassword} id="repeatPassword" label="Repeat Password" />
                <p className={styles.registerComp}>Already have an account? <Link to="/login">Log In</Link></p>
                <button className={styles.registerBtn}>Register</button>
            </div>
        )
    }
}

export default Register