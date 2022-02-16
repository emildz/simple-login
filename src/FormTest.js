import {useContext} from "react"
import {UserContext} from './App'

function FormTest() {
    const {user, setUser}= useContext(UserContext); //1 set up state 
    const handleFirstName = (event) =>{
      setUser(event.target.value)
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      alert("Form submitted. Thanks" + user)
    }
    return (
      <>
      <h1>Hello {user}</h1>
      <form onSubmit={handleSubmit}> 
        <label>First Name &nbsp;
          <input type="text" 
          value={user} //2 set input value to state 
          onChange={handleFirstName} //3 onChange update state 
          />
        </label>
      </form>
      </>
    );
  }
  
  export default FormTest;