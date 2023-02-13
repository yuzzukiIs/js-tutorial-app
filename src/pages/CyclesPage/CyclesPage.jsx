import styles from '../styles.module.css';
import './style.css';

const CyclesPage = (props) => {
    return (
        <div className="cyclesPage">
            <div className={styles.contentTitle}>{props.cyclesPage[0].themeName}</div>
            <div className="cyclesPage__column">
                <div className={styles.content}>{props.cyclesPage[1].text}</div>
                <div className="cyclesPage__contentCode">
                    <code>{props.cyclesPage[2].code}</code>
                    <code>{props.cyclesPage[3].code}</code>
                    <code>{props.cyclesPage[4].code}</code>
                    <code>{props.cyclesPage[5].code}</code>
                </div>
                <div className={styles.content}>{props.cyclesPage[6].text}</div>
                <div className="cyclesPage__contentCode">
                    <code>{props.cyclesPage[7].code}</code>
                    <code>{props.cyclesPage[8].code}</code>
                    <code>{props.cyclesPage[9].code}</code>
                    <code>{props.cyclesPage[10].code}</code>
                    <code>{props.cyclesPage[11].code}</code>
                </div>
                <div className={styles.content}>{props.cyclesPage[13].text}</div>
                <div className="cyclesPage__contentCode">
                    <code>{props.cyclesPage[14].code}</code>
                    <code>{props.cyclesPage[15].code}</code>
                    <code>{props.cyclesPage[16].code}</code>
                    <code>{props.cyclesPage[17].code}</code>
                    <code>{props.cyclesPage[18].code}</code>
                </div>
                <div className={styles.content}>{props.cyclesPage[19].text}</div>
            </div>
        </div>
    );
}

export default CyclesPage;