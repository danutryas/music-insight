// "use client";

import { isAuth } from "@/lib/isAuth";
import HeaderClient from "./HeaderClient";

const Header = () => {
  return (
    <div className="w-full h-full rounded-full border-2 border-white mt-5">
      <div className="flex justify-between p-2 items-center px-2">
        <div>Route</div>
        <div>
          <a href="/">Home</a>
        </div>
        <div className="flex justify-end">
          <HeaderClient isAuth={isAuth()} />
        </div>
      </div>
    </div>
  );
};

export default Header;
