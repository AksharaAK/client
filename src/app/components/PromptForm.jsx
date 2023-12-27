"use client";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { io } from "socket.io-client";
import { ConversationContext } from "../context/ConversationContext";
import { format } from "date-fns";
import SendMessageIcon from "./Icons/SendMessageIcon";
import LoadingIcon from "./Icons/LoadingIcon";

export default function PromptForm() {
  const [newMessageText, setNewMessageText] = useState("");
  const [socket, setSocket] = useState();
  const [loading, setLoading] = useState(false);

  const {
    currentConversation,
    updateCurrentConversation,
    updateConversationMetadata,
  } = useContext(ConversationContext);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_BACKEND_URL);

    socket.on("response", (latestMessage, latestMeta) => {
      console.log("getting response");
      setLoading(false);
      updateCurrentConversation(latestMessage);
      updateConversationMetadata((oldMeta) => [...oldMeta, latestMeta]);
    });

    setSocket(socket);

    return () => {
      socket.close();
    };
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (newMessageText.trim() === "") return;

    setLoading(true);
    socket.emit("message", newMessageText, currentConversation);

    updateCurrentConversation((oldConvo) => [
      ...oldConvo,
      {
        role: "user",
        content: newMessageText,
      },
    ]);

    updateConversationMetadata((oldMeta) => [
      ...oldMeta,
      {
        role: "user",
        content: newMessageText,
        created: format(new Date(), "p"),
      },
    ]);

    setNewMessageText("");
  };

  return (
    <div className="m-2">
      <form className="flex gap-2 no-outline" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-xs md:text-sm p-2 flex-grow border-2 bg-primary-light text-primary-dark border-primary-dark"
          value={newMessageText}
          onChange={(ev) => setNewMessageText(ev.target.value)}
        />
        <button
          type="submit"
          className="bg-primary-dark p-2 text-primary-light rounded-full"
        >
          {loading ? <LoadingIcon /> : <SendMessageIcon />}
        </button>
      </form>
    </div>
  );
}
