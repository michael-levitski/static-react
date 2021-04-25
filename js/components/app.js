/* global  React, TodoList, _ */

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = React.useState([]);
  const todoNameRef = React.useRef();

  React.useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: String(Date.now()), name: name, complete: false }
      ];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return _(
    React.Fragment,
    null,
    _(TodoList, { todos, toggleTodo }),
    _("input", { ref: todoNameRef, type: "text" }),
    _("button", { onClick: handleAddTodo }, `Add Todo`),
    _("button", { onClick: handleClearTodos }, `Clear Complete`),
    _(
      "div",
      null,
      `${todos.filter((todo) => !todo.complete).length} left to do`
    )
  );
}
