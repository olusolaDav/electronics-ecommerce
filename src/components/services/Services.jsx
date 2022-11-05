import './services.scss'
//icons
import { AiOutlineFieldTime } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";




function Services({icon, heading, point}) {
    return (
      <div className="services">
        <div className="services--card__item">
          <span className="services--card__item-1--icon">
            <AiOutlineFieldTime />
          </span>
          <h3 className="services--card__item-1--heading">24 hours Services</h3>
          <p className="services--card__item-1--point">
            We are a 24-hour delivery service, so you can order anything from us
            and have it delivered to your door within the hour.
          </p>
        </div>

        <div className="services--card__item">
          <span className="services--card__item-2--icon">
            <TbTruckDelivery />
          </span>
          <h3 className="services--card__item-2--heading">Fast Delivery</h3>
          <p className="services--card__item-2--point">
            If you want to get your order delivered quickly, we have the
            solution for you. We offer fast delivery with a guaranteed delivery
            time of 24 hours.
          </p>
        </div>

        <div className="services--card__item">
          <span className="services--card__item-1--icon">
            <FiSettings />
          </span>
          <h3 className="services--card__item-1--heading">Long Warranty</h3>
          <p className="services--card__item-1--point">
            We know that your equipment is important to you, and we want to be
            sure that it stays in good condition for as long as possible. 
          </p>
        </div>
      </div>
    );
}

export default Services;