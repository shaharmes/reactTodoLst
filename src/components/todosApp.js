
import {Header} from "./Header";
import {Main} from "./Main";
import {Footer} from "./Footer";
import { todoContext } from '../providers/todoContext';
import { useTodos } from "./useTodos";




export function TodosApp({appName}) {
  

  const todoAPI = useTodos();

 

  return (
    <todoContext.Provider value={todoAPI}>
      <section className="todoapp">
        <Header title={appName}/>
        <Main/>
        <Footer/>
      </section>
    </todoContext.Provider>
  )
}
