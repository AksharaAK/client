import React, { useContext } from "react";
import Start from "./Start";
import { ConversationContext } from "../context/ConversationContext";

export default function ChatBody() {
  const { currentConversation, conversationMetadata } =
    useContext(ConversationContext);

  return (
    <div className="flex-grow overflow-y-scroll relative ">
      <Start />

      <div className="p-2">
        <div classname="absolute top-0 left-0 right-0 bottom-2">
          {currentConversation?.map((message, index) => (
            <div
              key={index}
              className={`${
                message.role == "user" ? "text-right" : "text-left"
              } py-2`}
            >
              <div
                className={`text-left inline-block rounded-lg text-xs md:text-sm mt-2 p-2 text-primary-light   ${
                  message.role == "user"
                    ? "  bg-secondary-dark rounded-br-none "
                    : "  bg-primary-dark  rounded-bl-none md:mr-20 "
                }`}
              >
                {message.content}
              </div>
              <div
                className={`text-xs ${
                  message.role == "user"
                    ? "text-secondary-dark mr-1"
                    : "text-primary-dark ml-1 "
                }`}
              >
                {conversationMetadata[index]?.created}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
