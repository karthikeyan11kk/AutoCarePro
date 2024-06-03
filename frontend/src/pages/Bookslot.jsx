import React, { useState } from 'react';
import { Homelogo } from '../assets';
import styles from '../style';
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from '../redux/alertSlice';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from "../components/Userdashboard/index";

const Bookslot = () => {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    date: '',
    time: '',
    serviceType: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(showLoading());
      const token = localStorage.getItem('token');
      const response = await axios.post(`/api/user/book-service`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/userdashboard");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch(hideLoading());
      toast.error(`Something went wrong`);
    }
  };

  return (
    <Sidebar>
      <section className="flex flex-col md:flex-row justify-center items-center py-10 md:py-10 px-4 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row justify-center items-center py-10 md:py-10 px-4 md:px-10 lg:px-10 shadow-2xl shadow-grey rounded-3xl">
          <div className="flex-1 w-full md:w-1/2 bg-white p-6 md:p-8 lg:p-12 mb-10 md:mb-0">
            <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">Book Your Service</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Vehicle Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="vehicleNumber"
                  type="text"
                  placeholder="Vehicle Number"
                  value={formData.vehicleNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Time
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Type of Service
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="General Services">General Services</option>
                  <option value="Engine Works">Engine Works</option>
                  <option value="Body Shop"> Body Shop</option>
                  <option value=" AC Services">AC Services</option>
                </select>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-yellowpro hover:bg-yellowprolight text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit">
                  Book
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full md:w-1/2 flex justify-center items-center p-6 md:p-8 lg:p-12">
            <img src={Homelogo} alt="Home logo" className="w-[90%] h-[90%] object-cover rounded-lg" />
          </div>
        </div>
      </section>
    </Sidebar>
 
);
}

export default Bookslot;