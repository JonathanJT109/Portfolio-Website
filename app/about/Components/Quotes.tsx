import React from "react";
import { references } from "./quotesInformation.js";
import Quote from "./Quote.tsx";

function Quotes() {
  return (
    <div className="p-6">
      <div className="flex flex-wrap">
        {references.map((item, index) => (
          <div key={index} className="h-full">
            <Quote
              quote={item.quote}
              author={item.author}
              company={item.company}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes;
