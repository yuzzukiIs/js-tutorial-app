import styles from '../styles.module.css';
import './style.css';

const ConstantsLinkedPage = (props) => {
    return (
        <div className="constantsLinkedPage">
            <div className={styles.contentTitle}>{props.constantsLinkedPage[0].themeName}</div>
            <div className="constantsLinkedPage__column">
                <div className={styles.content}>{props.constantsLinkedPage[1].text}</div>
                <div className={styles.content}>{props.constantsLinkedPage[2].text}</div>
                <div className={styles.content}>{props.constantsLinkedPage[3].text}</div>
                <div className={styles.content}>{props.constantsLinkedPage[4].text}</div>
                <div className={styles.content}>{props.constantsLinkedPage[5].text}</div>
                <div className={styles.content}>{props.constantsLinkedPage[6].text}</div>
                <div className={styles.content}>{props.constantsLinkedPage[7].text}</div>
                <div className={styles.content}>{props.constantsLinkedPage[8].text}</div>
                <div className="constantsLinkedPage__contentCode1">
                    <code>{props.constantsLinkedPage[9].code}</code>
                    <code>{props.constantsLinkedPage[10].code}</code>
                </div>
                <div className={styles.content}>{props.constantsLinkedPage[11].text}</div>
                <div className={styles.content}>{props.constantsLinkedPage[12].text}</div>
                <div className={styles.content}>{props.constantsLinkedPage[13].text}</div>
            </div>
        </div>
    );
}

export default ConstantsLinkedPage;