
import React, { useContext } from "react";
import { UserContext } from "../App";


function Login() {
    const {setUser} = useContext(UserContext);
    return(
<button onClick={() => setUser("Emil")}>
    Login</button>
    )
}
export default Login;