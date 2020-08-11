import React, { Component } from 'react'
import styles from './index.module.css'
import Context from '../../Context'
import { withRouter, Link } from "react-router-dom";
import Input from '../../components/input'

class Edit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            title: '',
            titleError: false,
            description: '',
            descriptionError: false,
            imageUrl: '',
            imageUrlError: false,
            createdAt: '',
            createdAtError: false,
            editSuccess: false
        }
    }

    static contextType = Context

    changeTitle = value => {
        this.setState({
            title: value
        })

        if (!value.match(/^[A-Za-z0-9_ ]{5,}$/)) {
            this.setState({
                titleError: true
            })
        } else {
            this.setState({
                titleError: false
            })
        }
    }

    changeDescription = event => {
        this.setState({
            description: event.target.value
        })

        if (!event.target.value.match(/^[A-Za-z0-9_ ]{20,}$/)) {
            this.setState({
                descriptionError: true
            })
        } else {
            this.setState({
                descriptionError: false
            })
        }
    }

    changeImageUrl = value => {
        this.setState({
            imageUrl: value
        })

        if (!value.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/).*$/)) {
            this.setState({
                imageUrlError: true
            })
        } else {
            this.setState({
                imageUrlError: false
            })
        }
    }

    changeCreatedAt = value => {
        this.setState({
            createdAt: value
        })

        if (!value.match(/^[0-9]{2} [A-Za-z]{3,4} [0-9]{4}$/)) {
            this.setState({
                createdAtError: true
            })
        } else {
            this.setState({
                createdAtError: false
            })
        }
    }

    componentDidMount() {
        this.getPost(this.props.match.params.id)
    }

    getPost = async (id) => {
        const response = await fetch(`http://localhost:8000/api/post/getOne?id=${id}`)

        const post = await response.json()
        this.setState({
            id: post._id,
            title: post.title,
            description: post.description,
            imageUrl: post.imageUrl,
            createdAt: post.createdAt,
            creator: post.creator,
            id: post._id
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            id,
            title,
            description,
            imageUrl,
            createdAt,
            titleError,
            descriptionError,
            imageUrlError,
            createdAtError
        } = this.state

        if (title && description && createdAt && imageUrl && !titleError && !descriptionError && !imageUrlError && !createdAtError) {
            try {
                const body = {
                    title: title,
                    description: description,
                    imageUrl: imageUrl,
                    createdAt: createdAt,
                    creator: this.context.id
                }

                fetch(`http://localhost:8000/api/post/update?id=${id}`, {
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
                        this.setState({
                            editSuccess: true
                        })
                    })
            } catch (e) {
                this.setState({
                    editSuccess: true
                })
            }
        } else {
            this.setState({
                editSuccess: true
            })
        }
    }

    render() {

        const {
            title,
            titleError,
            description,
            descriptionError,
            imageUrl,
            imageUrlError,
            createdAt,
            createdAtError,
            editSuccess
        } = this.state

        return (
            <form className={styles.editSector} onSubmit={this.handleSubmit}>
                <h2 className={styles.editComp}>Edit Post</h2>
                <Input value={title} id="title" label="Title" onChange={this.changeTitle} />
                {titleError ? (<span className={styles.validator}>Title should be longer than 5 characters</span>) : null}
                <div>
                    <label htmlFor='description'>
                        Description:<br />
                        <textarea id='description' value={description} className={styles.editInput} onChange={this.changeDescription} rows="3" ></textarea>
                    </label>
                </div>
                {descriptionError ? (<span className={styles.validator}>Description should be longer than 20 characters</span>) : null}
                <Input value={imageUrl} id="imageUrl" label="Image URL" onChange={this.changeImageUrl} />
                {imageUrlError ? (<span className={styles.validator}>Image URL should be a valid link</span>) : null}
                <Input value={createdAt} id="createdAt" label="Date" onChange={this.changeCreatedAt} />
                {createdAtError ? (<div><span className={styles.validator}>Date should be DD Month YYYY</span></div>) : null}
                <button type="submit" value="Submit" className={styles.editBtn}>Edit</button>
                {editSuccess ? (<div><span className={styles.validator}>Check if everything is valid</span></div>) : null}
            </form>
        )
    }
}

export default withRouter(Edit)