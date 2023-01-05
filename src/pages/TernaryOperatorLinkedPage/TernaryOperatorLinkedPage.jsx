import styles from '../styles.module.css';
import './style.css';

const TernaryOperatorLinkedPage = (props) => {
    return (
        <div className="ternaryOperatorLinkedPage">
            <div className={styles.contentTitle}>{props.ternaryOperatorLinkedPage[0].themeName}</div>
            <div className="ternaryOperatorLinkedPage__column">
                <div className={styles.content}>{props.ternaryOperatorLinkedPage[1].text}</div>
                <div className="ternaryOperatorLinkedPage__contentCode1">
                    <code>{props.ternaryOperatorLinkedPage[2].code}</code>
                    <p></p>
                    <code>{props.ternaryOperatorLinkedPage[3].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[4].code}</code>
                    <p></p>
                    <code>{props.ternaryOperatorLinkedPage[5].code}</code>
                    <code>{props.ternaryOperatorLinkedPage[6].code}</code>
                </div>
                <div className={styles.content}>{props.ternaryOperatorLinkedPage[7].text}</div>
           </div>
        </div>
    );
}
 
export default TernaryOperatorLinkedPage;