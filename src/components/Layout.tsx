import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <div className="fixed w-56 h-full bg-[#e9e9e9] shadow-sm">
        <div className="flex justify-center mt-6 mb-14">
          <picture>
            <img className="w-20 h-auto" src="/flamee.png" alt="Logo" />
          </picture>
        </div>

        <div className="flex flex-col">
          <Link to="/">
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                location.pathname === "/"
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">
                <RxDashboard className="h-5 w-5" />
              </div>
              <div>
                <p>Dashboard</p>
              </div>
            </div>
          </Link>
          <Link to="/users">
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                location.pathname === "/users"
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">
                <RxPerson className="h-5 w-5" />
              </div>
              <div>
                <p>Users</p>
              </div>
            </div>
          </Link>
          <Link to="/board">
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                location.pathname === "/board"
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">
                <RxSketchLogo className="h-5 w-5" />
              </div>
              <div>
                <p>Board</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <main className="pt-16 pl-56 h-screen w-screen overflow-auto bg-[#f3f4f6]">
        <div className="px-4 md:px-16">{children}</div>
      </main>
    </>
  );
};

export default Layout;
