import MessageContainer from "../components/chat/MessageContainer";
import Sidebar from "../components/chat/sidebar";
import useConversation from "../hooks/useConversation";
import Layout from "./Layout";
export default function Chat() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  function clsoeConversation() {
    setSelectedConversation(null);
  }
  return (
    <Layout>
      <div className="h-full w-full sm:h-[450px] lg:w-[450px] md:h-screen rounded-lg overflow-hidden  bg-clip-padding backdrop-filter backdrop-blur-lg  py-4 px-2 ">
        {selectedConversation && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-6 h-6  hover:shadow-lg hover:cursor-pointer absolute top-2 left-2"
            onClick={clsoeConversation}>
            <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
          </svg>
        )}

        {!selectedConversation && <Sidebar />}

        <MessageContainer />
      </div>
    </Layout>
  );
}
