import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";
import {useEffect, useState} from "react";



function App() {
  const [ todos, setTodos ] = useState([]);
  const [ noneCompletedItemsCount, setNoneCompletedItemsCount ] = useState(0);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //       .then( response => response.json())
  //       .then(setTodos)
  // }, []);

  useEffect(() => {
      const uncompleted = todos.filter( todo => !todo.completed );
      setNoneCompletedItemsCount(uncompleted.length);
  }, [todos])

  const appTitle = 'TodosApp';


  const addTodo = (title) => {
    const newTodos = todos.concat([{ id: Date.now(), title, completed: false }])
    setTodos(newTodos);
  }

  const removeTodo = (todoToRemove) => {
    const newTodos = todos.filter( currentTodo => currentTodo.id !== todoToRemove.id );
    setTodos(newTodos);
  }

  const markAsCompleted = (todoToComplete) => {
    todoToComplete.completed = !todoToComplete.completed;
    setTodos([...todos]);
  }

  const clearAllCompletedItems = () => {
    const newTodos = todos.filter( currentTodo => !currentTodo.completed );
    setTodos(newTodos);
    console.log(todos);
  }

  const toggleAllItems = (checkedValue) => {
    const newTodos = todos.map( todo => ({ ...todo, completed: checkedValue }));
    // todos = todos.map( todo => Object.assign({}, todo, {completed: checkedValue}));
    setTodos(newTodos);
    console.log(todos);
  }

  const doubleClickEdit = (textValue) => {
    
  }

  return (
      <section className="todoapp">
        <Header title={appTitle}
                onAddItem={addTodo}
                text="What needs to be done?"  />
        <Main items={todos}
              onToggleAll={toggleAllItems}
              onRemoveItem={removeTodo}
              onMarkComplete={markAsCompleted}
        />
        <Footer
            itemLeftCount={noneCompletedItemsCount}
            onClearCompleted={clearAllCompletedItems}/>
      </section>
  )
}

export default App;
