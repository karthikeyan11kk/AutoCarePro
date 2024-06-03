import React, { useEffect, useState } from 'react';
import { Sidebar } from "../components/Userdashboard/index";
import axios from '../axios/axiosConfig';
import toast from 'react-hot-toast';

function Cusbooking() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchDate, setSearchDate] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/user/all-bookings', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        // Sort bookings by date in descending order (most recent first)
        const sortedBookings = response.data.bookings.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBookings(sortedBookings);
        setFilteredBookings(sortedBookings);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  };

  const handleSearchDateChange = (e) => {
    const selectedDate = e.target.value;
    setSearchDate(selectedDate);
    if (selectedDate) {
      const filtered = bookings.filter(booking => new Date(booking.date).toLocaleDateString() === new Date(selectedDate).toLocaleDateString());
      setFilteredBookings(filtered);
    } else {
      setFilteredBookings(bookings);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <Sidebar>
      <div className="p-4 w-full flex-1">
        <h2 className="text-2xl font-bold mb-4">Previous Bookings</h2>
        <hr className="mb-4" />
        
        <div className="mb-4">
          <label htmlFor="searchDate" className="block text-sm font-medium text-gray-700">
            Search by Date
          </label>
          <input
            type="date"
            id="searchDate"
            value={searchDate}
            onChange={handleSearchDateChange}
            className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellowpro focus:border-yellowpro"
          />
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : filteredBookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-yellowpro text-white">
                <tr>
                  <th className="py-2 px-4">User Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Phone Number</th>
                  <th className="py-2 px-4">Vehicle Number</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Time</th>
                  <th className="py-2 px-4">Service Type</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking, index) => (
                  <tr key={booking._id} className={`border-t text-center ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                    <td className="py-2 px-4 border">{booking.userId.username}</td>
                    <td className="py-2 px-4 border">{booking.userId.email}</td>
                    <td className="py-2 px-4 border">{booking.userId.phone}</td>
                    <td className="py-2 px-4 border">{booking.vehicleNumber}</td>
                    <td className="py-2 px-4 border">{new Date(booking.date).toLocaleDateString()}</td>
                    <td className="py-2 px-4 border">{booking.time}</td>
                    <td className="py-2 px-4 border">{booking.serviceType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No previous bookings found.</p>
        )}
      </div>
    </Sidebar>
  );
}

export default Cusbooking;
