import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Inventory',
    path: '/inventory',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Orders',
    path: '/todo',
    icon: 
    <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'shipping',
    path: '/shipping',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Channel',
    path: '/channel',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },

];