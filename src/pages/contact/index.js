import React, { useState, useContext, useEffect } from 'react'
import Context from '../../Context'
import styles from './index.module.css'

const Contact = () => {
    const [text, setText] = useState('')
    //const [answer, setAnswer] = useState('')
    const [comments, setComments] = useState([])

    const MyContext = useContext(Context)

    useEffect(() => {
        getComments()
    })

    const getComments = async () => {
        const promise = await fetch('http://localhost:8000/api/comment/getAll')
        const comment = await promise.json()

        return setComments(comment)
    }

    const changeText = (value) => {
        setText(value)
    }

    const submitText = () => {
        if (text) {
            try {
                const body = {
                    text: text,
                    creator: MyContext.id
                }

                fetch('http://localhost:8000/api/comment/create', {
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
                    })
                    .catch(e => {
                        console.log('error1')
                    })
            } catch (e) {
                console.log('error2')

            }
        } else {
            console.log('error3')

        }
    }

    const submitAnswer = (text) => {
        console.log(text)
    }

    const openAnswer = (id) => {
    }

    return (
        <div>
            <label htmlFor="comment">Leave a message:</label>
            <div>
                <textarea type="text" id="comment" onChange={(e) => changeText(e.target.value)} value={text} />
            </div>
            <button onClick={submitText}>asd</button>
            <div>m
                {comments.map((comment) => {
                return (
                    <div key={comment._id}>
                        <div> {comment.text} </div>
                        <input type="text"></input>
                        <button type="button" className={styles.openAnswer} onClick={openAnswer}>\/</button>
                        <button type="button" className={styles.closeAnswer + comment._id} onClick={submitAnswer.bind(comment.text)}>/\</button>
                        <button type="button" onClick={submitAnswer.bind(comment.text)}>Answer</button>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Contact