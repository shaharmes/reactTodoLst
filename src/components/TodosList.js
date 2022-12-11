import { useContext, useState } from "react";
import { todoContext } from "../providers/todoContext";

export function TodosList() {
  
  let [editToggle, setToggle] = useState([]);

  const todoApi = useContext(todoContext)
  const {todos, removeTodo, markAsCompleted, doubleClickEdit} = todoApi;
  
  console.log(todoApi)

  function handleDoubleClick(event, item) {
    console.log(item);
    editToggle = item.id;
    setToggle(editToggle);
  }

  function handleEnter(event, item) {
    if (event.key === 'Enter'){
      const text = event.target.value;
      editToggle = '';
      setToggle(editToggle);
      doubleClickEdit(text, item);
    }
  }

  return (
      <ul className="todo-list">
        { todos.map( item => (
            <li className={item.completed ? 'completed': '' + ((item.id === editToggle) ? 'editing' : '')}>
              <div className="view">
                <input className="toggle"
                       type="checkbox"
                       checked = {item.completed}
                       onChange={()=>markAsCompleted(item)}
                       />
                <label onDoubleClick={(event)=>handleDoubleClick(event,item)}
                >{item.title}</label>
                <button className="destroy"
                        onClick={()=>removeTodo(item)}/>
              </div>
              <input className="edit"
                     onKeyUp={(event)=>handleEnter(event,item)}
                     key={item.title}
                     defaultValue={item.title}/>
            </li>
        ))}
      </ul>
  );
}
