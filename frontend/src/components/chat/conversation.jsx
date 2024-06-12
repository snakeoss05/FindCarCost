/* eslint-disable react/prop-types */

import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../hooks/useConversation";
import { extractTime } from "../../utils/extractTime";
export default function Conversation({ conversation, lastMsg }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex w-full gap-2 items-center hover:bg-sky-500 rounded mb-2 w-80 p-2 pt-4 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
        onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation?.profilePicture} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-500">
              {conversation.name}&nbsp;
              {conversation.lastname}
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-slate-400 font-normal  text-nowrap w-52 truncate">
              {lastMsg && lastMsg.message}
            </p>
            <p className="text-slate-400 font-normal  text-nowrap  ">
              {lastMsg && extractTime(lastMsg.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
