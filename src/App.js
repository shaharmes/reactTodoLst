import './App.css';
import './providers/todoContext';
import { TodosApp } from './components/todosApp';
import { useRef, useState } from 'react';



function App() {

  const [user, setUser] = useState(null);

  const [apps, setApps] = useState(['todos', 'task', 'backlog']);
  const inputRef = useRef(null);
  const userRef = useRef(null);

  function addApp(){
    const text = inputRef.current.value;
    apps.push(text);
    setApps([...apps]);
  }

  function logIn(){
    const admin = userRef.current.value
    setUser(admin);
  }


  return (
    <>
      {user ? (
        <>
          <input ref={inputRef} type="text"/>
          <button onClick={addApp}>ADD LIST</button>
          {apps.map(app => (
            <TodosApp appName = {app} />
          ))}
        </>
        ) : (
          <>
            <input type="text" key={'user'} ref={userRef} placeholder={'username'}/>
            <input type="password" placeholder={'password'}/>
            <button onClick={logIn}>sign in</button>
          </>
        )}
    </>
  )
}

export default App;
