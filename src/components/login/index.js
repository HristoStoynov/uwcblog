import React, { Component } from 'react'
import Input from '../input'

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
            <div>
                <Input value={email} id="email" label="Email" />
                <Input value={password} id="password" label="Password" />
            </div>
        )
    }
}

export default Login