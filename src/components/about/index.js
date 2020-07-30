import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1 className={styles.title}>About</h1>
            <div className={styles.sector}>
                <div className={styles.imageBox}>
                    <img className={styles.image} src="https://i.ibb.co/q0zkjpX/1.jpg" alt=" " />
                </div>
                <div className={styles.p_sector}>
                    <h4 className={styles.p_title}>About me</h4>
                    <p className={styles.paragraph}>My name is Hristo Stoynov, I was born and raised in Blagoevgrad, Bulgaria. I'm into programming,
                    engineering and hiking. In January 2020, <Link to="/view/5f10a71461cd3a298c161131">I applied for UWC</Link> through my national
                    committee. I'm also an online student at Software University in Sofia.</p>
                </div>
            </div>
            <div className={styles.sector}>
                <div className={styles.p_sector}>
                    <h4 className={styles.p_title}>About UWC</h4>
                    <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in felis purus. Nullam posuere luctus ullamcorper. Sed iaculis sed sem id venenatis. Donec sit amet purus id sem feugiat porta. Donec ac tortor efficitur, fermentum turpis non, scelerisque tortor. Sed fermentum justo in egestas elementum. Vivamus quis est rutrum, dapibus mauris congue, elementum metus. Suspendisse vel fermentum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus auctor consectetur lorem, eu efficitur ligula mattis ac. Nullam eu metus ut nisl pretium molestie. Vivamus semper lacinia purus ut faucibus. In hac habitasse platea dictumst. Fusce et risus eleifend, egestas nisi et, posuere velit. Cras nec dictum magna. In volutpat gravida euismod.</p>
                </div>
                <div className={styles.imageBox}>
                    <iframe className={styles.image} title="aboutvideo" id="ytplayer" type="text/html" width="640" height="360"
                        src='https://www.youtube.com/embed/jRn_FTgcJv0?autoplay=0&origin=http://example.com'
                        frameBorder="0"></iframe>
                </div>
            </div>
            <div className={styles.sector}>
                <h4 className={styles.last_title}>About the Blog</h4>
                <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in felis purus. Nullam posuere luctus ullamcorper. Sed iaculis sed sem id venenatis. Donec sit amet purus id sem feugiat porta. Donec ac tortor efficitur, fermentum turpis non, scelerisque tortor. Sed fermentum justo in egestas elementum. Vivamus quis est rutrum, dapibus mauris congue, elementum metus. Suspendisse vel fermentum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus auctor consectetur lorem, eu efficitur ligula mattis ac. Nullam eu metus ut nisl pretium molestie. Vivamus semper lacinia purus ut faucibus. In hac habitasse platea dictumst. Fusce et risus eleifend, egestas nisi et, posuere velit. Cras nec dictum magna. In volutpat gravida euismod.</p>
                <img className={styles.lang_img} src="https://i.ibb.co/RDtjyrY/lang.png" alt=" " border="0" />
            </div>
        </div>
    )
}

export default About