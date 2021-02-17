import React from "react";
import { UserList } from "./views";
import StyleConfig from "./style-config/style-config";
import { Wrapper } from "./common-components";

const App = () => {
  return (
    <>
      <StyleConfig />
      <Wrapper>
        <UserList />
      </Wrapper>
    </>
  );
};

export default App;
