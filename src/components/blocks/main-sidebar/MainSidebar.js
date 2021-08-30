import './MainSidebar.scss';
import logoImg from '../../../static/images/logo.svg';
import {NavLink} from 'react-router-dom'

function MainSidebar() {

  return (
    <aside className="main-sidebar">
      {/* Logo */}
      <nav className="main-nav">
        <ul>
          <li>
            <span>
              <img src={logoImg} className="w-100" />
            </span>
          </li>
        </ul>
      </nav>
      {/* Nav */}
      <nav className="main-nav" style={{ marginBottom: 'auto' }}>
        <ul>
          <li>
            <NavLink to="/" exact>
              <i className="icon-Home" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/discount">
              <i className="icon-Discount" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/message">
              <i className="icon-Message" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/notification">
              <i className="icon-Notification" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings">
              <i className="icon-Setting" />
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Bottom nav */}
      <nav className="main-nav">
        <ul>
          <li>
            <span>
              <i className="icon-Log-Out" />
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default MainSidebar
