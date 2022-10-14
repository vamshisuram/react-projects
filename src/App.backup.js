import { useState, useRef, createContext } from 'react';
import './App.css';
import Counter from "./counter/Counter";
import TodoList from "./todos/TodoList";

function App() {
  const [theme, setTheme] = useState('light')
  const [todos, setTodos] = useState([])
  const newTodoRef = useRef()
  const addTodo = () => {
    const newItem = newTodoRef.current.value;
    setTodos([...todos, newItem])
  };
  const ThemeContext = createContext('light')
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Counter context={ThemeContext} />
      </ThemeContext.Provider>

      <TodoList todos={todos} />
      <div>
        <input type="text" ref={newTodoRef} />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
