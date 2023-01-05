import styles from '../styles.module.css';
import './style.css';

const ArraysLinkedPage = (props) => {
    return (
        <div className="arraysLinkedPage">
            <div className={styles.contentTitle}>{props.arraysLinkedPage[0].themeName}</div>
            <div className="arraysLinkedPage__column">
                <div className={styles.content}>{props.arraysLinkedPage[1].title}</div>
                <div className="arraysLinkedPage__contentCode1">
                    <code>{props.arraysLinkedPage[2].code}</code>
                    <code>{props.arraysLinkedPage[3].code}</code>
                    <code>{props.arraysLinkedPage[4].code}</code>
                </div>
                <div className={styles.content}>{props.arraysLinkedPage[5].text}</div>
                <div className={styles.content}>{props.arraysLinkedPage[6].text}</div>
                <div className="arraysLinkedPage__contentCode1">
                    <code>{props.arraysLinkedPage[7].code}</code>
                    <code>{props.arraysLinkedPage[8].code}</code>
                    <code>{props.arraysLinkedPage[9].code}</code>
                    <code>{props.arraysLinkedPage[10].code}</code>
                </div>
                <div className={styles.content}>{props.arraysLinkedPage[11].text}</div>
            </div>
        </div>
    );
}

export default ArraysLinkedPage;