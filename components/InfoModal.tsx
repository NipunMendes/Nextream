import useInfoModal from "@/hooks/useInfoModel";
import useMovie from "@/hooks/useMovie";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible);

  const { movieId } = useInfoModal();
  const { data = {} } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClass = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }
  return (
    <div
      className="
        z-50
        transition
        duration-300
        bg-black
        bg-opacity-80
        flex
        justify-center
        items-center
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        "
    >
      <div
        className="
      relative
      w-auto
      mx-auto
      max-w-3xl
      rounded-md
      overflow-hidden
      "
      >
        <div
          className={`${visible ? "scale-100" : "scale-0"}
        transform
        duration-300
        relative
        flex-auto
        bg-zinc-900
        drop-shadow-md
        `}
        >
          <div className="relative h-96">
            <video
              className="
            w-fill
            brightness-[60%]
            object-cover
            h-full
            "
              autoPlay
              muted
              loop
              poster={data?.thumbnailUrl}
              src={data?.videoUrl}
            ></video>
            <div className="
            cursor-pointer
            absolute
            top-3
            right-3
            h-10
            w-10
            rounded-full
            bg-white
            bg-opacity-70
            flex
            items-center
            justify-center
            "
              onClick={handleClass}>
              
              <AiOutlineClose className="text-black" size={25}/>
            </div>
            <div className="absolute
            bottom-[10%]
            left-10">
              <p className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>
              <div className="flex flex-row gap-4 item-center">
                <PlayButton movieId={data?.id}/>
                <FavoriteButton movieId={data?.id}/>
              </div>
            </div>
          </div>
          <div className="px-12 py-8">
            <p className="text-blue-500 font-semibold text-lg">
              New
            </p>
            <p className="text-white text-lg">
              Duration: {data?.duration}
            </p>
            <p className="text-white text-lg">
              Genre: {data?.genre}
            </p>
            <p className="text-white text-lg">
              Description: {data?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
