import styles from '../styles.module.css';
import './style.css';

const LogicalOperationsLinkedPage = (props) => {
    return (
        <div className="logicalOperationsLinkedPage">
            <div className={styles.contentTitle}>{props.logicalOperationsLinkedPage[0].themeName}</div>
            <div className="logicalOperationsLinkedPage__column">
                <div className={styles.content}>{props.logicalOperationsLinkedPage[1].text}</div>
                <div className="logicalOperationsLinkedPage__contentCode1">
                    <code>{props.logicalOperationsLinkedPage[2].code}</code>
                    <code>{props.logicalOperationsLinkedPage[3].code}</code>
                    <code>{props.logicalOperationsLinkedPage[4].code}</code>
                    <code>{props.logicalOperationsLinkedPage[5].code}</code>
                    <code>{props.logicalOperationsLinkedPage[6].code}</code>
                    <code>{props.logicalOperationsLinkedPage[7].code}</code>
                    <code>{props.logicalOperationsLinkedPage[8].code}</code>
                </div>
            </div>
        </div>
    );
}

export default LogicalOperationsLinkedPage;