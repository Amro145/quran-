import React, { useEffect, useState } from "react";
import { useData } from "../../store/useData";
import { useParams } from "react-router-dom";
import Aya from "./Aya";

function Surah() {
  const params = useParams();
  const { gatSurah, surah } = useData();
  console.log(params.id);

  useEffect(() => {
    gatSurah(params.id);
  }, []);

  return (
    <>
      <div>
        {surah &&
          surah !== undefined &&
          surah.length !== 0 &&
          surah.verses.map((aya) => (
            <div
              key={aya.number}
              className="text-right pt-10  bg-gray-600 flex px-5 font-serif border-b border-gray-700"
            >
              <span dir="rtl" className="  text-white  text-4xl my-2  w-full">
                {aya.text}
                <Aya number={aya.number} />
              </span>
              <audio
                className=" bg-green-700 block  max-w-md  fixed bottom-0 min-w-[90vw]  mx-10 mr-40"
                controls
              >
                <source
                  type="audio/mpeg"
                  src={surah.recitations[0].audio_url}
                />
              </audio>
            </div>
          ))}
      </div>
      <div></div>
    </>
  );
}

export default Surah;
