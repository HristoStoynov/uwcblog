import React, { Component } from 'react'
//import styles from './index.module.css'

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
                {title}
                <br />
                {description}
                <img src={imageUrl} alt=" " />
                {createdAt}
            </div>
        )
    }
}

export default View