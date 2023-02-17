import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Chat from './components/Chat';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="flex bg-[url('/public/bg4.jpg')]">
     <LeftSidebar/>
       <Routes>
         <Route path='/chat/:name' element={<Chat/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
