//import function module
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import component
import {HomePage} from "./pages/HomePage"; // ตรวจสอบการ import
import {ViewPostPage} from "./pages/ViewPostPage"; // ตรวจสอบการ import


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/post/:postId" element={<ViewPostPage />} /> 
        </Routes>
      </Router>

      
    </>
  );
}

export default App;
