import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TypingEffect from "./effect/TypingEffect";

function Headers() {
  return (
    <div className="flex justify-between px-6 py-6">
      {/* <div>
        <h1 className="">calculator</h1>
      </div> */}
      <TypingEffect/>
      <div className="uppercase font-bold">
        <FontAwesomeIcon className="text-3xl cursor-pointer" icon={faMoon}/>
      </div>
    </div>
  );
}

export default Headers;
