import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  const getConvarsations = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/users");
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
