import "./applayout.css";
import { Outlet } from "react-router-dom";
import LOGO from "../../assets/cataloglogo.svg";
import Footer from "../footer/Footer";
const AppLayout = () => {
  return (
    <div className="main_wrapper">
      <header className="logo_wrapper">
        <img className="logo" src={LOGO} alt="" />
        <h5 className="title">
          All halalda sizga kerakli mahsulotlar albatta bor
        </h5>
      </header>
      <main className="main_contetn_container">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;
