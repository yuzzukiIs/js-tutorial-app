import styles from '../styles.module.css';
import './style.css';

const IntroductionPage = (props) => {
    return (
        <div className="introductionPage">
            <div className={styles.contentTitle}>{props.introductionPage[0].themeName}</div>
            <div className="introductionPage__contentColumn">
                <div className={styles.content}>{props.introductionPage[1].text}</div>
                <div className={styles.content}>{props.introductionPage[2].text}</div>
                <div className={styles.content}>{props.introductionPage[3].text}</div>
                <div className={styles.content}>{props.introductionPage[4].text}</div>
                <li className="content__list">{props.introductionPage[5].text}</li>
                <li className="content__list">{props.introductionPage[6].text}</li>
                <li className="content__list">{props.introductionPage[7].text}</li>
                <li className="content__list">{props.introductionPage[8].text}</li>
                <li className="content__list">{props.introductionPage[9].text}</li>
                <div className={styles.content}>{props.introductionPage[10].text}</div>
            </div>
        </div>
    );
}

export default IntroductionPage;