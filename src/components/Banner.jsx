import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
import Button from "./Button";
import Container from "./Container";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <Container>
          <div className="max-w-full">
            <h1 className="mb-5 text-2xl md:text-4xl font-bold">
              Task School: Your Ultimate Task Management Solution!
            </h1>
            <p className="mb-5">
              Discover a new era of productivity with Task School. Streamline
              your tasks, simplify your success journey, and transform the way
              you work. Embrace efficiency like never before {"– it's"} time to
              make every task count!
            </p>
            <Link to="/dashboard">
              <Button />
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
