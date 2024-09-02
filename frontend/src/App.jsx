import Home from "./pages/home/Home.jsx"
import LogIn from "./pages/login/LogIn.jsx"
import SignUp from "./pages/signup/SignUp.jsx"
import {Routes, Route }from"react-router-dom"
import {Toaster} from "react-hot-toast"
 

function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
