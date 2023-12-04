import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'COURSES',
    path: '/viewcourses',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'USERS',
    path: '/viewusers',
    icon: <FaIcons.FaUserAlt />,
    cName: 'nav-text'
  },
  
  {
    title: 'MENTORS',
    path: '/viewmentors',
    icon: <FaIcons.FaAward />,
    cName: 'nav-text'
  },
  {
    title: 'BLOCKED',
    path: '/blocked',
    icon: <FaIcons.FaBan />,
    cName: 'nav-text'
  }
];
