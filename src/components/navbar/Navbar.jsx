import "./navbar.scss";
import SearchBar from "../search/SearchBar";
import { useContext, useEffect } from "react";
import {DataContext} from "../../context/DataProvider";

export default function Navbar() {

  const {searchBar} = useContext(DataContext);

  return (
      <div className="navbar">
        <div className="container">
          <div className="left">
            <img
              src="data:image/png;base64,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"
              alt="This is a logo"
            />
            <span>
              <select>
                <option value="volvo" selected>Our Services</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              {/* <ArrowDropDown/> */}
            </span>
          </div>
          { !searchBar && <SearchBar />}
          <div className="right">
            <span className="phone">+971 56 816 3494</span>
            <span>Login</span>
          </div>
        </div>
      </div>
  );
}
