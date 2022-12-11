import { useContext } from "react";
import { todoContext } from "../providers/todoContext";

export function Footer() {

  const {clearAllCompletedItems, noneCompletedItemsCount } = useContext(todoContext);

  return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{ noneCompletedItemsCount }</strong> items left</span>
        <button
            onClick={clearAllCompletedItems}
            className="clear-completed">Clear completed
        </button>
      </footer>
  );
}
