"use client";

import { ConversationProvider } from "./context/ConversationContext";
import ChatMain from "./components/ChatMain";

export default function Home() {
  return (
    <ConversationProvider>
      <ChatMain />
    </ConversationProvider>
  );
}
