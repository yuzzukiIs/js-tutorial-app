import {useState} from 'react';


import './style.css';

const GreetingTitle = () => {

    let[classState, setClassState] = useState('greetingTitle-active');

    return (
        <div className={classState ? 'greetingTitle-active' : 'greetingTitle'}>
            <div className="greetingTitle__title">
                Справочник по JavaScript
            </div>
            <button className="greetingTitle__btn" onClick={() => setClassState(!classState)}>
                начать
            </button>
        </div>
    );
}
 
export default GreetingTitle;