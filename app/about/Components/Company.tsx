import React from "react";

interface data {
  company: string;
  date: string;
  position: string;
  description: string;
  image_url: string;
  link: string;
}

function Company({
  company,
  date,
  position,
  description,
  image_url,
  link,
}: data) {
  return (
    <div className="overflow-hidden w-[60%]">
      <h2 className="text-xl font-bold">{company}</h2>
      <p>Date: {date}</p>
      <p>Position: {position}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default Company;
