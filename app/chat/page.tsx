"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Send, MessageCircle } from "lucide-react";

const socket = io("http://localhost:5000/api/chat");

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { id: string; text: string; time: string }[]
  >([]);

  useEffect(() => {
    //previoushistory
    socket.on("chatHistory", (history) => {
      setMessages(history);
    });

    //new messages
    socket.on("receiveMessage", (newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.off("chatHistory");
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Header */}
      <header className="w-full bg-primary-dark text-white p-4 text-center flex items-center justify-center">
        <MessageCircle size={24} className="mr-2" />
        <h1 className="text-xl font-semibold">Customer Support Chat</h1>
      </header>

      {/*Container */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4 h-96 overflow-y-auto mt-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-2 flex ${
              msg.id === socket.id ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg ${
                msg.id === socket.id ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              <p>{msg.text}</p>
              <small className="text-xs block">{msg.time}</small>
            </div>
          </div>
        ))}
      </div>

      {/*Input */}
      <div className="w-full max-w-2xl p-4 flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 p-2 border rounded"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-primary-dark text-white p-2 rounded flex items-center"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
