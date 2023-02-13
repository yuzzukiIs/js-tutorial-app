import styles from '../styles.module.css';
import './style.css';

const VisibilityAreaLinkedPage = (props) => {
    return (
        <div className="visibilityAreaLinkedPage">
            <div className={styles.contentTitle}>{props.visibilityAreaLinkedPage[0].themeName}</div>
            <div className="visibilityAreaLinkedPage__column">
                <div className={styles.content}>{props.visibilityAreaLinkedPage[1].text}</div>
                <div className={styles.content}>{props.visibilityAreaLinkedPage[2].text}</div>
                <div className={styles.content}>{props.visibilityAreaLinkedPage[3].text}</div>
                <div className="visibilityAreaLinkedPage__contentCode3">
                    <code>{props.visibilityAreaLinkedPage[4].code}</code>
                    <code>{props.visibilityAreaLinkedPage[5].code}</code>
                    <code>{props.visibilityAreaLinkedPage[6].code}</code>
                    <code>{props.visibilityAreaLinkedPage[7].code}</code>
                    <code>{props.visibilityAreaLinkedPage[8].code}</code>
                    <code>{props.visibilityAreaLinkedPage[9].code}</code>
                    <code>{props.visibilityAreaLinkedPage[10].code}</code>
                    <code>{props.visibilityAreaLinkedPage[11].code}</code>
                    <code>{props.visibilityAreaLinkedPage[12].code}</code>
                    <code>{props.visibilityAreaLinkedPage[13].code}</code>
                    <code>{props.visibilityAreaLinkedPage[14].code}</code>
                    <code>{props.visibilityAreaLinkedPage[15].code}</code>
                    <code>{props.visibilityAreaLinkedPage[16].code}</code>
                    <code>{props.visibilityAreaLinkedPage[17].code}</code>
                </div>
                <div className={styles.content}>{props.visibilityAreaLinkedPage[18].text}</div>
                <div className={styles.content}>{props.visibilityAreaLinkedPage[19].text}</div>
                <div className={styles.content}>{props.visibilityAreaLinkedPage[20].text}</div>
                <div className={styles.content}>{props.visibilityAreaLinkedPage[21].text}</div>
            </div>
        </div>
    );
}

export default VisibilityAreaLinkedPage;