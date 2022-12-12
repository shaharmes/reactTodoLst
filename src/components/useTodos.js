import {useState, useEffect} from "react";

export function useTodos() {
  const [ todos, setTodos ] = useState([]);
  const [ noneCompletedItemsCount, setNoneCompletedItemsCount ] = useState(0);

  useEffect(() => {
      const uncompleted = todos.filter( todo => !todo.completed );
      setNoneCompletedItemsCount(uncompleted.length);
  }, [todos])


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
    
  }

  const toggleAllItems = (checkedValue) => {
    const newTodos = todos.map( todo => ({ ...todo, completed: checkedValue }));
    // todos = todos.map( todo => Object.assign({}, todo, {completed: checkedValue}));
    setTodos(newTodos);
  }

  const doubleClickEdit = (textValue, item) => {
    item.title = textValue;
    setTodos([...todos]);
  }

  return {
    todos,
    setTodos,
    noneCompletedItemsCount,
    setNoneCompletedItemsCount,
    removeTodo,
    addTodo,
    markAsCompleted,
    clearAllCompletedItems,
    toggleAllItems,
    doubleClickEdit
  }

}