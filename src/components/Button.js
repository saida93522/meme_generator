import memeData from "../MemeApi";
import { useState } from "react";
const Button = () => {
  const [memeImage, setMemeImage] = useState("");

  const getMemeImage = () => {
    const memeArray = memeData.data.memes;
    const randomMeme = [Math.floor(Math.random() * memeArray.length)];
    const url = memeArray[randomMeme].url;
    setMemeImage(url);
  };

  return (
    <div className="mt-4 w-3/4 mx-auto ">
      <button
        onClick={getMemeImage}
        className="flex items-center justify-center w-3/4 py-2  border rounded-lg mx-auto px-3 focus:outline-none focus:ring meme-btn"
      >
        <span className="font-bold text-white ">Get a new meme image </span>

        <span className="flex-shrink-0 p-1 ml-4 text-indigo-600 bg-white border border-current rounded-full group-active:text-indigo-500">
          <img src="btn-icon.png" className="btn-img" alt="logo" />
        </span>
      </button>
      <div
        style={{
          backgroundImage: `url('${memeImage}')`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: 600,
          height: 600,
        }}
        className="relative block overflow-hidden mx-auto mt-16"
      >
        <span className="absolute z-10 text-center inset-0  text-white">
          Top Meme
        </span>
      </div>
    </div>
  );
};

export default Button;
