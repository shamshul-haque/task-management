import logo from "../assets/logo.png";
import Container from "./Container";
import DropdownMenus from "./DropdownMenus";
import Menus from "./Menus";

const Navbar = () => {
  return (
    <div>
      <div className="w-full max-w-screen-xl fixed z-50 bg-white shadow-md text-black py-3">
        <Container>
          <div className="flex justify-between items-center">
            {/* logo */}
            <div className="flex items-center">
              <img src={logo} alt="logo" className="w-14" />
              <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Task School
              </h1>
            </div>

            <div>
              {/* large device's menus*/}
              <div className="hidden lg:block">
                <Menus />
              </div>

              {/* small and medium device's menus */}
              <div className="block lg:hidden">
                <DropdownMenus />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
