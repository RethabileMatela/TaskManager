import { useEffect, useState } from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { ImMenu } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);


  interface IMenuListItem {
    id: number;
    title: string;
    selected: boolean;
    // icon: any;
    linkTo?: string;
    click?: () => void;
  }

  const navLinks: IMenuListItem[] = [
    { id: 1, title: 'About', linkTo: "/", selected: false },
    // { id: 2, title: 'Content', linkTo: "/content", selected: isCurrentPath("/content") },
  ];


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav
  className={`w-full flex items-center h-24 fixed top-0 z-20 ${
    scrolled ? "bg-[#222222]" : "bg-[#222222]"
  }`} // Add responsive padding
>
  <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
    <Link
      to="/"
      className="flex items-center gap-2"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
    >
      <div className="flex-shrink-0  ml-8 flex items-center ">
        <span className="text-3xl font-bold text-white hover:text-green-500 ">Done</span>
        &nbsp;
        <AiOutlineFileDone size={40} color="#0BC518" />
      </div>
    </Link>

    <ul className="list-none hidden sm:flex flex-row gap-10">
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          onClick={() => {
            setActive(nav.title);
            if (nav.click) nav.click();
          }}
          className={`${
            active === nav.title ? "text-white " : "text-white"
          } hover:text-green-500 sm:md:text-[16px] lg:text-[20px] font-medium cursor-pointer`}
        >
          <Link to={nav.linkTo || "#"}>{nav.title}</Link>
        </li>
      ))}
    </ul>

    <div className="sm:hidden m-10 flex flex-1 justify-end items-center ">
      {toggle ? (
        <IoCloseSharp
          className="w-[28px] h-[28px] text-white object-contain"
          onClick={() => setToggle(!toggle)}
        />
      ) : (
        <ImMenu
          className="w-[28px] h-[28px] text-white object-contain"
          onClick={() => setToggle(!toggle)}
        />
      )}

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-8 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 bg-[#2c2c2c] rounded-sm`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-white"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
              }}
            >
              <Link to={nav.linkTo || "#"}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;