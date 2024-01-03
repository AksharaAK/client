import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ConversationContext = createContext();

const ConversationProvider = ({ children }) => {
  const [hasTitle, setHasTitle] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const [currentConversation, setCurrentConversation] = useState([]);
  const [currentMetadata, setCurrentMetadata] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");

  const [allConversations, setAllConversations] = useState([]);
  const [allConversationMeta, setAllConversationMeta] = useState([]);

  useEffect(() => {
    const storedConversations = JSON.parse(
      localStorage.getItem("allConversations")
    );
    setAllConversations(storedConversations || []);

    const storedMeta = JSON.parse(localStorage.getItem("allConversationMeta"));
    setAllConversationMeta(storedMeta || []);
  }, []);

  useEffect(() => {
    if (allConversations.length != 0)
      localStorage.setItem(
        "allConversations",
        JSON.stringify(allConversations)
      );
  }, [allConversations]);

  useEffect(() => {
    if (allConversationMeta.length != 0)
      localStorage.setItem(
        "allConversationMeta",
        JSON.stringify(allConversationMeta)
      );
  }, [allConversationMeta]);

  const updateCurrentConversation = (conversation) => {
    setCurrentConversation(conversation);
  };

  const updateCurrentMetadata = (currentMetadata) => {
    setCurrentMetadata(currentMetadata);
  };

  const updateCurrentTitle = (currentTitle) => {
    setCurrentTitle(currentTitle);
  };

  const addToAllConversations = () => {
    if (
      currentConversation.some(
        (obj) => obj["role"] === "system" || obj["role"] === "assistant"
      )
    ) {
      const newId = uuidv4();
      setAllConversations((convos) => {
        const existingIndex = convos.findIndex((c) => c.id === currentId);

        if (existingIndex != -1) {
          return convos.map((c) =>
            c.id === currentId
              ? {
                  id: currentId,
                  messages: currentConversation,
                  title: currentTitle,
                }
              : c
          );
        } else {
          const newConversation = {
            id: newId,
            messages: currentConversation,
            title: currentTitle,
          };
          return [...convos, newConversation];
        }
      });

      setAllConversationMeta((convoMeta) => {
        const existingIndex = convoMeta.findIndex((c) => c.id === currentId);

        if (existingIndex != -1) {
          return convoMeta.map((c) =>
            c.id === currentId ? { id: currentId, meta: currentMetadata } : c
          );
        } else {
          const newConversationMeta = {
            id: newId,
            meta: currentMetadata,
          };
          return [...convoMeta, newConversationMeta];
        }
      });
    }
    setCurrentConversation([]);
    setCurrentMetadata([]);
    setCurrentId("");
    setCurrentTitle("");
    setHasTitle(false);
  };

  const showConversation = (conversation) => {
    setCurrentId(conversation.id);
    setCurrentTitle(conversation.title);
    updateCurrentConversation(conversation.messages);
    const meta = allConversationMeta.filter((c) => c.id === conversation.id);
    updateCurrentMetadata(meta[0].meta);
  };

  const deleteAllConversations = () => {
    setAllConversations([]);
    setCurrentConversation([]);
    setCurrentMetadata([]);
    setCurrentId("");
    setCurrentTitle("");
    setHasTitle(false);
  };

  return (
    <ConversationContext.Provider
      value={{
        currentConversation,
        allConversations,
        currentMetadata,
        currentId,
        currentTitle,
        updateCurrentTitle,
        updateCurrentConversation,
        addToAllConversations,
        deleteAllConversations,
        updateCurrentMetadata,
        setCurrentId,
        showConversation,
        hasTitle,
        setHasTitle,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export { ConversationContext, ConversationProvider };
