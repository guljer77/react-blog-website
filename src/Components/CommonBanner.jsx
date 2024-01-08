import React from "react";
import Container from "./Container";

function CommonBanner({title}) {
  return (
    <div className="bg-black text-white">
      <Container>
        <div className="flex items-center justify-center w-full h-[60vh]">
          <div className="text-center">
            <h2 className="text-[36px] font-bold">{title}</h2>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CommonBanner;
