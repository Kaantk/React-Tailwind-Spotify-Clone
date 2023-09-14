import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "~/assets/icons/Icons";
import { Playlist } from "~/components/Sidebar/Playlist";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-y-1 w-[420px]">
      {/* Sidebar içerisindeki üstteki nav */}
      <nav className="bg-backgdrop w-full rounded-md px-5 py-3 flex flex-col gap-y-3">
        <NavLink
          to="/"
          className="flex items-center gap-3 hover:cursor-pointer"
        >
          <Icon name="home" />
          <span className="text-link hover:text-white text-sm font-semibold">
            Ana sayfa
          </span>
        </NavLink>
        <NavLink
          to="/search"
          className="flex items-center gap-3 hover:cursor-pointer"
        >
          <Icon name="search" />
          <span className="text-link hover:text-white text-sm font-semibold">
            Ara
          </span>
        </NavLink>
      </nav>
      {/* Sidebar da yer alan alttaki nav */}
      <div className="bg-backgdrop w-full rounded-md pl-5 py-3 flex-1">
        <Playlist />
      </div>
    </aside>
  );
};
