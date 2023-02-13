import { NavLink } from 'react-router-dom';


import styles from '../styles.module.css';
import './style.css';

const StructuredDatasPage = (props) => {
    return (
        <div className="structuredDatasPage">
            <div className={styles.contentTitle}>{props.structuredDatasPage[0].themeName}</div>
            <div className="structuredDatasPage__column">
                <div className={styles.content}>{props.structuredDatasPage[1].text}</div>
                <div className={styles.content}>{props.structuredDatasPage[2].title}</div>
                <div className={styles.content}>{props.structuredDatasPage[3].text}</div>
                <NavLink to="/arraysLinkedPage"><button className={styles.link}>{props.structuredDatasPage[4].link}</button></NavLink>
                <div className={styles.content}>{props.structuredDatasPage[5].title}</div>
                <div className={styles.content}>{props.structuredDatasPage[6].text}</div>
                <NavLink to='/objectsLinkedPage'><button className={styles.link}>{props.structuredDatasPage[7].link}</button></NavLink>
                
                <div className={styles.content}>{props.structuredDatasPage[8].title}</div>
                <div className={styles.content}>{props.structuredDatasPage[9].text}</div>
                <NavLink to='/stacksLinkedPage'><button className={styles.link}>{props.structuredDatasPage[10].link}</button></NavLink>
                <div className={styles.content}>{props.structuredDatasPage[11].title}</div>
                <div className={styles.content}>{props.structuredDatasPage[12].text}</div>
                <NavLink to='/queuesLinkedPage'><button className={styles.link}>{props.structuredDatasPage[13].link}</button></NavLink>
                <div className={styles.content}>{props.structuredDatasPage[14].title}</div>
                <div className={styles.content}>{props.structuredDatasPage[15].text}</div>
                <NavLink to='/linkedListsLinkedPage'><button className={styles.link}>{props.structuredDatasPage[16].link}</button></NavLink>
            </div>
        </div>
    );
}

export default StructuredDatasPage;