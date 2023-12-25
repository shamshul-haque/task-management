import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const Menus = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = async () => {
    logoutUser()
      .then(() => {
        toast?.success("Logout successful!", {
          position: "top-center",
          theme: "colored",
        });
      })
      .catch((err) => {
        toast?.error(err?.code, {
          position: "top-center",
          theme: "colored",
        });
      });
  };

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
      {user ? (
        <>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-primary py-1 "
                : "py-1 hover:text-secondary transition-all duration-1000"
            }
          >
            Dashboard
          </NavLink>
          <Link
            to="/"
            onClick={handleLogout}
            className="py-1 hover:text-secondary transition-all duration-1000"
          >
            Logout
          </Link>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Menus;
