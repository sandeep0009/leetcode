

import { Route,Routes } from "react-router-dom";
import Dashboard from "./pages/Dashbord";


function App() {

  return (
    
      <Routes>
        <Route path="/" element={<Dashboard/>}/>

      </Routes>

  );
}

export default App;