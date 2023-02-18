import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
export default function UserInfo() {
    const location=useLocation()
    const chats=useSelector(state=>state.contact.contacts)
    const param=location.pathname.replace("/chat/","")
    const user=chats.find(chat=>chat.name==param)
     return (
    <div className='w-30 bg-background1 absolute modal left-51  pt-4 text-white h-screen flex flex-col box-border '>
    <div className='bg-300 w-full flex justify-start gap-8 box-border pl-4 pb-2 items-center'>
<CloseIcon className='text-color2'fontSize="large"/>
<h2 className='font-semibold'>User Info</h2>
    </div>
    <img src={user?.img}></img>
    <h5>{user?.name}</h5>
    </div>
  );
}
