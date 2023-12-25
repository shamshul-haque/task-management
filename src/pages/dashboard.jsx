import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../components/Container";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logoutUser()
      .then(() => {
        navigate("/");
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
    <div className="pt-32 pb-5">
      <Container>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="bg-white shadow-md min-h-screen p-5 text-center">
            <img
              src={user?.photoURL}
              alt="profile picture"
              className="w-full h-52"
            />
            <h2 className="pt-5">
              <span className="font-bold">Name:</span> {user?.displayName}
            </h2>
            <p>
              <span className="font-bold">Email:</span> {user?.email}
            </p>
            <button
              onClick={handleLogout}
              className="bg-primary hover:bg-secondary text-white transition-all duration-1000 px-4 py-2 rounded-full uppercase cursor-pointer mt-5"
            >
              Logout
            </button>
          </div>
          <div className="flex-1">
            <h1 className="text-center text-3xl font-bold">My Dashboard</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
