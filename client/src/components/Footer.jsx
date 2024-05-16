import React from "react";
import instaIcon from ".././assets/instagram_icon.png";
import whatsappIcon from ".././assets/whatsapp_icon.png";


const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-purple-100 to-white py-12 flex items-center justify-between w-full">

        <div className="">
          <h2 className="text-4xl font-bold text-red-400 ml-5">A2 Studio</h2>
          <p className="text-gray-400 ml-5">Designing Dreams, Transforming Spaces.</p>
        </div>


        <div className="flex items-center justify-center space-x-4 mb-4">
          <p>Follow us on</p>
          <img src={instaIcon} alt="Instagram" />
          <img src={whatsappIcon} alt="WhatsApp" />
        </div>

      </div>
      <hr className="border-black" />
      <div className="">
        <p className="text-sm text-black ml-5 mt-2 text-center">&copy; {new Date().getFullYear()} A2 Studio. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
