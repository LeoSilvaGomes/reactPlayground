import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Footer = ({ count }) => <p>Você tem {count} repositórios favoritos</p>;

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

const mapStateProps = (state) => ({
  count: state.favorites.data.length,
});

export default connect(mapStateProps)(Footer);
