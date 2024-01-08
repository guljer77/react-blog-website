import React from "react";
import CommonBanner from "../../Components/CommonBanner";
import Image from "../../assets/about.png";
import Container from "../../Components/Container";

function About() {
  return (
    <div>
      <CommonBanner title={"About Us Page"} />
      <Container>
        <div className="py-10">
          <div className="pt-5 pb-10 lg:flex items-center justify-between gap-10">
            <div className="lg:w-2/4 w-full">
              <img src={Image} alt="" className="w-full" />
            </div>
            <div className="lg:w-2/4 w-full">
              <h6 className="text-[16px] font-medium text-primary">
                Who We Are
              </h6>
              <h3 className="text-[34px] font-semibold py-3 lg:w-3/4 w-full">We provide high quality Articles & Blogs</h3>
              <p className="text-[15px] font-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab vel
                mollitia eum repellendus voluptate dolorum consequuntur, quam
                quisquam pariatur veritatis.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
