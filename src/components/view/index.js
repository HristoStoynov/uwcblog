import React, { Component } from 'react'
import styles from './index.module.css'

class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: null,
            description: null,
            imageUrl: null,
            createdAt: null
        }
    }

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
            createdAt: post.createdAt
        })
    }

    render() {
        const {
            title,
            description,
            imageUrl,
            createdAt
        } = this.state

        return (
            <div>
                <h1 className={styles.title}>{title}</h1>
                <h5 className={styles.subtitle}>{createdAt}</h5>
                <br />
                <p className={styles.paragraph}>{description}</p>
                <img src={imageUrl} alt=" " />
            </div>
        )
    }
}

export default View