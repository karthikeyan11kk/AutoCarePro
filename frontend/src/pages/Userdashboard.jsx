import React, { useEffect } from "react";
import axios from "../axios/axiosConfig";
import { Sidebar } from "../components/Userdashboard/index";
import {Function,CardDeal,Quality,Exists,} from "../components/Landingpage/index"

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
        <Function />
        <Quality />
        <Exists />
        <CardDeal/>
    </Sidebar>
  );
};

export default Userdashboard;
