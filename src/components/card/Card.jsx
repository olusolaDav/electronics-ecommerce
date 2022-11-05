import React from 'react'
import './card.scss'
import {FcRating} from 'react-icons/fc'



function CardModel({imgUrl, body,  price, alt, review, condition}) {
   
 const myImages = {
   backgroundImage: `url(${imgUrl})`,
   height: "100%",
   marginTop: "1rem",
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   backgroundPosition: "center",
   marginBottom: "1rem",
 };

    return (
      <div className='card'>
      
          <img className="card__image" src={imgUrl} alt={alt} />{" "}

        <div className="card__content ">
          <p>{body}</p>
        </div>
        <div className="card__info">
          <span className="card__info_price">{price}</span>
          <span className="card__info_review">
            5 <FcRating /> {review}
          </span>
        </div>
        <button>ADD TO CART</button>
      </div>
    );
}
export default CardModel;