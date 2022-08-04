import Login from "./views/authentication/Login";
import "./App.css"
import Register from "./views/authentication/Register";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";

const App=()=>{
  return(
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
  
    </div>
  )

}
export default App