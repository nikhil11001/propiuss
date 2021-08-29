class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);

    if (
      message.toLowerCase().includes("hello") ||
      message.toLowerCase().includes("hi")
    ) {
      this.actionProvider.greet();
      return;
    } else if (message.toLowerCase().includes("what are the courses")) {
      this.actionProvider.showCourses();
      return;
    } else {
      this.actionProvider.defaultAnswer();
    }
  }
}

export default MessageParser;
