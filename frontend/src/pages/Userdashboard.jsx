import React, { useEffect } from "react";
import axios from "../axios/axiosConfig";
import { Sidebar } from "../components/Userdashboard/index";

const Userdashboard = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/user/get_info_userid", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
      } catch (e) {}
    };

    getData();
  }, []);
  return (
    <Sidebar>
      <h1>Hello</h1>
    </Sidebar>
  );
};

export default Userdashboard;
