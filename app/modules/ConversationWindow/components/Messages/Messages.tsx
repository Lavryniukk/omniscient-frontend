import Conversation from "@/app/shared/entities/Conversation";
import Message from "./components/Message";

export default function Messages({
  conversation,
}: {
  conversation: Conversation;
}) {
  const messages = conversation && conversation.messages;

  return (
    <div className="overflow-y-auto relative w-full items-center justify-center max-h-[100%] pb-40  flex-col">
      {messages?.map((message, index) => (
        <Message content={message.content} role={message.role} key={index} />
      ))}
    </div>
  );
}
