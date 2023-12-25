import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const DropdownMenus = () => {
  return (
    <div className="dropdown dropdown-end z-50">
      <label tabIndex={0} className="btn m-1">
        <RiMenu3Fill className="text-xl" />
      </label>
      <div
        tabIndex={0}
        className="dropdown-content p-5 shadow bg-white rounded-md w-52"
      >
        <div className="flex flex-col">
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
      </div>
    </div>
  );
};

export default DropdownMenus;
