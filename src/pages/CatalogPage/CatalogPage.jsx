import {NavLink} from 'react-router-dom';


import './style.css';

const CatalogPage = (props) => {

    let themeLinks =
        props.catalogPage.map( content => <NavLink to={content.link}><div className="catalogPage__link">{content.theme}</div></NavLink>);

    return (
        <div className="catalogPage">
            {themeLinks}
        </div>
    );
}
 
export default CatalogPage;