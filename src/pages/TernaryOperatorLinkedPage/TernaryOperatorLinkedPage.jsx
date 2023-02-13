import styles from '../styles.module.css';
import './style.css';

const TernaryOperatorLinkedPage = (props) => {
    return (
        <div className="ternaryOperatorLinkedPage">
            <div className={styles.contentTitle}>{props.ternaryOperatorLinkedPage[0].themeName}</div>
            <div className="ternaryOperatorLinkedPage__column">
                <div className={styles.content}>{props.ternaryOperatorLinkedPage[1].text}</div>
                <div className="ternaryOperatorLinkedPage__contentCode2">
                    <code>{props.ternaryOperatorLinkedPage[2].code}</code>
                </div>
                <li className="content__list">{props.ternaryOperatorLinkedPage[3].text}</li>
                <li className="content__list">{props.ternaryOperatorLinkedPage[4].text}</li>
                <li className="content__list">{props.ternaryOperatorLinkedPage[5].text}</li>
                <div className={styles.content}>{props.ternaryOperatorLinkedPage[6].text}</div>
                <div className={styles.content}>{props.ternaryOperatorLinkedPage[7].text}</div>
                <div className="ternaryOperatorLinkedPage__contentCode1">
                    <code>{props.ternaryOperatorLinkedPage[8].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[9].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[10].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[11].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[12].code}</code>
                </div>
                <div className={styles.content}>{props.ternaryOperatorLinkedPage[13].text}</div>
                <div className="ternaryOperatorLinkedPage__contentCode1">
                    <code>{props.ternaryOperatorLinkedPage[14].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[15].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[16].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[17].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[18].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[19].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[20].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[21].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[22].code}</code>
                </div>
                <div className={styles.content}>{props.ternaryOperatorLinkedPage[23].text}</div>
                <div className="ternaryOperatorLinkedPage__contentCode2">
                    <code>{props.ternaryOperatorLinkedPage[24].code}</code>
                </div>
            </div>
        </div>
    );
}

export default TernaryOperatorLinkedPage;