import { NavLink } from "react-router-dom"
import "./header.css"

export default function Header() {
  return (
    <>
      <h1>kumaのホームページ</h1>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/todo"}>Todo</NavLink>
      </nav>
    </>
  )
}
