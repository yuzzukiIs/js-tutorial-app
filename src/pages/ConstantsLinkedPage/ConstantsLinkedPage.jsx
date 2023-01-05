import styles from '../styles.module.css';
import './style.css';

const ConstantsLinkedPage = (props) => {
    return (
        <div className="constantsLinkedPage">
            <div className={styles.contentTitle}>{props.constantsLinkedPage[0].themeName}</div>
            <div className="constantsLinkedPage__column">
                <div className="constantsLinkedPage__contentCode1">
                    <code>{props.constantsLinkedPage[1].code}</code>
                    <code>{props.constantsLinkedPage[2].code}</code>
                </div>
                <div className={styles.content}>{props.constantsLinkedPage[3].text}</div>
                <div className="constantsLinkedPage__contentCode2">
                    <code>{props.constantsLinkedPage[1].code}</code>
                    <code>{props.constantsLinkedPage[2].code}</code>
                    <code>{props.constantsLinkedPage[4].code}</code>
                    <code>{props.constantsLinkedPage[5].code}</code>
                </div>
                <div className="constantsLinkedPage__contentCode3">
                    <code>{props.constantsLinkedPage[6].code}</code>
                    <code>{props.constantsLinkedPage[7].code}</code>
                    <code>{props.constantsLinkedPage[8].code}</code>
                </div>
                <div className={styles.content}>{props.constantsLinkedPage[9].text}</div>
            </div>
        </div>
    );
}
 
export default ConstantsLinkedPage;