import styles from '../styles.module.css';
import './style.css';

const SetsLinkedPage = (props) => {
    return (
        <div className="setsLinkedPage">
            <div className={styles.contentTitle}>{props.setsLinkedPage[0].themeName}</div>
            <div className="setsLinkedPage__column">
                <div className={styles.content}>{props.setsLinkedPage[1].text}</div>
                <div className="setsLinkedPage__contentCode1">
                    <code>{props.setsLinkedPage[2].code}</code>
                    <code>{props.setsLinkedPage[3].code}</code>
                    <code>{props.setsLinkedPage[4].code}</code>
                    <code>{props.setsLinkedPage[5].code}</code>
                </div>
                <div className={styles.content}>{props.setsLinkedPage[6].text}</div>
                <div className="setsLinkedPage__contentCode1">
                    <code>{props.setsLinkedPage[7].code}</code>
                    <code>{props.setsLinkedPage[8].code}</code>
                    <code>{props.setsLinkedPage[9].code}</code>
                    <code>{props.setsLinkedPage[10].code}</code>
                    <code>{props.setsLinkedPage[11].code}</code>
                </div>
            </div>
        </div>
    );
}
 
export default SetsLinkedPage;