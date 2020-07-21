import React, { Component } from 'react'
import styles from './index.module.css'

class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: null,
            description: null
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
            description: post.description
        })
    }

    render() {
        const {
            title,
            description
        } = this.state

        return (
            <div>
                {title}
                {description}
            </div>
        )
    }
}

export default View