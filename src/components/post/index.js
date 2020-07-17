import React from 'react'
import styles from './index.module.css'

const Post = ({ createdAt, title, imageUrl, _id }) => {
    return (
        <div className={styles.timelinebox}>
            <a href={"/view/" + _id} className={styles.timelinelink}>
                <img src={imageUrl} alt="" className={styles.timelineimg} />
                <div className={styles.imgblur}></div>
                <h3 className={styles.timeline__date}>{createdAt}</h3>
                <h3 className={styles.timeline__title}>{title}</h3>
            </a>
        </div >
    )
}

export default Post