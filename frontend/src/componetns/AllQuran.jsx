import React, { useEffect } from "react";
import { useData } from "../../store/useData";
import { Link } from "react-router-dom";
import Aya from "./Aya";
import Navbar from "./Navbar";

function AllQuran() {
  const { getQuranListFn, quranList, isLoading } = useData();
  useEffect(() => {
    getQuranListFn();
  }, []);
  return (
    <>
      <div >
        <div className="bg-gray-800 flex justify-center items-center flex-wrap pt-10  ">
          {!isLoading &&
            quranList.length !== 0 &&
            quranList !== undefined &&
            quranList.map((data) => (
              <Link
                to={`/surah/${data.number_of_surah}`}
                key={data.number_of_surah}
                className="flex md:justify-around justify-between md:px-0 px-5 items-center gap-4 md:w-[28%] w-full text-white bg-gray-700 m-2 py-5 rounded-2xl cursor-pointer shadow-xl hover:shadow-zinc-400  transition-all duration-700"
              >
                <div className="flex justify-between items-center gap-8">
                  <Aya number={data.number_of_surah} />
                  <div>
                    <div>{data.name}</div>
                    <div>{data.type}</div>
                  </div>
                </div>
                <div>{data.name_translations.ar}</div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

export default AllQuran;
