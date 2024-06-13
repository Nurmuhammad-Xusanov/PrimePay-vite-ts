import { useState } from "react";
import { styles } from "../util/style";
import { navigationLinks } from "../util/constants";
import { logo, menu, close } from "../assets";

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const toggleHandler = () => setToggleNav((prev) => !prev);
  const activeHandler = (id: string) => setActive(id);
  return (
    <div className={`w-full py-6 ${styles.felxBetween} `}>
      <img src={logo} alt="logo" className="w-[130px]" />
      {/* navigation ul */}
      <ul className="list-none sm:flex hidden justify-end items-center ">
        {navigationLinks.map((nav, idx) => (
          <li key={nav.id}>
            <a href={`#${nav.id}`} className={`
              ${idx === navigationLinks.length - 1 ? `mr-0` : `mr-10`} 
              ${active === nav.id ? `text-white` : `text-lightWhite`}
              font-montserrat font-normal cursor-pointer text-[16px]  hover:text-white transition-all duration-500`}
              onClick={() => activeHandler(nav.id)}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* navigation btn */}
      <div className={`sm:hidden felx justify-end items-center`}>
        <img
          src={!toggleNav ? menu : close}
          alt="nav"
          className={`w-[20px] h-[15px] object-contain`}
          onClick={toggleHandler}
        />
        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6  absolute top-[100px] right-0  left-0 bg-black-gradient justify-center w-full sidebar`}
        >
          <ul className="list-none flex-wrap text-center flex justify-center items-center ">
            {navigationLinks.map((nav, idx) => (
              <li key={nav.id}>
                    <a href={`#${nav.id}`} className={`
                  ${idx === navigationLinks.length - 1 ? `mr-0` : `mr-5`} 
                  ${active === nav.id ? `text-white` : `text-lightWhite`}
                  font-montserrat font-normal cursor-pointer text-[16px]  hover:text-white transition-all duration-500`}
                  onClick={() => activeHandler(nav.id)}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
