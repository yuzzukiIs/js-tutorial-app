import {NavLink} from 'react-router-dom';


import styles from '../styles.module.css';
import './style.css';

const VaraiablesPage = (props) => {
    return (
        <div className="varaiablesPage">
            <div className={styles.contentTitle}>{props.variablesPage[0].themeName}</div>
            <div className="varaiablesPage__contentColumn">
                <div className={styles.content}>{props.variablesPage[1].text}</div>
                <NavLink to="/variablesLinkedPage"><button className={styles.link}>{props.variablesPage[2].link}</button></NavLink>
                <div className={styles.content}>{props.variablesPage[3].text}</div>
                <NavLink to="/constantsLinkedPage"><button className={styles.link}>{props.variablesPage[4].link}</button></NavLink>
                <div className={styles.content}>{props.variablesPage[5].text}</div>
                <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html" target="_blank" rel="noreferrer"><button className={styles.link}>{props.variablesPage[6].link}</button></a>
                <div className={styles.content}>{props.variablesPage[7].text}</div>
                <div className={styles.content}>{props.variablesPage[8].title}</div>
                <div className={styles.content}>{props.variablesPage[9].text}</div>
                <NavLink to="/visibilityAreaLinkedPage"><button className={styles.link}>{props.variablesPage[10].link}</button></NavLink>
            </div>
        </div>
    );
}

export default VaraiablesPage;