import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useState, useRef, useEffect } from "react";

export default function CardComp(props) {
  const ref = useRef(null);
  return (
    <div className="App">
      <Cards number={props.num} name={props.name} expiry={props.expiry} cvc={props.cvc} />
    </div>
  );
}
