import styles from '../styles.module.css';
import './style.css';

const FunctionsLinkedPage = (props) => {
    return (
        <div className="functionsLinkedPage">
            <div className={styles.content}>{props.functionsLinkedPage[0].themeName}</div>
            <div className="functionsLinkedPage__column">
                <div className="functionsLinkedPage__contentCode1">
                    <code>{props.functionsLinkedPage[1].code}</code>
                    <code>{props.functionsLinkedPage[2].code}</code>
                    <code>{props.functionsLinkedPage[3].code}</code>
                    <code>{props.functionsLinkedPage[4].code}</code>
                    <code>{props.functionsLinkedPage[5].code}</code>
                    <code>{props.functionsLinkedPage[6].code}</code>
                    <code>{props.functionsLinkedPage[7].code}</code>
                    <code>{props.functionsLinkedPage[8].code}</code>
                    <code>{props.functionsLinkedPage[9].code}</code>
                    <code>{props.functionsLinkedPage[10].code}</code>
                    <code>{props.functionsLinkedPage[11].code}</code>
                    <code>{props.functionsLinkedPage[12].code}</code>
                    <code>{props.functionsLinkedPage[13].code}</code>
                    <code>{props.functionsLinkedPage[14].code}</code>
                    <code>{props.functionsLinkedPage[15].code}</code>
                    <code>{props.functionsLinkedPage[16].code}</code>
                    <code>{props.functionsLinkedPage[17].code}</code>
                </div>
                <div className={styles.content}>{props.functionsLinkedPage[18].text}</div>
            </div>
        </div>
    );
}

export default FunctionsLinkedPage;