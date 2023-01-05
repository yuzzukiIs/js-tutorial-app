import {NavLink} from 'react-router-dom'


import styles from '../styles.module.css';
import './style.css';

const ConditionsPage = (props) => {
    return (
        <div className="conditionsPage">
            <div className={styles.contentTitle}>{props.conditionsPage[0].themeName}</div>
            <div className="conditionsPage__column">
                <div className={styles.content}>{props.conditionsPage[1].title}</div>
                <div className={styles.content}>{props.conditionsPage[2].text}</div>
                <div className={styles.content}>{props.conditionsPage[3].text}</div>
                <NavLink to="/regularConditionalOperatorsLinkedPage"><button className={styles.link}>{props.conditionsPage[4].link}</button></NavLink>
                <div className={styles.content}>{props.conditionsPage[5].title}</div>
                <div className={styles.content}>{props.conditionsPage[6].text}</div>
                <NavLink to="/switchOperatorLinkedPage"><button className={styles.link}>{props.conditionsPage[7].link}</button></NavLink>
            </div>
        </div>
    );
}

export default ConditionsPage;