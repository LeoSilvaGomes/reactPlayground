import React, { Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "./store//actions/todos";

import PropTypes from "prop-types";

const TodoList = ({ todos, addTodo }) => {
  return (
    <Fragment>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={() => addTodo("Fazer café")}>Adicionar</button>
    </Fragment>
  );
};

TodoList.protTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    })
  ),
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
