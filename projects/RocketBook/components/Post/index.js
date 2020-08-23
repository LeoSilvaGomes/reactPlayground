import React, { Fragment } from "react";
import PropTypes from "prop-types";
import PostHeader from "../PostHeader";

import "./style.scss";

const Post = (props) => (
  <Fragment>
    <div className="postContainer">
      <PostHeader></PostHeader>
      <div className="comment">
        <p>{props.children}</p>
      </div>
    </div>
  </Fragment>
);

Post.defaultProps = {
  children: "Ocorreu um problema! não é possivel visualizar a publicação",
};

Post.propTypes = {
  children: PropTypes.string,
};

export default Post;
