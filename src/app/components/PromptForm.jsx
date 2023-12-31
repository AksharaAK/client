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
    updateCurrentMetadata,
    updateCurrentTitle,
    setHasTitle,
    hasTitle,
  } = useContext(ConversationContext);

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("response", (latestMessage, latestMeta) => {
      setLoading(false);
      updateCurrentConversation(latestMessage);
      updateCurrentMetadata((oldMeta) => [...oldMeta, latestMeta]);
    });

    socket.on("newTitle", (title) => {
      setHasTitle(true);
      updateCurrentTitle(title);
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
    if (hasTitle === false)
      socket.emit("title", newMessageText, currentConversation);

    updateCurrentConversation((oldConvo) => [
      ...oldConvo,
      {
        role: "user",
        content: newMessageText,
      },
    ]);

    updateCurrentMetadata((oldMeta) => [
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
