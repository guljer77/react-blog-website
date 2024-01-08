import React from "react";
import CommonBanner from "../../Components/CommonBanner";
import Image from "../../assets/contact.png";
import Container from "../../Components/Container";

function Contact() {
  return (
    <div>
      <CommonBanner title={"Contact Us"} />
      <Container>
        <div className="py-10">
          <div className="lg:flex items-center justify-between gap-10">
            <div className="lg:w-2/4 w-full">
              <img src={Image} alt="" className="w-full" />
            </div>
            <div className="lg:w-2/4 w-full">
              <form action="">
                <div className="pb-3">
                  <label htmlFor="" className="pb-2 text-[16px] block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    className="py-2 pl-3 outline-0 w-full border"
                  />
                </div>
                <div className="pb-3">
                  <label htmlFor="" className="pb-2 text-[16px] block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                    className="py-2 pl-3 outline-0 w-full border"
                  />
                </div>
                <div className="pb-3">
                  <label htmlFor="" className="pb-2 text-[16px] block">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Subject"
                    name="subject"
                    className="py-2 pl-3 outline-0 w-full border"
                  />
                </div>
                <div className="pb-5">
                  <label htmlFor="" className="pb-2 text-[16px] block">
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Enter Your Message?"
                    className="p-3 outline-0 border w-full resize-none"
                  ></textarea>
                </div>
                <div>
                  <input type="submit" value="Message" className="px-5 py-2 bg-primary text-white" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
