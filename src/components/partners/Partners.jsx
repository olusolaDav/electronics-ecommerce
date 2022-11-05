import './partners.scss'

function Partners({imgUrl, alt}) {
    return (
      <div className="partners">
        <div className="partners__image">
          <img className="card__image" src={imgUrl} alt={alt} />
        </div>
      </div>
    );
}

export default Partners;