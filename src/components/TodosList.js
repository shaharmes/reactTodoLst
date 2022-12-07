
export function TodosList({ items }) {
  return (
      <ul className="todo-list">
        { items.map( item => (
            <li className=''>
              <div className="view">
                <input className="toggle"
                       type="checkbox"/>
                <label>{item.title}</label>
                <button className="destroy"/>
              </div>
              <input className="edit"/>
            </li>
        ))}
      </ul>
  );
}
