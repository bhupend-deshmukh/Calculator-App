// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";

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
  faCircleXmark,
  faEquals,
  faMinus,
  faMultiply,
  faPercent,
  faPlus,
  faRotateLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import divisions from "../newDeviso-preview.png";

function Keyboard() {
  const [buttonValue, setButtonValue] = useState("");
  const [result, setResult] = useState("");
  function storeButtoneValue(e) {
    const trimData = buttonValue.trim();
    if (trimData === "") {
      if (
        e.target.id === "+" ||
        e.target.id === "-" ||
        e.target.id === "x" ||
        e.target.id === "÷" ||
        e.target.id === "%"
      ) {
        return;
      }
    }
    if (e.target.id === "C") {
      setButtonValue("");
      setResult("");
    } else {
      console.log("else wala part is working.....");
      let value = e.target.id;
      let btnValue = buttonValue;
      let spValue = btnValue.split("");
      let lastChar = spValue[spValue.length - 1];
      // for (let ind = 0; ind < spValue.length; ind++) {
      //   const element = spValue[ind];
      //   console.log(element,'this is spvalue...');
      // }
      // // console.log(spValue[spValue.length-1]);
      if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "x" ||
        lastChar === "÷" ||
        lastChar === "%" ||
        lastChar === "."
      ) {
        if (
          value === "+" ||
          value === "-" ||
          value === "x" ||
          value === "÷" ||
          value === "%"
        ) {
          // pop
          spValue.pop();
          let newSpValue = spValue.join("");
          setButtonValue(newSpValue + value);
          return;
        }
      }

      setButtonValue(buttonValue + value);
      // collectData();
    }
  }

  function calculate() {
    let btnValue = buttonValue;
    let spValue = btnValue.split("");
    let newString = "";
    let lastChar = spValue[spValue.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "x" ||
      lastChar === "÷" ||
      lastChar === "%"
    ) {
      spValue.pop();
    }
    for (let ind = 0; ind < spValue.length; ind++) {
      const element = spValue[ind];
      if (element === "x") {
        newString += "*";
        continue;
      } else if (element === "÷") {
        newString += "/";
        continue;
      } else {
        newString += element;
      }
    }
    let result = eval(newString);
    console.log(result, "this is result...");
    // if()
    setResult(result);
  }

  function removeElement() {
    let btnValue = buttonValue;
    let spValue = btnValue.split("");
    spValue.pop();
    let newSpValue = spValue.join("");
    setButtonValue(newSpValue);
  }

  return (
    <div className="keyboard w-full absolute bottom-0">
      <div className="text-end mt-28 px-6 py-6">
        <p className="text-2xl font-bold text-gray-400">{buttonValue}</p>
        <p className="text-5xl font-bold overflow-hidden whitespace-nowrap">
          {/* {result} */}
          999999999999
        </p>
      </div>

      <div className="mt-4 lg:rounded-3xl bg-slate-300">
        <div className=" justify-between px-6 py-6 pt-8 grid grid-cols-4 gap-5">
          <div className="font-bold  bg-slate-400 shadow-2xl rounded-2xl hover:bg-slate-500  pointer text-lg">
            <button
              onClick={storeButtoneValue}
              className="btn w-full btn-dark rounded-2xl"
            >
              <FontAwesomeIcon
                id="C"
                className="text-green-400 font-extrabold rounded-2xl py-4 px-6 mt-1 text-2xl"
                icon={faC}
              />
            </button>
          </div>
          <div className="bg-slate-400 text-lg rounded-2xl hover:bg-slate-500">
            <button
              onClick={removeElement}
              className="btn w-full text-green-400 btn-dark font-extrabold py-4 px-6 text-2xl"
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
          <div className="bg-slate-400 text-lg rounded-2xl hover:bg-slate-500">
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="%"
                className="font-extrabold py-4 text-green-400 px-6 mt-1 text-2xl"
                icon={faPercent}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full item-center" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="+"
                className="font-extrabold	 text-rose-500 py-4 px-6 mt-1 text-2xl"
                icon={faPlus}
              />
            </button>
          </div>
          <div
            onClick={storeButtoneValue}
            className="cursor-pointer bg-slate-400 rounded-2xl hover:bg-slate-500"
          >
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="7"
                className="font-bold py-4 px-6 mt-1 text-2xl"
                icon={fa7}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="8"
                className="font-bold py-4 px-6 mt-1 text-2xl"
                icon={fa8}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="9"
                className="font-bold py-4 px-6 mt-1 text-2xl"
                icon={fa9}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="x"
                className="font-extrabold text-rose-500 py-4 px-6 mt-1 text-2xl "
                icon={faMultiply}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="4"
                className="font-bold py-4 px-6 mt-1 text-2xl"
                icon={fa4}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="5"
                className="font-bold py-4 px-6 mt-1 text-2xl"
                icon={fa5}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="6"
                className="font-bold py-4 px-6 mt-1 text-2xl"
                icon={fa6}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="-"
                className="font-bold py-4 text-rose-500 px-6 mt-1 text-2xl"
                icon={faMinus}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="1"
                className="font-bold py-4 px-6 mt-1 text-2xl"
                icon={fa1}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="2"
                className="font-bold py-4 px-6 mt-1 text-2xl ml-1"
                icon={fa2}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="3"
                className="font-bold py-4 px-6 mt-1 text-2xl"
                icon={fa3}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button
              id="÷"
              className="w-full text-[35px] font-extrabold outline-none text-rose-500"
              onClick={storeButtoneValue}
            >
              ÷
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="reolad"
                className="font-bold text-rose-500 py-4 px-6 mt-1 text-2xl"
                icon={faRotateLeft}
              />
            </button>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full" onClick={storeButtoneValue}>
              <FontAwesomeIcon
                id="0"
                className="font-bold py-4 px-6 mt-1 text-2xl"
                icon={fa0}
              />
            </button>
          </div>
          <div className="w-full bg-slate-400 rounded-2xl hover:bg-slate-500">
            <p className="font-bold py-4 px-6 mt-1 text-2xl ml-3 ">.</p>
          </div>
          <div className=" bg-slate-400 rounded-2xl hover:bg-slate-500">
            <button className="w-full " onClick={calculate}>
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
