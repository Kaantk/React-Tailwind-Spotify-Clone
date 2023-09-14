import { Icon } from "~/assets/icons/Icons";

export const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div>
        <div className="flex flex-col items-center gap-y-2">
          <div className="flex items-center gap-3">
            <button>
              <Icon name="shuffle" size={14} />
            </button>
            <button>
              <Icon name="playerPrev" size={15} />
            </button>
            <button className="bg-gray-50/10 p-2 rounded-full">
              <Icon name="pause" size={17} />
            </button>
            <button>
              <Icon name="playerNext" size={15} />
            </button>
            <button>
              <Icon name="repeat" size={14} />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span>0:00</span>
            <input type="range" className="w-150" />
            <span>0:00</span>
          </div>
        </div>
      </div>
      <div className="absolute right-2">
        <div className="flex items-center gap-3">
          <button>
            <Icon name="lyrics" size={15} />
          </button>
          <button>
            <Icon name="queue" size={15} />
          </button>
          <button>
            <Icon name="device" size={15} />
          </button>
          <div className="flex items-center gap-2">
            <button>
              <Icon name="volumeNormal" size={15} />
            </button>
            <input type="range" className="w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};
