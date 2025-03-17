// import React, { useState } from 'react'
// import { LuBox, LuUser, LuMessageSquare, LuCalendar,LuLogOut} from 'react-icons/lu'
// import {Link} from 'react-router-dom'
// import { FiShield } from "react-icons/fi";

// function Sidebar() {
//   const [activeLink, setActiveLink] = useState(0);
//   const handleLinkClick = (index) =>{
//     setActiveLink(index)
//   }
//     const SIDEBAR_LINKS = [
//         { id:1, path:'/', name:"Dashboard", icon:LuBox},
//         { id:2, path:'/members', name:"Members", icon:LuUser},
//         { id:3, path:'/messages', name:"Messages", icon:LuMessageSquare},
//         { id:4, path:'/projects', name:"Projects", icon:LuCalendar},
//         { id:5, path:'/workplan', name:"Work Plan", icon:LuBox},
//     ]
//   return (
//     <div className='w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white'>
//         <div className='mb-6 flex items-center'>
//           {/* <img src={logo} className='w-9 flex'/> */}
//           <FiShield className='text-2xl' />
//           <h1 className='text-2xl font-semibold ml-3 hidden md:flex'>SecureView</h1>
//         </div>
//         <ul className='mt-6 space-y-4'>
//           {
//             SIDEBAR_LINKS.map((link,index) =>(
//               <li key={index} className={`font-medium rounded-md px-5 hover:bg-gray-200 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-200 text-indigo-500": ""}`} >
//                 <Link to={link.path} className='flex items-center md:space-x-5 justify-center md:justify-start py-3'
//                 onClick={() => handleLinkClick(index)}
//                 >
//                 <span >{link.icon()}</span>
//                 <span className='text-sm text-gray-500 hidden md:flex'>{link.name}</span>
//                 </Link>
//               </li>
//             ))
//           }
//         </ul>
//         <div className='absolute bottom-5 left-5 cursor-pointer text-center py-2 px5'>
//           <p className='flex items-center space-x-2 text-md text-gray-800 hover:bg-gray-100 hover:text-indigo-500 py-2 px-4 rounded-md justify-center md:justify-start'>
//             <LuLogOut className='flex'/>
//             <span className='hidden md:flex pe-20 text-gray-500'>Logout</span>
//           </p>
//         </div>
//     </div>
//   )
// }

// export default Sidebar

// import React, { useState } from 'react';
// import { LuBox, LuUser, LuMessageSquare, LuCalendar, LuLogOut } from 'react-icons/lu';
// import { Link } from 'react-router-dom';
// import { FiShield } from 'react-icons/fi';

// function Sidebar() {
//   const [activeLink, setActiveLink] = useState(0);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleLinkClick = (index) => {
//     setActiveLink(index);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   const SIDEBAR_LINKS = [
//     { id: 1, path: '/', name: 'Dashboard', icon: LuBox },
//     { id: 2, path: '/members', name: 'Members', icon: LuUser },
//     { id: 3, path: '/messages', name: 'Messages', icon: LuMessageSquare },
//     { id: 4, path: '/projects', name: 'Projects', icon: LuCalendar },
//     { id: 5, path: '/workplan', name: 'Work Plan', icon: LuBox },
//   ];

//   // Mock user data
//   const user = {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//   };

//   return (
//     <div className='w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white'>
//       <div className='mb-6 flex items-center'>
//         {/* <img src={logo} className='w-9 flex'/> */}
//         <FiShield className='text-2xl' />
//         <h1 className='text-2xl font-semibold ml-3 hidden md:flex'>SecureView</h1>
//       </div>
//       <ul className='mt-6 space-y-4'>
//         {SIDEBAR_LINKS.map((link, index) => (
//           <li
//             key={index}
//             className={`font-medium rounded-md px-5 hover:bg-gray-200 hover:text-indigo-500 ${
//               activeLink === index ? 'bg-indigo-200 text-indigo-500' : ''
//             }`}
//           >
//             <Link
//               to={link.path}
//               className='flex items-center md:space-x-5 justify-center md:justify-start py-3'
//               onClick={() => handleLinkClick(index)}
//             >
//               <span>{link.icon()}</span>
//               <span className='text-sm text-gray-500 hidden md:flex'>{link.name}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <div className='absolute bottom-5 left-5 cursor-pointer text-center'>
//         {/* User Info */}
//         <div
//           onClick={toggleDropdown}
//           className='flex items-center space-x-2 text-md text-gray-800 hover:bg-gray-100 hover:text-indigo-500 py-2 px-4 rounded-md justify-center md:justify-start'
//         >
//           <LuUser className='flex' />
//           <div className='hidden md:flex flex-col'>
//             <span className='text-gray-700 font-medium'>{user.name}</span>
//             <span className='text-gray-500 text-xs'>{user.email}</span>
//           </div>
//         </div>

//         {/* Sliding Dropdown */}
//         <div
//           className={`overflow-hidden transition-all duration-300 ease-in-out ${
//             isDropdownOpen ? 'h-auto mt-2' : 'h-0'
//           }`}
//         >
//           <div className='bg-white border border-gray-200 shadow-lg rounded-md p-4'>
//             <div className='flex flex-col space-y-2'>
//               {/* Additional Details */}
//               <button
//                 className='text-sm text-red-500 hover:text-red-700'
//                 onClick={() => alert('Logout clicked')}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

