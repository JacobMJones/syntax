export default (state, action) => {
  switch (action.type) {
    case "changePage":
      return {
        ...state,
        page: action.newPage
      };
    case "addFilter":
      return {
        ...state,
        filter: action.newFilter
      };
    case "changeSentence":
      return {
        ...state,
        message: action.newMessage
      };
    case "addSentence":
      return {
        ...state,
        messages: action.newMessages
      };
    default:
      return state;
  }
};
