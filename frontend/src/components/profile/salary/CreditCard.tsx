import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useState, useRef, useEffect } from "react";

export default function CardComp(props) {
  const [number, setNumber] = useState("4242424242424242");
  const [name, setName] = useState("Johnny Joestar");
  const [expiry, setExpiry] = useState("0515");
  const [cvc, setCvc] = useState("821");
  const [focus, setFocus] = useState("");

  const ref = useRef(null);
  return (
    <div className="App">
      <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focus} />
    </div>
  );
}
