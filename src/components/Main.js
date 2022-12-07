import {TodosList} from "./TodosList";

export function Main({ items, onToggleAll, onRemoveItem, onMarkComplete }) {

  function handleToggleAll(event) {
    onToggleAll(event.target.checked);
  }

  return (
      <section className="main">
        <input className="toggle-all"
               onChange={handleToggleAll}
               type="checkbox"/>
        <TodosList items={items}
                   onRemoveItem={onRemoveItem}
                   onMarkComplete = {onMarkComplete}
                   />
      </section>
  );
}
