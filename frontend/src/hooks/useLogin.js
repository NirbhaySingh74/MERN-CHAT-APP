import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
const apiurl = import.meta.env.VITE_API_URL;
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async ({ username, password }) => {
    if (!username || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        `${apiurl}/api/auth/login`,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { data } = res;
      console.log(res);
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        ``;
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
