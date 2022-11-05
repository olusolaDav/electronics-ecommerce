import './categories.scss'
function Categogies({imgUrl, alt}) {

    return (
      <div className="card__group">
        <div className='category__image'>
          <img className="card__image" src={imgUrl} alt={alt} />
        </div>

        <p className='title'>{alt}</p>
      </div>
    );
}

export default Categogies;