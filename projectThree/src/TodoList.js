import React from "react";

import { connect } from "react-redux";

import PropTypes from "prop-types";

const TodoList = (props) => {
  console.log(props);
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

TodoList.protTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      id: PropTypes.string,
    })
  ),
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
