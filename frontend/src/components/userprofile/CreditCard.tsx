import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useState, useRef, useEffect } from "react";
import SalaryPage from "../../pages/salaryInfo";

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
      <div>
        <form>
          <input
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ced4da",
              borderRadius: "8px",
              color: "#222",
              fontSize: "16px",
              padding: "8px 16px",
              margin: "10px auto",
              display: "block",
            }}
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={e => setNumber(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
            ref={ref}
          />
          <input
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ced4da",
              borderRadius: "8px",
              color: "#222",
              fontSize: "16px",
              padding: "8px 16px",
              margin: "10px auto",
              display: "block",
            }}
            type="text"
            name="name"
            placeholder="Name"
            onChange={e => setName(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
          <input
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ced4da",
              borderRadius: "8px",
              color: "#222",
              fontSize: "16px",
              padding: "8px 16px",
              margin: "10px auto",
              display: "block",
            }}
            type="text"
            name="expiry"
            placeholder="MM/YY"
            onChange={e => setExpiry(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
          <input
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ced4da",
              borderRadius: "8px",
              color: "#222",
              fontSize: "16px",
              padding: "8px 16px",
              margin: "10px auto",
              display: "block",
            }}
            type="tel"
            name="cvc"
            placeholder="CVC"
            onChange={e => setCvc(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
        </form>
      </div>
    </div>
  );
}
