import { NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";

export const routes = [
  { name: "Home", path: "/", element: <Home />, id: 1 },
  { name: "Create", path: "/create", element: <Create />, id: 2 },
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <NavLink
              className="navLink"
              to={route.path}
              style={({ isActive }) =>
                isActive ? { background: "#FA7070" } : undefined
              }
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
