import React from "react";
import logo from "./assets/logo and rera/logo.png";
import rare from "./assets/logo and rera/rera.png";

import icon1 from "./assets/icons/1.png";
import icon2 from "./assets/icons/2.png";
import icon3 from "./assets/icons/3.png";
import icon4 from "./assets/icons/4.png";

const Footer = () => {
  const icons = [icon1, icon2, icon3, icon4];

  return (
    <footer className="bg-[#231f20] text-white py-6 px-4 md:px-12 flex justify-center items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-10 w-full">
        {/* Left: Logo */}
        <div className="w-full md:w-[35%] flex justify-center md:justify-start items-center border-b md:border-b-0 md:border-r border-gray-600 md:pr-6">
          <img
            src={logo}
            alt="Astoria Royals Logo"
            className="h-24 md:h-28 object-contain"
          />
        </div>

        {/* Middle: Address */}
        <div className="w-full md:w-[35%] text-center md:text-left text-sm leading-relaxed border-b md:border-b-0 md:border-r border-gray-600 md:px-6 flex flex-col justify-center items-center md:items-start">
          <div className="py-2">
            <h4 className="font-semibold mb-2 text-[#bb8c2e]">SITE ADDRESS</h4>
            <p>
              Astoria Royals, Aundh-Ravet BRTS Road, Ravet, Pimpri-Chinchwad,
              <br />
              Maharashtra - 412101
            </p>

            <h4 className="font-semibold mt-4 mb-2 text-[#bb8c2e]">
              CORPORATE OFFICE
            </h4>
            <p>
              Amar Business Zone, B Wing, Office No. 902 S. No. 87/1A & 87
              (Part),
              <br />
              Baner, Pune - 411045
            </p>
          </div>
        </div>

        <div className="w-full md:w-[25%] flex flex-col justify-center items-center  md:pl-6 gap-4">
          <h2>00000 00000</h2>
          <img
            src={rare}
            alt="RERA Logo"
            className="h-12 md:h-20 object-contain"
          />
          <div className="flex gap-3 flex-wrap justify-center">
            {icons.map((icon, idx) => (
              <img
                key={idx}
                src={icon1}
                alt={`Icon ${idx + 1}`}
                className="h-5 w-5 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
