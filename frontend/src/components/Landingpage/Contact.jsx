import { useState } from "react";
import { layout } from "../../style";
import {contact } from "../../assets";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className={`${layout.sectionReverseinfo} py-12 mb-10`}>
      <div className={layout.sectionImgReverse}>
        <img src={contact} alt="Lside" className="w-[80%] h-[80%] relative z-[5]" />
      </div>
      <div className={`${layout.sectionInfo} flex flex-col items-center justify-center`}>
        <h1 className="font-poppins font-semibold text-3xl xs:text-[40px] text-center text-yellowpro mb-6">Contact Us !!</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center bg-white rounded-md shadow-lg p-8 max-w-md w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="input-field mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="input-field mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="input-field mb-4 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
            rows="4"
          ></textarea>
          <button type="submit" className="btn-submit bg-yellowpro hover:bg-yellowprolight text-white font-semibold py-2 px-4 rounded-md transition duration-300 w-full">Submit</button>
        </form>
      </div>
    </section>
  );
};


export default Contact;