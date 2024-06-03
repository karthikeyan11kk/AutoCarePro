import React, { useEffect, useState } from 'react';
import { Sidebar } from "../components/Userdashboard/index";
import axios from '../axios/axiosConfig';
import toast from 'react-hot-toast';

function Userprofile() {


  return (
    <Sidebar>
      <div className="p-4 w-full flex-1">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
      </div>
    </Sidebar>
  );
}

export default Userprofile;
