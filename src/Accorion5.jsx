import React, { useState } from "react";

function Accordion5({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="qa">
        <p className="icon" onClick={() => setShow(!show)}>
          {show ? "➖" : "➕"}
        </p>
        <h3 className="question">{question}</h3>
      </div>
      {show && <p className="answer">{answer}</p>}
    </>
  );
}

export default Accordion5;
