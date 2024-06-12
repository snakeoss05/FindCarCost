import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || "{}"
  );
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const navigate = useNavigate();
  const loginAction = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        data
      );

      if (response.status == 200) {
        toast.success(response.data.message);
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/chat");
        return;
      }
    } catch (err) {
      console.error(err);
      toast.success(err.data.message);
    }
  };
  const updateAction = async (data) => {
   try {
   const response=   await axios.put("http://localhost:3000/api/users/update", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      localStorage.setItem("user", JSON.stringify({ ...user, ...data }));
      setUser((oldUser)=>({...oldUser,...data}));
      
      toast.success("Account details updated successfully");
    } catch (err) {
     
      toast.error(err.response.data.message);
    }}
  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut,setUser,updateAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
