import React from "react";
import { Index } from "../components/card/IntroduceCard";

function IntroIndex({ setIsSelect }: { setIsSelect: (name: string) => void }) {
  return (
    <nav>
      {Index.map((item) => (
        <ul key={item.name} className="list-none p-0">
          <li className="mb-4">
            <a
              onClick={() => setIsSelect(item.name)}
              className="block py-3 px-5 text-gray-800 rounded-md font-medium transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-500"
            >
              {item.name}
            </a>
          </li>
        </ul>
      ))}
    </nav>
  );
}

export default IntroIndex;
