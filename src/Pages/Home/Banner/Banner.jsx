import React from "react";
import Container from "../../../Components/Container";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function Banner({ title }) {
  return (
    <div className="bg-black text-white">
      <Container>
        <div className="flex items-center justify-center w-full lg:h-[60vh] h-screen">
          <div className="text-center">
            <h2 className="lg:text-[36px] text-[24px] font-bold">{title}</h2>
            <p className="lg:w-2/4 w-full mx-auto text-[14px] py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              impedit assumenda dolorum amet nesciunt ipsam nostrum
              facilisconsequuntur dolorem sint?
            </p>
            <Link className="pt-5">
              Learn More <FaArrowRightLong className="inline-block" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
