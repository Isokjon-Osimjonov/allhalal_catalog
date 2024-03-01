import "./home.css";
import { NavLink } from "react-router-dom";
import CLOGO from "../../assets/logocart.svg";
const Home = () => {
  return (
    <div className="home_main">
      <NavLink to="/catalog/drinks" className="catalog_category">
        <img className="icon" src={CLOGO} alt="" /> Ichimliklar
      </NavLink>
      <NavLink to="/catalog/sweets" className="catalog_category">
        <img className="icon" src={CLOGO} alt="" /> Shirinliklar
      </NavLink>
      <NavLink to="/catalog/pickles" className="catalog_category">
        <img className="icon" src={CLOGO} alt="" /> Tuzlamalar
      </NavLink>
      <NavLink to="/catalog/meats" className="catalog_category">
        <img className="icon" src={CLOGO} alt="" /> Go&apos;sht
      </NavLink>
      <NavLink to="/catalog/condiments" className="catalog_category">
        <img className="icon" src={CLOGO} alt="" /> Ziravorlar
      </NavLink>
      <NavLink to="/catalog/legumes" className="catalog_category">
        <img className="icon" src={CLOGO} alt="" /> Dukkaliklar
      </NavLink>

      <NavLink to="/catalog/oils" className="catalog_category">
        <img className="icon" src={CLOGO} alt="" /> Yog&apos;
      </NavLink>
      <NavLink to="/catalog/teas" className="catalog_category">
        <img className="icon" src={CLOGO} alt="" /> Choy
      </NavLink>
      <NavLink to="/catalog/others" className="catalog_category">
        <img className="icon" src={CLOGO} alt="" /> Boshqa mahsulotlar
      </NavLink>
    </div>
  );
};

export default Home;
