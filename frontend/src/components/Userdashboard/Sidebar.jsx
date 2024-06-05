import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logo } from "../../assets";

function Sidebar({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { user }= useSelector((state) => state.user);
    const userId =user[0];
    const userMenu = [
        { name: "Home", path: "/userdashboard", icon: "" },
        { name: "Book Service", path: "/bookslot", icon: "" },
        { name: "Previous Booking", path: "/prevbook", icon: "" },
        { name: "Profile", path: "/userprofile", icon: "" },
    ];

    const adminMenu = [
        { name: "Home", path: "/adminhome", icon: "" },
        { name: "Customer Booking", path: "/cusBook", icon: "" },
        { name: "Profile", path: "/adminprofile", icon: "" },
    ];

    const menuRender = userId?.isAdmin ? adminMenu : userMenu;

    return (
        <div className="main p-2 h-screen">
            <div className="flex h-full">
                <div className="sidebar text-white font-poppins font-semibold w-[300px] h-full p-4 bg-yellow-600 rounded-lg shadow-lg">
                    <div className="sidebar-header mb-3 flex flex-col items-center">
                        <img src={logo} alt="Logo" className="mb-4" />
                        <h1 className="text-[30px] text-center font-semibold">
                            AutoCarePro
                        </h1>
                        <p className="text-white mt-2">Hi {userId?.username}</p>
                    </div>
                    <div className="menu mt-10">
                        {menuRender.map((menu, index) => {
                            const isActive = location.pathname === menu.path;
                            return (
                                <div
                                    className={`flex justify-center items-center py-2 ${isActive ? "bg-yellow-400 rounded-md" : ""}`}
                                    key={index}
                                >
                                    <Link to={menu.path} className="text-white text-[20px] mt-2">
                                        {menu.name}
                                    </Link>
                                </div>
                            );
                        })}
                        <div
                            className="flex justify-center items-center py-2 mt-8 cursor-pointer"
                            onClick={() => {
                                localStorage.removeItem("token");
                                navigate("/");
                            }}
                        >
                            <span className="text-white text-[20px]">
                                Logout
                            </span>
                        </div>
                    </div>
                </div>
                <div className="content flex-1 bg-white p-4 rounded-lg shadow-lg overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
