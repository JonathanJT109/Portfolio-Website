import React from "react";

interface data {
  quote: string;
  author: string;
  company: string;
}

function Quote({ quote, author, company }: data) {
  return (
    <div className="card rounded-lg shadow-lg mr-12 w-56 h-[100%]">
      <div className="card-content p-4">
        <p className="text-lg font-medium">"{quote}"</p>
        <p className="text-sm text-gray-800">{author}</p>
      </div>
      <div className="card-footer bg-gray-400 p-4">
        <p className="text-xs font-medium text-center">{company}</p>
      </div>
    </div>
  );
}

export default Quote;
