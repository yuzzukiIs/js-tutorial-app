import styles from '../styles.module.css';
import './style.css';

const SwitchOperatorLinkedPage = (props) => {
    return (
        <div className="switchOperatorLinkedPage">
            <div className={styles.contentTitle}>{props.switchOperatorLinkedPage[0].themeName}</div>
            <div className="switchOperatorLinkedPage__column">
                <div className={styles.content}>{props.switchOperatorLinkedPage[1].text}</div>
                <div className="switchOperatorLinkedPage__contentCode1">
                    <code>{props.switchOperatorLinkedPage[2].code}</code>
                    <code>{props.switchOperatorLinkedPage[3].code}</code>
                    <code>{props.switchOperatorLinkedPage[4].code}</code>
                    <code>{props.switchOperatorLinkedPage[5].code}</code>
                    <code>{props.switchOperatorLinkedPage[6].code}</code>
                    <code>{props.switchOperatorLinkedPage[7].code}</code>
                    <code>{props.switchOperatorLinkedPage[8].code}</code>
                    <code>{props.switchOperatorLinkedPage[9].code}</code>
                </div>
                <div className={styles.content}>{props.switchOperatorLinkedPage[10].text}</div>
                <div className={styles.content}>{props.switchOperatorLinkedPage[11].text}</div>
                <div className={styles.content}>{props.switchOperatorLinkedPage[12].text}</div>
                <div className="switchOperatorLinkedPage__contentCode2">
                    <code>{props.switchOperatorLinkedPage[13].code}</code>
                    <code>{props.switchOperatorLinkedPage[14].code}</code>
                    <code>{props.switchOperatorLinkedPage[15].code}</code>
                    <code>{props.switchOperatorLinkedPage[16].code}</code>
                    <code>{props.switchOperatorLinkedPage[17].code}</code>
                    <code>{props.switchOperatorLinkedPage[18].code}</code>
                    <code>{props.switchOperatorLinkedPage[19].code}</code>
                    <code>{props.switchOperatorLinkedPage[20].code}</code>
                    <code>{props.switchOperatorLinkedPage[21].code}</code>
                    <code>{props.switchOperatorLinkedPage[22].code}</code>
                    <code>{props.switchOperatorLinkedPage[23].code}</code>
                    <code>{props.switchOperatorLinkedPage[24].code}</code>
                    <code>{props.switchOperatorLinkedPage[25].code}</code>
                    <code>{props.switchOperatorLinkedPage[26].code}</code>
                    <code>{props.switchOperatorLinkedPage[27].code}</code>
                    <code>{props.switchOperatorLinkedPage[28].code}</code>
                    <code>{props.switchOperatorLinkedPage[29].code}</code>
                    <code>{props.switchOperatorLinkedPage[30].code}</code>
                </div>
                <div className={styles.content}>{props.switchOperatorLinkedPage[31].text}</div>
                <li className="content__list">{props.switchOperatorLinkedPage[32].text}</li>
                <li className="content__list">{props.switchOperatorLinkedPage[33].text}</li>
                <li className="content__list">{props.switchOperatorLinkedPage[34].text}</li>
                <li className="content__list">{props.switchOperatorLinkedPage[35].text}</li>
                <li className="content__list">{props.switchOperatorLinkedPage[36].text}</li>
                <li className="content__list">{props.switchOperatorLinkedPage[37].text}</li>
                <li className="content__list">{props.switchOperatorLinkedPage[38].text}</li>
                <li className="content__list">{props.switchOperatorLinkedPage[39].text}</li>
                <li className="content__list">{props.switchOperatorLinkedPage[40].text}</li>
                <li className="content__list">{props.switchOperatorLinkedPage[41].text}</li>
                <li className="content__list">{props.switchOperatorLinkedPage[42].text}</li>
                <li className="content__list">{props.switchOperatorLinkedPage[43].text}</li>
            </div>
        </div>
    );
}

export default SwitchOperatorLinkedPage;