import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import {useSelector,useDispatch} from "react-redux"
import { edituser,closeditor } from '../redux/data';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import CloseIcon from '@mui/icons-material/Close';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
export default function Profile() {
  const edit=useSelector(state=>state.contact.editprofile)
  const dispatch=useDispatch()
  const location =useNavigate()
  return (
    <div className='absolute top-0 left-0 w-30 flex flex-col box-border h-full z-50 bg-background1 max-sm:w-full'>
      <div className='flex justify-start box-border pl-2 pr-2 pt-4 pb-4 items-center text-white gap-8'>
<ArrowBackIcon className='text-color2 cursor-pointer' onClick={()=>{location(-1)}}/>
<h1 className='w-70 font-semibold'>Profile</h1>
<EditIcon className='text-color2 cursor-pointer' onClick={()=>{dispatch(edituser())}}/>
      </div>
      <li className='w-full text-white flex gap-8 items-center box-border pl-4 h-60 pt-2 pb-2 hover:bg-color3'><LocalPhoneOutlinedIcon/> <h2>994 77 318 41 21</h2></li>
      <li className='w-full text-white flex gap-8 items-center box-border pl-4 h-60 pt-2 pb-2 '><ContactPageOutlinedIcon/> <h2>Your bio is here</h2></li>
      <li className='w-full text-white flex gap-8 items-center box-border pl-4 h-60 pt-2 pb-2'><PersonOutlineOutlinedIcon/> <h2>@username</h2></li>
     <div className={edit===true ? "flex flex-col items-end box-border pl-4 pr-4 gap-4 absolute w-full bg-background1 pt-4 h-full" : "hidden"}>
       <CloseIcon className='text-color2 cursor-pointer' onClick={()=>{dispatch(closeditor())}}/>
     <input type="text" placeholder='Phone number' className="w-full border-2 outline-none text-white border-color2-600 bg-background1 h-40 form-input"></input>
     <input type="text" placeholder='Bio' className="w-full border-2 outline-none text-white border-color2-600 bg-background1 h-40 form-input"></input>
     <input type="text" placeholder='Username' className="w-full border-2 outline-none text-white border-color2-600 bg-background1 h-40 form-input"></input>
     <Button variant="contained">Save</Button>
     </div>
    </div>
  );
}
