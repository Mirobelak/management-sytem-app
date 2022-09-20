import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";


function App() {
  return (
    <>
    <Router>
    <Header/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/projects/:id" element={<Project/>} ></Route>
        <Route path="*" element={<NotFound/>} ></Route>
      </Routes>
    
    </div>
    </Router>
    </>
  );
}

export default App;
