import React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import MicIcon from '@mui/icons-material/Mic';
import CallEndIcon from '@mui/icons-material/CallEnd';
import { useLocation } from 'react-router-dom';
import { decline } from '../redux/data';
import { useSelector,useDispatch } from 'react-redux';
export default function CallScreen() {
    const dispatch=useDispatch()
    const location=useLocation()
    const user=location.pathname.replace("/chat/","")
  return (
    <div className='call-screen rounded-md'>
        <div>
      <h1 className='text-center text-white pt-14 text-4xl'>{user}</h1>
      <h3  className='text-center text-white mt-2'>Ringing...</h3>
      </div>
      <div className='flex justify-center gap-8 box-border w-full h-23 items-center text-white'>
          <VolumeUpIcon fontSize='large'/>
          <VideocamOffIcon fontSize='large'/>
          <MicIcon fontSize='large' />
          <CallEndIcon fontSize='large' className='text-red-500 cursor-pointer' onClick={()=>{dispatch(decline())}} />
      </div>
    </div>
  );
}
