import React, { Component } from 'react'
import Input from '../input'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import authenticate from '../../utils/authenticate'
import Context from '../../Context'

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            imageUrl: '',
            createdAt: ''
        }
    }

    static contextType = Context

    changeTitle = value => {
        this.setState({
            title: value
        })
    }

    changeDescription = event => {
        this.setState({
            description: event.target.value
        })
    }

    changeImageUrl = value => {
        this.setState({
            imageUrl: value
        })
    }

    changeCreatedAt = value => {
        this.setState({
            createdAt: value
        })
    }


    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            title,
            description,
            imageUrl,
            createdAt
        } = this.state

        try {
            const body = {
                title: title,
                description: description,
                imageUrl: imageUrl,
                createdAt: createdAt,
                creator: this.context.id
            }
            console.log(body)
            fetch('http://localhost:8000/api/post/create', {
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
        } = this.state

        return (
            <form className={styles.createSector} onSubmit={this.handleSubmit}>
                <h2 className={styles.createComp}>Create Post</h2>
                <Input value={title} id="title" label="Title" onChange={this.changeTitle} />
                <div>
                    <label htmlFor='description'>
                        Description:<br />
                        <textarea id='description' value={description} className={styles.createInput} onChange={this.changeDescription} rows="3" ></textarea>
                    </label>
                </div>
                <Input value={imageUrl} id="imageUrl" label="Image URL" onChange={this.changeImageUrl} />
                <Input value={createdAt} id="createdAt" label="Date" onChange={this.changeCreatedAt} />
                <button type="submit" value="Submit" className={styles.createBtn}>Create</button>
            </form>
        )
    }
}

export default Contact