import {BrowserRouter , Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ErrorBoundary from "./components/Error.Boundary";
import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter  
       future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
    <Header />
    <ErrorBoundary>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      
     </Routes>
     </ErrorBoundary>
    </BrowserRouter>

    </>
    
  )
}

export default App
