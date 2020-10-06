import React, { Fragment } from "react";
import PropTypes from "prop-types";
import PostHeader from "../PostHeader";

import "./style.scss";

const Post = (props) => (
  <Fragment>
    <div className="postContainer">
      <PostHeader publishDate={props.children.publishDate}>
        {props.children.name}
      </PostHeader>
      <div className="comment">
        <p>{props.children.comment}</p>
      </div>
    </div>
  </Fragment>
);

Post.defaultProps = {
  children: {},
};

Post.propTypes = {
  children: PropTypes.object,
};

export default Post;
