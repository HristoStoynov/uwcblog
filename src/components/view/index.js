import React from 'react'
//import styles from './index.module.css'

const View = () => {
    return (
        <div className={styles.notfoundcontainer}>
            <img src={image} alt="404" className={styles.img404} />
            <h1>Oopsie... Page not found... :(</h1>
        </div>
    )
}

export default View