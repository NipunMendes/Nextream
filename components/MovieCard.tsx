import React from "react";
import router, { useRouter } from "next/router";

import { FaPlay } from "react-icons/fa";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "@/hooks/useInfoModel";
import { BiChevronDown } from "react-icons/bi";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModal } = useInfoModal();

  return (
    <div
      style={{ marginTop: "10px" }}
      className="group bg-zinc-900 col-span relative h-[14vw] sm:h-[20vw] md:h-[14vw]"
    >
      <img
        className="
            cursor-pointer
            object-cover
            transition
            duration-300
            shadow-xl
            rounded-md
            group-hover:opacity-5
            sm:gropu-hover:opacity-5
            delay-300
            w-full
            h-full
            "
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div
        className="
            opacity-0
            absolute
            top-0
            transition
            duration-200
            z-10
            invisible
            sm:visible
            group-hover:visible
            delay-300
            w-full
            scale-0
            group-hover:scale-110
            group-hover:-translate-y-[-2vw]
            group-hover:translate-x-[-1vw]
            group-hover:w-[120%]
            group-hover:opacity-100
        "
      >
        <img
          className="
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-t-md
            w-full
            h-[14vw]"
          src={data.thumbnailUrl}
          alt="Thumbnail"
        />
        <div
          className="
                z-10
                bg-zinc-800
                p-2
                lg:p-4
                absolute
                w-full
                transition
                shadow-md
                rounded-b-md
            "
        >
          <div className="flex flex-row items-center gap-3">
            <div
              className="
                            cursor-pointer
                            w-5
                            h-5
                            lg:w-10
                            lg:h-10
                            bg-white
                            rounded-full
                            flex
                            justify-center
                            items-center
                            transition
                            hover:bg-neutral-300
                            "
              onClick={() => router.push(`/watch/${data?.id}`)}
            >
              <FaPlay size={10} />
            </div>
            <FavoriteButton movieId={data?.id} />
            <div
              onClick={() => openModal(data?.id)}
              className="
  cursor-pointer
  ml-auto
  group/item
  w-5
  h-5
  lg:w-10
  lg:h-10
  border-white
  border-2
  rounded-full
  flex
  justify-center
  items-center
  transition
  hover:border-neutral-300
  "
            >
              <BiChevronDown
                size={25}
                className="
    text-white
    group-hover/item:text-neutral-300"
              />
            </div>
          </div>
          <p className="text-blue-500 font-bold mt-2 text-[12px]">
            New <span className="text-white text-[12px]">2024</span>
          </p>

          <div className="flex flex-row mt-2 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row mt-2 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
