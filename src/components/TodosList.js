
export function TodosList({ items, onRemoveItem, onMarkComplete }) {

  function handleDoubleClick(event) {
    event.target.parentNode.parentNode.classList.toggle('editing');
  }

  function handleEnter(event) {
    event.target.parentNode.parentNode.classList.toggle('');
  }

  return (
      <ul className="todo-list">
        { items.map( item => (
            <li className={item.completed ? 'completed': ''}>
              <div className="view">
                <input className="toggle"
                       type="checkbox"
                       checked = {item.completed}
                       onChange={()=>onMarkComplete(item)}
                       />
                <label onDoubleClick={handleDoubleClick}
                       onKeyUp={handleEnter}
                >{item.title}</label>
                <button className="destroy"
                        onClick={()=>onRemoveItem(item)}/>
              </div>
              <input className="edit"/>
            </li>
        ))}
      </ul>
  );
}
