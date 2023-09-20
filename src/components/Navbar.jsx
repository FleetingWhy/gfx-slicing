import React from "react";
export function Navbar() {
    const [activeItem, setActiveItem] = React.useState('Home')

    const handleItemClick = (item) => {
        setActiveItem(item);
      };
    return(
        <nav>
        <div className="flex mx-auto p-8">
        <div className="hamburger-menu">
        <span className="bg-white h-1 w-8 rounded-full block mb-1"></span>
        <span className="bg-white h-1 w-6 rounded-full ml-auto block mb-1"></span>
        <span className="bg-white h-1 w-4 rounded-full ml-auto block"></span>
        </div>
        <div className="sm:ml-20 ml-10 " >
        <ul className="flex sm:space-x-[5rem] space-x-[1.5rem] text-white font-semibold">
      <li onClick={() => handleItemClick('Home')} className={`${activeItem === 'Home' ? 'border-b-2 border-xl border-blue-200' : 'text-gray-300'}`}>
        Home
      </li>
      <li onClick={() => handleItemClick('Dashboard')} className={`${activeItem === 'Dashboard' ? 'border-b-2 border-xl border-blue-200' : 'text-gray-300'}`}   >
        Dashboard
      </li>
      <li onClick={() => handleItemClick('Notifications')} className={`${activeItem === 'Notifications' ? 'border-b-2 border-xl border-blue-200' : 'text-gray-300'}`}   >
        Notifications
      </li>
      <li onClick={() => handleItemClick('Settings')} className={`${activeItem === 'Settings' ? 'border-b-2 border-xl border-blue-200' : 'text-gray-300'}`}   >
        Settings
      </li>
    </ul>
        </div>
        </div>
        </nav>

  );
}