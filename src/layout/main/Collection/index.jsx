import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon } from "~/assets/icons/Icons";
import Song from "~/assets/images/Song.jpg";
import { toggleIsView } from "~/redux/collection/collectionSlice";

export const Collection = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-y-1">
      <nav className="bg-backgdrop w-full rounded-md px-5 py-3 flex flex-col gap-y-3">
        <NavLink
          to="/"
          className="flex items-center gap-3 hover:cursor-pointer"
        >
          <Icon name="home" />
        </NavLink>
        <NavLink
          to="/search"
          className="flex items-center gap-3 hover:cursor-pointer"
        >
          <Icon name="search" />
        </NavLink>
      </nav>
      <div className="w-full flex flex-col h-full gap-y-3 bg-backgdrop rounded-md py-3 items-center">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center justify-center hover:cursor-pointer"
            onClick={() => dispatch(toggleIsView())}
          >
            <button>
              <Icon name="collection" />
            </button>
          </div>
        </div>
        <div className="overflow-y-hidden hover:overflow-y-auto flex-1 max-h-[710px] max-w-[64px]">
          <div className="flex flex-col gap-y-1 mt-2">
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-50/5 p-1 rounded"
              >
                <img src={Song} alt="Song images" className="h-10 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
