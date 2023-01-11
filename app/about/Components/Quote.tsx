import React from "react";

interface data {
  quote: string;
  author: string;
  company: string;
}

function Quotes({ quote, author, company }: data) {
  return (
    <div>
      <p>{quote}</p>
      <p>{author}</p>
      <p>{company}</p>
    </div>
  );
}

export default Quotes;
