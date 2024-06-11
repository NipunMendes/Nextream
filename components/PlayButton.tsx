import React from "react";
import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="
        bg-white
           text-black
           py-1 md:py-2
           px-2 md:px-4
           w-auto
           text-xs lg:text-lg
           font-bold
           flex
           flex-row
           items-center
           hover:bg-opacity-80
           transition
        "
    >
      <BsFillPlayFill size={25} />
      Play
    </button>
  );
};

export default PlayButton;
