import React from "react";
import { useStateValue } from "../../State/StateProvider";
import LinkButton from "../../Components/LinkButton"
import { BodyContainer, Header } from "./styles";

function WritePage() {
  const [{ page }] = useStateValue();
  return (
    <BodyContainer>
      <Header>
        {page} is the page im on.
        <LinkButton title={"Read"} to={'/read'} />
        <LinkButton title={"Landing"} to={'/'} />
      </Header>
    </BodyContainer>
  );
}

export default WritePage;

