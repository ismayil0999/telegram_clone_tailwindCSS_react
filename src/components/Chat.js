import React,{useEffect,useRef} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { message } from '../redux/data';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Chat() {
    const chats=useSelector(state=>state.contact.contacts)
    const param=useParams()
    const user=chats.find(chat=>chat.name==param.name)
    const dispatch=useDispatch()
    const div=useRef()
    const send=useRef()
    const location =useNavigate()
  return (
    <div className="bg-[url('/public/bg4.jpg')] w-70 h-full z-10 flex flex-col justify-between items-center relative overflow-y-scroll overflow-x-hidden chat max-sm:absolute max-sm:w-full">
    <div className='w-full bg-red h-80 flex items-center justify-between box-border pl-4 max-sm:pl-2 text-white gap-2 bg-background1'>
 <div className="hidden max-sm:block">
 <ArrowBackIcon onClick={()=>{
   location(-1)
 }} className="text-color2"/>
 </div>
  <img src={user?.img} className="w-40 h-40 rounded-full"></img>
  <div className='w-full box-border pl-2'>
      <h3 className='text-start'>{user?.name}</h3>
      <p className='text-color2 text-start truncate'>{user?.lastseen}</p>
  </div>
  <div className='flex gap-5 pr-5 text-color2'>
    <CallIcon/>
    <MoreVertIcon/>
  </div>
    </div>
    <div className='bg-blue  pt-2 flex  flex-col text-end items-end mb-2 h-13 overflow-hidden w-full'>
    <div ref={div} className="overflow-y-scroll h-13 w-full flex flex-col items-end box-border pr-2"></div>
    </div>
  <div className='pl-5 pr-5  w-full pb-4'>
  <div className='w-full bg-background1 h-60 pl-5 mb-5 pr-5 flex items-center justify-between rounded-xl text-color2 gap-5 box-border'>
        <EmojiEmotionsIcon/>
<input type="text" className='w-70 bg-background1 outline-none' ref={send} placeholder='Message...'></input>
<AttachFileIcon className='rotate-45' />
<SendIcon onClick={()=>{dispatch(message({div:div.current, msg:send.current.value, area:send}))}}/>
    </div>
  </div>
    </div>
  );
}
