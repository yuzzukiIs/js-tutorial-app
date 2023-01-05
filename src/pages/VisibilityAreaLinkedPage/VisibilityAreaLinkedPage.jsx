import styles from '../styles.module.css';
import './style.css';

const VisibilityAreaLinkedPage = (props) => {
    return (
        <div className="visibilityAreaLinkedPage">
            <div className={styles.contentTitle}>{props.visibilityAreaLinkedPage[0].themeName}</div>
            <div className="visibilityAreaLinkedPage__column">
                <div className="visibilityAreaLinkedPage__contentCode1">
                    <code>{props.visibilityAreaLinkedPage[1].code}</code>
                    <code>{props.visibilityAreaLinkedPage[2].code}</code>
                </div>
                <div className={styles.content}>{props.visibilityAreaLinkedPage[3].text}</div>
                <div className="visibilityAreaLinkedPage__contentCode2">
                    <code>{props.visibilityAreaLinkedPage[4].code}</code>
                    <code>{props.visibilityAreaLinkedPage[5].code}</code>
                    <code>{props.visibilityAreaLinkedPage[6].code}</code>
                    <code>{props.visibilityAreaLinkedPage[7].code}</code>
                    <code>{props.visibilityAreaLinkedPage[8].code}</code>
                </div>
                <div className={styles.content}>{props.visibilityAreaLinkedPage[9].text}</div>
                <div className="visibilityAreaLinkedPage__contentCode2">
                    <code>{props.visibilityAreaLinkedPage[10].code}</code>
                    <code>{props.visibilityAreaLinkedPage[11].code}</code>
                    <code>{props.visibilityAreaLinkedPage[12].code}</code>
                    <code>{props.visibilityAreaLinkedPage[13].code}</code>
                    <code>{props.visibilityAreaLinkedPage[14].code}</code>
                </div>
                <div className="visibilityAreaLinkedPage__contentCode2">
                    <code>{props.visibilityAreaLinkedPage[15].code}</code>
                    <code>{props.visibilityAreaLinkedPage[16].code}</code>
                    <code>{props.visibilityAreaLinkedPage[17].code}</code>
                    <code>{props.visibilityAreaLinkedPage[18].code}</code>
                    <code>{props.visibilityAreaLinkedPage[19].code}</code>
                </div>
                <div className={styles.content}>{props.visibilityAreaLinkedPage[20].text}</div>
                <div className={styles.content}>{props.visibilityAreaLinkedPage[21].text}</div>
                <div className={styles.content}>{props.visibilityAreaLinkedPage[22].text}</div>
                <div className={styles.content}>{props.visibilityAreaLinkedPage[23].text}</div>
                <div className="visibilityAreaLinkedPage__contentCode3">
                    <code>{props.visibilityAreaLinkedPage[24].code}</code>
                    <code>{props.visibilityAreaLinkedPage[25].code}</code>
                    <code>{props.visibilityAreaLinkedPage[26].code}</code>
                    <code>{props.visibilityAreaLinkedPage[27].code}</code>
                    <code>{props.visibilityAreaLinkedPage[28].code}</code>
                    <code>{props.visibilityAreaLinkedPage[29].code}</code>
                    <code>{props.visibilityAreaLinkedPage[30].code}</code>
                    <code>{props.visibilityAreaLinkedPage[31].code}</code>
                </div>
                <div className={styles.content}>{props.visibilityAreaLinkedPage[32].text}</div>
            </div>
        </div>
    );
}

export default VisibilityAreaLinkedPage;