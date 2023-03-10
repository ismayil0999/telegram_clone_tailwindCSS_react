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
    const theme=useSelector(state=>state.contact.theme)
    const loading=useSelector(state=>state.contact.loading)
    const menu=useSelector(state=>state.contact.menu)
    const search=useRef()
    const stil=useRef()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getContacts())
            },[])
  return (
      <div className="w-30 h-screen bg-background1 overflow-y-scroll relative brand  max-sm:w-full">
       <div className='max-sm:w-full flex justify-between bg-background1 text-white items-center box-border pl-3 pr-4 pt-2 h-14 w-30 gap-5 fixed z-10'>
        <MenuIcon fontSize='large' className='text-color2 cursor-pointer' onClick={()=>{dispatch(openmenu())}}/>
        <input type="text" ref={search} onInput={()=>{dispatch(searchuser({value:search.current.value}))}} placeholder='Search...' className='h-8 rounded-2xl w-full pl-2 bg-input'></input>
     </div>
     <div className='mt-14 brand overflow-x-hidden relative'>
         {loading===true ? <CircularProgress className='progress'/> : contacts.map(contact=>{
             return <NavLink to={`/chat/${contact.name}`} key={contact.name}>
               <div ref={stil} className='flex items-center h-20 box-border pl-3 gap-4 hover:bg-hover relative'>
                  <img src={contact.img} className="w-14 h-14 rounded-full"></img>
           <div>
           <h3 className='text-start text-color1'>{contact.name}</h3>
           <p className='text-color2  truncate ...'>{contact.lastseen}</p>
             </div>
             <h5 className='absolute top-2 right-4 text-color2'>19:22</h5>
             <DoneAllIcon className='absolute right-4 bottom-4 text-done'/>
             </div>
             </NavLink>
         })}
     </div>
     </div>
  );
}
