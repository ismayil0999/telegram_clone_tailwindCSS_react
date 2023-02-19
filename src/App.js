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
import Contacts  from './components/Contacts';
function App() {
  const menu=useSelector(state=>state.contact.menu)
  return (
    <div className="flex bg-[url('/public/bg4.jpg')]">
     <LeftSidebar/>
     {menu===true ? <Menu/> : null}
       <Routes>
         <Route path='/chat/:name' element={<Chat/>}></Route>
         <Route path='/profile' element={<Profile/>}></Route>
         <Route path='/contacts' element={<Contacts/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
