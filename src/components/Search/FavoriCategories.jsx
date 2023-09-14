import React from "react";

export const FavoriCategories = ({ title, data }) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        <a className="mb-3 font-semibold text-lg cursor-pointer hover:underline">
          {title}
        </a>
        <div className="flex gap-4 overflow-x-hidden">
          {data.map((category, id) => {
            return (
              <div
                key={id}
                className="h-56 w-96 rounded-md relative overflow-hidden cursor-pointer"
                style={{ backgroundColor: category.color, minWidth: "384px" }}
              >
                <p className="text-3xl font-semibold mt-4 ml-4">
                  {category.title}
                </p>
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  {/* Bu kısım, resmin oranını korumak için gerekli */}
                  <img
                    src={category.cover}
                    alt={category.title}
                    className="absolute top-1/3 right-0 w-28 object-cover  rotate-45"
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
