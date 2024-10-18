import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";
import ReactDOM from 'react-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
 const [hamburgerMenu, setHamburgerMenu] = useState(false);

return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full screen-max-width relative">
            <img src={appleImg} alt="Apple" width={14} height={18} />
            <div className="flex flex-1 justify-center max-sm:hidden">
                {navLists.map((nav) => (
                    <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                        {nav}
                    </div>
                ))}
            </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                <img src={searchImg} alt="search" width={18} height={18} />
                <img src={bagImg} alt="bag" width={18} height={18} />
                <FontAwesomeIcon icon={faBars} className="max-sm:block hidden" onClick={() => {
                    setHamburgerMenu(true)
                }}/>
            </div>
            {
            //   TODO: implement burger menu
            // hamburgerMenu && <BurgerMenu />

            }
        </nav>
    </header>
);
};

export default Navbar;
