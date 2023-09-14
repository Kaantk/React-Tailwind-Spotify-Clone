import React, { useState } from "react";
import { Icon } from "~/assets/icons/Icons";

export const Row = ({ title, data }) => {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center justify-between mb-3">
        <a
          href="#"
          className="cursor-pointer hover:underline text-lg font-semibold"
        >
          {title}
        </a>
        <a href="#" className="text-link text-xs hover:underline">
          Tümünü göster
        </a>
      </div>
      <div className="flex gap-5 cursor-pointer ">
        {data.map((song, id) => {
          return (
            <div
              key={id}
              className="bg-dark-gray w-40 py-3 rounded-md px-3 flex flex-col items-center h-60 relative"
              style={{ minWidth: "160px" }}
              onMouseEnter={() => setHoveredDiv(id)}
              onMouseLeave={() => setHoveredDiv(null)}
            >
              <div className="flex flex-col ">
                <img
                  src={song.image}
                  alt={song.title}
                  className="rounded-md h-32 bg-cover mb-1 relative"
                />
                <span className="text-sm">{song.title}</span>
                <span className="text-link text-xs mt-1">
                  {song.description}
                </span>
              </div>
              {hoveredDiv === id && (
                <button
                  className="absolute bg-green-600 p-2 rounded-full hover:bg-green-700"
                  style={{ top: "95px", left: "100px" }}
                >
                  <Icon name="play" />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
