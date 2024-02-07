import React from "react";
import logo from "@/assets/Image/logo-transparent.png";
import { Menu } from "lucide-react";
import Button from "@/components/Button";
function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant={"ghost"}>
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default PageHeader;
