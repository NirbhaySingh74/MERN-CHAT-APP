import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skelitions/MessageSkeleton";
import Message from "./Message";
import useLisenMessages from "../../hooks/useLisenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useLisenMessages();
  const lastMessageRef = useRef();
  // console.log("messages : ", messages);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-slate-300">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
