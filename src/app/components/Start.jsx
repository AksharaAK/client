import React, { useContext } from "react";
import { ConversationContext } from "../context/ConversationContext";
import SaveIcon from "./Icons/SaveIcon";

export default function Start() {
  const { addToAllConversations, currentTitle } =
    useContext(ConversationContext);
  const handleSaveChat = () => {
    addToAllConversations();
  };

  return (
    <div className="sticky top-0 bg-primary-light border-b-2 border-b-secondary-dark z-10  mb-2 p-2 text-primary-dark uppercase flex justify-between items-center">
      <span className="text-xs font-semibold md:font-normal md:text-xl lg:text-2xl">
        {currentTitle ? currentTitle : "New Chat"}
      </span>
      <div onClick={handleSaveChat}>
        <SaveIcon />
      </div>
    </div>
  );
}
