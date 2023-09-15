import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "~/assets/icons/Icons";

export const Navbar = () => {
  const [isView, setIsView] = useState(false);
  const location = useLocation();

  useEffect(() => {}, [location]);

  const handleUserMenu = (isView) => {
    return setIsView(!isView);
  };

  return (
    <div className="w-full px-5 py-3 sticky top-0 left-0 z-10 bg-backgdrop">
      <div className="flex items-center justify-between h-10 relative">
        {location.pathname === "/search" ? (
          <div className="flex items-center gap-5">
            <div className="flex gap-2">
              <button className="p-1 bg-gray-50/5 rounded-full">
                <Icon name="prev" size={16} />
              </button>
              <button className="p-1 bg-gray-50/5 rounded-full">
                <Icon name="next" size={16} />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                className="bg-gray-50/5 rounded-full text-xs font-semibold py-3 pl-8 pr-6"
                placeholder="Ne dinlemek istiyorsun?"
              />
              <button className="absolute left-3 top-3">
                <Icon name="search" size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <button className="p-1 bg-gray-50/5 rounded-full">
              <Icon name="prev" size={16} />
            </button>
            <button className="p-1 bg-gray-50/5 rounded-full">
              <Icon name="next" size={16} />
            </button>
          </div>
        )}
        <div className="flex items-center text-xs font-semibold gap-2 cursor-pointer">
          <div className="border-none outline-none transform">
            <span className="bg-white text-black py-1 px-2 rounded-full">
              Premium'u keşfet
            </span>
          </div>
          <div className="flex items-center bg-gray-50/5 py-1 px-2 rounded-full gap-1 transform">
            <Icon name="download" size={17} />
            <span>Uygulamayı Yükle</span>
          </div>
          <div
            className="bg-gray-50/5 rounded-full p-2 transform"
            onClick={() => handleUserMenu(isView)}
          >
            <Icon name="user" size={16} />
          </div>
          {isView && (
            <div className="absolute right-0 top-11 bg-light-gray p-1 rounded-[4px] shadow-2xl">
              <div className="flex items-center justify-between w-[180px] px-3 py-2 hover:bg-gray-50/10 rounded-[4px]">
                <span className="text-lighest-gray text-xs">Hesap</span>
                <Icon name="external" size={16} />
              </div>
              <div className="flex items-center justify-between w-[180px] px-3 py-2 hover:bg-gray-50/10 rounded-[4px]">
                <span className="text-lighest-gray text-xs">Profil</span>
              </div>
              <div className="flex items-center justify-between w-[180px] px-3 py-2 hover:bg-gray-50/10 rounded-[4px]">
                <span className="text-lighest-gray text-xs">
                  Premium'a yükselt
                </span>
                <Icon name="external" size={16} />
              </div>
              <div className="flex items-center justify-between w-[180px] px-3 py-2 hover:bg-gray-50/10 rounded-[4px]">
                <span className="text-lighest-gray text-xs">Destek</span>
                <Icon name="external" size={16} />
              </div>
              <div className="flex items-center justify-between w-[180px] px-3 py-2 hover:bg-gray-50/10 rounded-[4px]">
                <span className="text-lighest-gray text-xs">İndir</span>
                <Icon name="external" size={16} />
              </div>
              <div className="flex items-center justify-between w-[180px] px-3 py-2 hover:bg-gray-50/10 rounded-[4px]">
                <span className="text-lighest-gray text-xs">Ayarlar</span>
              </div>
              <div className="flex items-center justify-between w-[180px] px-3 py-2 hover:bg-gray-50/10 rounded-[4px]">
                <span className="text-lighest-gray text-xs">Oturumu kapat</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
