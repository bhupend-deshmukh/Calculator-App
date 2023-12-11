// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa0,
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
  fa8,
  fa9,
  faC,
  faEquals,
  faMinus,
  faMultiply,
  faPercent,
  faPlus,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

import divisions from "../newDeviso-preview.png";
import { useEffect, useState } from "react";

function Keyboard() {
  const [buttonValue, setButtonValue] = useState("");
  const [output, setoutput] = useState(0);
  function storeButtoneValue(e) {
    if (e.target.id === "C") {
      setButtonValue("");
    } else {
      let value = e.target.id;
      let btnValue = buttonValue;
      
      setButtonValue(buttonValue + value);
      collectData();
    }
  }


  function collectData() {
    let m = buttonValue;
    console.log(m, "hhhhhhhhhhhhhhhhhh");
  }

  return (
    <div className="keyboard">
      <div className="text-end mt-28 px-6 py-6">
        <p className="text-2xl font-bold text-gray-400">380 x 12</p>
        <p className="text-5xl font-bold overflow-x-auto whitespace-nowrap">
          {buttonValue}
        </p>
      </div>

      <div className="mt-4 rounded-t-3xl h-screen bg-slate-300">
        <div className=" justify-between px-6 py-6 pt-8 grid grid-cols-4 gap-5">
          <div className="font-bold  bg-slate-400 shadow-2xl rounded-2xl hover:bg-slate-500  pointer text-lg">
            <button
              onClick={storeButtoneValue}
              className="btn btn-dark rounded-2xl"
            >
              <FontAwesomeIcon
                id="C"
                className="text-green-400 font-extrabold rounded-2xl py-4 px-6 mt-1 text-2xl"
                icon={faC}
              />
            </button>
          </div>
          <div className="bg-slate-400 text-lg rounded-2xl hover:bg-slate-500">
            <button className="btn text-green-400 btn-dark font-extrabold py-4 px-6 text-xl">
              +/-
            </button>
          </div>
          <div className="bg-slate-400 text-lg rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="%"
                className="font-extrabold py-4 text-green-400 px-6 mt-1 text-2xl"
                icon={faPercent}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="+"
                className="font-extrabold	 text-rose-500 py-4 px-6 mt-1 text-2xl"
                icon={faPlus}
              />
            </button>
          </div>
          <div onClick={storeButtoneValue} className="cursor-pointer bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="7"
                className="font-bold py-4 px-6 mt-1 ml-1 text-2xl"
                icon={fa7}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="8"
                className="font-bold py-4 px-6 mt-1 ml-1 text-2xl"
                icon={fa8}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="9"
                className="font-bold py-4 px-6 mt-1 text-2xl ml-1"
                icon={fa9}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="x"
                className="font-extrabold text-rose-500 py-4 px-6 mt-1 text-2xl "
                icon={faMultiply}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="4"
                className="font-bold py-4 px-6 mt-1 text-2xl ml-1"
                icon={fa4}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="5"
                className="font-bold py-4 px-6 mt-1 text-2xl ml-1"
                icon={fa5}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="6"
                className="font-bold py-4 px-6 mt-1 text-2xl ml-1"
                icon={fa6}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="-"
                className="font-bold py-4 text-rose-500 px-6 mt-1 text-2xl"
                icon={faMinus}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="1"
                className="font-bold py-4 px-6 mt-1 text-2xl ml-1"
                icon={fa1}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="2"
                className="font-bold py-4 px-6 mt-1 text-2xl ml-1"
                icon={fa2}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="3"
                className="font-bold py-4 px-6 mt-1 text-2xl ml-1"
                icon={fa3}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <img
                // className="font-bold py-4 px-6 mt-1 text-2xl ml-1"
                id="÷"
                className="bg-slate-400 mt-4 w-12  ml-3"
                src={divisions}
              ></img>
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="reolad"
                className="font-bold text-rose-500 py-4 px-6 mt-1 text-2xl"
                icon={faRotateLeft}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="0"
                className="font-bold py-4 px-6 mt-1 text-2xl ml-1"
                icon={fa0}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <p className="font-bold py-4 px-6 mt-1 text-2xl ml-1">.</p>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="reolad"
                className="font-extrabold py-4 text-rose-500 px-6 mt-1 text-2xl"
                icon={faEquals}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keyboard;
