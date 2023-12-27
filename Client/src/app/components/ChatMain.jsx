import React, { useContext } from "react";

import ChatHistory from "./ChatHistory";
import ChatBody from "./ChatBody";
import PromptForm from "./PromptForm";

export default function ChatMain() {
  return (
    <div className="flex h-screen">
      <ChatHistory />

      <div className="w-full md:w-4/5 bg-white flex flex-col h-screen bg-primary-light">
        <ChatBody />
        <PromptForm />
      </div>
    </div>
  );
}
