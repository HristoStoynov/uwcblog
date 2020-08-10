import React, { Component } from 'react'
import Input from '../../components/input'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import authenticate from '../../utils/authenticate'
import Context from '../../Context'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            usernameError: false,
            password: '',
            passwordError: false,
            repeatPassword: '',
            repeatPasswordError: false,
            regSuccess: false
        }
    }

    static contextType = Context

    changeUsername = value => {
        this.setState({
            username: value
        })

        if (!value.match(/^[A-Za-z0-9_]{6,16}$/)) {
            this.setState({
                usernameError: true
            })
        } else {
            this.setState({
                usernameError: false
            })
        }
    }

    changePassword = value => {
        this.setState({
            password: value
        })

        if (!value.match(/^[A-Za-z0-9_]{6,16}$/)) {
            this.setState({
                passwordError: true
            })
        } else {
            this.setState({
                passwordError: false
            })
        }
    }

    changeRePassword = value => {
        this.setState({
            repeatPassword: value
        })

        const { password } = this.state

        if (value !== password) {
            this.setState({
                repeatPasswordError: true
            })
        } else {
            this.setState({
                repeatPasswordError: false
            })
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            username,
            password,
            repeatPassword,
            usernameError,
            passwordError,
            repeatPasswordError
        } = this.state

        if (!repeatPasswordError && !usernameError && !passwordError && password && username && repeatPassword) {
            await authenticate('http://localhost:8000/api/user/register', { username: username, password: password, repeatPassword: repeatPassword }
                , (user => {
                    this.context.logIn(user)
                    this.props.history.push('/')
                })
                , (e => {
                    console.log("error")
                }))
        } else {
            this.setState({
                regSuccess: true
            })
        }
    }

    render() {

        const {
            username,
            usernameError,
            password,
            passwordError,
            repeatPassword,
            repeatPasswordError,
            regSuccess
        } = this.state



        return (
            <form className={styles.registerSector} onSubmit={this.handleSubmit}>
                <h2 className={styles.registerComp}>Register</h2>
                <Input value={username} id="username" label="Username" onChange={this.changeUsername} />
                {usernameError ? (<span className={styles.validator}>Username should be longer than 6 characters</span>) : null}
                <Input value={password} id="password" label="Password" onChange={this.changePassword} type="password" />
                {passwordError ? (<span className={styles.validator}>Password should be longer than 6 characters</span>) : null}
                <Input value={repeatPassword} id="repeatPassword" label="Repeat Password" onChange={this.changeRePassword} type="password" />
                {repeatPasswordError ? (<span className={styles.validator}>Passwords should match</span>) : null}
                <p className={styles.registerComp}>Already have an account? <Link to="/login">Log In</Link></p>
                <button type="submit" value="Submit" className={styles.registerBtn}>Register</button>
                <br />
                {regSuccess ? (<span className={styles.validator}>Check if everything is valid</span>) : null}
            </form>
        )
    }
}

export default Register