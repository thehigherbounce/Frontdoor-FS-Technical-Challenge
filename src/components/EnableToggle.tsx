import React from "react";
import { EnableToggleProps } from '../types/popup'

const EnableToggle: React.FC<EnableToggleProps> = ({ isEnabled, toggleEnabled }) => {
  return (
    <div className="flex justify-between items-center">
      <p className="font-medium text-gray-600">Enable Extension:</p>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={isEnabled}
          onChange={toggleEnabled}
          className="sr-only peer"
        />
        <div
            onClick={toggleEnabled}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
        ></div>
      </div>
    </div>
  );
};

export default EnableToggle;