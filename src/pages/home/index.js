import React, { Component } from 'react'
import Post from '../../components/post';
import styles from './index.module.css'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            searchValue: ''
        }
    }

    searchChange = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    getPosts = async () => {
        const promise = await fetch('http://localhost:8000/api/post/getAll')
        const posts = await promise.json()
        this.setState({
            posts
        })
    }

    renderPosts(searchValue) {
        const { posts } = this.state

        let postArray = [];

        posts.map(genPost => {
            return postArray.unshift(genPost)
        })

        const r = `.*${searchValue.toLowerCase()}.*`
        const regex = new RegExp(r)

        return postArray.map(post => {
            if (post.title.toLowerCase().match(regex)) {
                return (
                    <Post key={post._id} {...post} />
                )
            }
            return (
                <div></div>
            )
        })
    }

    componentDidMount() {
        this.getPosts()
    }

    render() {
        const { searchValue } = this.state
        const yearClasses = styles.timeline__item + " " + styles.timeline__itemyear

        return (
            <div>
                <h1 className={styles.timelineheading}>My UWC Timeline</h1>
                <div className={styles.searchBox}>
                    <input type="text" placeholder="Search by title" value={searchValue} className={styles.searchInput} onChange={this.searchChange}></input>
                </div>
                <div className={styles.timeline}>
                    <h2 className={yearClasses}>2020</h2>
                    {this.renderPosts(searchValue)}
                </div>
            </div>
        )
    }
}

export default Home