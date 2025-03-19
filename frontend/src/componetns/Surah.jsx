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
  }, []);

  return (
    <div className="bg-gray-600">
      <div className="pt-10 flex justify-center items-center text-center w-full text-white">
        <div className=" bg-gray-600 py-10 text-2xl  ">
          <h1>{surah.name}</h1>
          <hr className="w-100" />
          <div>
            {surah.type} - {surah.number_of_ayah} ayayt
          </div>
        </div>
      </div>
      <div className="pt-10 flex justify-center bg-gray-600 text-white">
        <h1 className="text-6xl">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ </h1>
      </div>
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
                className=" block bg-green-500  max-w-md  fixed bottom-0 min-w-[90vw]  mx-10 mr-40"
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
      <div className="h-20 flex justify-center text-5xl pb-28 text-white">
        صدق الله العظيم
      </div>
    </div>
  );
}

export default Surah;
