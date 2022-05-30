const Forms = () => {
  return (
    <div className="flex items-center justify-evenly md:justify-around">
      <div className="">
        <label
          className="block text-xs  font-black md:text-base"
          htmlFor="email"
        >
          {" "}
          Top Meme{" "}
        </label>

        <input
          className=" md:w-auto px-3 py-1 mt-1 text-sm  border-2 border-gray-200 rounded"
          id="email"
          type="email"
        />
      </div>
      {/* input */}
      <div className="">
        <label
          className="block text-xs font-black  md:text-base"
          htmlFor="email"
        >
          {" "}
          Bottom Meme{" "}
        </label>

        <input
          className=" md:w-auto px-3 py-1 mt-1 text-sm border-2 border-gray-200 rounded"
          id="email"
          type="email"
        />
      </div>
    </div>
  );
};

export default Forms;
