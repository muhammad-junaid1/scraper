import { NavLink } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar-container py-3 px-12 bg-[white] flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-[22px] h-[22px] bg-black rounded"></div>

        <div className="navbar-items flex items-center ml-4">
          <NavLink className={"mr-3"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={"mr-3"} to={"/contact"}>
            Contact
          </NavLink>
          <NavLink className={"mr-3"} to={"/faq"}>
            FAQ
          </NavLink>
        </div>
      </div>
      <div>
        <p className="flex items-center">
          <span className="mr-2">mjunaid.swe@gmail.com</span> <TbLogout2 className="cursor-pointer" onClick={() => {}} size={20}/>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
