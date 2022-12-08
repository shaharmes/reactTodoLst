import { useState } from "react";

export function TodosList({ items, onRemoveItem, onMarkComplete, onDblClick }) {
  
  let [editToggle, setToggle] = useState([]);


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
      onDblClick(text, item);
    }
  }

  return (
      <ul className="todo-list">
        { items.map( item => (
            <li className={item.completed ? 'completed': '' + ((item.id === editToggle) ? 'editing' : '')}>
              <div className="view">
                <input className="toggle"
                       type="checkbox"
                       checked = {item.completed}
                       onChange={()=>onMarkComplete(item)}
                       />
                <label onDoubleClick={(event)=>handleDoubleClick(event,item)}
                >{item.title}</label>
                <button className="destroy"
                        onClick={()=>onRemoveItem(item)}/>
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
