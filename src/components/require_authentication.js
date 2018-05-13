import React, { Component } from "react";
import { connect } from "react-redux";

export default ComposedComponent => {
  class Authentication extends Component {
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return { authenticated: state.authenticated };
  };

  return connect(mapStateToProps)(Authentication);
};