// import React from 'react';
// import { LuBox, LuUser, LuMessageSquare, LuCalendar, LuLogOut } from 'react-icons/lu';
// import { Link } from 'react-router-dom';
// import { FiShield } from 'react-icons/fi';
// import { GoSidebarCollapse } from "react-icons/go";
// import { GoSidebarExpand } from "react-icons/go";
// import { MdOutlineDashboard } from "react-icons/md";
// import { PiShoppingCartBold } from "react-icons/pi";

// function Sidebar({ isSidebarExpanded, toggleSidebar }) {
//   const SIDEBAR_LINKS = [
//     { id: 1, path: '/', name: 'Dashboard', icon: MdOutlineDashboard },
//     { id: 2, path: '/members', name: 'Products', icon: PiShoppingCartBold },
//   ];

//   // Mock user data
//   const user = {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//   };

//   return (
//     <div
//       className={`w-[${isSidebarExpanded ? '224px' : '64px'}] fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white transition-all duration-300 ease-in-out`}
//     >
//       {/* Toggle Button */}
//       <button
//         onClick={toggleSidebar}
//         className='absolute right-[-30px] top-[5%] transform -translate-y-1/2 text-2xl text-black rounded-full flex items-center justify-center cursor-pointer shadow-md'
//       >
//         {isSidebarExpanded ? <GoSidebarExpand /> : <GoSidebarCollapse/>}
//       </button>

//       {/* Logo Section */}
//       <div className='md:mb-6 flex items-center'>
//         <FiShield className={`text-2xl font-semibold ml-3 ${
//             isSidebarExpanded ? 'flex' : 'ml-4'
//           }`} />
//         <h1
//           className={`text-2xl font-semibold ml-3 ${
//             isSidebarExpanded ? 'flex' : 'hidden'
//           }`}
//         >
//           SecureView
//         </h1>
//       </div>

//       {/* Sidebar Links */}
//       <ul className='mt-6 space-y-4'>
//         {SIDEBAR_LINKS.map((link, index) => (
//           <li key={index} className='font-medium rounded-md px-5 hover:bg-gray-200 hover:text-indigo-500'>
//             <Link
//               to={link.path}
//               className='flex items-center md:space-x-5 justify-center md:justify-start py-3'
//             >
//               <span>{link.icon()}</span>
//               <span
//                 className={`text-sm text-gray-500 ${
//                   isSidebarExpanded ? 'flex' : 'hidden'
//                 }`}
//               >
//                 {link.name}
//               </span>
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* User Info */}
//       <div className='absolute bottom-5 left-5 cursor-pointer text-center'>
//         <div className='flex items-center space-x-2 text-md text-gray-800 hover:bg-gray-100 hover:text-indigo-500 py-2 px-4 rounded-md justify-center md:justify-start'>
//           <LuUser className='flex' />
//           <div
//             className={`flex-col ${
//               isSidebarExpanded ? 'flex' : 'hidden'
//             }`}
//           >
//             <h1 className='text-gray-700 font-medium'>{user.name}</h1>
//             <h1 className='text-gray-500 text-xs'>{user.email}</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

import React from 'react';
import { LuBox, LuUser, LuMessageSquare, LuCalendar, LuLogOut } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
import { FiShield } from 'react-icons/fi';
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { PiShoppingCartBold } from "react-icons/pi";

function Sidebar({ isSidebarExpanded, toggleSidebar }) {
  const location = useLocation(); // Get the current location

  const SIDEBAR_LINKS = [
    { id: 1, path: '/', name: 'Dashboard', icon: MdOutlineDashboard },
    { id: 2, path: '/members', name: 'Products', icon: PiShoppingCartBold },
  ];

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
  };

  return (
    <div
      className={`w-[${isSidebarExpanded ? '224px' : '64px'}] fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white transition-all duration-300 ease-in-out`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className='absolute right-[-30px] top-[5%] transform -translate-y-1/2 text-2xl text-black rounded-full flex items-center justify-center cursor-pointer shadow-md'
      >
        {isSidebarExpanded ? <GoSidebarExpand /> : <GoSidebarCollapse/>}
      </button>

      {/* Logo Section */}
      <div className='md:mb-6 flex items-center'>
        <FiShield className={`text-2xl font-semibold ml-3 ${isSidebarExpanded ? 'flex' : 'ml-4'}`} />
        <h1 className={`text-2xl font-semibold ml-3 ${isSidebarExpanded ? 'flex' : 'hidden'}`}>
          SecureView
        </h1>
      </div>

      {/* Sidebar Links */}
      <ul className='mt-6 space-y-4'>
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md px-5 hover:bg-gray-200 hover:text-indigo-500 ${
              location.pathname === link.path ? 'bg-gray-200 text-indigo-500' : ''
            }`}
          >
            <Link
              to={link.path}
              className='flex items-center md:space-x-5 justify-center md:justify-start py-3'
            >
              <span>{link.icon()}</span>
              <span
                className={`text-sm text-gray-500 ${isSidebarExpanded ? 'flex' : 'hidden'}`}
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* User Info */}
      <div className='absolute bottom-5 left-5 cursor-pointer text-center'>
        <div className='flex items-center space-x-2 text-md text-gray-800 hover:bg-gray-100 hover:text-indigo-500 py-2 px-4 rounded-md justify-center md:justify-start'>
          <LuUser className='flex' />
          <div
            className={`flex-col ${isSidebarExpanded ? 'flex' : 'hidden'}`}
          >
            <h1 className='text-gray-700 font-medium'>{user.name}</h1>
            <h1 className='text-gray-500 text-xs'>{user.email}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
