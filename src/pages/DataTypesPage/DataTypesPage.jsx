import {NavLink} from 'react-router-dom';


import styles from '../styles.module.css';
import './style.css';

const DataTypesPage = (props) => {
    return (
        <div className='dataTypesPage'>
            <div className={styles.contentTitle}>{props.dataTypesPage[0].themeName}</div>
            <div className="dataTypesPage__contentColumn">
                <div className={styles.content}>{props.dataTypesPage[1].title}</div>
                    <li className="content__list">{props.dataTypesPage[2].text}</li>
                    <li className="content__list">{props.dataTypesPage[3].text}</li>
                    <li className="content__list">{props.dataTypesPage[4].text}</li>
                    <li className="content__list">{props.dataTypesPage[5].text}</li>
                    <li className="content__list">{props.dataTypesPage[6].text}</li>
                    <li className="content__list">{props.dataTypesPage[7].text}</li>
                    <li className="content__list">{props.dataTypesPage[8].text}</li>
                    <li className="content__list">{props.dataTypesPage[9].text}</li>
                <NavLink to="/dataTypesLinkedPage"><button className={styles.link}>{props.dataTypesPage[10].link}</button></NavLink>
                <div className={styles.content}>{props.dataTypesPage[11].title}</div>
                <div className={styles.content}>{props.dataTypesPage[12].text}</div>
            </div>
        </div>
    );
}
 
export default DataTypesPage;