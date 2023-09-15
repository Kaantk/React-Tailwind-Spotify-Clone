import React from "react";
import { useDispatch } from "react-redux";
import { Icon } from "~/assets/icons/Icons";
import Song from "~/assets/images/Song.jpg";
import { toggleIsView } from "~/redux/collection/collectionSlice";

export const Playlist = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col h-full gap-y-3">
      <div className="flex items-center justify-between pr-5">
        <div
          className="flex items-center gap-3 hover:cursor-pointer"
          onClick={() => dispatch(toggleIsView())}
        >
          <button>
            <Icon name="collection" />
          </button>
          <span className="text-link hover:text-white text-sm font-semibold">
            Kitaplığın
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button className="cursor-pointer p-1 hover:bg-gray-50/10 rounded-full ">
            <Icon name="plus" size={17} />
          </button>
          <button className="cursor-pointer p-1 hover:bg-gray-50/10 rounded-full ">
            <Icon name="next" size={17} />
          </button>
        </div>
      </div>
      <div className="text-white text-xs flex items-center gap-2 overflow-x-hidden whitespace-nowrap mr-5">
        <a className="py-1 px-2 bg-gray-50/10 rounded-full flex items-center justify-center">
          Çalma listeleri
        </a>
        <a className="py-1 px-2 bg-gray-50/10 rounded-full flex items-center justify-center">
          Sanatçılar
        </a>
        <a className="py-1 px-2 bg-gray-50/10 rounded-full flex items-center justify-center">
          Podcast'ler ve Programlar
        </a>
      </div>
      <div className="overflow-y-hidden hover:overflow-y-auto flex-1 max-h-[680px] pr-1">
        <div className="flex items-center justify-between">
          <button className="p-1 hover:bg-gray-50/10 rounded-full">
            <Icon name="search" size={16} />
          </button>
          <div className="text-link text-xs cursor-pointer flex items-center gap-1">
            <span className="font-semibold hover:text-white">
              Yakın tarihli
            </span>
            <button>
              <Icon name="downDir" size={16} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 mt-2">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-50/5 p-1 rounded"
            >
              <img src={Song} alt="Song images" className="h-10 rounded-md" />
              <div className="flex flex-col justify-center text-xs">
                <span className="text-sm">Beğenilen şarkılar</span>
                <span className="text-link">Çalma listesi</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
