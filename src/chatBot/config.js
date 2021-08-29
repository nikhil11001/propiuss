import { createChatBotMessage } from "react-chatbot-kit";
import { BoatAvtar } from "./BotAvatar/BotAvatar";

const config = {
  botName: "Help Desk",
  initialMessages: [createChatBotMessage(`Hello`)],
  customComponents: {
    botAvatar: (props) => <BoatAvtar {...props} />,
  },
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#0080ff",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#0080ff",
    },
  },
};

export default config;
