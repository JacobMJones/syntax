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
        sentence: action.newSentence
      };
    default:
      return state;
  }
};
