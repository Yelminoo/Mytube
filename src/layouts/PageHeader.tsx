import React, { useState } from "react";
import logo from "@/assets/Image/logo-transparent.png";
import {
  ArrowBigLeft,
  ArrowLeft,
  Bell,
  Menu,
  Mic,
  Search,
  Upload,
  User,
  icons,
} from "lucide-react";
import { Button } from "@/components/Button";
function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between py-2 mb-6 px-4 bg-[#422006]">
      <div
        className={`flex gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant={"ghost"}>
          <Menu color="white" />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </div>
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "md:flex hidden"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(false)}
          size={"icon"}
          variant={"ghost"}
          className={`${showFullWidthSearch ? "flex" : "hidden"}`}
        >
          <ArrowLeft color="white" />
        </Button>
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="search"
            className="rounded-l-full border-secondary-border shadow shadow-secondary py-1 px-4 text-lg w-full focus:border-yellow-600 focus:border-2  outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button size={"icon"} variant={"ghost"} className="flex-shrink-0">
          <Mic color="white" />
        </Button>
      </form>
      <div
        className={`flex flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size={"icon"}
          variant={"ghost"}
          className="md:hidden"
        >
          <Search color="white" />
        </Button>
        <Button size={"icon"} variant={"ghost"} className="md:hidden">
          <Mic color="white" />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <Upload color="white" />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <Bell color="white" />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <User color="white" />
        </Button>
      </div>
    </div>
  );
}

export default PageHeader;
