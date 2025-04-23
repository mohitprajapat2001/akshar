import React from "react";
import { Button } from "../ui/button";
import { Delete } from "lucide-react";
// Define the layout of the keyboard
const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  [<Delete />, "Z", "X", "C", "V", "B", "N", "M", "Enter"],
];

const Keyboard: React.FC = () => {
  return (
    <div className="keyboard-container p-4 shadow-md w-xl mx-auto">
      {rows.map((row, index) => (
        <div
          key={index}
          className="flex justify-center w-full items-center gap-2 mb-2"
        >
          {row.map((key, i) => (
            <Button className="flex-grow" key={i}>
              {key}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
