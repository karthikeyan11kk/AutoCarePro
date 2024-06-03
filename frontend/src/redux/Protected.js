import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../axios/axiosConfig';
import { setUser } from './userSlice';
import { showLoading, hideLoading } from './alertSlice';

function Protected({ children }) {
    const { user } = useSelector(state => state.user);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const token = localStorage.getItem("token");

    const getUser = async () => {
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            dispatch(showLoading());
            const response = await axios.get(
                "/api/user/get_info_userid",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(response.data);
            if (response.data.success) {
                dispatch(setUser(response.data.data)); // Ensure the correct data path
            } else {
                localStorage.removeItem("token");
                navigate("/login");
                throw new Error("User data retrieval failed");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            localStorage.removeItem("token");
            navigate("/login");
        } finally {
            dispatch(hideLoading());
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!user && token) {
            getUser();
        } else {
            setLoading(false);
        }
    }, [user, token]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!token) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
}

export default Protected;
