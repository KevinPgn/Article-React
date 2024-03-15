import "./Navbar.css"
import { FaMoon } from "react-icons/fa"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return <>
    <header>
      <nav>
        <div className="left">
          <Link to="/" className="logo">CodeLine</Link>
          <a href="">Explorer</a>
          <a href="">Customs</a>
        </div>
        <div className="right">
          <button>Login</button>
          <FaMoon className="moon" />
        </div>
      </nav>
    </header>
  </>
}