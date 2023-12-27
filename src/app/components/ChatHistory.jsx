import React, { useContext, useState, useEffect } from "react";
import { ConversationContext } from "../context/ConversationContext";
import _ from "lodash";
import SidebarActions from "./SidebarActions";
import SidebarTitle from "./SidebarTitle";

export default function () {
  const {
    allConversations,

    showConversation,
    currentId,
  } = useContext(ConversationContext);

  const selectConversation = (conversation) => showConversation(conversation);

  return (
    <div class="w-28 min-w-15 md:w-1/5 bg-primary-dark py-0  text-primary-light md:flex md:flex-col overflow-y-scroll md:justify-between ">
      <SidebarTitle />
      <div className="flex-col flex space-y-6 ">
        {allConversations.map((conversation, index) => (
          <div
            className={`cursor-pointer mx-2 py-2 uppercase text-xs md:w-full md:font-semibold hover:border-r-2  ${
              conversation.id == currentId ? "text-secondary-dark" : ""
            }  `}
            key={index}
            onClick={() => selectConversation(conversation)}
          >
            {`Chat ${conversation.id}`}
          </div>
        ))}
      </div>
      <SidebarActions />
    </div>
  );
}
