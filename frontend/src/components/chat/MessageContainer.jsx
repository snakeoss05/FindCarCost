import { useEffect } from "react";
import useConversation from "../../hooks/useConversation";
import MessageInput from "./MessageInputs";
import Messages from "./Messages";
import { useAuth } from "../../context/AuthContext";

export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

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
                object-cover"
                src={selectedConversation.profilePicture}
                alt="user avatar"
              />
              <span className="text-gray-900 font-bold">
                {selectedConversation.name}&nbsp;
                {selectedConversation.lastname}
              </span>
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
