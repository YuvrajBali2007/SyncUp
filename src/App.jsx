import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CreateMeeting from "./pages/CreateMeeting";
import Meetings from "./pages/Meetings";
import MeetingDetails from "./pages/MeetingDetails";
import EditMeeting from "./pages/EditMeeting";
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import ProtectedRoutes from "./pages/ProtectedRoutes";


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path ="/" element = {<Login/>}/>

        <Route element ={<ProtectedRoutes/>}> 
        <Route path ="/dashboard" element ={<Dashboard/>}/>
  
        <Route path="/Home" element={<Home />} />

        <Route
          path="/create-meeting"
          element={<CreateMeeting />}
        />

        <Route
          path="/meetings"
          element={<Meetings />}
        />

        <Route
          path="/meeting/:id"
          element={<MeetingDetails />}
        />

        <Route
          path="/edit-meeting/:id"
          element={<EditMeeting />}
        />
        </Route>
      </Routes>
      
    </>
  );
};

export default App;