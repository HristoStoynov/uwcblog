import React, { Component } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import Context from '../../Context'

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    static contextType = Context

    log() {
        this.context.logOut()
        //this.props.history.push('/')
    }

    render() {
        return (
            <footer className={styles.footer}>
                <div className={styles.footertext}>Blog developed by Hristo Stoynov</div>
                <Link to="/create"><span className={styles.postlink}>Post</span></Link>
                {this.context.loggedIn ? <span className={styles.loginlink} onClick={this.log.bind(this)}>Log out</span> : <Link to="/login"><span className={styles.loginlink}>Log in</span></Link>}
            </footer>
        )
    }
}

export default Footer