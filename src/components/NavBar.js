import "../App.css";
import { useSelector } from "react-redux";
const NavBar = (props) => {
  const { cart, setCart } = props;
  const { amount } = useSelector((store) => store.cart);
  return (
    <div className="NavBar-container">
      <div className="NavBar-content">
        <div className="NavBar-Home box">
          <a state={{}} href="/home" className="box-link">
            Home
          </a>
        </div>
        <div className="NavBar-Categories box">Categories</div>
        <div className="NavBar-About box">
          <a href="/about" className="box-link">
            About
          </a>
        </div>
        <div className="NavBar-ContactUs box">Contact us</div>
        <div className="NavBar-Home box">
          <a href="/cart" className="box-link">
            <i className="badge" value={amount}>
              <img src="/cartIcon.svg" alt="" />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
