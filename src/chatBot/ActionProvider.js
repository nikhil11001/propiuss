class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  greet = () => {
    const msg = this.createChatBotMessage("Hi,How Can I help You ?");
    this.setChatBotMsg(msg);
  };

  showCourses = () => {
    const msg = this.createChatBotMessage(
      "These are the courses- Java,Spring,React"
    );
    this.setChatBotMsg(msg);
  };

  defaultAnswer = () => {
    const msg = this.createChatBotMessage("Please contact Admin");
    this.setChatBotMsg(msg);
  };

  setChatBotMsg = (msg) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, msg],
    }));
  };
}

export default ActionProvider;
