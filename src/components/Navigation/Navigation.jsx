import { NavLink } from "react-router-dom";
import { header, list, item, link, active } from "./Navigation.module.css";

const Navigtaion = () => {
  return (
    <header className={header}>
      <nav>
        <ul className={list}>
          <li className={item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${link} ${active}` : link
              }
            >
              Home
            </NavLink>
          </li>
          <li className={item}>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? `${link} ${active}` : link
              }
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigtaion;
