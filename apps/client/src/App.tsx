

import { Route,Routes } from "react-router-dom";
import Dashboard from "./pages/Dashbord";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Problems from "./pages/Problems/Problems";
import ProblemDetail from "./pages/Problems/ProblemDetail";
import Layout from "./components/Layout";


function App() {

  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/problems" element={<Problems/>}/>
        <Route path="/problem/:id" element={<ProblemDetail/>}/>
        </Route>

      </Routes>

  );
}

export default App;