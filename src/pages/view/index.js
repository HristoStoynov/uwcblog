import React, { Component } from 'react'
import styles from './index.module.css'
import Context from '../../Context'
import { withRouter, Link } from "react-router-dom"
import getCookie from '../../utils/cookie'

class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: null,
            description: null,
            imageUrl: null,
            createdAt: null,
            creator: null,
            id: null
        }
    }

    static contextType = Context

    componentDidMount() {
        this.getPost(this.props.match.params.id)
    }

    getPost = async (id) => {
        const response = await fetch(`http://localhost:8000/api/post/getOne?id=${id}`)

        const post = await response.json()
        this.setState({
            title: post.title,
            description: post.description,
            imageUrl: post.imageUrl,
            createdAt: post.createdAt,
            creator: post.creator,
            id: post._id
        })
    }

    handleDelete = async (event) => {
        event.preventDefault()

        const {
            id
        } = this.state

        const body = {
            userId: this.context.id
        }

        try {
            fetch(`http://localhost:8000/api/post/delete?id=${id}`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getCookie('x-auth-token')
                }
            })
                .this((val) => {
                    this.props.history.push('/')
                })
                .catch(e => {
                    return console.log(e)
                })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const {
            title,
            description,
            imageUrl,
            createdAt,
            creator,
            id
        } = this.state

        const editUrl = `/edit/${id}`

        return (
            <div>
                <h1 className={styles.title}>{title}</h1>
                <h5 className={styles.subtitle}>{createdAt}</h5>
                {this.context.id !== creator ? null : (
                    <div className={styles.sector}>
                        <div className={styles.editForm}>
                            <Link className={styles.editBtn} to={editUrl}>Edit</Link>
                        </div>
                        <form onSubmit={this.handleDelete} className={styles.deleteForm}>
                            <button type="submit" value="Submit" className={styles.deleteBtn}>Delete</button>
                        </form>
                    </div>
                )}
                <br />
                <p className={styles.paragraph}>{description}</p>
                <img className={styles.image} src={imageUrl} alt=" " />
            </div>
        )
    }
}

export default withRouter(View)