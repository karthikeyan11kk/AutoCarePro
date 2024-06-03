import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins text-white font-medium text-[18px] text-primary bg-yellowpro rounded-[50px] outline-none ${styles}`}>
    Explore
  </button>
);

export default Button;
