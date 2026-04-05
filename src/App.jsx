import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import Profile from "./pages/Profile";
import Intro from "./pages/Intro";
import UserProfile from "./pages/UserProfile";
import CallAudio from "./pages/CallAudio";
import CallVideo from "./pages/CallVideo";
import Status from "./pages/Status";
import Notifications from "./pages/Notifications";
// import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import GroupPage from "./pages/GroupPage";
import GroupMembersPage from "./pages/GroupMembersPage";
import StatusDetail from "./pages/StatusDetail";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
     <Toaster position="top-center" reverseOrder={false} />
      {/* your routes */}
      <Routes>
<Route path="/" element={<Intro />} />
  <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat/:id" element={<ChatPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/call/audio/:id" element={<CallAudio />} />
<Route path="/call/video/:id" element={<CallVideo />} />
<Route path="/status" element={<Status />} />
<Route path="/notifications" element={<Notifications />} />
<Route path="/profile" element={<Profile />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/reset-password" element={<ResetPassword />} />
       {/* Individual chat */}
        {/* <Route path="/chat/:id" element={<ChatPage />} /> */}

        {/* Group chat */}
        <Route path="/group-chat/:id" element={<GroupPage />} />

        {/* Group members */}
        <Route path="/group/:id" element={<GroupMembersPage />} />

        {/* User profile */}
        {/* <Route path="/user/:id" element={<Profile />} /> */}
      <Route path="/status/:id" element={<StatusDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;