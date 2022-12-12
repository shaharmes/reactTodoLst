import './App.css';
import './providers/todoContext';
import { TodosApp } from './components/todosApp';
import { useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/auth';
import { AppContext } from './context/appContext';




function App() {

  const {currentUser} = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    (!currentUser && navigate('/sign-in'))
  }, [currentUser, navigate])
  
  

  const {apps, setApps} = useContext(AppContext);
  const inputRef = useRef(null);

  function addApp(){
    const text = inputRef.current.value;
    apps.push(<TodosApp appName = {text} key={Math.random()} />);
    console.log(apps);
    setApps([...apps]);
  }

  return (
    <>
      <input ref={inputRef} type="text"/>
      <button onClick={addApp}>ADD LIST</button>
      {apps.map(app => (
        app
      ))}
      
    </>
  )
}

export default App;
