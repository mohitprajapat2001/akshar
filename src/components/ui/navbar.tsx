import React from "react";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import {
  CirclePlus,
  ChartColumnIncreasing,
  Bolt,
  Earth,
  HelpCircle,
} from "lucide-react";
import { RippleButton } from "@/components/magicui/ripple-button";
const Navbar: React.FC = () => {
  return (
    <nav className="p-4 w-screen">
      <div className="container mx-auto flex justify-between items-center w-xl">
        <ul className="flex gap-3 px-2">
          <li>
            <RippleButton className="border p-1">
              <Earth />
            </RippleButton>
          </li>
          <li>
            <RippleButton className="border p-1">
              <CirclePlus />
            </RippleButton>
          </li>
        </ul>
        <h1 className="text-balance text-2xl font-semibold leading-none tracking-tighter">
          <LineShadowText className="italic" shadowColor="orange">
            Akshar
          </LineShadowText>
        </h1>
        <ul className="flex gap-3">
          <li>
            <RippleButton className="border p-1">
              <ChartColumnIncreasing />
            </RippleButton>
          </li>
          <li>
            <RippleButton className="border p-1">
              <Bolt />
            </RippleButton>
          </li>
          <li>
            <RippleButton className="border p-1">
              <HelpCircle />
            </RippleButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
