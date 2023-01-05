import styles from '../styles.module.css';
import './style.css';

const SwitchOperatorLinkedPage = (props) => {
    return (
        <div className="switchOperatorLinkedPage">
            <div className={styles.contentTitle}>{props.switchOperatorLinkedPage[0].themeName}</div>
            <div className="switchOperatorLinkedPage__column">
                <div className="switchOperatorLinkedPage__contentCode1">
                    <code>{props.switchOperatorLinkedPage[1].code}</code>
                    <code>{props.switchOperatorLinkedPage[2].code}</code>
                    <code>{props.switchOperatorLinkedPage[3].code}</code>
                    <code>{props.switchOperatorLinkedPage[4].code}</code>
                    <code>{props.switchOperatorLinkedPage[5].code}</code>
                    <code>{props.switchOperatorLinkedPage[6].code}</code>
                </div>
                <div className={styles.content}>{props.switchOperatorLinkedPage[7].text}</div>
            </div>
        </div>
    );
}

export default SwitchOperatorLinkedPage;