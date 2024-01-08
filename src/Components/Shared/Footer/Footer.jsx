import React from "react";
import Container from "../../Container";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#0F1035] pt-10">
      <Container>
        <div className="lg:flex items-start justify-between gap-5 pb-10 text-white">
          <div className="lg:w-1/6 w-full lg:pb-0 pb-10">
            <h4 className="text-[20px] lg:pb-10 pb-5">Category</h4>
            <div>
              <ul className="space-y-3">
                <li className="text-[14px]">
                  <Link>News</Link>
                </li>
                <li className="text-[14px]">
                  <Link>World</Link>
                </li>
                <li className="text-[14px]">
                  <Link>Games</Link>
                </li>
                <li className="text-[14px]">
                  <Link>References</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/6 w-full lg:pb-0 pb-10">
            <h4 className="text-[20px] lg:pb-10 pb-5">Apples</h4>
            <div>
              <ul className="space-y-3">
                <li className="text-[14px]">
                  <Link>Web</Link>
                </li>
                <li className="text-[14px]">
                  <Link>E-commerce</Link>
                </li>
                <li className="text-[14px]">
                  <Link>Business</Link>
                </li>
                <li className="text-[14px]">
                  <Link>Entertainment</Link>
                </li>
                <li className="text-[14px]">
                  <Link>Portfolio</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/6 w-full lg:pb-0 pb-10">
            <h4 className="text-[20px] lg:pb-10 pb-5">Cherry</h4>
            <div>
              <ul className="space-y-3">
                <li className="text-[14px]">
                  <Link>Media</Link>
                </li>
                <li className="text-[14px]">
                  <Link>Brochure</Link>
                </li>
                <li className="text-[14px]">
                  <Link>Nonprofit</Link>
                </li>
                <li className="text-[14px]">
                  <Link>Educational</Link>
                </li>
                <li className="text-[14px]">
                  <Link>Project</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/6 w-full lg:pb-0 pb-10">
            <h4 className="text-[20px] lg:pb-10 pb-5">Business</h4>
            <div>
              <ul className="space-y-3">
                <li className="text-[14px]">
                  <Link>Entrepreneur</Link>
                </li>
                <li className="text-[14px]">
                  <Link>Personal</Link>
                </li>
                <li className="text-[14px]">
                  <Link>Forum</Link>
                </li>
                <li className="text-[14px]">
                  <Link>Wiki</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-2/6 w-full lg:pb-0 pb-10">
            <h4 className="text-[20px] lg:pb-10 pb-5">Subscribe For Update</h4>
            <div className="pb-3">
              <form action="">
                <input
                  type="text"
                  placeholder="Email"
                  name=""
                  id=""
                  className="w-[70%] text-black outline-0 border py-[6px] pl-3"
                />
                <input
                  type="submit"
                  placeholder="Subscribe"
                  className="py-[6px] border border-primary bg-primary w-[30%] text-white"
                />
              </form>
            </div>
            <div>
              <p className="py-3 text-[14px] font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis, tempore?
              </p>
            </div>
          </div>
        </div>
        <hr className="border border-white" />
      </Container>
      <Container>
        <div className="flex items-center justify-between text-white py-10">
          <div>
            <p className="text-[14px]">
              Web Developer team &copy; all right Reserved
            </p>
          </div>
          <div className="flex items-center space-x-5">
            <span className="text-[22px]">
              <FaFacebook />
            </span>
            <span className="text-[22px]">
              <FaInstagram />
            </span>
            <span className="text-[22px]">
              <FaTwitter />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
