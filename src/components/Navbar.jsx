import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div
        className={
          pathname === "/" ? "bg-[#9538E2] text-white rounded-t-3xl" : ""
        }
      >
        <div className="navbar lg:flex-row px-8 lg:px-32 lg:pt-8">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#d7a5ff59] rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `font-bold ${isActive ? "text-white" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/statistics"
                    className={({ isActive }) =>
                      `font-bold ${isActive ? "bg-[#9538E2] text-white" : ""}`
                    }
                  >
                    Statistics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `font-bold ${isActive ? "bg-[#9538E2] text-white" : ""}`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to="/" className="text-xl font-bold cursor-pointer">
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-bold ${isActive ? "text-white border-2" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    `font-bold ${isActive ? "bg-[#9538E2] text-white" : ""}`
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `font-bold ${isActive ? "bg-[#9538E2] text-white" : ""}`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-5">
            <Link className="relative border-2 rounded-full text-xl p-3 bg-base-100 text-black">
              <IoCartOutline />
              <div className="absolute bg-[#b47ce2] rounded-full text-base text-white px-1.5 -top-1.5 -right-1.5">
                0
              </div>
            </Link>
            <Link className="relative border-2 rounded-full text-xl p-3 bg-base-100 text-black">
              <MdFavoriteBorder />
              <div className="absolute bg-[#b47ce2] rounded-full text-base text-white px-1.5 -top-1.5 -right-1.5">
                0
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
