import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/Userdashboard/index";
import axios from "../axios/axiosConfig";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { layout } from "../style";

function Userprofile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [editMode, setEditMode] = useState(false);

  const { user }= useSelector((state) => state.user);
  const userId=user[0];
  console.log(userId);

  function displayEdit() {
    setEditMode(!editMode);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Submit updated user data to the backend
    axios
      .put("/api/user/updateprofile", userData)
      .then((response) => {
        toast.success("Profile updated successfully");
        setEditMode(false);
      })
      .catch((error) => {
        toast.error("Failed to update profile");
      });
  }

  return (
    <Sidebar>
      <h1>User Profile</h1>
      <section className="w-full h-full flex">
      {editMode ? (
        <div className="w-2/3 h-full">
        <div className="w-full h-full py-10 px-10">
        <form onSubmit={handleSubmit}>
             <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                 Name:
                </label>
                 <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  type="text"
                  value={userData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  type="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone Number:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="phone"
                  type="text"
                  value={userData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="bg-yellowpro hover:bg-yellowprolight text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={displayEdit}
                >
                  Cancel
                </button>
              </div>
            </form>
        </div>
      </div>):(
        <div className="w-1/3 h-full flex flex-col">
        <div className="font-poppins w-full py-10 px-10 font-medium leading-[50px]">
          <p>
            <strong>Name:</strong> {userId.name}
          </p>
          <p>
            <strong>Email:</strong> {userId.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {userId.phone}
          </p>
          <div className="items-center justify-center text-center ">
          <button
            className="bg-yellowpro hover:bg-yellowprolight text-white font-bold w-[200px] mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={displayEdit}>
            Edit
          </button>
          </div>
        </div>
    </div>) }
      </section>
    </Sidebar>
  );
}

export default Userprofile;
