import './testimony.scss'
import {FaQuoteLeft} from 'react-icons/fa'
import {GoPrimitiveDot} from 'react-icons/go'

function Testimony() {
    return (
      <div className="testimony">
        <div className="testimony__content">
          <span className="testimony__content--quote">
            {" "}
            <FaQuoteLeft />{" "}
          </span>
          <p className="testimony__content--text">
            “NUPU is an amazing company. They offer the best products at
            affordable prices and their customer service is top-notch. I highly
            recommend this company if you're looking for quality products that
            are also affordable!z
          </p>
          <h4 className="testimony__content--name">James Alter</h4>
          <div className="testimony__content--scrolls">
            <span>
              <GoPrimitiveDot />
            </span>
            <span>
              <GoPrimitiveDot />
            </span>
            <span>
              <GoPrimitiveDot />
            </span>
            <span>
              <GoPrimitiveDot />
            </span>
          </div>
        </div>
      </div>
    );
}

export default Testimony;