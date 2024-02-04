import { Outlet } from "react-router-dom"
import NavbarC from "./components/Navbar"


function App() {

  return (
    <>
    <NavbarC/>
    <Outlet/>
    </>
  )
}

export default App
