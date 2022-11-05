import './header.scss'
import {AiOutlineDown, AiOutlineShoppingCart} from 'react-icons/ai'
import {IoIosHeartEmpty} from 'react-icons/io'
import {BiUser} from 'react-icons/bi'
import logo from '../../assets/logo.jpg'

function Header() {
    return (
      <div className="header">
        <div className="header--top">
          <span className="header--top__logo">
            <img src={logo} alt="logo" />
          </span>

          <span className="header--top__search">
            <input
              className="header--top__search-input"
              type="text"
              placeholder="I am looking For......"
            />
            <button className="header--top__search-button">Search</button>
          </span>

          <span className="header--top__icons">
            <li>
              <IoIosHeartEmpty />
            </li>
            <li>
              <AiOutlineShoppingCart />
            </li>
            <li>
              {" "}
              <BiUser />{" "}
            </li>
          </span>
        </div>

        <div className="header--bottom">
          <li>
            <a href=" "> Home</a>
          </li>
          <li>
            <a href=" "> About Us</a>
          </li>
          <li>
            <a href=" ">
              {" "}
              Products <AiOutlineDown />{" "}
            </a>
          </li>
          <li>
            <a href=" ">
             Contact Us
            </a>
          </li>
        </div>
      </div>
    );
}

export default Header;