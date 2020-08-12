import React, { useState, useContext, useEffect } from 'react'
import Context from '../../Context'
import styles from './index.module.css'
import getCookie from '../../utils/cookie'

const Contact = () => {
    const [text, setText] = useState('')
    const [answer, setAnswer] = useState({})
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
                        setText('')
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

    const changeAnswer = (id, e) => {
        setAnswer({
            [id]: e
        })
    }

    const submitAnswer = (id) => {

        const body = {
            answer: answer[id]
        }

        if (answer) {
            fetch(`http://localhost:8000/api/comment/answer?id=${id}`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': getCookie('x-auth-token')
                }
            })
                .then(response => {
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }

    return (
        <div>
            <div className={styles.searchDiv}>
                <label htmlFor="comment" className={styles.searchLabel}><h1>Leave a message:</h1></label>
                <div>
                    <textarea className={styles.searchArea} type="text" id="comment" onChange={(e) => changeText(e.target.value)} value={text} />
                </div>
                <button onClick={submitText} className={styles.searchBtn}>Ask</button>
            </div>
            <div>
                {comments.map((comment) => {
                    return (
                        <div key={comment._id}>
                            <div className={styles.questionDiv}>
                                <span className={styles.span}>Q: </span>
                                <span>{comment.text}</span>
                            </div>
                            {comment.answer ? (
                                <div className={styles.answerDiv}>
                                    <span className={styles.span}>A: </span>
                                    <span>{comment.answer}</span>
                                </div>
                            ) : MyContext.loggedIn ? (
                                <div className={styles.answerDiv}>
                                    <input type="text" value={answer[comment._id]} className={styles.answerSearch} onChange={(e) => changeAnswer(comment._id, e.target.value)}></input>
                                    <button onClick={() => submitAnswer(comment._id)}>Answer</button>
                                </div>
                            ) : null}

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

//<button type="button" className={styles.openAnswer} onClick={openAnswer}>\/</button>
//                          <button type="button" className={styles.closeAnswer + comment._id} onClick={submitAnswer.bind(comment.text)}>/\</button>
//                        <button type="button" onClick={submitAnswer.bind(comment.text)}>Answer</button>

export default Contact