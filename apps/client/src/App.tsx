

import { Route,Routes } from "react-router-dom";
import Dashboard from "./pages/Dashbord";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";


function App() {

  return (
    
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>

      </Routes>

  );
}

export default App;