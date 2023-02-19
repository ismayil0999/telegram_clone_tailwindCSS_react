import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Chat from './components/Chat';
import LeftSidebar from './components/LeftSidebar';
import Menu from './components/Menu';
import RightSidebar from './components/RightSidebar';
import { useSelector } from 'react-redux';
import UserInfo from './components/UserInfo';
import Profile from './components/Profile';
import CallScreen from './components/CallScreen';
function App() {
  const menu=useSelector(state=>state.contact.menu)
  const call=useSelector(state=>state.contact.viewcall)
  return (
    <div className="flex bg-[url('/public/bg4.jpg')]">
     <LeftSidebar/>
     {call===true ? <CallScreen/> : null}
     {menu===true ? <Profile/> : null}
       <Routes>
         <Route path='/chat/:name' element={<Chat/>}></Route>
         <Route path='/profile' element={<Profile/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
