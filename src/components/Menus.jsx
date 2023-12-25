import { NavLink } from "react-router-dom";

const Menus = () => {
  // };

  return (
    <div className="flex items-center justify-between gap-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-primary py-1 "
            : "py-1 hover:text-secondary transition-all duration-1000"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? "text-primary py-1 "
            : "py-1 hover:text-secondary transition-all duration-1000"
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive
            ? "text-primary py-1 "
            : "py-1 hover:text-secondary transition-all duration-1000"
        }
      >
        Register
      </NavLink>
    </div>
  );
};

export default Menus;
