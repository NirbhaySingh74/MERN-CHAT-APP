import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const apiurl = import.meta.env.VITE_API_URL;
const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  const getConvarsations = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${apiurl}/api/users`);
      console.log("res - ", res);

      const { data } = res;
      if (data.error) {
        throw new Error(data.error);
      }
      setConversations(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getConvarsations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
