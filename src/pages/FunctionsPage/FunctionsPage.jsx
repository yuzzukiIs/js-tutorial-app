import {NavLink} from 'react-router-dom';


import styles from '../styles.module.css';
import './style.css';

const FunctionsPage = (props) => {
    return (
        <div className="functionsPage">
            <div className={styles.contentTitle}>{props.functionsPage[0].themeName}</div>
            <div className="functionsPage__column">
                <div className={styles.content}>{props.functionsPage[1].text}</div>
                <NavLink to='/functionsLinkedPage'><button className={styles.link}>{props.functionsPage[2].link}</button></NavLink>
            </div>
        </div>
    );
}

export default FunctionsPage;