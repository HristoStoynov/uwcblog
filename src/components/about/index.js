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
                    <p className={styles.paragraph}>My name is Hristo Stoynov, I was born and raised in Blagoevgrad, Bulgaria in an average family of four.
                    I'm into programming, engineering and hiking. In January 2020, <Link to="/view/5f10a71461cd3a298c161131">I applied for UWC</Link> through my national
                    committee and after the application process I ended up studying in UWC in Mostar. I'm also an online student at Software University in Sofia where I
                    study JavaScript Web Development. </p>
                </div>
            </div>
            <div className={styles.sector}>
                <div className={styles.p_sector}>
                    <h4 className={styles.p_title}>About UWC</h4>
                    <p className={styles.paragraph}>UWC (United World Colleges) is a global education movement that makes education a force to unite people,
                    nations and cultures for peace and a sustainable future. Central to the ethos of UWC is the belief that education can bring together young
                    people from all backgrounds on the basis of their shared humanity, to engage with the possibility of social change through courageous
                    action, personal example and selfless leadership. To achieve this, UWC schools and colleges all over the world deliver a challenging
                    and transformational educational experience to a deliberately diverse group of young people, inspiring them to become agents of
                      positive change in line with UWC’s core values. Today, UWC has 18 schools and colleges on 4 continents, the majority of which focus exclusively on the 16-19 year-old age group.</p>
                </div>
                <div className={styles.imageBox}>
                    <iframe className={styles.image} title="aboutvideo" id="ytplayer" type="text/html" width="640" height="360"
                        src='https://www.youtube.com/embed/jRn_FTgcJv0?autoplay=0&origin=http://example.com'
                        frameBorder="0"></iframe>
                </div>
            </div>
            <div className={styles.sector}>
                <h4 className={styles.last_title}>About the Blog</h4>
                <p className={styles.paragraph}>Thanks for reading my blog. It was made entirely by myself using up-to-date web technologies. The back-end was
                made using Express.js with a mongo database and can be found <a target="_blank" href="https://github.com/HristoStoynov/uwcblog-api">here</a>. The front-end
                was made using React.js, html and css and can be found <a target="_blank" href="https://github.com/HristoStoynov/uwcblog">here</a>.
                The design is similar to the official UWC website but also has many major differences. If you want to use the design for your own UWC blog,
                reach me out on Instagram  @itso.was.here and we can find a way to make it work. The blog is made for a SoftUni Examination on ReactJS course.</p>
                <img className={styles.lang_img} src="https://i.ibb.co/RDtjyrY/lang.png" alt=" " border="0" />
            </div>
        </div>
    )
}

export default About