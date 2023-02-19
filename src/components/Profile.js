import React,{useRef} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {useSelector,useDispatch} from "react-redux"
import { edituser,closeditor,editprofile } from '../redux/data';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
export default function Profile() {
  const edit=useSelector(state=>state.contact.editprofile)
  const phoneNumber=useSelector(state=>state.contact.phone)
  const biography=useSelector(state=>state.contact.bio)
  const userName=useSelector(state=>state.contact.username)
  const phone=useRef()
  const bio=useRef()
  const username=useRef()
  const btn=useRef()
  const error=useRef()
  const dispatch=useDispatch()
  return (
    <div className='absolute top-12 left-0 w-30 flex flex-col box-border h-full z-50 bg-background1 max-sm:w-full'>
      <div className='flex justify-between box-border pl-2 pr-4 pt-4 pb-4 items-center text-white gap-8'>
<h1 className='w-70 font-semibold box-border pl-4 text-color2'>Profile detail</h1>
<EditIcon className='text-color2 cursor-pointer' onClick={()=>{dispatch(edituser())}}/>
      </div>
      <li className='w-full text-white flex gap-8 items-center box-border pl-4 h-60 pt-2 pb-2 hover:bg-color3'><LocalPhoneOutlinedIcon/> <h2>{phoneNumber}</h2></li>
      <li className='w-full text-white flex gap-8 items-center box-border pl-4 h-60 pt-2 pb-2 '><ContactPageOutlinedIcon/> <h2>{biography}</h2></li>
      <li className='w-full text-white flex gap-8 items-center box-border pl-4 h-60 pt-2 pb-2'><PersonOutlineOutlinedIcon/> <h2>{userName}</h2></li>
     <div className={edit===true ? "flex flex-col items-end box-border pl-4 pr-4 gap-4 absolute w-full bg-background1 pt-4 h-full" : "hidden"}>
       <div className='text-white w-full flex flex-col gap-8 pt-4'>
       <div class="relative h-11 w-full min-w-[200px]">
    <input
      class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    ref={phone}
    defaultValue={phoneNumber}
    />
    <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Phone number
    </label>
  </div>
  <div class="relative h-11 w-full min-w-[200px]">
    <input
      class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
     ref={bio}
     defaultValue={biography}
    />
    <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Bio
    </label>
  </div>
<div class="relative h-11 w-full min-w-[200px]">
    <input
      class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
     ref={username}
     defaultValue={userName}
     required
    />
    <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
     Username
    </label>
  </div>
 </div>
 <p className='text-start text-red-600 pr-4' ref={error}></p>
 <div className='flex'>
 <button
 onClick={()=>{
   dispatch(closeditor())
 }}
  data-ripple-light="true"
  data-dialog-target="dialog"
  class="middle none center mr-4 rounded-lg bg-red-500 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
>
  Cancel
</button>
 <button
 ref={btn}
  data-ripple-light="true"
  data-dialog-target="dialog"
  class="middle none center mr-4 rounded-lg  bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
onClick={()=>{
  dispatch(editprofile({
    number:phone.current.value,
    bio:bio.current.value,
    username:username.current.value,
    btn:btn.current,
    error:error.current,
  }))
}}
>
  Save
</button>
</div>
     </div>
    </div>
  );
}
