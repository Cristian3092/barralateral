import React from "react";
import {AiFillContacts} from 'react-icons/ai';
import {AiFillHome} from 'react-icons/ai';
import {ImBlogger} from 'react-icons/im';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Blog',
        path: './blog',
        icon: <ImBlogger/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: './contact',
        icon: <AiFillContacts/>,
        cName: 'nav-text'
    }
]