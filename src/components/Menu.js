import React from 'react';
import { useSelector } from 'react-redux';

export default function Menu() {
    const items=useSelector(state=>state.contact.listitem)
  return (
    <div className="w-30 max-sm:w-50 bg-background1 absolute z-10 top-14 pt-4 left-0 text-white h-screen">
      <ul className='w-full bg-red flex flex-col gap-4'>
         {items.map(item=>{
             return <li className='w-full box-border pl-4 h-14 flex items-center gap-8'>{item.icon}{item.title}</li>
         })}
      </ul>
    </div>
  );
}
