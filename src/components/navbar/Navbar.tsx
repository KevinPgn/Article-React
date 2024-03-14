import "./Navbar.css"
import { FaMoon } from "react-icons/fa"

export const Navbar = () => {
  return <>
    <header>
      <nav>
        <div className="left">
          <div className="logo">CodeLine</div>
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