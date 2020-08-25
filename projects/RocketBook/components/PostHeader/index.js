import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./style.scss";

const PostHeader = (props) => (
  <Fragment>
    <h4>{props.children}</h4>
    <p className="time">há {props.publishDate}</p>
  </Fragment>
);

PostHeader.defaultProps = {
  publishDate: "poucos minutos",
  children: "Anônimo",
};

PostHeader.propTypes = {
  publishDate: PropTypes.string,
  children: PropTypes.string,
};

export default PostHeader;
