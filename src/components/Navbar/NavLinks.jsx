import React, { useState } from "react";
import { Link } from "react-scroll";

const NavLinks = ({ item, handleNav, depth = 0 }) => {
  const [dropdown, setDropdown] = useState(false);

  // Eğer submenu varsa ve en az bir alt eleman varsa açılır menü göster
  if (item.submenu && Array.isArray(item.submenu) && item.submenu.length > 0) {
    const isRoot = depth === 0;
    return (
      <li
        className={`relative group cursor-pointer text-blue text-lg font-bold tracking-wide hover:text-primary transition-colors duration-200`}
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        <span className={`flex items-center gap-1 py-3 px-4 ${!isRoot ? 'justify-between w-full' : ''}`}>
          {item.name}
          <svg className={`ml-2 w-4 h-4 transition-transform duration-200 ${dropdown && !isRoot ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </span>
        <ul
          className={`absolute ${isRoot ? 'left-0 top-full' : 'left-full top-0'} min-w-[220px] bg-white shadow-xl rounded-lg py-2 z-30 transition-all duration-200 ${dropdown ? 'block' : 'hidden'}`}
        >
          {item.submenu.map((sub, idx) => (
            <NavLinks item={sub} key={idx} handleNav={handleNav} depth={depth + 1} />
          ))}
        </ul>
      </li>
    );
  }

  // Eğer external link ise <a> ile aç
  if (item.external) {
    return (
      <li className="cursor-pointer text-blue text-lg font-bold tracking-wide hover:text-primary transition-colors duration-200">
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-3"
        >
          {item.name}
        </a>
      </li>
    );
  }

  // Normal menü (alt menüsü olmayanlar)
  return (
    <li className="cursor-pointer text-blue text-lg font-bold tracking-wide hover:text-primary transition-colors duration-200">
      <Link
        to={item.path}
        offset={-40}
        smooth={true}
        duration={500}
        onClick={handleNav}
        className="block px-4 py-3"
      >
        {item.name}
      </Link>
    </li>
  );
};

export default NavLinks;
