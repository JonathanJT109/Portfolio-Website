import React from "react";
import { references } from "./quotesInformation.js";
import Quote from "./Quote.tsx";

function Quotes() {
  return (
    <div className="flex">
      {references.map((item, index) => (
        <div key={index}>
          <Quote
            quote={item.quote}
            author={item.author}
            company={item.company}
          />
        </div>
      ))}
    </div>
  );
}

export default Quotes;
