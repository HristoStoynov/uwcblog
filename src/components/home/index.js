import React, { Component } from 'react'
import Post from '../post';
import styles from './index.module.css'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    getPosts = async () => {
        const promise = await fetch('http://localhost:8000/api/post/getAll')
        const posts = await promise.json()
        this.setState({
            posts
        })
    }

    renderPosts() {
        const { posts } = this.state

        let postArray = [];

        posts.map(genPost => {
            return postArray.unshift(genPost)
        })

        return postArray.map(post => {
            return (
                <Post key={post._id} {...post} />
            )
        })
    }

    componentDidMount() {
        this.getPosts()
    }

    render() {
        const yearClasses = styles.timeline__item + " " + styles.timeline__itemyear

        return (
            <div>
                <h1 className={styles.timelineheading}>My UWC Timeline</h1>
                <div className={styles.timeline}>
                    <h2 className={yearClasses}>2020</h2>
                    {this.renderPosts()}
                </div>
            </div>
        )
    }
}

export default Home