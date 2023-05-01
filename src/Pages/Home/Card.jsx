import React from "react";

const Card = ({ place }) => {
  const { name, photo_url } = place;

  return (
    <div className="relative overflow-hidden rounded-lg">
      <img className="h-96 w-full object-cover" src={photo_url} alt="Image" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-5 left-0 w-full p-4 text-white text-shadow">
        <h2 className="text-2xl font-bold">{name}</h2>
      </div>
    </div>
  );
};

export default Card;
