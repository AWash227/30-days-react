import React from "react";
import PropTypes from "prop-types";

interface IHeader {
  title: string;
}
class Header extends React.Component<IHeader> {
  render() {
    return (
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="circle"></div>
        </div>
        <span className="title">{this.props.title}</span>

        <input type="text" className="searchInput" placeholder="Search ..." />

        <div className="fa fa-search searchIcon"></div>
      </div>
    );
  }
}

//@ts-ignore
Header.propTypes = {
  title: PropTypes.string
};

export default Header;
