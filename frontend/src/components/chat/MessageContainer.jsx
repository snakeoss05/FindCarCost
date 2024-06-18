import { useEffect, useState } from "react";
import useConversation from "../../hooks/useConversation";
import MessageInput from "./MessageInputs";
import Messages from "./Messages";
import { useSocketContext } from "../../context/SocketContext";

export default function MessageContainer() {
  const [isOnline, setIsOnline] = useState(false);
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  useEffect(() => {
    if (selectedConversation) {
      const isOnline = onlineUsers.includes(selectedConversation._id);
      if (isOnline) setIsOnline(true);
    }
  }, [selectedConversation]);
  return (
    <div className="w-full md:w-[450px] flex flex-col p-4 h-full">
      {!selectedConversation ? (
        ""
      ) : (
        <>
          {/* Header */}
          <div className=" ps-2 py-2 mb-2">
            <div className="flex flex-row gap-2 items-center">
              <img
                className="w-12 rounded-full
                object-cover h-12"
                src={selectedConversation.profilePicture}
                alt="user avatar"
              />
              <div>
                <p className="text-gray-900 font-bold">
                  {selectedConversation.name}&nbsp;
                  {selectedConversation.lastname}
                </p>
                <p className="text-gray-500 text-sm">
                  {selectedConversation && isOnline ? "Online" : "Offline"}
                </p>
              </div>
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
