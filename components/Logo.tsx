import { PiggyBank } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2">
      <PiggyBank className="stroke w-11 h-11 stroke-blue-500 stroke-[1.5]" />
      <p className="text-blue-500 text-3xl font-bold leading-tight font-sans">
        A-Ca$h Tracker
      </p>
    </a>
  );
};

export default Logo;
