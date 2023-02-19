import React,{useEffect,useRef} from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { openmenu,closemenu,getContacts,searchuser } from '../redux/data';
import {useDispatch,useSelector} from "react-redux"
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import DoneAllIcon from '@mui/icons-material/DoneAll';
export default function LeftSidebar() {
    const contacts=useSelector(state=>state.contact.contacts)
    const loading=useSelector(state=>state.contact.loading)
    const stil=useRef()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getContacts())
            },[])
  return (
      <div className='absolute w-full h-full top-12 left-0 z-40'>
      <div className='bg-background1 w-30 h-screen overflow-y-scroll relative brand  max-sm:w-full'>
     <div className='mt-4 brand overflow-x-hidden relative'>
         {loading===true ? <CircularProgress className='progress'/> : contacts.map(contact=>{
             return <NavLink to={`/chat/${contact.name}`} key={contact.name}>
               <div ref={stil} className='flex items-center h-20 box-border pl-3 gap-4 hover:bg-hover relative'>
                  <img src={contact.img} className="w-14 h-14 rounded-full"></img>
           <div>
           <h3 className='text-start text-color1'>{contact.name}</h3>
           <p className='text-color2  truncate ...'>{contact.lastseen}</p>
             </div>
             </div>
             </NavLink>
         })}
     </div>
     </div>
     </div>
  );
}
