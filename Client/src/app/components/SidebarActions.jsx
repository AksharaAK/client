import React, { useContext } from "react";
import PencilIcon from "./Icons/PencilIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import { ConversationContext } from "../context/ConversationContext";

export default function SidebarActions() {
  const { addToAllConversations, deleteAllConversations } =
    useContext(ConversationContext);

  const buttonStyles = `w-10 md:w-full flex items-center justify-center md:mx-2 text-sm bg-blue-100 p-2 h-11 text-primary-light md:border-2 hover:font-semibold hover:text-primary-dark hover:bg-primary-light hover:border-0`;
  const handleNewChat = () => {
    addToAllConversations();
  };

  return (
    <div className="flex-row flex md:flex-col md:space-y-2 items-center justify-center px-2 mb-2">
      <button onClick={handleNewChat} className={buttonStyles}>
        <span className="hidden md:block ">New Chat</span>
        <span className="md:ml-2">
          <PencilIcon />
        </span>
      </button>
      <button onClick={() => deleteAllConversations()} className={buttonStyles}>
        <span className="hidden md:block">Delete All</span>
        <span className="md:ml-2">
          <DeleteIcon />
        </span>
      </button>
    </div>
  );
}
