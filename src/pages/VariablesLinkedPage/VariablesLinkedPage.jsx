import styles from '../styles.module.css';
import './style.css';

const VariablesLinkedPage = (props) => {
    return (
        <div className="variablesLinkedPage">
            <div className={styles.contentTitle}>{props.variablesLinkedPage[0].themeName}</div>
            <div className="variablesLinkedPage__column">
                <div className="variablesLinkedPage__contentCode1">
                    <code>{props.variablesLinkedPage[1].code}</code>
                    <code>{props.variablesLinkedPage[2].code}</code>
                </div>
                <div className={styles.content}>{props.variablesLinkedPage[3].text}</div>
                <div className="variablesLinkedPage__contentCode2">
                    <code>{props.variablesLinkedPage[4].code}</code>
                    <code>{props.variablesLinkedPage[5].code}</code>
                    <code>{props.variablesLinkedPage[6].code}</code>
                    <p></p>
                    <code>{props.variablesLinkedPage[7].code}</code>
                    <code>{props.variablesLinkedPage[8].code}</code>
                </div>
                <div className={styles.content}>{props.variablesLinkedPage[9].text}</div>
                <div className={styles.content}>{props.variablesLinkedPage[10].text}</div>
                <div className={styles.content}>{props.variablesLinkedPage[11].text}</div>
                <div className={styles.content}>{props.variablesLinkedPage[12].text}</div>
            </div>
        </div>
    );
}
 
export default VariablesLinkedPage;