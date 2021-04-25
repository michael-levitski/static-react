/* global Todo, _ */

function TodoList({ todos, toggleTodo }) {
  return todos.map((todo) => {
    return _(Todo, { key: todo.id, toggleTodo, todo });
  });
}
