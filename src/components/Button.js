const Button = () => {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <div className="mt-4 w-3/4 mx-auto ">
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-3/4 py-2  border rounded-lg mx-auto  px-3 focus:outline-none focus:ring meme-btn"
        href="#"
      >
        <span className="font-bold text-white ">Get a new meme image </span>

        <span className="flex-shrink-0 p-1 ml-4 text-indigo-600 bg-white border border-current rounded-full group-active:text-indigo-500">
          <img src="btn-icon.png" className="btn-img" alt="logo" />
        </span>
      </button>
    </div>
  );
};

export default Button;
