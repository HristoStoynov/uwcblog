import React, { Component } from 'react'
import styles from './index.module.css'
import Context from '../../Context'

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

    handleDelete = () => {
        const {
            id
        } = this.state

        try {
            const body = {
                postId: id,
                userId: this.context.id
            }

            fetch('http://localhost:8000/api/post/delete', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.props.history.push('/')
                })
                .catch(e => {
                    console.log('error')
                })
        } catch (e) {
            console.log('error')
        }
    }

    render() {
        const {
            title,
            description,
            imageUrl,
            createdAt,
            creator
        } = this.state

        return (
            <div>
                <h1 className={styles.title}>{title}</h1>
                <h5 className={styles.subtitle}>{createdAt}</h5>
                {this.context.id !== creator ? null : (
                    <div>
                        <button>Edit</button>
                        <button onClick={this.handleDelete}>Delete</button>
                    </div>
                )}
                <br />
                <p className={styles.paragraph}>{description}</p>
                <img className={styles.image} src={imageUrl} alt=" " />
            </div>
        )
    }
}

export default View