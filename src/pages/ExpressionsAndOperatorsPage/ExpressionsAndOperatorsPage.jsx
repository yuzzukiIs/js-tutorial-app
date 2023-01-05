import {NavLink} from 'react-router-dom';


import styles from '../styles.module.css';
import './style.css';

const ExpressionsAndOperatorsPage = (props) => {
    return (
        <div className="expressionsAndOperatorsPage">
            <div className={styles.contentTitle}>{props.expressionsAndOperatorsPage[0].themeName}</div>
            <div className="expressionsAndOperatorsPage__column">
                <div className={styles.content}>{props.expressionsAndOperatorsPage[1].title}</div>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[2].text}</div>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[3].title}</div>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[4].text}</div>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[5].title}</div>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[6].text}</div>
                <NavLink to="/bitOperationsLinkedPage"><button className={styles.link}>{props.expressionsAndOperatorsPage[7].link}</button></NavLink>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[8].title}</div>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[9].text}</div>
                <NavLink to="/logicalOperationsLinkedPage"><button className={styles.link}>{props.expressionsAndOperatorsPage[10].link}</button></NavLink>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[11].title}</div>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[12].text}</div>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[13].title}</div>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[14].text}</div>
                <NavLink to="/ternaryOperatorLinkedPage"><button className={styles.link}>{props.expressionsAndOperatorsPage[15].link}</button></NavLink>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[16].title}</div>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[17].text}</div>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[18].title}</div>
                <div className={styles.content}>{props.expressionsAndOperatorsPage[19].text}</div>
                <a rel="noreferrer" target="_blank" href={props.expressionsAndOperatorsPage[21].externalLink}><button className={styles.link}>{props.expressionsAndOperatorsPage[20].title}</button></a>
            </div>
        </div>
    );
}
 
export default ExpressionsAndOperatorsPage;