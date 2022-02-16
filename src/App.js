import {useState, createContext} from "react" //part 1 createContext
import FormTest from "./FormTest";
import Header from "./components/Header";
import Login from "./scenes/Login";

export const UserContext = createContext(null); //part 2 export 

function App() {
  const [user,setUser]= useState();
  return (
    <UserContext.Provider value={{user, setUser}}> 
    <Header />
    <FormTest/>
    <br/>
    {!user && <Login />}
    </UserContext.Provider> // rap around 
    
    
  );
}

export default App;
