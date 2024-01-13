import React from "react";
import Container from "../../Components/Container";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function ProfileLayouts() {
  return (
    <div className="py-10">
      <Container>
        <div className="lg:flex items-start justify-between gap-10">
          <div className="lg:w-1/4 w-full lg:pb-0 pb-10"><Sidebar /></div>
          <div className="lg:w-3/4 w-full">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProfileLayouts;
