import React from "react";

const Card = ({ name, title }) => {
  return (
    <div className="card p-6 w-[350px] rounded-md">
      <h1 className="text-lg bg-green-700 rounded text-white inline-block p-2">
        profile info:
      </h1>
      <h1 className="text-lg font-medium">Name: {name}</h1>
      <h1 className="text-lg font-medium">Title: {title}</h1>
    </div>
  );
};

export default Card;
