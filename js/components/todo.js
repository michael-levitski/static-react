/* global _ */

function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return _(
    "div",
    null,
    _(
      "label",
      null,
      _("input", {
        type: "checkbox",
        checked: todo.complete,
        onChange: handleTodoClick
      }),
      `${todo.name}`
    )
  );
}
