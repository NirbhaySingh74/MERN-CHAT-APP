import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
// const apiurl = import.meta.env.VITE_API_URL;
const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  const getConvarsations = async () => {
    // console.log("request is coming");

    setLoading(true);
    try {
      const res = await axios.get(
        `https://api-chat-app-six.vercel.app/api/users`
      );
      console.log("response - ", res.data);

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
