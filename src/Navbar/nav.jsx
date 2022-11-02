import React, { Component } from "react";
import style from "./style.module.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <div className={style.logocontainer}>
            <div className={style.edyoda_logo}>
              <div className={style.edyoda_text}>EDYODA</div>

              <p className={style.logo_stories}>Stories</p>
            </div>
            <div className={style.dropdown}>
              <button className={style.dropdown_text}>
                Explore Categories
              </button>
              <i
                className="fa fa-chevron-down"
                aria-hidden="true"
                id="dropdown-icon"
              ></i>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default Navbar;
