import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./conversation";

export default function Conversations({ results }) {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="p-2 flex flex-col overflow-auto">
      {conversations != null &&
        conversations.length > 0 &&
        conversations
          .flatMap((conversation) => conversation) // Flatten the array
          .map((conversation, idx) => (
            <Conversation
              key={conversation._id}
              conversation={conversation.participants[0]}
              lastMsg={conversation.messages[0]}
            />
          ))}
      {results != null &&
        results.length > 0 &&
        results.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastMsg={conversation.messages}
          />
        ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
}
