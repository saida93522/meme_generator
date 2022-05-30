const Button = () => {
  return (
    <div className="mt-4 w-3/4 mx-auto">
      <a
        className="flex items-center justify-center px-0 py-2  border rounded-lg  group focus:outline-none focus:ring meme-btn"
        href="/download"
      >
        <span className="font-bold text-white ">Get a new meme image </span>

        <span className="flex-shrink-0 p-1 ml-4 text-indigo-600 bg-white border border-current rounded-full group-active:text-indigo-500">
          <img src="btn-icon.png" className="btn-img" alt="logo" />
        </span>
      </a>
    </div>
  );
};

export default Button;
