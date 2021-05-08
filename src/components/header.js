import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import CSSALogo from "../images/cssalogo.png"
import "../styles/header.css"

const Header = () => (
  <header className="header">
    <div className="container">
      <div
        style={{
          height: `38px`,
          width: `38px`,
          display: `inline-block`,
        }}
      >
        <Link to="/">
          <img src={CSSALogo} alt="CSSA logo" className="cssalogo"/>
        </Link>
      </div>
      <div className="right-subcontainer">
        <div className="tab-container">
          <Link to="/Event-Page/" className="linkTab">
            Events活动
          </Link>
        </div>
        <div className="tab-container">
          <Link to="/Membership-Page/" className="linkTab">
            Membership会员卡
          </Link>
        </div>
        <div className="tab-container">
          <Link to="/Sponsor-Page/" className="linkTab">
            Sponsors赞助商
          </Link>
        </div>
        <div className="tab-container">
          <Link to="/Family-Page/" className="linkTab">
            CSSA Family
          </Link>
        </div>
        {/* <Link to="/" className="loginTab">
          Staff Login
        </Link> */}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header