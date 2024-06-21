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
      <div className="h-full w-full sm:h-[450px] lg:w-[450px] md:h-screen rounded-lg overflow-hidden  bg-clip-padding backdrop-filter backdrop-blur-lg   px-2 ">
        {selectedConversation && (
          <i
            className="fa-solid fa-angle-left hover:scale-125 transition duration-300  hover:cursor-pointer absolute top-8 text-lg left-2"
            onClick={clsoeConversation}></i>
        )}

        {!selectedConversation && <Sidebar />}

        <MessageContainer />
      </div>
    </Layout>
  );
}
