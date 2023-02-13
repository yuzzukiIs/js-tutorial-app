import styles from '../styles.module.css';
import './style.css';

const ArraysLinkedPage = (props) => {
    return (
        <div className="arraysLinkedPage">
            <div className={styles.contentTitle}>{props.arraysLinkedPage[0].themeName}</div>
            <div className="arraysLinkedPage__column">
                <div className={styles.content}>{props.arraysLinkedPage[1].text}</div>
                <div className={styles.content}>{props.arraysLinkedPage[2].text}</div>
                <div className="arraysLinkedPage__contentCode1">
                    <code>{props.arraysLinkedPage[3].code}</code>
                    <code>{props.arraysLinkedPage[4].code}</code>
                    <code>{props.arraysLinkedPage[5].code}</code>
                </div>
                <div className={styles.content}>{props.arraysLinkedPage[6].text}</div>
                <div className={styles.content}>{props.arraysLinkedPage[7].text}</div>
                <div className="arraysLinkedPage__contentCode1">
                    <code>{props.arraysLinkedPage[8].code}</code>
                </div>
                <div className={styles.content}>{props.arraysLinkedPage[9].text}</div>
                <div className={styles.content}>{props.arraysLinkedPage[10].text}</div>
                <div className="arraysLinkedPage__contentCode1">
                    <code>{props.arraysLinkedPage[11].code}</code>
                </div>
                <div className={styles.content}>{props.arraysLinkedPage[12].text}</div>
                <div className={styles.content}>{props.arraysLinkedPage[13].text}</div>
                <div className={styles.content}>{props.arraysLinkedPage[14].text}</div>
                <div className={styles.content}>{props.arraysLinkedPage[15].text}</div>
                <div className={styles.content}>{props.arraysLinkedPage[16].text}</div>
                <div className={styles.content}>{props.arraysLinkedPage[17].text}</div>
                <div className="arraysLinkedPage__contentCode1">
                    <code>{props.arraysLinkedPage[18].code}</code>
                    <code>{props.arraysLinkedPage[19].code}</code>
                </div>
                <div className={styles.content}>{props.arraysLinkedPage[20].text}</div>
                <div className="arraysLinkedPage__contentCode1">
                    <code>{props.arraysLinkedPage[21].code}</code>
                </div>
                <div className={styles.content}>{props.arraysLinkedPage[22].text}</div>
                <div className={styles.content}>{props.arraysLinkedPage[23].text}</div>
                <div className="arraysLinkedPage__contentCode2">
                    <code>{props.arraysLinkedPage[24].code}</code>
                    <code>{props.arraysLinkedPage[25].code}</code>
                    <code>{props.arraysLinkedPage[26].code}</code>
                    <code>{props.arraysLinkedPage[27].code}</code>
                    <code>{props.arraysLinkedPage[28].code}</code>
                    <code>{props.arraysLinkedPage[29].code}</code>
                    <code>{props.arraysLinkedPage[30].code}</code>
                    <code>{props.arraysLinkedPage[31].code}</code>
                    <code>{props.arraysLinkedPage[32].code}</code>
                    <code>{props.arraysLinkedPage[33].code}</code>
                    <code>{props.arraysLinkedPage[34].code}</code>
                </div>
                <div className={styles.content}>{props.arraysLinkedPage[35].text}</div>
                <div className={styles.content}>{props.arraysLinkedPage[36].text}</div>
                <div className="arraysLinkedPage__contentCode1">
                    <code>{props.arraysLinkedPage[37].code}</code>
                </div>
                <div className={styles.content}>{props.arraysLinkedPage[38].text}</div>
                <div className={styles.content}>{props.arraysLinkedPage[39].text}</div>
                <div className="arraysLinkedPage__contentCode1">
                    <code>{props.arraysLinkedPage[40].code}</code>
                </div>
                <div className={styles.content}>{props.arraysLinkedPage[41].text}</div>
                <div className={styles.content}>{props.arraysLinkedPage[42].text}</div>
                <a rel="noreferrer" target="_blank" href={props.arraysLinkedPage[43].externalLink}><button className={styles.link}>список методов</button></a>
            </div>
        </div>
    );
}

export default ArraysLinkedPage;