import React,{useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { getContacts } from '../redux/data';
import {useDispatch,useSelector} from "react-redux"
export default function LeftSidebar() {
    const contacts=useSelector(state=>state.contact.contacts)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getContacts())
            },[])
  return (
      <div className='bg-background1 w-30 h-screen overflow-y-scroll relative brand  max-sm:w-full'>
       <div className='max-sm:w-full flex justify-between bg-background1 text-white items-center box-border pl-3 pr-4 pt-2 h-14 w-30 gap-5 fixed'>
         <MenuIcon fontSize='large'/> 
         <input type="text" placeholder='Search...' className='h-8 rounded-2xl w-full pl-2 bg-input'></input>
     </div>
     <div className='mt-14 brand overflow-x-hidden'>
         {contacts.map(contact=>{
             return <NavLink to={`/chat/${contact.name}`}>
               <div className='flex items-center h-20 box-border pl-3 gap-4 hover:bg-hover'>
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
  );
}
