import React from 'react'
import styles from './index.module.css'

const About = () => {
    return (
        <div>
            <h1 className={styles.title}>About</h1>
            <div className={styles.sector}>
                <img className={styles.image} src="https://i.ibb.co/q0zkjpX/1.jpg" alt=" " />
                <div className={styles.p_sector}>
                    <h4 className={styles.p_title}>About me</h4>
                    <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in felis purus. Nullam posuere luctus ullamcorper. Sed iaculis sed sem id venenatis. Donec sit amet purus id sem feugiat porta. Donec ac tortor efficitur, fermentum turpis non, scelerisque tortor. Sed fermentum justo in egestas elementum. Vivamus quis est rutrum, dapibus mauris congue, elementum metus. Suspendisse vel fermentum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus auctor consectetur lorem, eu efficitur ligula mattis ac. Nullam eu metus ut nisl pretium molestie. Vivamus semper lacinia purus ut faucibus. In hac habitasse platea dictumst. Fusce et risus eleifend, egestas nisi et, posuere velit. Cras nec dictum magna. In volutpat gravida euismod.</p>
                </div>
            </div>
            <div className={styles.sector}>
                <h4 className={styles.p_title}>About UWC</h4>
                <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in felis purus. Nullam posuere luctus ullamcorper. Sed iaculis sed sem id venenatis. Donec sit amet purus id sem feugiat porta. Donec ac tortor efficitur, fermentum turpis non, scelerisque tortor. Sed fermentum justo in egestas elementum. Vivamus quis est rutrum, dapibus mauris congue, elementum metus. Suspendisse vel fermentum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus auctor consectetur lorem, eu efficitur ligula mattis ac. Nullam eu metus ut nisl pretium molestie. Vivamus semper lacinia purus ut faucibus. In hac habitasse platea dictumst. Fusce et risus eleifend, egestas nisi et, posuere velit. Cras nec dictum magna. In volutpat gravida euismod.</p>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                    src='https://www.youtube.com/embed/jRn_FTgcJv0?autoplay=0&origin=http://example.com'
                    frameBorder="0"></iframe>
            </div>
            <div>
                <h4 className={styles.p_title}>About the Blog</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in felis purus. Nullam posuere luctus ullamcorper. Sed iaculis sed sem id venenatis. Donec sit amet purus id sem feugiat porta. Donec ac tortor efficitur, fermentum turpis non, scelerisque tortor. Sed fermentum justo in egestas elementum. Vivamus quis est rutrum, dapibus mauris congue, elementum metus. Suspendisse vel fermentum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus auctor consectetur lorem, eu efficitur ligula mattis ac. Nullam eu metus ut nisl pretium molestie. Vivamus semper lacinia purus ut faucibus. In hac habitasse platea dictumst. Fusce et risus eleifend, egestas nisi et, posuere velit. Cras nec dictum magna. In volutpat gravida euismod.</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png" alt=" " />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/220px-Expressjs.png" alt=" " />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png" alt=" " />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/100px-CSS3_logo_and_wordmark.svg.png" alt=" " />

            </div>
        </div>
    )
}

export default About