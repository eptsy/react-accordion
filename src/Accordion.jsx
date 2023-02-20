import React, { useState } from "react";
import { questions } from "./api";
import Accordion5 from "./Accorion5";

function Accordion() {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main-div">
        <h1 className="header">React Interview Questions</h1>
        {data.map((curElem) => {
          const { id, question, answer } = curElem;
          return <Accordion5 key={id} {...curElem} />;
        })}
      </section>
    </>
  );
}

export default Accordion;
