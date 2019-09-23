import React from "react";
import { withRouter } from "react-router";
import { useStateValue } from "../../State/StateProvider";
const LinkButton = props => {

  const [{ page }, pageDispatch] = useStateValue();

  const {
    history,
    to,
  } = props;

  return (
    <button
      onClick={() => {
        pageDispatch({
          type: "changePage",
          newPage: props.title
        });
        history.push(to);
      }}
    >
      {props.title}
    </button>
  );
};

export default withRouter(LinkButton);
