import { toggleSidebar } from "actions/UIActions";
import Routes from "constants/routes";
import PropTypes from "prop-types";
import React, { Component } from "react";

import FaCog from "react-icons/lib/fa/cog";
import FaHelp from "react-icons/lib/fa/question-circle";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators, compose } from "redux";

import { Footer, Paragraph, Toolbar } from "../components";

class FooterContent extends Component {
  render() {
    const { location, toggleSidebar } = this.props;

    return (
      <Footer>
        <Toolbar />
        <Paragraph
          style={{ margin: "0 0 0 auto" }}
          size="sm"
          color="contrastDark"
          tint="secondary"
          anchorColor="accent"
        >
          {`Created by `}
          <a
            href="http://www.yashjoshi.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`Yash Joshi`}
          </a>
        </Paragraph>
      </Footer>
    );
  }
}

FooterContent.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleSidebar
    },
    dispatch
  );

export default compose(withRouter, connect(null, mapDispatchToProps))(
  FooterContent
);
