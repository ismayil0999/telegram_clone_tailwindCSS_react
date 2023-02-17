import { Filter } from "@mui/icons-material";
import { lightBlue } from "@mui/material/colors";
import { light } from "@mui/material/styles/createPalette";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
export const getContacts=createAsyncThunk("getContacts",async()=>{
    const response =await axios.get("https://mocki.io/v1/fbc7a0df-2df3-4790-81e7-51a44af8f9cf")
  return response.data
})
export const data=createSlice({
    name:"appdata",
    initialState:{
        contacts:[],
        loading:false
    },
    reducers:{
message:(state,action)=>{
 const li=document.createElement("li")
 const mesaj=document.createTextNode(action.payload.msg)
 const divs=action.payload.div
 li.appendChild(mesaj)
 li.setAttribute("class","message")
 divs.appendChild(li)
 action.payload.msg=""
console.log(action.payload.div)
},
searchuser:(state,action)=>{
    const filter=state.contacts
    const contact=state.contacts
if(action.payload.value===""){
    state.contacts=filter
}else{
state.contacts=filter.filter(contact=>contact.name.includes(action.payload.value))
}
}
    },
    extraReducers:(builder)=>{
        builder.addCase(getContacts.pending,(state)=>{
            state.loading=true
        });
        builder.addCase(getContacts.fulfilled,(state,action)=>{
            state.contacts=action.payload
        })
    }

})
export const {message,searchuser}=data.actions
export default data.reducer