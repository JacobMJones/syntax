import React from "react";

import LinkButton from "../../Components/LinkButton"
import { BodyContainer, Header } from "./styles";

function WritePage() {
  return (
    <BodyContainer>
      <Header>
        Write
        <LinkButton title={"Read"} to={'/read'} />
        <LinkButton title={"Landing"} to={'/'} />
      </Header>
    </BodyContainer>
  );
}

export default WritePage;

