const TodoList = ({todos}) => {
  return <div>{todos.map((todo) => <li>{todo}</li>)}</div>
}

export default TodoList;