import { useContext } from "react";
import { todoContext } from "../providers/todoContext";
import {TodosList} from "./TodosList";

export function Main() {

  const {toggleAllItems} = useContext(todoContext);

  function handleToggleAll(event) {
    toggleAllItems(event.target.checked);
  }

  return (
      <section className="main">
        <input className="toggle-all"
               onChange={handleToggleAll}
               type="checkbox"/>
        <TodosList />
      </section>
  );
}
