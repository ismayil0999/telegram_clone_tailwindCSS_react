import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { Container } from '../styled/styled';
import Chat from './Chat';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
export default function Body() {
  return (
   <Container>
       <LeftSidebar/>
     <Routes>
         <Route path='/' element={<RightSidebar/>}></Route>
         <Route path='/chat/:name' element={<Chat/>}></Route>
     </Routes>
   </Container>
  );
}
