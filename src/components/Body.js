import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { Container } from '../styled/styled';
import Chat from './Chat';
import LeftSidebar from './LeftSidebar';
import Menu from './Menu';
import RightSidebar from './RightSidebar';
import UserInfo from './UserInfo';
export default function Body() {
  return (
   <Container>
       <LeftSidebar/>
    <RightSidebar/>
    <UserInfo/>
   </Container>
  );
}
