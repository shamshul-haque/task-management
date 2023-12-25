import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container from "../components/Container";
import SocialLogin from "../components/SocialLogin";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    loginUser(data?.email, data?.password)
      .then(() => {
        toast?.success("Login successful!", {
          position: "top-center",
          theme: "colored",
        });
        navigate(from, {
          replace: true,
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
    <Container>
      <div className="flex items-center justify-center pt-28 py-10">
        <div className="w-full max-w-sm bg-black bg-opacity-20 rounded p-5">
          <h1 className="text-3xl text-center font-bold">Login Now</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control space-y-1 mb-3">
              <label>Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email Address"
                className="outline-0 border p-2 rounded text-sm"
              />
              {errors?.email?.type === "required" && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control space-y-1 mb-5">
              <label>Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Enter Password"
                className="outline-0 border p-2 rounded text-sm"
              />
              {errors?.password?.type === "required" && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="submit"
                value="Login"
                className="bg-primary hover:bg-secondary text-white transition-all duration-1000 p-2 rounded uppercase cursor-pointer"
              />
            </div>
          </form>
          <SocialLogin />
          <p className="text-sm text-center pt-5">
            <span>{`Don't Have Any Account?`}</span>{" "}
            <Link
              to="/register"
              className="text-primary hover:underline font-bold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
