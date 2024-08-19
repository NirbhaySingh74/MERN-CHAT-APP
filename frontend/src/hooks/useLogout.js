import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
const apiurl = import.meta.env.VITE_API_URL;
import useConversation from "../zustand/useConversation";
const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setSelectedConversation } = useConversation();
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${apiurl}/api/auth/logout`);
      if (res.data.error) {
        throw new Error(res.data.error);
      }
      localStorage.removeItem("chat-user");
      setSelectedConversation(null);
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};

export default useLogout;
