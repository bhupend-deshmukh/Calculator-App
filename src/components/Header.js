import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Headers() {
  const [isFirstButtonVisible, setIsFirstButtonVisible] = useState(true);
  const handleButtonClick = () => {
    setIsFirstButtonVisible((prevState) => !prevState);
  };
  return (
    <div className="flex justify-between px-6 py-6">
      <div>
        <h1 className="font-bold text-2xl">Calculator App</h1>
      </div>
      {/* <TypingEffect /> */}
      {/* <div className="uppercase font-bold">
        <button>
          <FontAwesomeIcon className="text-3xl cursor-pointer" icon={faSun} />
        </button>
        <button>
          <FontAwesomeIcon className="text-3xl cursor-pointer" icon={faMoon} />
        </button>
      </div> */}
      <div className="uppercase font-bold">
        <button className="outline-none" onClick={handleButtonClick}>
          <FontAwesomeIcon
            className="text-3xl outline-none hover:text-gray-700 cursor-pointer"
            icon={isFirstButtonVisible ? faSun : faMoon}
          />
        </button>
      </div>
    </div>
  );
}

export default Headers;
