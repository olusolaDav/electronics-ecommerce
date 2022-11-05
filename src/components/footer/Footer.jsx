import './footer.scss'
import {BsFacebook} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {AiFillTwitterCircle} from 'react-icons/ai'
             

import logo from '../../assets/logo.jpg'

function Footer() {
    return (
      <div className="footer--wrapper">
        <div className="footer">
          <div className="footer--col-1">
            <img src={logo} alt="logo" />
            <p>
              At Nupu, we're here to help you get your computer running like new
              again. We sell brand-new parts and accessories that have been
              tested and optimized by our team of experts—so you know they're
              top-notch quality.
            </p>
          </div>

          <div className="footer--col-2">
            <h2>PRODUCTS</h2>
            <li>CPU</li>
            <li>GPU</li>
            <li>RAM</li>
            <li>CASE</li>
            <li>POWER SUPPLIES</li>
            <li>MOTHERBOARD</li>
          </div>

          <div className="footer--col-3">
            <h2>NAVIGATION</h2>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </div>

          <div className="footer--col-3">
            <p>
              Join the subscriber list to get updated on latest products and
              exclusive offers and promos
            </p>
            <input type="text" placeholder="ENTER EMAIL" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <hr />
        <div className="lower--session">
          <p>All right reserved. Term and conditions. Privacy Policy.</p>

          <div className="icons">
            <li>
            
              <AiFillTwitterCircle />
            </li>
            <li>
              <RiInstagramFill />
            </li>
            <li>
              <BsFacebook />
            </li>
          </div>
        </div>
      </div>
    );
}

export default Footer;