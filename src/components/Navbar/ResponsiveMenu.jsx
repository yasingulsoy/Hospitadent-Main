import React, { useState } from "react";

const MobileNavLinks = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.submenu) {
    return (
      <li className="w-full">
        <button
          className="flex justify-between items-center w-full px-4 py-2 text-left text-white hover:text-blue focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span>{item.name}</span>
          <svg className={`ml-2 w-4 h-4 transform transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </button>
        {open && (
          <ul className="pl-4 border-l border-blue-400">
            {item.submenu.map((sub, idx) => (
              <MobileNavLinks item={sub} key={idx} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  if (item.external) {
    return (
      <li className="w-full">
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 text-white hover:text-blue"
        >
          {item.name}
        </a>
      </li>
    );
  }

  return (
    <li className="w-full">
      <a
        href={`#${item.path}`}
        className="block px-4 py-2 text-white hover:text-blue"
      >
        {item.name}
      </a>
    </li>
  );
};

const ResponsiveMenu = ({ navLinksData, nav, handleNav }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center md:hidden w-full absolute top-0 duration-500 h-screen bg-[rgba(0,0,0,.9)] ${
        nav ? "left-0" : "left-[-100%]"
      }`}
    >
      <ul className="flex flex-col items-start space-y-2 w-full mt-20">
        {navLinksData.map((item, index) => (
          <MobileNavLinks item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ResponsiveMenu;
