import styles from '../styles.module.css';
import './style.css';

const RegularConditionalOperatorsLinkedPage = (props) => {
    return (
        <div className="regularConditionalOperatorsLinkedPage">
            <div className={styles.contentTitle}>{props.regularConditionalOperatorsLinkedPage[0].themeName}</div>
            <div className="regularConditionalOperatorsLinkedPage__column">
                <div className="regularConditionalOperatorsLinkedPage__contentCode1">
                    <code>{props.regularConditionalOperatorsLinkedPage[1].code}</code>
                    <code>{props.regularConditionalOperatorsLinkedPage[2].code}</code>
                    <code>{props.regularConditionalOperatorsLinkedPage[3].code}</code>
                    <code>{props.regularConditionalOperatorsLinkedPage[4].code}</code>
                    <code>{props.regularConditionalOperatorsLinkedPage[5].code}</code>
                    <code>{props.regularConditionalOperatorsLinkedPage[6].code}</code>
                    <code>{props.regularConditionalOperatorsLinkedPage[7].code}</code>
                    <code>{props.regularConditionalOperatorsLinkedPage[8].code}</code>
                    <code>{props.regularConditionalOperatorsLinkedPage[9].code}</code>
                    <code>{props.regularConditionalOperatorsLinkedPage[10].code}</code>
                </div>
                <div className={styles.content}>{props.regularConditionalOperatorsLinkedPage[11].text}</div>
            </div>
        </div>
    );
}
 
export default RegularConditionalOperatorsLinkedPage;