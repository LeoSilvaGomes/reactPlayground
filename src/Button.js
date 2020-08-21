import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Button = (props) => (
  <Fragment>
    <button style={{ background: "#F00" }} onClick={props.onClick}>
      {props.children}
    </button>
  </Fragment>
);

Button.defaultProps = {
  children: "Salvar",
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default Button;
