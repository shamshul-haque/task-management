import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-3 max-w-xs mx-auto mb-5">
        <hr className="flex-1 border-secondary" />
        <span className="text-center font-bold border border-secondary p-2 rounded-full">
          OR
        </span>
        <hr className="flex-1 border-secondary" />
      </div>
      <button className="border border-primary hover:bg-secondary transition-all duration-1000 p-2 rounded uppercase flex items-center justify-center gap-1 w-full">
        <FcGoogle className="text-2xl" />
        <span>Continue With Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
