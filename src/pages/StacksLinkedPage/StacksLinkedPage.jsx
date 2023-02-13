import styles from '../styles.module.css';
import './style.css';

const StacksLinkedPage = (props) => {
    return (
        <div className="stacksLinkedPage">
            <div className={styles.contentTitle}>{props.stacksLinkedPage[0].themeName}</div>
            <div className="stacksLinkedPage__column">
                <div className={styles.content}>{props.stacksLinkedPage[1].text}</div>
                <li className="content__list">{props.stacksLinkedPage[2].text}</li>
                <li className="content__list">{props.stacksLinkedPage[3].text}</li>
                <li className="content__list">{props.stacksLinkedPage[4].text}</li>
                <li className="content__list">{props.stacksLinkedPage[5].text}</li>
                <li className="content__list">{props.stacksLinkedPage[6].text}</li>
                <li className="content__list">{props.stacksLinkedPage[7].text}</li>
                <li className="content__list">>{props.stacksLinkedPage[8].text}</li>
                <div className={styles.content}>{props.stacksLinkedPage[9].text}</div>
                <li className="content__list">{props.stacksLinkedPage[10].text}</li>
                <li className="content__list">{props.stacksLinkedPage[11].text}</li>
                <li className="content__list">{props.stacksLinkedPage[12].text}</li>
                <li className="content__list">{props.stacksLinkedPage[13].text}</li>
                <li className="content__list">{props.stacksLinkedPage[14].text}</li>
                <div className="stacksLinkedPage__contentCode1">
                    <code>{props.stacksLinkedPage[15].code}</code>
                    <code>{props.stacksLinkedPage[16].code}</code>
                    <code>{props.stacksLinkedPage[17].code}</code>
                    <code>{props.stacksLinkedPage[18].code}</code>
                    <code>{props.stacksLinkedPage[19].code}</code>
                    <code>{props.stacksLinkedPage[20].code}</code>
                    <code>{props.stacksLinkedPage[21].code}</code>
                    <code>{props.stacksLinkedPage[22].code}</code>
                    <code>{props.stacksLinkedPage[23].code}</code>
                    <code>{props.stacksLinkedPage[24].code}</code>
                    <code>{props.stacksLinkedPage[25].code}</code>
                    <code>{props.stacksLinkedPage[26].code}</code>
                </div>
                <div className={styles.content}>{props.stacksLinkedPage[27].text}</div>
                <div className="stacksLinkedPage__contentCode2">
                    <code>{props.stacksLinkedPage[28].code}</code>
                    <code>{props.stacksLinkedPage[29].code}</code>
                    <code>{props.stacksLinkedPage[30].code}</code>
                    <code>{props.stacksLinkedPage[31].code}</code>
                    <code>{props.stacksLinkedPage[32].code}</code>
                    <code>{props.stacksLinkedPage[33].code}</code>
                    <code>{props.stacksLinkedPage[34].code}</code>
                    <code>{props.stacksLinkedPage[35].code}</code>
                    <code>{props.stacksLinkedPage[36].code}</code>
                    <code>{props.stacksLinkedPage[37].code}</code>
                    <code>{props.stacksLinkedPage[38].code}</code>
                    <code>{props.stacksLinkedPage[39].code}</code>
                    <code>{props.stacksLinkedPage[40].code}</code>
                    <code>{props.stacksLinkedPage[41].code}</code>
                    <code>{props.stacksLinkedPage[42].code}</code>
                    <code>{props.stacksLinkedPage[43].code}</code>
                    <code>{props.stacksLinkedPage[44].code}</code>
                    <code>{props.stacksLinkedPage[45].code}</code>
                    <code>{props.stacksLinkedPage[46].code}</code>
                    <code>{props.stacksLinkedPage[47].code}</code>
                </div>
                <div className={styles.content}>{props.stacksLinkedPage[48].text}</div>
                <div className="stacksLinkedPage__contentCode3">
                    <code>{props.stacksLinkedPage[49].code}</code>
                </div>
                <div className={styles.content}>{props.stacksLinkedPage[50].text}</div>
                <div className="stacksLinkedPage__contentCode3">
                    <code>{props.stacksLinkedPage[51].code}</code>
                    <code>{props.stacksLinkedPage[52].code}</code>
                </div>
                <div className={styles.content}>{props.stacksLinkedPage[53].text}</div>
                <div className="stacksLinkedPage__contentCode3">
                    <code>{props.stacksLinkedPage[54].code}</code>
                    <code>{props.stacksLinkedPage[55].code}</code>
                    <code>{props.stacksLinkedPage[56].code}</code>
                </div>
                <div className={styles.content}>{props.stacksLinkedPage[57].text}</div>
                <div className="stacksLinkedPage__contentCode3">
                    <code>{props.stacksLinkedPage[58].code}</code>
                </div>
                <div className={styles.content}>{props.stacksLinkedPage[59].text}</div>
                <div className={styles.content}>{props.stacksLinkedPage[60].text}</div>
                <div className={styles.content}>{props.stacksLinkedPage[61].text}</div>
                <div className={styles.content}>{props.stacksLinkedPage[62].text}</div>
                <div className={styles.content}>{props.stacksLinkedPage[63].text}</div>
                <div className={styles.content}>{props.stacksLinkedPage[64].text}</div>
            </div>
        </div>
    );
}

export default StacksLinkedPage;