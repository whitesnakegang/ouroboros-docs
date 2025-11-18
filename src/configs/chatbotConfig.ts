import { createChatBotMessage } from "react-chatbot-kit";
import i18n from "../i18n";

const config = {
  initialMessages: [
    createChatBotMessage(i18n.t('developer.chatbot.greeting'), {}),
  ],
  botName: "Ouroboros Assistant",
  botAvatarSrc: "/chatbot-msg.png",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;

