import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    const items=useSelector(state=>state.contact.listitem)
  return (
    <div className="w-30 max-sm:w-50 bg-background1 absolute z-10 top-14 pt-4 left-0 text-white h-screen">
      <ul className='w-full bg-red flex flex-col gap-4'>
         {items.map(item=>{
             return <NavLink to={item.path}>
             <li className='w-full box-border pl-4 h-14 flex items-center gap-8 hover:bg-input'>{item.icon}{item.title}</li>
             </NavLink>
         })}
      </ul>
    </div>
  );
}
