import React, { Component } from "react";
import "./Header.css";
import logo from "../assets/elitefts-logo.png";

class Header extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="header-container">
                <div className="header-left-container">
                    <img src={logo} />
                </div>
                <div className="header-middle-container">
                    <ul className="header-nav-list">
                        <li>SHOP</li>
                        <li>ARTICLES</li>
                        <li>BLOGS</li>
                        <li>ABOUT</li>
                    </ul>
                </div>
                <div className="header-right-container">
                    <div>888-854-4839</div>
                    <div>1</div>
                    <div>f3</div>
                    <div>3</div>
                </div>
                <div />
            </div>
        );
    }
}

export default Header;
