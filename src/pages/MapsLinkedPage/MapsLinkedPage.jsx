import styles from '../styles.module.css';
import './style.css';

const MapsLinkedPage = (props) => {
    return (
        <div className="mapsLinkedPage">
            <div className={styles.contentTitle}>{props.mapsLinkedPage[0].themeName}</div>
            <div className="mapsLinkedPage__column">
                <div className={styles.content}>{props.mapsLinkedPage[1].text}</div>
                <div className="mapsLinkedPage__contentCode1">
                    <code>{props.mapsLinkedPage[2].code}</code>
                    <code>{props.mapsLinkedPage[3].code}</code>
                    <code>{props.mapsLinkedPage[4].code}</code>
                    <code>{props.mapsLinkedPage[5].code}</code>
                </div>
                <li className="content__list">{props.mapsLinkedPage[6].text}</li>
                <li className="content__list">{props.mapsLinkedPage[7].text}</li>
                <li className="content__list">{props.mapsLinkedPage[8].text}</li>
                <li className="content__list">{props.mapsLinkedPage[9].text}</li>
                <li className="content__list">{props.mapsLinkedPage[10].text}</li>
                <li className="content__list">{props.mapsLinkedPage[11].text}</li>
            </div>
        </div>
    );
}
 
export default MapsLinkedPage;