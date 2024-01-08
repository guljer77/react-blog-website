import React from "react";
import CommonBanner from "../../Components/CommonBanner";
import Container from "../../Components/Container";
import { SiAdobeindesign } from "react-icons/si";
import { FaCss3Alt, FaRegThumbsUp } from "react-icons/fa";
import { BsFillBoxFill } from "react-icons/bs";
import { MdMonitor, MdOutlineDashboardCustomize } from "react-icons/md";

const ServicesData = [
  {
    title: "Refreshing Design",
    icon: <SiAdobeindesign />,
  },
  {
    title: "Based On Tailwind CSS",
    icon: <FaCss3Alt />,
  },
  {
    title: "300+ Components",
    icon: <BsFillBoxFill />,
  },
  {
    title: "Speed Optimization",
    icon: <MdMonitor />,
  },
  {
    title: "Fully Customization",
    icon: <MdOutlineDashboardCustomize />,
  },
  {
    title: "Regular Updates",
    icon: <FaRegThumbsUp />,
  },
];

function Services() {
  return (
    <div>
      <CommonBanner title={"Services Page"} />
      <Container>
        <div className="text-center py-10">
          <h4 className="text-[18px] text-primary">Our Services</h4>
          <h2 className="text-[38px] font-semibold">What We Offer</h2>
          <p className="lg:w-2/4 mx-auto lg:px-10 text-[16px] font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            odio ut accusamus totam beatae molestiae adipisci, exercitationem
            eos neque quis?
          </p>
        </div>
        <div className="pb-20 pt-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {ServicesData.map((item, i) => (
              <div key={i} className="bg-white p-5 shadow-lg">
                <span className="text-[48px] pb-3 block text-primary">{item?.icon}</span>
                <h4 className="text-[22px] font-semibold py-2">{item?.title}</h4>
                <p className="text-[15px] font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium eaque reprehenderit alias tempora accusantium
                  pariatur, consectetur aspernatur.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Services;
