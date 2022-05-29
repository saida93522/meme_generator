import logo from "../logo.svg";
const Navbar = () => {
  return (
    <div className="max-w-lg md:max-w-4xl mx-auto">
      {/*  */}
      <nav className="flex items-center justify-between p-4 text-white text-xs">
        <a
          className="inline-flex items-center justify-center font-bold md:text-lg"
          href="/"
        >
          <img src={logo} className="App-logo mr-2" alt="logo" />
          Meme Generator
        </a>

        <ul className="  ">
          <li className=" lg:block">
            <a className="md:text-base" href="/">
              {" "}
              React Course - Project 3{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
