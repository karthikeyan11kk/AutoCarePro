import React, { useEffect, useState } from 'react';
import { Sidebar } from "../components/Userdashboard/index";
import axios from '../axios/axiosConfig';
import toast from 'react-hot-toast';

function Prevbooking() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/user/user-bookings', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.success) {
        // Sort bookings by date in descending order (most recent first)
        const sortedBookings = response.data.bookings.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBookings(sortedBookings);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to fetch bookings");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <Sidebar>
      <div className="p-4 w-full flex-1">
        <h2 className="text-2xl font-bold mb-4">Previous Bookings</h2>
        <hr className="mb-4"></hr>
        {bookings.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {bookings.map((booking) => (
              <div key={booking._id} className="w-full sm:w-[300px] md:w-[250px] lg:w-[300px] text-center leading-[40px] p-4 bg-white shadow-lg rounded-xl">
                <p><strong>Vehicle Number:</strong> {booking.vehicleNumber}</p>
                <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {booking.time}</p>
                <p><strong>Service Type:</strong> {booking.serviceType}</p>
                <button
                  className="bg-yellowpro hover:bg-yellowprolight text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit">
                  View More Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No previous bookings found.</p>
        )}
      </div>
    </Sidebar>
  );
}

export default Prevbooking;
