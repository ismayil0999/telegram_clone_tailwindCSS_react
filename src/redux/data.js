import { Filter } from "@mui/icons-material";
import { lightBlue } from "@mui/material/colors";
import { light } from "@mui/material/styles/createPalette";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from "axios"
export const getContacts=createAsyncThunk("getContacts",async()=>{
            const response =await axios.get("https://mocki.io/v1/fbc7a0df-2df3-4790-81e7-51a44af8f9cf")
          return response.data
})
const listitem=[
    {
        title:"New Group",
        icon:<PeopleIcon className="text-color2"/>
    },
    {
        title:"Contacts",
        icon:<PersonIcon className="text-color2"/>
    },
    {
        title:"Calls",
        icon:<CallIcon className="text-color2"/>
    },
    {
        title:"People Nearby",
        icon:<LocationOnIcon className="text-color2"/>
    },
    {
        title:"Saved Messages",
        icon:<BookmarkIcon className="text-color2" />
    },
    {
        title:"Settings",
        icon:<SettingsIcon className="text-color2"/>
    }
]
export const data=createSlice({
    name:"appdata",
    initialState:{
        contacts:[],
        loading:false,
        menu:false,
        listitem:listitem
    },
    reducers:{
message:(state,action)=>{
 const li=document.createElement("li")
 const mesaj=document.createTextNode(action.payload.msg)
 const divs=action.payload.msgarea
if(action.payload.msg===""){
    alert("write")
}else{
    li.appendChild(mesaj)
    li.setAttribute("class","message")
    divs.appendChild(li)
   action.payload.area.current.value=""
}
},
searchuser:(state,action)=>{
    const filter=state.contacts
    const contact=state.contacts
if(action.payload.value===""){
    state.contacts=filter
}else{
state.contacts=filter.filter(contact=>contact.name.includes(action.payload.value))
}
},
openmenu:(state)=>{
state.menu=true
},
closemenu:(state)=>{
    state.menu=false
}
    },
    extraReducers:(builder)=>{
        builder.addCase(getContacts.pending,(state)=>{
            state.loading=true
        });
        builder.addCase(getContacts.fulfilled,(state,action)=>{
            state.contacts=action.payload
            state.loading=false
        })
    }

})
export const {message,searchuser,openmenu,closemenu}=data.actions
export default data.reducer