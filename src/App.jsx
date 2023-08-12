import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"

function App() {
  const string = "Hello";

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  )
}

export default App
