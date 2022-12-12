import {useContext} from "react";
import '../form.css';
import {AuthContext} from "../context/auth";
import { useNavigate } from 'react-router-dom';

export function SignIn () {
  
  const { setCurrentUser } = useContext(AuthContext);
  let navigate = useNavigate();

  function handleSubmit() {
    
    //todo: go to api and sign in with the info above
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then( response => response.json())
        .then((user) => {
          setCurrentUser(user);
          navigate('/home')
        })
  }

  return (
      <main className="form-signin w-100 m-auto">
        <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input type="email"
                     className="form-control"
                     placeholder="name@example.com" />
                <label>Email address</label>
            </div>
            <div className="form-floating">
              <input type="password"
                     className="form-control"
                     placeholder="Password" />
                <label >Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary"
                    onClick={handleSubmit}
                    type="button">Sign in</button>
        </form>
      </main>
  )
}