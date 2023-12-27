import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {
  const [currentConversation, setCurrentConversation] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [conversationMetadata, setConversationMetadata] = useState([]);

  const [allConversations, setAllConversations] = useState([]);

  useEffect(() => {
    console.log("and all");
    const storedConversations = JSON.parse(
      localStorage.getItem("allConversations")
    );
    console.log(storedConversations || []);
    setAllConversations(storedConversations || []);
  }, []);

  console.log({ allConversations });

  useEffect(() => {
    console.log("hi");
    if (allConversations.length != 0)
      localStorage.setItem(
        "allConversations",
        JSON.stringify(allConversations)
      );
  }, [allConversations]);

  const updateCurrentConversation = (conversation) => {
    setCurrentConversation(conversation);
  };

  const updateConversationMetadata = (conversationMetadata) => {
    setConversationMetadata(conversationMetadata);
  };

  const addToAllConversations = () => {
    if (
      currentConversation.some(
        (obj) => obj["role"] === "system" || obj["role"] === "assistant"
      )
    ) {
      setAllConversations((convos) => {
        const existingIndex = convos.findIndex((c) => c.id === currentId);
        console.log(existingIndex);

        if (existingIndex != -1) {
          return convos.map((c) =>
            c.id === currentId
              ? { id: currentId, messages: currentConversation }
              : c
          );
        } else {
          const newConversation = {
            id: uuidv4(),
            messages: currentConversation,
          };
          return [...convos, newConversation];
        }
      });
    }
    setCurrentConversation([]);
    setCurrentId("");
  };

  const showConversation = (conversation) => {
    setCurrentId(conversation.id);
    updateCurrentConversation(conversation.messages);
  };

  const deleteAllConversations = () => {
    setAllConversations([]);
    setCurrentConversation([]);
    setConversationMetadata([]);
    setCurrentId("");
  };

  return (
    <ConversationContext.Provider
      value={{
        currentConversation,
        allConversations,
        conversationMetadata,
        currentId,
        updateCurrentConversation,
        addToAllConversations,
        deleteAllConversations,
        updateConversationMetadata,
        setCurrentId,
        showConversation,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export { ConversationContext, ConversationProvider };
