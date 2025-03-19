import React, { useEffect } from "react";
import { useData } from "../../store/useData";
import { useParams } from "react-router-dom";
import Aya from "./Aya";

function Surah() {
  const params = useParams();
  const { gatSurah, surah } = useData();
  console.log(params.id);

  useEffect(() => {
    gatSurah(params.id);
    console.log(surah);
  }, []);
  return (
    <div>
      {surah &&
        surah !== undefined &&
        surah.length !== 0 &&
        surah.verses.map((aya) => (
          <div
            key={aya.text}
            className="text-right  bg-gray-600 flex px-5 font-serif border-b border-gray-700"
          >
            <p
              dir="rtl"
              className="  text-white  text-4xl my-2  w-full"
            >
              {aya.text}
              <Aya number={aya.number} />
            </p>
          </div>
        ))}
    </div>
  );
}

export default Surah;
