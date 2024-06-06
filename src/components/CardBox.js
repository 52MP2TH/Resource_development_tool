import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardBox.css';

function CardBox(props){
    const [isLink, setisLink] = useState(true);

    const cardDetails = props.cardDetails != null ? props.cardDetails : {};
    const cardTitle = cardDetails.cardTitle != null ? cardDetails.cardTitle :'Set title';
    const cardSubTitle = cardDetails.cardSubTitle != null ? cardDetails.cardSubTitle :'Add card subtitle or text by passing to component as props';
    const cardButtonContent = cardDetails.cardButtonContent != null ? cardDetails.cardButtonContent :'Set button';
    const navigateTo = cardDetails.navigateTo != null ? cardDetails.navigateTo : '';

    return(
        <div className='card'>
            <div className='card-contents'>
                <h3 className='card-title'>{cardTitle}</h3>
                <p className='card-subtitle'>{cardSubTitle}</p>
            </div>
            <button className='card-button'><Link className='link-button' to={navigateTo} >{cardButtonContent}</Link></button>
        </div>
    )
}

export default CardBox;