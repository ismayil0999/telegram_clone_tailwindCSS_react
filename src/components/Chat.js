import React,{useEffect,useRef} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { message } from '../redux/data';
import { getContacts } from '../redux/data';
export default function Chat() {
    const chats=useSelector(state=>state.contact.contacts)
    const param=useParams()
    const user=chats.find(chat=>chat.name==param.name)
    const dispatch=useDispatch()
    const div=useRef()
    const send=useRef()
  return (
    <div className="bg-[url('/public/bg4.jpg')] w-70 h-screen z-10 flex flex-col justify-between items-center relative overflow-y-scroll overflow-x-hidden chat max-sm:hidden">
    <div className='w-full bg-red h-80 flex items-center justify-between box-border pl-4 text-white gap-8 bg-background1'>
  <img src={user?.img} className="w-40 h-40 rounded-full"></img>
  <div className='w-50'>
      <h3 className='text-start'>{user?.name}</h3>
      <p className='text-color2 text-start truncate'>{user?.lastseen}</p>
  </div>
  <div className='flex gap-5 pr-5 text-color2'>
    <CallIcon/>
    <MoreVertIcon/>
  </div>
    </div>
    <div className='bg-blue  pt-14 flex  flex-col text-end items-end mb-12' ref={div}>
    
    </div>
    <div className='w-61 bg-background1 h-60 pl-5 mb-5 pr-5 flex items-center justify-between rounded-xl text-color2 gap-5 box-border fixed bottom-2 '>
        <EmojiEmotionsIcon/>
<input type="text" className='w-70 bg-background1 outline-none' ref={send} placeholder='Message...'></input>
<AttachFileIcon className='rotate-45' />
<SendIcon onClick={()=>{dispatch(message({div:div.current, msg:send.current.value, area:send}))}}/>
    </div>
    </div>
  );
}
