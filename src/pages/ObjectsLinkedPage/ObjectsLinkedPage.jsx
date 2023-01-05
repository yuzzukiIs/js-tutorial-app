import styles from '../styles.module.css';
import './style.css';

const ObjectsLinkedPage = (props) => {
    return (
        <div className="objectsLinkedPage">
            <div className={styles.contentTitle}>{props.objectsLinkedPage[0].themeName}</div>
            <div className="objectsLinkedPage__column">
                <div className={styles.content}>{props.objectsLinkedPage[1].text}</div>
                <div className={styles.content}>{props.objectsLinkedPage[2].text}</div>
                <div className="objectsLinkedPage__contentCode1">
                    <code>{props.objectsLinkedPage[3].code}</code>
                    <code>{props.objectsLinkedPage[4].code}</code>
                    <code>{props.objectsLinkedPage[5].code}</code>
                    <code>{props.objectsLinkedPage[6].code}</code>
                    <code>{props.objectsLinkedPage[7].code}</code>
                    <code>{props.objectsLinkedPage[8].code}</code>
                </div>
                <div className={styles.content}>{props.objectsLinkedPage[9].text}</div>
            </div>
        </div>
    );
}

export default ObjectsLinkedPage;