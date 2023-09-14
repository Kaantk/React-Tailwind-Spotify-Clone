import React from "react";

export const Categories = ({ title, data }) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        <a className="hover:underline text-lg font-semibold mb-3">{title}</a>
        <div className="w-full h-full flex gap-4 flex-wrap">
          {data.map((category, id) => {
            return (
              <div
                key={id}
                className="w-36 h-36 rounded-md relative overflow-hidden cursor-pointer"
                style={{ backgroundColor: category.color, minWidth: "147px" }}
              >
                <p className="font-semibold mt-4 ml-4">{category.title}</p>
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  {/* Bu kısım, resmin oranını korumak için gerekli */}
                  <img
                    src={category.cover}
                    alt={category.title}
                    className="absolute top-1/2 right-0 w-20 object-cover  rotate-45"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
