import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Chat from "./pages/Chat";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./context/privetRoute";
import SidebarMenu from "./components/SidebarMenu";
import AccountDetails from "./pages/AccountDetails";
import Profile from "./pages/Profile";
import Friends from "./components/profile/Friends";
import Addresses from "./components/profile/Addresses";
import Ratings from "./components/profile/Ratings";
import FindCar from "./pages/findCar";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/chat" element={<Chat />} />
          <Route path="/accounts/details" element={<AccountDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/friends" element={<Friends />} />
          <Route path="/profile/addresses" element={<Addresses />} />
          <Route path="/profile/ratings" element={<Ratings />} />
          <Route path="/findcar" element={<FindCar />} />
        </Route>
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
